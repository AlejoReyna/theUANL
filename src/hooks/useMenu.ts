import { useMenuStore, type MenuStoreState } from '@/store/menu-store';
export function useMenu(): MenuStoreState { return useMenuStore(); }
