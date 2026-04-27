import type { ChromeMessage } from '@/types/chrome-messages';
import { handleAlarm, registerGradeCheckAlarm } from './alarms';
import { handleGradeRefresh } from './grade-monitor';

export function initializeServiceWorker(): void {
  chrome.runtime.onInstalled.addListener(() => {
    void registerGradeCheckAlarm();
  });

  chrome.alarms.onAlarm.addListener((alarm) => {
    void handleAlarm(alarm);
  });

  // Grades content script pushes fresh grades on every page load.
  // Diff here in the background so the content script stays stateless.
  chrome.runtime.onMessage.addListener((message: ChromeMessage) => {
    if (message.type === 'REFRESH_GRADES') {
      void handleGradeRefresh(message.grades);
    }
  });
}

initializeServiceWorker();
