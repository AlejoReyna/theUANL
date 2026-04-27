import type { Grade, GradeStatus } from '@/types/grades';
import { cellsFromRow } from './dom';

function statusFromScore(score?: number): GradeStatus {
  if (score === undefined) return 'unknown';
  return score >= 70 ? 'passed' : 'failed';
}

export function parseGrades(document: Document): Grade[] {
  return Array.from(document.querySelectorAll('tr'))
    .map((row, index): Grade | null => {
      const cells = cellsFromRow(row as HTMLTableRowElement);
      const rawScore = Number(cells.find((cell) => /^\d{1,3}$/.test(cell)));
      const parsedScore = Number.isFinite(rawScore) && rawScore > 0 ? rawScore : undefined;
      const subject = cells.find((cell) => /[A-Za-zÁÉÍÓÚÑáéíóúñ]{4,}/.test(cell)) ?? '';
      if (!subject) return null;
      return {
        id: `${index}-${subject}`,
        subject,
        score: parsedScore,
        status: statusFromScore(parsedScore),
        rawText: cells.join(' | '),
      };
    })
    .filter((grade): grade is Grade => grade !== null);
}
