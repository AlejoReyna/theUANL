import { useStudentStore, type StudentStoreState } from '@/store/student-store';
export function useStudent(): StudentStoreState { return useStudentStore(); }
