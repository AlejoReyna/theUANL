import { create } from 'zustand';
import type { Grade, GradeChange } from '@/types/grades';
export interface GradesStoreState { grades: Grade[]; changes: GradeChange[]; updatedAt?: string; setGrades: (grades: Grade[]) => void; setChanges: (changes: GradeChange[]) => void; }
export const useGradesStore = create<GradesStoreState>((set) => ({ grades: [], changes: [], setGrades: (grades) => set({ grades, updatedAt: new Date().toISOString() }), setChanges: (changes) => set({ changes }) }));
