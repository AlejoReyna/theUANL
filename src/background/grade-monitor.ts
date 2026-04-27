import type { Grade, GradeChange } from '@/types/grades';
import { getStorageValue, setStorageValue } from '@/utils/storage';
import { notifyGradeChanges, notifyStaleSnapshot } from './notifications';

export function diffGrades(previous: Grade[], next: Grade[]): GradeChange[] {
  const previousById = new Map(previous.map((grade) => [grade.id, grade]));
  return next.flatMap((grade) => {
    const oldGrade = previousById.get(grade.id);
    if (!oldGrade || (oldGrade.score === grade.score && oldGrade.status === grade.status)) return [];
    return [{ id: grade.id, subject: grade.subject, previousScore: oldGrade.score, nextScore: grade.score, previousStatus: oldGrade.status, nextStatus: grade.status }];
  });
}

/**
 * Called by the onMessage handler in service-worker.ts whenever the grades
 * content script pushes a fresh scrape via REFRESH_GRADES.
 * Diffs against the stored snapshot, fires notifications for any changes,
 * then writes the new snapshot so future pushes compare correctly.
 */
export async function handleGradeRefresh(freshGrades: Grade[]): Promise<void> {
  const snapshot = await getStorageValue('gradeSnapshot');
  if (!snapshot) {
    // First capture — just persist it, nothing to diff against yet.
    await setStorageValue('gradeSnapshot', { grades: freshGrades, capturedAt: new Date().toISOString() });
    return;
  }
  const changes = diffGrades(snapshot.grades, freshGrades);
  if (changes.length > 0) {
    await notifyGradeChanges(changes);
  }
  await setStorageValue('gradeSnapshot', { grades: freshGrades, capturedAt: new Date().toISOString() });
}

/**
 * Called by the 30-minute alarm. The background cannot scrape SIASE on its
 * own (no REST API, session in URL params, grades live inside an auth frame).
 * Instead, we warn the user if the stored snapshot is older than 24 hours so
 * they know to visit the portal and trigger a fresh push from the content script.
 */
export async function checkForGradeChanges(): Promise<void> {
  const snapshot = await getStorageValue('gradeSnapshot');
  if (!snapshot) return;
  const ageMs = Date.now() - new Date(snapshot.capturedAt).getTime();
  const oneDayMs = 24 * 60 * 60 * 1000;
  if (ageMs > oneDayMs) {
    await notifyStaleSnapshot(snapshot.capturedAt);
  }
}
