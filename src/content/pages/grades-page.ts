import type { Grade } from '@/types/grades';
import { parseGrades } from '@/utils/parser/grades';
import { setStorageValue } from '@/utils/storage';

export async function enhanceGradesPage(frameDocument: Document): Promise<Grade[]> {
  frameDocument.body.classList.add('siase-plus-grades-page');
  const grades = parseGrades(frameDocument);
  await setStorageValue('gradeSnapshot', { grades, capturedAt: new Date().toISOString() });
  // Push fresh grades to the background service worker so it can diff and notify.
  // Fire-and-forget — the background handles failures gracefully.
  void chrome.runtime.sendMessage({ type: 'REFRESH_GRADES', grades });
  return grades;
}
