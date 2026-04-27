import { collapseLegacyFrames, logFramesetState } from './single-view-layout';
import { parseStudentInfo } from '@/utils/parser/student';
import { getStorageValue, setStorageValue } from '@/utils/storage';

export async function initializeTopFrame(frameDocument: Document): Promise<void> {
  if (window.name !== 'top') return;

  logFramesetState('top-frame initialize');
  collapseLegacyFrames();
  frameDocument.body.classList.add('siase-plus-top');

  const parsed = parseStudentInfo(frameDocument);

  // Merge with any existing studentInfo so we preserve the matricula that
  // left-frame.ts may have already written from input[name="HTMLUsuario"].
  // If left-frame hasn't run yet, the matricula will be filled in later
  // when it calls setStorageValue with its own merge.
  const existing = await getStorageValue('studentInfo');
  await setStorageValue('studentInfo', {
    ...parsed,
    // Prefer the matricula already stored by left-frame (authoritative hidden
    // input) over the empty string that parseStudentInfo returns when called
    // without a leftDocument argument.
    matricula: existing?.matricula || parsed.matricula,
  });
}

void initializeTopFrame(document);
