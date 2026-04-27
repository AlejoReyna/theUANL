import { createElement } from 'react';
import { SmartSidebar } from '@/components/SmartSidebar';
import { injectReactRoot } from '@/shadow-dom/inject-react-root';
import { parseMenuItems } from '@/utils/parser/menu';
import { getStorageValue, setStorageValue } from '@/utils/storage';
import { collapseLegacyFrames, logFramesetState } from './single-view-layout';

export async function initializeLeftFrame(frameDocument: Document): Promise<void> {
  if (window.name !== 'left') return;

  logFramesetState('left-frame initialize');
  collapseLegacyFrames();
  frameDocument.body.classList.add('siase-plus-left');

  // --- Matricula & session ---
  // The left frame holds the authoritative hidden inputs for the current
  // session. Read them here and merge into studentInfo so the matricula
  // field is always populated regardless of top-frame load order.
  const matricula =
    frameDocument.querySelector<HTMLInputElement>('input[name="HTMLUsuario"]')?.value ?? '';
  const password =
    frameDocument.querySelector<HTMLInputElement>('input[name="HTMLpassword"]')?.value ?? '';

  if (matricula) {
    const existing = await getStorageValue('studentInfo');
    await setStorageValue('studentInfo', {
      name: existing?.name ?? '',
      program: existing?.program,
      faculty: existing?.faculty,
      plan: existing?.plan,
      ...existing,
      // Always overwrite matricula with the authoritative value from the form.
      matricula
    });
  }

  // Keep the password available for any future session-replay utilities,
  // stored under the session key separate from the public studentInfo shape.
  void chrome.storage.session?.set?.({ siasePwd: password }).catch((error) => {
    console.debug('[SIASE Plus] chrome.storage.session unavailable in left frame', error);
  });

  // --- Menu ---
  const items = parseMenuItems(frameDocument);
  await setStorageValue('menuItems', items);

  injectReactRoot(
    createElement(SmartSidebar, {
      items,
      query: '',
      pinnedIds: [],
      onQueryChange: () => undefined,
      onTogglePinned: () => undefined
    }),
    { id: 'siase-plus-sidebar', document: frameDocument }
  );
}

void initializeLeftFrame(document);
