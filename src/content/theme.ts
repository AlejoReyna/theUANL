const DEFAULT_THEME = 'institutional';

export function getStoredTheme(frameDocument: Document): string {
  try {
    return frameDocument.defaultView?.localStorage.getItem('siase-plus-theme') ?? DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function setStoredTheme(frameDocument: Document, theme: string): void {
  try {
    frameDocument.defaultView?.localStorage.setItem('siase-plus-theme', theme);
  } catch {
    // Some portal contexts can disable localStorage; theme still applies for this view.
  }
}

export function applyTheme(frameDocument: Document, theme: string): void {
  frameDocument.body.dataset.siaseTheme = theme;
  setStoredTheme(frameDocument, theme);
}

export function applyStoredTheme(frameDocument: Document): void {
  applyTheme(frameDocument, getStoredTheme(frameDocument));
}
