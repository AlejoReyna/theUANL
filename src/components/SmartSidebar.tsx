import type { MenuItem } from '@/types/menu';
import { PinButton } from './PinButton';
import { SearchInput } from './SearchInput';
export interface SmartSidebarProps { items: MenuItem[]; query: string; pinnedIds: string[]; onQueryChange: (query: string) => void; onTogglePinned: (id: string) => void; }
export function SmartSidebar({ items, query, pinnedIds, onQueryChange, onTogglePinned }: SmartSidebarProps): JSX.Element { const filteredItems = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())); return <nav className="space-y-3"><SearchInput value={query} onChange={onQueryChange} /><ul className="space-y-1">{filteredItems.map((item) => <li key={item.id} className="flex items-center justify-between rounded-lg px-2 py-1 hover:bg-slate-100"><a href={item.href} target={item.target}>{item.label}</a><PinButton pinned={pinnedIds.includes(item.id)} onToggle={() => onTogglePinned(item.id)} /></li>)}</ul></nav>; }
