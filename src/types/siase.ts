export type SiaseFrameName = 'top' | 'left' | 'center';
export type SiasePage = 'grades' | 'schedule' | 'kardex' | 'personalData' | 'enrollmentDates' | 'studentStatus';
export interface PortalSession { params: Record<string, string>; matricula?: string; }
export interface SiaseEndpoint { page: SiasePage; path: string; broker: string; }
