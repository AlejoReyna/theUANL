import{t as e}from"./storage-CGf68QnW.js";function t(e){let t=e.split(`/`).pop()?.toLowerCase()??``;return t.includes(`econcfs`)?`Calificaciones`:t.includes(`echalm`)?`Horario`:t.includes(`econkdx`)?`Kardex`:t.includes(`edatal`)?`Datos personales`:t.includes(`ecsitest`)?`Situación estudiante`:t.includes(`ecohoinsint`)?`Fecha de inscripción`:`Dashboard`}var n=[{label:`Horario`,href:`#`},{label:`Calificaciones`,href:`#`},{label:`Kardex`,href:`#`},{label:`Recibo de Cuota Interna`,href:`#`}];function r(e){return e?.name?e.name.replace(/\s+/g,` `).trim():`Estudiante UANL`}function i(e){let t=(r(e).split(/\s+/).find(e=>e&&!/^m\d+$/i.test(e)&&!/^\d+$/.test(e)&&!/^matr[ií]cula:?$/i.test(e)&&!/^uanl$/i.test(e))||`Estudiante`).toLocaleLowerCase(`es-MX`);return`${t.charAt(0).toLocaleUpperCase(`es-MX`)}${t.slice(1)}`}function a(e){let t=e.toLowerCase();return/horario/.test(t)?`calendar`:/calif/.test(t)?`grades`:/kardex/.test(t)?`kardex`:/recibo|cuota|pago/.test(t)?`receipt`:`arrow`}function o(e){let t={arrow:`<path d="M5 12h14M13 6l6 6-6 6"/>`,calendar:`<path d="M7 3v4M17 3v4M4 9h16"/><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01"/>`,money:`<path d="M3 7h18v10H3V7Z"/><path d="M7 7a4 4 0 0 1-4 4M21 11a4 4 0 0 1-4-4M7 17a4 4 0 0 0-4-4M21 13a4 4 0 0 0-4 4"/><circle cx="12" cy="12" r="2"/>`,grades:`<path d="M4 19.5V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-1.5Z"/><path d="M8 7h6M8 11h8M8 15h5"/>`,kardex:`<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>`,pencil:`<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z"/>`,gear:`<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2a2 2 0 1 1-4 0V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1A2 2 0 1 1 4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8a2 2 0 1 1 0-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2a2 2 0 1 1 4 0V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1Z"/>`,receipt:`<path d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1V3Z"/><path d="M9 8h6M9 12h6M9 16h4"/>`};return`<svg class="siase-icon" viewBox="0 0 24 24" aria-hidden="true">${t[e]??t.arrow}</svg>`}function s(e){return e.length?[{label:`Horario`,matcher:/horario/i,category:`schedule`},{label:`Calificaciones`,matcher:/calif/i,category:`academic`},{label:`Kárdex Oficial`,matcher:/kardex/i,category:`academic`}].map(t=>e.find(e=>t.matcher.test(e.label))??{label:t.label,href:`#`,category:t.category}):n.map(e=>({...e,category:`academic`}))}var c=220;function l(e){let t=(e?.rawText??``).match(/cr[eé]ditos?\D{0,24}(\d{1,3})/i);return t?.[1]?Number(t[1]):void 0}function u(e){let t=l(e);return t===void 0?`No disponible`:String(t)}function d(e){let t=l(e);return t===void 0?0:Math.min(Math.round(t/c*100),100)}function f(e){let t=l(e);return t===void 0?`El progreso se actualizará cuando haya datos académicos disponibles.`:`Faltan ${Math.max(c-t,0)} créditos para completar el plan de referencia actual.`}function p(e,t){if(e.dataset.typedGreeting===t)return;if(e.dataset.typedGreeting=t,window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){e.textContent=t,e.classList.remove(`siase-dashboard__greeting--typing`);return}e.textContent=``,e.classList.add(`siase-dashboard__greeting--typing`);let n=0,r=window.setInterval(()=>{e.textContent=t.slice(0,n+1),n+=1,n>=t.length&&(window.clearInterval(r),window.setTimeout(()=>e.classList.remove(`siase-dashboard__greeting--typing`),800))},42)}function m(e,t){let n=e.createElement(`section`);return n.id=`siase-plus-shell`,n.innerHTML=`
    <header class="siase-dashboard__header siase-entrance siase-entrance--header">
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
        <article class="siase-dashboard__section siase-global-progress siase-entrance siase-entrance--progress">
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
              <span data-academic-progress-bar style="width: 0%; --progress-width: 0%"></span>
            </div>
            <p class="siase-academic-progress__description" data-academic-missing-credits>
              El progreso se actualizará cuando haya datos académicos disponibles.
            </p>
            <div class="siase-academic-progress__footer">
              <span data-student-status>Situación: Por consultar</span>
            </div>
          </div>
        </article>
        <section class="siase-dashboard__section siase-events siase-entrance siase-entrance--events" aria-label="Próximos eventos">
          <div class="siase-dashboard__section-heading">
            <div>
              <p class="siase-dashboard__eyebrow">Próximos Eventos</p>
              <h2>Fechas importantes</h2>
            </div>
          </div>
          <div class="siase-events__list">
            <article class="siase-event" style="--entry-delay: 760ms">
              <span class="siase-event__icon">${o(`calendar`)}</span>
              <span class="siase-event__copy">
                <strong>Revisar horario</strong>
                <em>Confirma cambios antes del inicio de semana.</em>
              </span>
              <span class="siase-event__date">Próximo</span>
            </article>
            <article class="siase-event" style="--entry-delay: 860ms">
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
      <aside class="siase-dashboard__section siase-quick-panel siase-entrance siase-entrance--quick" aria-label="Acciones rápidas">
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
  `,n}function h(e){try{return e.defaultView?.localStorage.getItem(`siase-plus-theme`)??`institutional`}catch{return`institutional`}}function g(e,t){try{e.defaultView?.localStorage.setItem(`siase-plus-theme`,t)}catch{}}function _(e,t){e.body.dataset.siaseTheme=t,g(e,t)}function v(e,t){let n=e.querySelector(`.siase-theme-button`),r=e.querySelector(`.siase-theme-menu`);_(t,h(t)),e.dataset.themeControlsReady!==`true`&&(e.dataset.themeControlsReady=`true`,n?.addEventListener(`click`,()=>{if(!r||!n)return;let e=!r.hidden;r.hidden=e,n.setAttribute(`aria-expanded`,String(!e))}),r?.querySelectorAll(`[data-theme-option]`).forEach(e=>{e.addEventListener(`click`,()=>{_(t,e.dataset.themeOption??`institutional`),r.hidden=!0,n?.setAttribute(`aria-expanded`,`false`)})}))}function y(e,t,n,r){let c=e.querySelector(`.siase-dashboard__greeting`),l=e.querySelector(`[data-student-career]`),m=e.querySelector(`[data-student-plan]`),h=e.querySelector(`[data-student-matricula]`),g=e.querySelector(`.siase-dashboard__quick-actions`),_=e.querySelector(`[data-academic-credits]`),v=e.querySelector(`[data-academic-progress-bar]`),y=e.querySelector(`[data-academic-progress-label]`),b=e.querySelector(`[data-academic-progress-percent]`),x=e.querySelector(`[data-academic-missing-credits]`),S=e.querySelector(`[data-student-status]`);c&&p(c,`¡Hola! ${i(t)}`),l&&(l.textContent=t?.program||`No disponible`),m&&(m.textContent=t?.plan||`No disponible`),h&&(h.textContent=t?.matricula||`Pendiente`),_&&(_.textContent=u(n));let C=d(n);v&&(v.style.width=`${C}%`,v.style.setProperty(`--progress-width`,`${C}%`)),y&&(y.textContent=`${C}% completado`),b&&(b.textContent=`${C}%`),x&&(x.textContent=f(n)),S&&(S.textContent=`Situación: ${n?.label||`Por consultar`}`),g&&(g.replaceChildren(),s(r).forEach((e,t)=>{let n=g.ownerDocument.createElement(`a`);n.href=e.href,n.target=`center`,n.className=`siase-dashboard__quick-card siase-dashboard__quick-card--${e.category}`,n.style.setProperty(`--entry-delay`,`${940+t*90}ms`);let r=g.ownerDocument.createElement(`span`);r.className=`siase-dashboard__quick-icon`,r.innerHTML=o(a(e.label));let i=g.ownerDocument.createElement(`strong`);i.textContent=e.label;let s=g.ownerDocument.createElement(`span`);s.textContent=`Abrir servicio`;let c=g.ownerDocument.createElement(`span`);c.className=`siase-dashboard__quick-arrow`,c.innerHTML=o(`arrow`),n.append(r,i,s,c),g.append(n)}))}async function b(t){let[n,r,i]=await Promise.all([e(`studentInfo`),e(`studentStatus`),e(`menuItems`)]);y(t,n,r,i??[])}function x(e,n=new URL(location.href)){e.body.classList.add(`siase-plus-center`,`siase-plus-single-view`);let r=t(n.pathname),i=e.getElementById(`siase-plus-shell`);if(i){let t=i.querySelector(`[data-quest-label]`);t&&(t.textContent=r),v(i,e),b(i);return}let a=m(e,r);e.body.prepend(a),v(a,e),b(a)}export{x as t};
//# sourceMappingURL=center-ui-DVknT40F.js.map