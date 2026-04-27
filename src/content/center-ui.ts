import type { MenuItem } from '@/types/menu';
import type { StudentInfo, StudentStatus } from '@/types/student';
import { getStorageValue } from '@/utils/storage';

function currentQuestLabel(pathname: string): string {
  const pageName = pathname.split('/').pop()?.toLowerCase() ?? '';
  if (pageName.includes('econcfs')) return 'Calificaciones';
  if (pageName.includes('echalm')) return 'Horario';
  if (pageName.includes('econkdx')) return 'Kardex';
  if (pageName.includes('edatal')) return 'Datos personales';
  if (pageName.includes('ecsitest')) return 'Situación estudiante';
  if (pageName.includes('ecohoinsint')) return 'Fecha de inscripción';
  return 'Dashboard';
}

const fallbackActions = [
  { label: 'Horario', href: '#' },
  { label: 'Calificaciones', href: '#' },
  { label: 'Kardex', href: '#' },
  { label: 'Recibo de Cuota Interna', href: '#' }
];

function displayName(studentInfo?: StudentInfo): string {
  if (!studentInfo?.name) return 'Estudiante UANL';
  return studentInfo.name.replace(/\s+/g, ' ').trim();
}

function initials(studentInfo?: StudentInfo): string {
  return displayName(studentInfo)
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function actionIcon(label: string): string {
  const normalized = label.toLowerCase();
  if (/horario/.test(normalized)) return 'calendar';
  if (/calif/.test(normalized)) return 'grades';
  if (/kardex/.test(normalized)) return 'kardex';
  if (/recibo|cuota|pago/.test(normalized)) return 'receipt';
  return 'arrow';
}

function iconMarkup(name: string): string {
  const icons: Record<string, string> = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    calendar:
      '<path d="M7 3v4M17 3v4M4 9h16"/><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"/>',
    grades:
      '<path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5Z"/><path d="M8 7h6M8 11h8M8 15h5"/>',
    kardex:
      '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
    palette:
      '<path d="M12 22a10 10 0 1 1 10-10c0 1.7-1.3 3-3 3h-1.5a2 2 0 0 0-1.7 3l.3.5A2.2 2.2 0 0 1 14.2 22H12Z"/><path d="M7.5 10.5h.01M10.5 7.5h.01M14 7.5h.01M16.5 10.5h.01"/>',
    receipt: '<path d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1V3Z"/><path d="M9 8h6M9 12h6M9 16h4"/>'
  };

  return `<svg class="siase-icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] ?? icons.arrow}</svg>`;
}

function actionItems(menuItems: MenuItem[]): Array<Pick<MenuItem, 'href' | 'label' | 'category'>> {
  if (!menuItems.length) {
    return fallbackActions.map((item) => ({ ...item, category: 'academic' as const }));
  }

  const preferred = [
    { label: 'Horario', matcher: /horario/i, category: 'schedule' as const },
    { label: 'Calificaciones', matcher: /calif/i, category: 'academic' as const },
    { label: 'Kardex', matcher: /kardex/i, category: 'academic' as const },
    {
      label: 'Recibo de Cuota Interna',
      matcher: /recibo|cuota interna|pago/i,
      category: 'payments' as const
    }
  ];

  return preferred.map((preferredItem) => {
    const found = menuItems.find((item) => preferredItem.matcher.test(item.label));
    return found ?? { label: preferredItem.label, href: '#', category: preferredItem.category };
  });
}

function creditsFromStatus(studentStatus?: StudentStatus): string {
  const rawText = studentStatus?.rawText ?? '';
  const match = rawText.match(/cr[eé]ditos?\D{0,24}(\d{1,3})/i);
  return match?.[1] ?? 'No disponible';
}

function createShell(frameDocument: Document, questLabel: string): HTMLElement {
  const shell = frameDocument.createElement('section');
  shell.id = 'siase-plus-shell';
  shell.innerHTML = `
    <header class="siase-dashboard__header">
      <div class="siase-dashboard__identity">
        <p class="siase-dashboard__eyebrow">Portal UANL modernizado</p>
        <h1 class="siase-dashboard__greeting">¡Hola, Estudiante UANL!</h1>
        <p class="siase-dashboard__matricula">Matrícula: pendiente</p>
      </div>
      <div class="siase-dashboard__tools">
        <div class="siase-theme-picker">
          <button class="siase-theme-button" type="button" aria-expanded="false">
            ${iconMarkup('palette')}
            <span>Personalizar Tema</span>
          </button>
          <div class="siase-theme-menu" hidden>
            <button type="button" data-theme-option="institutional">Institucional</button>
            <button type="button" data-theme-option="dark">Modo Oscuro</button>
            <button type="button" data-theme-option="minimal">Minimalista</button>
          </div>
        </div>
        <div class="siase-dashboard__avatar" data-student-initials="U">U</div>
      </div>
    </header>
    <main class="siase-dashboard__main">
      <section class="siase-dashboard__section">
        <div class="siase-dashboard__section-heading">
          <p class="siase-dashboard__eyebrow">Accesos Directos</p>
          <h2>Lo más usado</h2>
        </div>
        <nav class="siase-dashboard__quick-actions" aria-label="Accesos directos"></nav>
      </section>
      <aside class="siase-dashboard__summary" aria-label="Resumen académico">
        <div>
          <p class="siase-dashboard__eyebrow">Resumen Académico</p>
          <h2>Tu avance</h2>
        </div>
        <div class="siase-summary-grid">
          <article class="siase-summary-card">
            <span>Créditos actuales</span>
            <strong data-academic-credits>No disponible</strong>
          </article>
          <article class="siase-summary-card">
            <span>Situación escolar</span>
            <strong data-student-status>Por consultar</strong>
          </article>
          <article class="siase-summary-card siase-summary-card--wide">
            <span>Vista actual</span>
            <strong data-quest-label>${questLabel}</strong>
          </article>
        </div>
      </aside>
    </main>
  `;
  return shell;
}

function getStoredTheme(frameDocument: Document): string {
  try {
    return frameDocument.defaultView?.localStorage.getItem('siase-plus-theme') ?? 'institutional';
  } catch {
    return 'institutional';
  }
}

function setStoredTheme(frameDocument: Document, theme: string): void {
  try {
    frameDocument.defaultView?.localStorage.setItem('siase-plus-theme', theme);
  } catch {
    // Some portal contexts can disable localStorage; theme still applies for this view.
  }
}

function applyTheme(frameDocument: Document, theme: string): void {
  frameDocument.body.dataset.siaseTheme = theme;
  setStoredTheme(frameDocument, theme);
}

function hydrateThemeControls(shell: HTMLElement, frameDocument: Document): void {
  const button = shell.querySelector<HTMLButtonElement>('.siase-theme-button');
  const menu = shell.querySelector<HTMLElement>('.siase-theme-menu');
  const storedTheme = getStoredTheme(frameDocument);

  applyTheme(frameDocument, storedTheme);
  if (shell.dataset.themeControlsReady === 'true') return;
  shell.dataset.themeControlsReady = 'true';

  button?.addEventListener('click', () => {
    if (!menu || !button) return;
    const isOpen = !menu.hidden;
    menu.hidden = isOpen;
    button.setAttribute('aria-expanded', String(!isOpen));
  });

  menu?.querySelectorAll<HTMLButtonElement>('[data-theme-option]').forEach((themeButton) => {
    themeButton.addEventListener('click', () => {
      const theme = themeButton.dataset.themeOption ?? 'institutional';
      applyTheme(frameDocument, theme);
      menu.hidden = true;
      button?.setAttribute('aria-expanded', 'false');
    });
  });
}

function renderShellData(
  shell: HTMLElement,
  studentInfo: StudentInfo | undefined,
  studentStatus: StudentStatus | undefined,
  menuItems: MenuItem[]
): void {
  const avatar = shell.querySelector<HTMLElement>('.siase-dashboard__avatar');
  const greeting = shell.querySelector<HTMLElement>('.siase-dashboard__greeting');
  const matricula = shell.querySelector<HTMLElement>('.siase-dashboard__matricula');
  const actions = shell.querySelector<HTMLElement>('.siase-dashboard__quick-actions');
  const credits = shell.querySelector<HTMLElement>('[data-academic-credits]');
  const status = shell.querySelector<HTMLElement>('[data-student-status]');

  if (avatar) {
    avatar.textContent = initials(studentInfo);
    avatar.dataset.studentInitials = initials(studentInfo);
  }

  if (greeting) {
    greeting.textContent = `¡Hola, ${displayName(studentInfo)}!`;
  }

  if (matricula) {
    matricula.textContent = studentInfo?.matricula
      ? `Matrícula: ${studentInfo.matricula}`
      : 'Matrícula: pendiente';
  }

  if (credits) {
    credits.textContent = creditsFromStatus(studentStatus);
  }

  if (status) {
    status.textContent = studentStatus?.label || 'Por consultar';
  }

  if (!actions) return;
  actions.replaceChildren();

  actionItems(menuItems).forEach((item) => {
    const link = actions.ownerDocument.createElement('a');
    link.href = item.href;
    link.target = 'center';
    link.className = `siase-dashboard__quick-card siase-dashboard__quick-card--${item.category}`;

    const icon = actions.ownerDocument.createElement('span');
    icon.className = 'siase-dashboard__quick-icon';
    icon.innerHTML = iconMarkup(actionIcon(item.label));

    const label = actions.ownerDocument.createElement('strong');
    label.textContent = item.label;

    const helper = actions.ownerDocument.createElement('span');
    helper.textContent = 'Abrir servicio';

    link.append(icon, label, helper);
    actions.append(link);
  });
}

async function hydrateShell(shell: HTMLElement): Promise<void> {
  const [studentInfo, studentStatus, menuItems] = await Promise.all([
    getStorageValue('studentInfo'),
    getStorageValue('studentStatus'),
    getStorageValue('menuItems')
  ]);
  renderShellData(shell, studentInfo, studentStatus, menuItems ?? []);
}

export function initializeCenterGameUi(
  frameDocument: Document,
  url = new URL(location.href)
): void {
  frameDocument.body.classList.add('siase-plus-center', 'siase-plus-single-view');

  const questLabel = currentQuestLabel(url.pathname);
  const existingShell = frameDocument.getElementById('siase-plus-shell');
  if (existingShell) {
    const questNode = existingShell.querySelector<HTMLElement>('[data-quest-label]');
    if (questNode) questNode.textContent = questLabel;
    hydrateThemeControls(existingShell, frameDocument);
    void hydrateShell(existingShell);
    return;
  }

  const shell = createShell(frameDocument, questLabel);
  frameDocument.body.prepend(shell);
  hydrateThemeControls(shell, frameDocument);
  void hydrateShell(shell);
}
