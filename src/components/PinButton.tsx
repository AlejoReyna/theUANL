export interface PinButtonProps { pinned: boolean; onToggle: () => void; }
export function PinButton({ pinned, onToggle }: PinButtonProps): JSX.Element { return <button className={pinned ? 'pin-button pin-button--active' : 'pin-button'} type="button" onClick={onToggle}>{pinned ? 'Fijado' : 'Pin'}</button>; }
