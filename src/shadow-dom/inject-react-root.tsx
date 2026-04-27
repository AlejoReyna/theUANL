import type { ReactElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { createShadowRootHost, type ShadowRootHostOptions } from './create-shadow-root';
export interface InjectReactRootOptions extends ShadowRootHostOptions { rootId?: string; }
export function injectReactRoot(component: ReactElement, options: InjectReactRootOptions): Root { const shadowRoot = createShadowRootHost(options); const mount = options.document.createElement('div'); mount.id = options.rootId ?? 'siase-plus-root'; shadowRoot.append(mount); const root = createRoot(mount); root.render(component); return root; }
