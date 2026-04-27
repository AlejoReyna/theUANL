import { keepSingleViewAlive, logFramesetState } from './single-view-layout';

export function initializeFramesetInjector(): void {
  document.documentElement.dataset.siasePlus = 'ready';
  logFramesetState('frameset-injector document_start');
  keepSingleViewAlive();
  window.addEventListener(
    'DOMContentLoaded',
    () => {
      logFramesetState('frameset-injector DOMContentLoaded');
      keepSingleViewAlive();
    },
    { once: true },
  );
  window.addEventListener(
    'load',
    () => {
      logFramesetState('frameset-injector load');
      keepSingleViewAlive();
    },
    { once: true },
  );
}
initializeFramesetInjector();
