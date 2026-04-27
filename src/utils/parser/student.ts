import type { StudentInfo } from '@/types/student';
import { textContent } from './dom';
export function parseStudentInfo(topDocument: Document, leftDocument?: Document): StudentInfo { const headerText = textContent(topDocument.querySelector('table.MenuLink tr:first-child span.style1')); const matricula = leftDocument?.querySelector<HTMLInputElement>('input[name="HTMLUsuario"]')?.value ?? ''; const [name = headerText] = headerText.split(/\s+-\s+/); return { name: name.trim(), matricula }; }
