import { useScheduleStore, type ScheduleStoreState } from '@/store/schedule-store';
export function useSchedule(): ScheduleStoreState { return useScheduleStore(); }
