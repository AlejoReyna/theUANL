import { useGradesStore, type GradesStoreState } from '@/store/grades-store';
export function useGrades(): GradesStoreState { return useGradesStore(); }
