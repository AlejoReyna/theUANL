import { create } from 'zustand';
import type { MenuItem } from '@/types/menu';
export interface MenuStoreState { items: MenuItem[]; query: string; pinnedIds: string[]; setItems: (items: MenuItem[]) => void; setQuery: (query: string) => void; togglePinned: (id: string) => void; }
export const useMenuStore = create<MenuStoreState>((set) => ({ items: [], query: '', pinnedIds: [], setItems: (items) => set({ items }), setQuery: (query) => set({ query }), togglePinned: (id) => set((state) => ({ pinnedIds: state.pinnedIds.includes(id) ? state.pinnedIds.filter((value) => value !== id) : [...state.pinnedIds, id] })) }));
