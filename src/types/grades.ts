export type GradeStatus = 'passed' | 'failed' | 'pending' | 'unknown';
export interface Grade { id: string; subject: string; group?: string; teacher?: string; opportunity?: string; score?: number; status: GradeStatus; rawText: string; }
export interface GradeChange { id: string; subject: string; previousScore?: number; nextScore?: number; previousStatus?: GradeStatus; nextStatus: GradeStatus; }
export interface GradeSnapshot { grades: Grade[]; capturedAt: string; }
