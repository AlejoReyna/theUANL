import type { ScheduleSlot } from '@/types/schedule';
export interface SchedulePreviewProps { slots: ScheduleSlot[]; }
export function SchedulePreview({ slots }: SchedulePreviewProps): JSX.Element { return <ul className="space-y-2">{slots.map((slot) => <li key={slot.id} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm"><div className="font-semibold text-slate-100">{slot.subject}</div><div className="text-xs uppercase tracking-wide text-cyan-200">{slot.weekday} · {slot.startTime}</div></li>)}</ul>; }
