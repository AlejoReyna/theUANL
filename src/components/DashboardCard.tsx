import type { PropsWithChildren, ReactNode } from 'react';
export interface DashboardCardProps extends PropsWithChildren { title: string; action?: ReactNode; }
export function DashboardCard({ title, action, children }: DashboardCardProps): JSX.Element { return <section className="rounded-xl border border-slate-200 bg-white p-4"><header className="mb-3 flex items-center justify-between gap-3"><h2 className="text-sm font-semibold text-slate-900">{title}</h2>{action}</header>{children}</section>; }
