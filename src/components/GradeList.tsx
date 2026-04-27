import type { Grade } from '@/types/grades';
export interface GradeListProps { grades: Grade[]; }
export function GradeList({ grades }: GradeListProps): JSX.Element { return <ul className="space-y-2">{grades.map((grade) => <li key={grade.id} className="flex justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm"><span>{grade.subject}</span><strong>{grade.score ?? grade.status}</strong></li>)}</ul>; }
