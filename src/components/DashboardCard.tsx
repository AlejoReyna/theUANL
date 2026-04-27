import type { PropsWithChildren, ReactNode } from 'react';
export interface DashboardCardProps extends PropsWithChildren { title: string; action?: ReactNode; }
export function DashboardCard({ title, action, children }: DashboardCardProps): JSX.Element { return <section className="rounded-2xl border border-cyan-300/20 bg-slate-950/70 p-4 shadow-[0_0_35px_rgba(14,165,233,0.16)]"><header className="mb-3 flex items-center justify-between gap-3"><h2 className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{title}</h2>{action}</header>{children}</section>; }
