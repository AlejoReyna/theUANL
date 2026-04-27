import { cellsFromRow } from './dom';

export interface KardexEntry {
  id: string;
  subject: string;
  score?: number;
  rawText: string;
}

export function parseKardex(document: Document): KardexEntry[] {
  return Array.from(document.querySelectorAll('tr'))
    .map((row, index): KardexEntry | null => {
      const cells = cellsFromRow(row as HTMLTableRowElement);
      const subject = cells.find((cell) => /[A-Za-zÁÉÍÓÚÑáéíóúñ]{4,}/.test(cell));
      if (!subject) return null;
      const rawScore = Number(cells.find((cell) => /^\d{1,3}$/.test(cell)));
      return {
        id: `${index}-${subject}`,
        subject,
        score: Number.isFinite(rawScore) && rawScore > 0 ? rawScore : undefined,
        rawText: cells.join(' | '),
      };
    })
    .filter((entry): entry is KardexEntry => entry !== null);
}
