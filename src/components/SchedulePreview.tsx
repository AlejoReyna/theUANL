import type { ScheduleSlot } from '@/types/schedule';
export interface SchedulePreviewProps { slots: ScheduleSlot[]; }
export function SchedulePreview({ slots }: SchedulePreviewProps): JSX.Element { return <ul className="space-y-2">{slots.map((slot) => <li key={slot.id} className="rounded-lg bg-slate-50 px-3 py-2 text-sm"><div className="font-medium text-slate-900">{slot.subject}</div><div className="text-xs text-slate-500">{slot.weekday} {slot.startTime}</div></li>)}</ul>; }
