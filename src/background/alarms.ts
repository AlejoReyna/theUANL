import { checkForGradeChanges } from './grade-monitor';
export const GRADE_CHECK_ALARM_NAME = 'siase-plus-grade-check';
export async function registerGradeCheckAlarm(): Promise<void> { await chrome.alarms.create(GRADE_CHECK_ALARM_NAME, { periodInMinutes: 30 }); }
export async function handleAlarm(alarm: chrome.alarms.Alarm): Promise<void> { if (alarm.name === GRADE_CHECK_ALARM_NAME) await checkForGradeChanges(); }
