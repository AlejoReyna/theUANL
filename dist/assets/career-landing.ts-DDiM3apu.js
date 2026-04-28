import{t as e}from"./theme-DGOVaEIk.js";var t=[`siase`,`correo`,`nexus`,`codice`];function n(e){let t={bell:`<path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>`,book:`<path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5Z"/><path d="M8 7h6M8 11h8"/>`,calendar:`<path d="M7 3v4M17 3v4M4 9h16"/><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 13h.01M12 13h.01M16 13h.01"/>`,chevron:`<path d="m6 9 6 6 6-6"/>`,download:`<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>`,mail:`<path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>`,message:`<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>`,search:`<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`,services:`<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 18 9 5 9-5"/>`,shield:`<path d="M12 3 5 6v5c0 4.4 2.8 8.3 7 10 4.2-1.7 7-5.6 7-10V6l-7-3Z"/><path d="m8 12 3 3 5-6"/>`,target:`<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>`,video:`<path d="M15 10 21 6v12l-6-4"/><rect x="3" y="6" width="12" height="12" rx="2"/>`};return`<svg class="siase-career-icon" viewBox="0 0 24 24" aria-hidden="true">${t[e]??t.services}</svg>`}function r(e){return{siase:`Seleccionar carrera`,correo:`Correo universitario`,nexus:`Nexus`,codice:`CODICE`}[e]}function i(){return window.name===`center`||window.top===window}function a(e){return e.querySelector(`#correo a.style3`)?.textContent?.trim()||`correo@uanl.edu.mx`}function o(e){return e.querySelectorAll(`form[name='SelCarrera'] a[href^='javascript:']`).length}function s(e,n){let r=e.defaultView;typeof r?.muestra==`function`?r.muestra(n):t.forEach(t=>{let r=e.getElementById(t);r&&(r.style.visibility=t===n?`visible`:`hidden`)}),e.querySelectorAll(`[data-siase-career-panel]`).forEach(e=>{e.classList.toggle(`is-active`,e.dataset.siaseCareerPanel===n)})}function c(e){let[n,r]=Array.from(e.body.querySelectorAll(`table`));n?.classList.add(`siase-plus-career-banner`),r?.classList.add(`siase-plus-career-layout`),t.forEach(t=>{e.getElementById(t)?.classList.add(`siase-plus-career-panel`)})}function l(e){let i=o(e),c=a(e),l=e.createElement(`section`);return l.className=`siase-career-dashboard`,l.innerHTML=`
    <nav class="siase-career-nav" aria-label="SIASE Plus">
      <div class="siase-career-brand">
        <span class="siase-career-brand__mark">${n(`shield`)}</span>
        <strong>SIASE Plus</strong>
      </div>
      <label class="siase-career-search">
        ${n(`search`)}
        <input type="search" placeholder="Buscar servicios, carrera o plataforma" />
      </label>
      <div class="siase-career-nav__actions">
        <button type="button" class="siase-career-nav__icon" aria-label="Notificaciones">
          ${n(`bell`)}
          <span>3</span>
        </button>
        <button type="button" class="siase-career-nav__icon" aria-label="Mensajes">${n(`message`)}</button>
        <div class="siase-career-user">
          <span class="siase-career-avatar">U</span>
          <span><strong>Estudiante UANL</strong><em>${c}</em></span>
          ${n(`chevron`)}
        </div>
      </div>
    </nav>
    <div class="siase-career-grid">
      <main class="siase-career-main">
        <section class="siase-career-hero siase-entrance">
          <div>
            <p class="siase-dashboard__eyebrow">Bienvenido de nuevo</p>
            <h1>Selecciona tu carrera y entra a SIASE.</h1>
            <p>Tu acceso academico, correo, Nexus y CODICE quedan reunidos en una experiencia mas clara.</p>
            <div class="siase-career-goal">
              <span><strong>Progreso de entrada</strong><em>${i||1} carreras disponibles</em></span>
              <div><span style="width: 68%"></span></div>
            </div>
          </div>
          <aside class="siase-career-gpa">
            ${n(`target`)}
            <span>Panel activo</span>
            <strong data-siase-active-panel>${r(`siase`)}</strong>
          </aside>
        </section>
        <section class="siase-career-section">
          <div class="siase-career-section__header">
            <h2>Acceso rapido</h2>
            <span>Servicios principales</span>
          </div>
          <div class="siase-career-quick-grid">
            <button type="button" data-siase-career-panel="siase" class="siase-career-quick-card is-active">
              <span class="siase-career-quick-card__icon siase-career-quick-card__icon--blue">${n(`book`)}</span>
              <strong>Mi carrera</strong>
              <em>${i||1} disponibles</em>
            </button>
            <button type="button" data-siase-career-panel="correo" class="siase-career-quick-card">
              <span class="siase-career-quick-card__icon siase-career-quick-card__icon--yellow">${n(`mail`)}</span>
              <strong>Correo</strong>
              <em>Universitario</em>
            </button>
            <button type="button" data-siase-career-panel="nexus" class="siase-career-quick-card">
              <span class="siase-career-quick-card__icon siase-career-quick-card__icon--green">${n(`video`)}</span>
              <strong>Nexus</strong>
              <em>Clases en linea</em>
            </button>
            <button type="button" data-siase-career-panel="codice" class="siase-career-quick-card">
              <span class="siase-career-quick-card__icon siase-career-quick-card__icon--cyan">${n(`services`)}</span>
              <strong>CODICE</strong>
              <em>Biblioteca digital</em>
            </button>
          </div>
        </section>
      </main>
      <aside class="siase-career-sidebar">
        <section class="siase-career-profile-card">
          <span class="siase-career-profile-card__avatar">U</span>
          <h2>Estudiante UANL</h2>
          <p>${c}</p>
          <strong>${i||1} carreras registradas</strong>
          <div class="siase-career-profile-card__actions">
            <button type="button" data-siase-career-panel="siase">${n(`download`)} Seleccionar carrera</button>
            <button type="button" data-siase-career-panel="nexus">${n(`video`)} Entrar a Nexus</button>
            <button type="button" data-siase-career-panel="correo">${n(`mail`)} Abrir correo</button>
          </div>
        </section>
        <section class="siase-career-events-card">
          <h2>Recordatorios</h2>
          <article><span></span><strong>Valida tus datos personales</strong><em>Antes de continuar tramites</em></article>
          <article><span></span><strong>Revisa tu correo UANL</strong><em>Notificaciones institucionales</em></article>
          <article><span></span><strong>Consulta plataformas</strong><em>Nexus y CODICE disponibles</em></article>
        </section>
      </aside>
    </div>
  `,l.querySelectorAll(`[data-siase-career-panel]`).forEach(n=>{n.addEventListener(`click`,()=>{let i=n.dataset.siaseCareerPanel;!i||!t.includes(i)||(s(e,i),l.querySelector(`[data-siase-active-panel]`).textContent=r(i))})}),l}function u(e){e.querySelector(`.siase-career-dashboard`)||e.body.prepend(l(e))}function d(t){i()&&(t.body.classList.add(`siase-plus-center`,`siase-plus-single-view`,`siase-plus-career-landing`),e(t),c(t),u(t))}d(document);
//# sourceMappingURL=career-landing.ts-DDiM3apu.js.map