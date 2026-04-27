import { initializeCenterGameUi } from './center-ui';
import { collapseLegacyFrames, logFramesetState } from './single-view-layout';

export async function initializeCenterFrame(frameDocument: Document): Promise<void> {
  if (window.name !== 'center') return;
  logFramesetState('center-frame initialize');
  collapseLegacyFrames();
  initializeCenterGameUi(frameDocument);
}
void initializeCenterFrame(document);
