import type { ScheduleSlot, TimeSlotCode, Weekday } from '@/types/schedule';
import { resolveTimeSlot } from '@/utils/time-slots';
import { cellsFromRow } from './dom';
const weekdayByIndex: Weekday[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const slotPattern = /\b(M[1-6]|V[1-8])\b/;
export function parseSchedule(document: Document): ScheduleSlot[] { const slots: ScheduleSlot[] = []; Array.from(document.querySelectorAll('tr')).forEach((row, rowIndex) => { const cells = cellsFromRow(row as HTMLTableRowElement); const slotCell = cells.find((cell) => slotPattern.test(cell)); const subject = cells.find((cell) => /[A-Za-zÁÉÍÓÚÑáéíóúñ]{4,}/.test(cell)); if (!slotCell || !subject) return; const slotCode = slotCell.match(slotPattern)?.[1] as TimeSlotCode | undefined; if (!slotCode) return; slots.push({ id: `${rowIndex}-${slotCode}-${subject}`, subject, weekday: weekdayByIndex[rowIndex % weekdayByIndex.length], slotCode, startTime: resolveTimeSlot(slotCode), rawText: cells.join(' | ') }); }); return slots; }
