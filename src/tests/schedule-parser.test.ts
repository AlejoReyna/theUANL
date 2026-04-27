import { describe, expect, it } from 'vitest';
import { parseSchedule } from '@/utils/parser/schedule';
describe('parseSchedule', () => { it('parses UANL time slot codes', () => { document.body.innerHTML = '<table><tr><td>M1</td><td>Programacion</td></tr></table>'; expect(parseSchedule(document)[0]?.startTime).toBe('07:00'); }); });
