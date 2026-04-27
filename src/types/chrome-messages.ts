import type { Grade } from './grades';
import type { ScheduleExportOptions, ScheduleSlot } from './schedule';
export interface RefreshGradesMessage { type: 'REFRESH_GRADES'; grades: Grade[]; }
export interface ExportScheduleMessage { type: 'EXPORT_SCHEDULE'; slots: ScheduleSlot[]; options: ScheduleExportOptions; }
export interface OpenSiasePageMessage { type: 'OPEN_SIASE_PAGE'; path: string; }
export type ChromeMessage = RefreshGradesMessage | ExportScheduleMessage | OpenSiasePageMessage;
