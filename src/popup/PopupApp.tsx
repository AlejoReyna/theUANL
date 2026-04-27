import { DashboardCard } from '@/components/DashboardCard';
import { EmptyState } from '@/components/EmptyState';
import { GradeList } from '@/components/GradeList';
import { SchedulePreview } from '@/components/SchedulePreview';
import { useChromeStorage } from '@/hooks/useChromeStorage';
export function PopupApp(): JSX.Element { const [gradeSnapshot] = useChromeStorage('gradeSnapshot', { grades: [], capturedAt: '' }); const [scheduleSlots] = useChromeStorage('scheduleSlots', []); return <main className="w-96 space-y-4 bg-slate-100 p-4 text-slate-900"><h1 className="text-lg font-bold">SIASE Plus</h1><DashboardCard title="Grades">{gradeSnapshot.grades.length ? <GradeList grades={gradeSnapshot.grades} /> : <EmptyState title="No grades cached yet" description="Open SIASE grades once to populate this panel." />}</DashboardCard><DashboardCard title="Schedule">{scheduleSlots.length ? <SchedulePreview slots={scheduleSlots.slice(0, 5)} /> : <EmptyState title="No schedule cached yet" />}</DashboardCard></main>; }
