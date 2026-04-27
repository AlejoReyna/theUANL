import{t as e}from"./storage-CGf68QnW.js";function t(e){let t=e.split(`/`).pop()?.toLowerCase()??``;return t.includes(`econcfs`)?`Calificaciones`:t.includes(`echalm`)?`Horario`:t.includes(`econkdx`)?`Kardex`:t.includes(`edatal`)?`Datos personales`:t.includes(`ecsitest`)?`Situación estudiante`:t.includes(`ecohoinsint`)?`Fecha de inscripción`:`Dashboard`}var n=[{label:`Horario`,href:`#`},{label:`Calificaciones`,href:`#`},{label:`Kardex`,href:`#`},{label:`Recibo de Cuota Interna`,href:`#`}];function r(e){return e?.name?e.name.replace(/\s+/g,` `).trim():`Estudiante UANL`}function i(e){let t=(r(e).split(/\s+/).find(e=>e&&!/^m\d+$/i.test(e)&&!/^\d+$/.test(e)&&!/^matr[ií]cula:?$/i.test(e)&&!/^uanl$/i.test(e))||`Estudiante`).toLocaleLowerCase(`es-MX`);return`${t.charAt(0).toLocaleUpperCase(`es-MX`)}${t.slice(1)}`}function a(e){let t=e.toLowerCase();return/horario/.test(t)?`calendar`:/calif/.test(t)?`grades`:/kardex/.test(t)?`kardex`:/recibo|cuota|pago/.test(t)?`receipt`:`arrow`}function o(e){let t={arrow:`<path d="M5 12h14M13 6l6 6-6 6"/>`,calendar:`<path d="M7 3v4M17 3v4M4 9h16"/><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"/>`,money:`<path d="M3 7h18v10H3V7Z"/><path d="M7 7a4 4 0 0 1-4 4M21 11a4 4 0 0 1-4-4M7 17a4 4 0 0 0-4-4M21 13a4 4 0 0 0-4 4"/><circle cx="12" cy="12" r="2"/>`,grades:`<path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5Z"/><path d="M8 7h6M8 11h8M8 15h5"/>`,kardex:`<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>`,pencil:`<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z"/>`,gear:`<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2a2 2 0 1 1-4 0V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1A2 2 0 1 1 4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8a2 2 0 1 1 0-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2a2 2 0 1 1 4 0V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1Z"/>`,receipt:`<path d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1V3Z"/><path d="M9 8h6M9 12h6M9 16h4"/>`};return`<svg class="siase-icon" viewBox="0 0 24 24" aria-hidden="true">${t[e]??t.arrow}</svg>`}function s(e){return e.length?[{label:`Horario`,matcher:/horario/i,category:`schedule`},{label:`Calificaciones`,matcher:/calif/i,category:`academic`},{label:`Kárdex Oficial`,matcher:/kardex/i,category:`academic`}].map(t=>e.find(e=>t.matcher.test(e.label))??{label:t.label,href:`#`,category:t.category}):n.map(e=>({...e,category:`academic`}))}var c=220;function l(e){let t=(e?.rawText??``).match(/cr[eé]ditos?\D{0,24}(\d{1,3})/i);return t?.[1]?Number(t[1]):void 0}function u(e){let t=l(e);return t===void 0?`No disponible`:String(t)}function d(e){let t=l(e);return t===void 0?0:Math.min(Math.round(t/c*100),100)}function f(e){let t=l(e);return t===void 0?`El progreso se actualizará cuando haya datos académicos disponibles.`:`Faltan ${Math.max(c-t,0)} créditos para completar el plan de referencia actual.`}function p(e,t){let n=e.createElement(`section`);return n.id=`siase-plus-shell`,n.innerHTML=`
    <header class="siase-dashboard__header">
      <div class="siase-dashboard__identity">
        <h1 class="siase-dashboard__greeting">¡Hola! Estudiante</h1>
        <div class="siase-dashboard__student-meta" aria-label="Información académica">
          <span><strong>Carrera</strong><em data-student-career>No disponible</em></span>
          <span><strong>Plan de estudios</strong><em data-student-plan>No disponible</em></span>
          <span><strong>Matrícula</strong><em data-student-matricula>Pendiente</em></span>
        </div>
      </div>
      <div class="siase-dashboard__tools">
        <div class="siase-theme-picker">
          <button class="siase-theme-button" type="button" aria-label="Personalizar tema" aria-expanded="false">
            ${o(`gear`)}
          </button>
          <div class="siase-theme-menu" hidden>
            <button type="button" data-theme-option="institutional">Institucional</button>
            <button type="button" data-theme-option="dark">Modo Oscuro</button>
            <button type="button" data-theme-option="minimal">Minimalista</button>
          </div>
        </div>
      </div>
    </header>
    <main class="siase-dashboard__main">
      <section class="siase-dashboard__primary">
        <article class="siase-dashboard__section siase-global-progress">
          <div class="siase-dashboard__section-heading">
            <div>
              <p class="siase-dashboard__eyebrow">Tu Avance Global</p>
              <h2>Progreso académico</h2>
            </div>
            <strong class="siase-progress-percent" data-academic-progress-percent>0%</strong>
          </div>
          <div class="siase-academic-progress" aria-label="Progreso de créditos">
            <div class="siase-academic-progress__header">
              <span>Créditos recorridos</span>
              <strong><em data-academic-credits>No disponible</em> / ${c}</strong>
            </div>
            <div class="siase-academic-progress__track">
              <span data-academic-progress-bar style="width: 0%"></span>
            </div>
            <p class="siase-academic-progress__description" data-academic-missing-credits>
              El progreso se actualizará cuando haya datos académicos disponibles.
            </p>
            <div class="siase-academic-progress__footer">
              <span data-student-status>Situación: Por consultar</span>
            </div>
          </div>
        </article>
        <section class="siase-dashboard__section siase-events" aria-label="Próximos eventos">
          <div class="siase-dashboard__section-heading">
            <div>
              <p class="siase-dashboard__eyebrow">Próximos Eventos</p>
              <h2>Fechas importantes</h2>
            </div>
          </div>
          <div class="siase-events__list">
            <article class="siase-event">
              <span class="siase-event__icon">${o(`calendar`)}</span>
              <span class="siase-event__copy">
                <strong>Revisar horario</strong>
                <em>Confirma cambios antes del inicio de semana.</em>
              </span>
              <span class="siase-event__date">Próximo</span>
            </article>
            <article class="siase-event">
              <span class="siase-event__icon">${o(`money`)}</span>
              <span class="siase-event__copy">
                <strong>Recibo de cuota interna</strong>
                <em>Ten a la mano tu comprobante para trámites.</em>
              </span>
              <span class="siase-event__date">Pendiente</span>
            </article>
          </div>
        </section>
      </section>
      <aside class="siase-dashboard__section siase-quick-panel" aria-label="Acciones rápidas">
        <div class="siase-dashboard__section-heading">
          <div>
            <p class="siase-dashboard__eyebrow">Acciones Rápidas</p>
            <h2>Servicios</h2>
          </div>
          <button class="siase-shortcuts-edit" type="button" aria-label="Modificar accesos directos visibles">
            ${o(`pencil`)}
          </button>
        </div>
        <nav class="siase-dashboard__quick-actions" aria-label="Accesos directos"></nav>
      </aside>
    </main>
  `,n}function m(e){try{return e.defaultView?.localStorage.getItem(`siase-plus-theme`)??`institutional`}catch{return`institutional`}}function h(e,t){try{e.defaultView?.localStorage.setItem(`siase-plus-theme`,t)}catch{}}function g(e,t){e.body.dataset.siaseTheme=t,h(e,t)}function _(e,t){let n=e.querySelector(`.siase-theme-button`),r=e.querySelector(`.siase-theme-menu`);g(t,m(t)),e.dataset.themeControlsReady!==`true`&&(e.dataset.themeControlsReady=`true`,n?.addEventListener(`click`,()=>{if(!r||!n)return;let e=!r.hidden;r.hidden=e,n.setAttribute(`aria-expanded`,String(!e))}),r?.querySelectorAll(`[data-theme-option]`).forEach(e=>{e.addEventListener(`click`,()=>{g(t,e.dataset.themeOption??`institutional`),r.hidden=!0,n?.setAttribute(`aria-expanded`,`false`)})}))}function v(e,t,n,r){let c=e.querySelector(`.siase-dashboard__greeting`),l=e.querySelector(`[data-student-career]`),p=e.querySelector(`[data-student-plan]`),m=e.querySelector(`[data-student-matricula]`),h=e.querySelector(`.siase-dashboard__quick-actions`),g=e.querySelector(`[data-academic-credits]`),_=e.querySelector(`[data-academic-progress-bar]`),v=e.querySelector(`[data-academic-progress-label]`),y=e.querySelector(`[data-academic-progress-percent]`),b=e.querySelector(`[data-academic-missing-credits]`),x=e.querySelector(`[data-student-status]`);c&&(c.textContent=`¡Hola! ${i(t)}`),l&&(l.textContent=t?.program||`No disponible`),p&&(p.textContent=t?.plan||`No disponible`),m&&(m.textContent=t?.matricula||`Pendiente`),g&&(g.textContent=u(n));let S=d(n);_&&(_.style.width=`${S}%`),v&&(v.textContent=`${S}% completado`),y&&(y.textContent=`${S}%`),b&&(b.textContent=f(n)),x&&(x.textContent=`Situación: ${n?.label||`Por consultar`}`),h&&(h.replaceChildren(),s(r).forEach(e=>{let t=h.ownerDocument.createElement(`a`);t.href=e.href,t.target=`center`,t.className=`siase-dashboard__quick-card siase-dashboard__quick-card--${e.category}`;let n=h.ownerDocument.createElement(`span`);n.className=`siase-dashboard__quick-icon`,n.innerHTML=o(a(e.label));let r=h.ownerDocument.createElement(`strong`);r.textContent=e.label;let i=h.ownerDocument.createElement(`span`);i.textContent=`Abrir servicio`;let s=h.ownerDocument.createElement(`span`);s.className=`siase-dashboard__quick-arrow`,s.innerHTML=o(`arrow`),t.append(n,r,i,s),h.append(t)}))}async function y(t){let[n,r,i]=await Promise.all([e(`studentInfo`),e(`studentStatus`),e(`menuItems`)]);v(t,n,r,i??[])}function b(e,n=new URL(location.href)){e.body.classList.add(`siase-plus-center`,`siase-plus-single-view`);let r=t(n.pathname),i=e.getElementById(`siase-plus-shell`);if(i){let t=i.querySelector(`[data-quest-label]`);t&&(t.textContent=r),_(i,e),y(i);return}let a=p(e,r);e.body.prepend(a),_(a,e),y(a)}export{b as t};
//# sourceMappingURL=center-ui-T63TOUo4.js.map