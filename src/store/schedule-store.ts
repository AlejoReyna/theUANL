import { create } from 'zustand';
import type { ScheduleSlot } from '@/types/schedule';
export interface ScheduleStoreState { slots: ScheduleSlot[]; setSlots: (slots: ScheduleSlot[]) => void; }
export const useScheduleStore = create<ScheduleStoreState>((set) => ({ slots: [], setSlots: (slots) => set({ slots }) }));
