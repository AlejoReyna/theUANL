export interface EmptyStateProps { title: string; description?: string; }
export function EmptyState({ title, description }: EmptyStateProps): JSX.Element { return <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center"><p className="font-medium text-slate-800">{title}</p>{description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}</div>; }
