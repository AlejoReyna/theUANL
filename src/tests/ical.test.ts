import { describe, expect, it } from 'vitest';
import { generateScheduleIcs } from '@/utils/ical';
import type { ScheduleSlot } from '@/types/schedule';

const SEMESTER_START = '2026-01-12';
const SEMESTER_END = '2026-06-05';
const OPTIONS = { calendarName: 'SIASE', semesterStart: SEMESTER_START, semesterEnd: SEMESTER_END, timezone: 'America/Monterrey' };

const SLOT: ScheduleSlot = {
  id: 'test-1',
  subject: 'Programación',
  teacher: 'Dr. López',
  classroom: 'A-101',
  weekday: 'monday',
  slotCode: 'M1',
  startTime: '07:00',
};

describe('generateScheduleIcs', () => {
  it('produces a valid VCALENDAR wrapper', () => {
    const ics = generateScheduleIcs([], OPTIONS);
    expect(ics).toContain('VCALENDAR');
  });

  it('sets DTSTART on the correct weekday (monday → first monday on/after semesterStart)', () => {
    const ics = generateScheduleIcs([SLOT], OPTIONS);
    // 2026-01-12 is a Monday, so the first occurrence IS the semester start.
    // DTSTART should contain 20260112 at 07:00.
    expect(ics).toContain('20260112');
    expect(ics).toContain('070000');
  });

  it('adds RRULE WEEKLY for each slot', () => {
    const ics = generateScheduleIcs([SLOT], OPTIONS);
    expect(ics).toContain('RRULE:FREQ=WEEKLY');
    expect(ics).toContain('BYDAY=MO');
  });

  it('includes UNTIL date from semesterEnd', () => {
    const ics = generateScheduleIcs([SLOT], OPTIONS);
    expect(ics).toContain('20260605');
  });

  it('sets event summary to the slot subject', () => {
    const ics = generateScheduleIcs([SLOT], OPTIONS);
    expect(ics).toContain('SUMMARY:Programación');
  });

  it('skips to the next matching weekday when semesterStart is not the target day', () => {
    // 2026-01-13 is a Tuesday; for a monday slot the first occurrence should be 2026-01-19.
    const tuesdayStart = { ...OPTIONS, semesterStart: '2026-01-13' };
    const ics = generateScheduleIcs([SLOT], tuesdayStart);
    expect(ics).toContain('20260119'); // next Monday after 2026-01-13
  });
});
