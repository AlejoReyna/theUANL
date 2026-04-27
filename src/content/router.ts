import { enhanceEnrollmentDatesPage } from './pages/enrollment-dates-page';
import { enhanceGradesPage } from './pages/grades-page';
import { enhanceKardexPage } from './pages/kardex-page';
import { enhancePersonalDataPage } from './pages/personal-data-page';
import { enhanceSchedulePage } from './pages/schedule-page';
import { enhanceStudentStatusPage } from './pages/student-status-page';
import { detectSiasePage } from '@/utils/siase-url';
export async function routeSiasePage(url: URL, frameDocument: Document): Promise<void> { const page = detectSiasePage(url); if (page === 'grades') await enhanceGradesPage(frameDocument); if (page === 'schedule') await enhanceSchedulePage(frameDocument); if (page === 'kardex') await enhanceKardexPage(frameDocument); if (page === 'personalData') await enhancePersonalDataPage(frameDocument); if (page === 'enrollmentDates') await enhanceEnrollmentDatesPage(frameDocument); if (page === 'studentStatus') await enhanceStudentStatusPage(frameDocument); }
void routeSiasePage(new URL(location.href), document);
