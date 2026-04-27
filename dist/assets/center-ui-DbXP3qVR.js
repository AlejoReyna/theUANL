import{t as e}from"./storage-CGf68QnW.js";function t(e){let t=e.split(`/`).pop()?.toLowerCase()??``;return t.includes(`econcfs`)?`Calificaciones`:t.includes(`echalm`)?`Horario`:t.includes(`econkdx`)?`Kardex`:t.includes(`edatal`)?`Datos personales`:t.includes(`ecsitest`)?`Situación estudiante`:t.includes(`ecohoinsint`)?`Fecha de inscripción`:`Dashboard`}var n=[{label:`Horario`,href:`#`},{label:`Calificaciones`,href:`#`},{label:`Kardex`,href:`#`},{label:`Recibo de Cuota Interna`,href:`#`}];function r(e){return e?.name?e.name.replace(/\s+/g,` `).trim():`Estudiante UANL`}function i(e){return r(e).split(` `).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase()}function a(e){let t=e.toLowerCase();return/horario/.test(t)?`calendar`:/calif/.test(t)?`grades`:/kardex/.test(t)?`kardex`:/recibo|cuota|pago/.test(t)?`receipt`:`arrow`}function o(e){let t={arrow:`<path d="M5 12h14M13 6l6 6-6 6"/>`,calendar:`<path d="M7 3v4M17 3v4M4 9h16"/><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"/>`,grades:`<path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5Z"/><path d="M8 7h6M8 11h8M8 15h5"/>`,kardex:`<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>`,palette:`<path d="M12 22a10 10 0 1 1 10-10c0 1.7-1.3 3-3 3h-1.5a2 2 0 0 0-1.7 3l.3.5A2.2 2.2 0 0 1 14.2 22H12Z"/><path d="M7.5 10.5h.01M10.5 7.5h.01M14 7.5h.01M16.5 10.5h.01"/>`,receipt:`<path d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1V3Z"/><path d="M9 8h6M9 12h6M9 16h4"/>`};return`<svg class="siase-icon" viewBox="0 0 24 24" aria-hidden="true">${t[e]??t.arrow}</svg>`}function s(e){return e.length?[{label:`Horario`,matcher:/horario/i,category:`schedule`},{label:`Calificaciones`,matcher:/calif/i,category:`academic`},{label:`Kardex`,matcher:/kardex/i,category:`academic`},{label:`Recibo de Cuota Interna`,matcher:/recibo|cuota interna|pago/i,category:`payments`}].map(t=>e.find(e=>t.matcher.test(e.label))??{label:t.label,href:`#`,category:t.category}):n.map(e=>({...e,category:`academic`}))}function c(e){return(e?.rawText??``).match(/cr[eé]ditos?\D{0,24}(\d{1,3})/i)?.[1]??`No disponible`}function l(e,t){let n=e.createElement(`section`);return n.id=`siase-plus-shell`,n.innerHTML=`
    <header class="siase-dashboard__header">
      <div class="siase-dashboard__identity">
        <p class="siase-dashboard__eyebrow">Portal UANL modernizado</p>
        <h1 class="siase-dashboard__greeting">¡Hola, Estudiante UANL!</h1>
        <p class="siase-dashboard__matricula">Matrícula: pendiente</p>
      </div>
      <div class="siase-dashboard__tools">
        <div class="siase-theme-picker">
          <button class="siase-theme-button" type="button" aria-expanded="false">
            ${o(`palette`)}
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
            <strong data-quest-label>${t}</strong>
          </article>
        </div>
      </aside>
    </main>
  `,n}function u(e){try{return e.defaultView?.localStorage.getItem(`siase-plus-theme`)??`institutional`}catch{return`institutional`}}function d(e,t){try{e.defaultView?.localStorage.setItem(`siase-plus-theme`,t)}catch{}}function f(e,t){e.body.dataset.siaseTheme=t,d(e,t)}function p(e,t){let n=e.querySelector(`.siase-theme-button`),r=e.querySelector(`.siase-theme-menu`);f(t,u(t)),e.dataset.themeControlsReady!==`true`&&(e.dataset.themeControlsReady=`true`,n?.addEventListener(`click`,()=>{if(!r||!n)return;let e=!r.hidden;r.hidden=e,n.setAttribute(`aria-expanded`,String(!e))}),r?.querySelectorAll(`[data-theme-option]`).forEach(e=>{e.addEventListener(`click`,()=>{f(t,e.dataset.themeOption??`institutional`),r.hidden=!0,n?.setAttribute(`aria-expanded`,`false`)})}))}function m(e,t,n,l){let u=e.querySelector(`.siase-dashboard__avatar`),d=e.querySelector(`.siase-dashboard__greeting`),f=e.querySelector(`.siase-dashboard__matricula`),p=e.querySelector(`.siase-dashboard__quick-actions`),m=e.querySelector(`[data-academic-credits]`),h=e.querySelector(`[data-student-status]`);u&&(u.textContent=i(t),u.dataset.studentInitials=i(t)),d&&(d.textContent=`¡Hola, ${r(t)}!`),f&&(f.textContent=t?.matricula?`Matrícula: ${t.matricula}`:`Matrícula: pendiente`),m&&(m.textContent=c(n)),h&&(h.textContent=n?.label||`Por consultar`),p&&(p.replaceChildren(),s(l).forEach(e=>{let t=p.ownerDocument.createElement(`a`);t.href=e.href,t.target=`center`,t.className=`siase-dashboard__quick-card siase-dashboard__quick-card--${e.category}`;let n=p.ownerDocument.createElement(`span`);n.className=`siase-dashboard__quick-icon`,n.innerHTML=o(a(e.label));let r=p.ownerDocument.createElement(`strong`);r.textContent=e.label;let i=p.ownerDocument.createElement(`span`);i.textContent=`Abrir servicio`,t.append(n,r,i),p.append(t)}))}async function h(t){let[n,r,i]=await Promise.all([e(`studentInfo`),e(`studentStatus`),e(`menuItems`)]);m(t,n,r,i??[])}function g(e,n=new URL(location.href)){e.body.classList.add(`siase-plus-center`,`siase-plus-single-view`);let r=t(n.pathname),i=e.getElementById(`siase-plus-shell`);if(i){let t=i.querySelector(`[data-quest-label]`);t&&(t.textContent=r),p(i,e),h(i);return}let a=l(e,r);e.body.prepend(a),p(a,e),h(a)}export{g as t};
//# sourceMappingURL=center-ui-DbXP3qVR.js.map