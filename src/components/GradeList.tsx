import type { Grade } from '@/types/grades';
export interface GradeListProps { grades: Grade[]; }
export function GradeList({ grades }: GradeListProps): JSX.Element { return <ul className="space-y-2">{grades.map((grade) => <li key={grade.id} className="flex justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100"><span className="truncate">{grade.subject}</span><strong className="rounded-full bg-emerald-300 px-2 py-0.5 text-xs text-slate-950">{grade.score ?? grade.status}</strong></li>)}</ul>; }
