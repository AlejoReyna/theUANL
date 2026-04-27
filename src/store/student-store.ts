import { create } from 'zustand';
import type { StudentInfo, StudentStatus } from '@/types/student';
export interface StudentStoreState { student?: StudentInfo; status?: StudentStatus; setStudent: (student: StudentInfo) => void; setStatus: (status: StudentStatus) => void; }
export const useStudentStore = create<StudentStoreState>((set) => ({ setStudent: (student) => set({ student }), setStatus: (status) => set({ status }) }));
