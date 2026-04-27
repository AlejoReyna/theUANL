export type MenuCategory = 'academic' | 'schedule' | 'payments' | 'services' | 'profile' | 'other';
export interface MenuItem { id: string; label: string; href: string; target: string; category: MenuCategory; pinned: boolean; }
export interface CategorizedMenu { category: MenuCategory; items: MenuItem[]; }
