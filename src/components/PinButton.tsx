export interface PinButtonProps { pinned: boolean; onToggle: () => void; }
export function PinButton({ pinned, onToggle }: PinButtonProps): JSX.Element { return <button className="rounded px-2 py-1 text-xs text-slate-600" type="button" onClick={onToggle}>{pinned ? 'Pinned' : 'Pin'}</button>; }
