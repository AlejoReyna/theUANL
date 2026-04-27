import type { StudentInfo } from '@/types/student';
import { textContent } from './dom';

function cleanText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function stripUiTokens(value: string): string {
  return cleanText(value.replace(/\bm\d+\b/gi, '').replace(/\bmatr[ií]cula\b:?\s*\d*/gi, ''));
}

function labeledValue(text: string, label: RegExp): string | undefined {
  const lines = text
    .split(/\n| {2,}/)
    .map(cleanText)
    .filter(Boolean);
  const line = lines.find((candidate) => label.test(candidate));
  if (!line) return undefined;

  return cleanText(line.replace(label, '').replace(/^[:\-\s]+/, ''));
}

function extractName(headerText: string, bodyText: string): string {
  const labeledName =
    labeledValue(bodyText, /^(alumno|nombre)\b/i) ??
    labeledValue(headerText, /^(alumno|nombre)\b/i);
  if (labeledName) return stripUiTokens(labeledName);

  const candidate = headerText
    .split(/\s+-\s+|\s+\|\s+|\n/)
    .map(stripUiTokens)
    .find((part) => /[a-záéíóúñ]/i.test(part) && !/^(matr[ií]cula|plan|carrera)\b/i.test(part));

  return candidate ?? '';
}

function extractMatricula(text: string, leftDocument?: Document): string {
  const hiddenValue = leftDocument?.querySelector<HTMLInputElement>(
    'input[name="HTMLUsuario"]'
  )?.value;
  if (hiddenValue) return hiddenValue;

  return text.match(/matr[ií]cula\D{0,12}(\d{4,})/i)?.[1] ?? '';
}

export function parseStudentInfo(topDocument: Document, leftDocument?: Document): StudentInfo {
  const headerText = textContent(
    topDocument.querySelector('table.MenuLink tr:first-child span.style1')
  );
  const bodyText =
    (topDocument.body as HTMLElement | null)?.innerText?.replace(/\r/g, '').trim() ??
    textContent(topDocument.body);
  const combinedText = `${headerText}\n${bodyText}`;

  return {
    name: extractName(headerText, bodyText),
    matricula: extractMatricula(combinedText, leftDocument),
    program: labeledValue(combinedText, /^(carrera|programa educativo|programa)\b/i),
    plan: labeledValue(combinedText, /^plan( de estudios)?\b/i)
  };
}
