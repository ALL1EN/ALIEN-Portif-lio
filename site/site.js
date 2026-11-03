/* =====================================================================
   site.js — idioma por país, consentimento de cookies e rastreamento
   (carregado no <head> de todas as páginas, depois do config.js)
   ===================================================================== */
(function () {
  "use strict";
  var CFG = window.ALIEN_CONFIG || {};
  var SCRIPTS = window.ALIEN_SCRIPTS || {};
  var me = document.currentScript;
  var ROOT = me ? new URL("../", me.src).href : "./";           // pasta raiz do site
  var LANG = (document.documentElement.lang || "pt").toLowerCase().indexOf("pt") === 0 ? "pt" : "en";
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- 1. Idioma: Brasil = PT, resto do mundo = EN ---------- */
  function alternate(lang) {
    var l = document.querySelector('link[rel="alternate"][hreflang="' + lang + '"]');
    return l ? l.href : null;
  }
  var leaving = false;
  function goTo(lang) {
    var url = alternate(lang);
    if (url && lang !== LANG && !leaving) {
      leaving = true;
      document.documentElement.style.visibility = "hidden";   // evita mostrar o idioma errado por um instante
      location.replace(url + location.hash);
    }
  }
  function wantLang(country) { return country === "BR" ? "pt" : "en"; }
  window.alienSetLang = function (lang) { store.set("alien-lang", lang); goTo(lang); };

  if (CFG.GEO_LANGUAGE !== false && alternate(LANG === "pt" ? "en" : "pt")) {
    var chosen = store.get("alien-lang");                       // escolha manual vale mais
    var country = store.get("alien-country");
    if (chosen) goTo(chosen);
    else if (country) goTo(wantLang(country));
    else {
      var done = false;
      var fallback = function () {                                // sem resposta do IP: usa o idioma do navegador
        if (done) return; done = true;
        goTo(/^pt/i.test(navigator.language || "") ? "pt" : "en");
      };
      var t = setTimeout(fallback, 2500);
      try {
        fetch(CFG.GEO_API || "https://get.geojs.io/v1/ip/country.json", { cache: "no-store" })
          .then(function (r) { return r.json(); })
          .then(function (j) {
            if (done) return; done = true; clearTimeout(t);
            var c = (j.country || j.country_code || "").toUpperCase();
            if (c) { store.set("alien-country", c); goTo(wantLang(c)); } else fallback();
          })
          .catch(function () { clearTimeout(t); fallback(); });
      } catch (e) { fallback(); }
    }
  }

  /* ---------- 2. Consentimento (Google Consent Mode v2) ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  window.gtag("consent", "default", {
    ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
    analytics_storage: "denied", functionality_storage: "granted", security_storage: "granted",
    wait_for_update: 500
  });

  var consent = null;
  try { consent = JSON.parse(store.get("alien-consent") || "null"); } catch (e) {}
  var loaded = {};

  function addScript(src) { var s = document.createElement("script"); s.async = true; s.src = src; document.head.appendChild(s); }

  function loadAnalytics() {
    if (loaded.analytics) return; loaded.analytics = true;
    if (CFG.GA4_ID) {
      addScript("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(CFG.GA4_ID));
      window.gtag("js", new Date());
      window.gtag("config", CFG.GA4_ID);
    }
    try { SCRIPTS.analytics && SCRIPTS.analytics(); } catch (e) { console.warn("[analytics]", e); }
  }
  function loadMarketing() {
    if (loaded.marketing) return; loaded.marketing = true;
    if (CFG.META_PIXEL_ID) {
      /* Meta Pixel (código oficial) */
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      window.fbq("init", CFG.META_PIXEL_ID);
      window.fbq("track", "PageView");
    }
    try { SCRIPTS.marketing && SCRIPTS.marketing(); } catch (e) { console.warn("[marketing]", e); }
  }
  function apply(c) {
    window.gtag("consent", "update", {
      analytics_storage: c.analytics ? "granted" : "denied",
      ad_storage: c.marketing ? "granted" : "denied",
      ad_user_data: c.marketing ? "granted" : "denied",
      ad_personalization: c.marketing ? "granted" : "denied"
    });
    if (c.analytics) loadAnalytics();
    if (c.marketing) loadMarketing();
  }
  function save(c) {
    consent = { analytics: !!c.analytics, marketing: !!c.marketing, date: new Date().toISOString() };
    store.set("alien-consent", JSON.stringify(consent));
    apply(consent);
  }
  try { SCRIPTS.always && SCRIPTS.always(); } catch (e) { console.warn("[always]", e); }
  if (consent) apply(consent);

  /* Eventos: use alienTrack("nome", {dados}) em qualquer lugar. Vai para o GA4 e para o Pixel (se aceitos). */
  window.alienTrack = function (name, params) {
    try { if (loaded.analytics && CFG.GA4_ID) window.gtag("event", name, params || {}); } catch (e) {}
    try { if (window.fbq && loaded.marketing) { var std = { generate_lead: "Lead", contact: "Contact" }; std[name] ? window.fbq("track", std[name], params || {}) : window.fbq("trackCustom", name, params || {}); } } catch (e) {}
  };

  /* ---------- 3. Interface: aviso de cookies, preferências, idioma ---------- */
  var T = {
    pt: { title: "Cookies e privacidade", text: "Uso cookies para entender como o site é usado e para melhorar meus anúncios. Você escolhe o que aceita.",
      accept: "Aceitar todos", reject: "Recusar", custom: "Personalizar", save: "Salvar escolhas", prefs: "Preferências de cookies",
      need: "Essenciais", needD: "Fazem o site funcionar (idioma, suas escolhas). Sempre ativos.",
      ana: "Análise", anaD: "Google Analytics e ferramentas de medição de uso.", mkt: "Marketing", mktD: "Meta Pixel e outras ferramentas de anúncios.",
      policy: "Política de privacidade", terms: "Termos de uso", contact: "Formulário de contato", cookie: "Cookies", lang: "Idioma" },
    en: { title: "Cookies & privacy", text: "I use cookies to understand how the site is used and to improve my ads. You choose what you accept.",
      accept: "Accept all", reject: "Decline", custom: "Customize", save: "Save choices", prefs: "Cookie preferences",
      need: "Essential", needD: "Make the site work (language, your choices). Always on.",
      ana: "Analytics", anaD: "Google Analytics and usage measurement tools.", mkt: "Marketing", mktD: "Meta Pixel and other advertising tools.",
      policy: "Privacy policy", terms: "Terms of use", contact: "Contact form", cookie: "Cookies", lang: "Language" }
  }[LANG];
  var PAGES = LANG === "pt"
    ? { policy: "politica-de-privacidade.html", terms: "termos-de-uso.html", contact: "contato.html" }
    : { policy: "politica-de-privacidade.en.html", terms: "termos-de-uso.en.html", contact: "contato.en.html" };
  window.ALIEN_PAGES = { root: ROOT, lang: LANG, policy: ROOT + PAGES.policy, terms: ROOT + PAGES.terms, contact: ROOT + PAGES.contact };

  function el(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }

  function ui() {
    if (leaving || !document.body) return;
    if (!document.querySelector('link[href*="site/site.css"]')) {
      var css = document.createElement("link"); css.rel = "stylesheet"; css.href = ROOT + "site/site.css"; document.head.appendChild(css);
    }
    var hasAlt = !!alternate(LANG === "pt" ? "en" : "pt");
    var dock = el('<div class="ac-dock" role="group" aria-label="' + T.prefs + '">' +
      '<button type="button" class="ac-fab" aria-label="' + T.prefs + '" title="' + T.prefs + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4.5-4.5A4 4 0 0 1 12 3Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="8.5" cy="11" r="1.2" fill="currentColor"/><circle cx="12" cy="16" r="1.2" fill="currentColor"/><circle cx="15.5" cy="12.5" r="1" fill="currentColor"/></svg></button>' +
      (hasAlt ? '<span class="ac-lang"><button type="button" data-l="pt"' + (LANG === "pt" ? ' aria-current="true"' : "") + '>PT</button><button type="button" data-l="en"' + (LANG === "en" ? ' aria-current="true"' : "") + '>EN</button></span>' : "") +
      '</div>');
    document.body.appendChild(dock);
    dock.querySelector(".ac-fab").addEventListener("click", openPrefs);
    dock.querySelectorAll(".ac-lang button").forEach(function (b) { b.addEventListener("click", function () { window.alienSetLang(b.dataset.l); }); });

    var links = '<a href="' + window.ALIEN_PAGES.policy + '">' + T.policy + '</a><a href="' + window.ALIEN_PAGES.terms + '">' + T.terms + '</a>';
    var banner = el('<div class="ac-banner" role="dialog" aria-live="polite" aria-label="' + T.title + '" hidden>' +
      '<p class="ac-t">' + T.title + '</p><p class="ac-p">' + T.text + '</p><p class="ac-links">' + links + '</p>' +
      '<div class="ac-btns"><button type="button" class="ac-b ac-ghost" data-a="custom">' + T.custom + '</button><button type="button" class="ac-b ac-ghost" data-a="reject">' + T.reject + '</button><button type="button" class="ac-b ac-main" data-a="accept">' + T.accept + '</button></div></div>');
    document.body.appendChild(banner);

    var modal = el('<dialog class="ac-modal" aria-label="' + T.prefs + '"><p class="ac-t">' + T.prefs + '</p>' +
      '<label class="ac-row"><span><b>' + T.need + '</b><small>' + T.needD + '</small></span><input type="checkbox" checked disabled></label>' +
      '<label class="ac-row"><span><b>' + T.ana + '</b><small>' + T.anaD + '</small></span><input type="checkbox" data-c="analytics"></label>' +
      '<label class="ac-row"><span><b>' + T.mkt + '</b><small>' + T.mktD + '</small></span><input type="checkbox" data-c="marketing"></label>' +
      '<p class="ac-links">' + links + '</p>' +
      '<div class="ac-btns"><button type="button" class="ac-b ac-ghost" data-a="reject">' + T.reject + '</button><button type="button" class="ac-b ac-ghost" data-a="save">' + T.save + '</button><button type="button" class="ac-b ac-main" data-a="accept">' + T.accept + '</button></div></dialog>');
    document.body.appendChild(modal);

    function close() { banner.hidden = true; if (modal.open) modal.close(); }
    function act(a) {
      if (a === "accept") save({ analytics: true, marketing: true });
      if (a === "reject") save({ analytics: false, marketing: false });
      if (a === "save") save({ analytics: modal.querySelector('[data-c="analytics"]').checked, marketing: modal.querySelector('[data-c="marketing"]').checked });
      if (a === "custom") return openPrefs();
      close();
    }
    function openPrefs() {
      modal.querySelector('[data-c="analytics"]').checked = !!(consent && consent.analytics);
      modal.querySelector('[data-c="marketing"]').checked = !!(consent && consent.marketing);
      banner.hidden = true;
      if (!modal.open) modal.showModal();
    }
    window.alienCookiePrefs = openPrefs;
    [banner, modal].forEach(function (box) {
      box.addEventListener("click", function (e) { var b = e.target.closest("[data-a]"); if (b) act(b.dataset.a); if (e.target === modal) modal.close(); });
    });
    if (!consent) banner.hidden = false;

    /* liga links com data-cookie-prefs ao painel (ex.: no rodapé) */
    document.addEventListener("click", function (e) {
      var a = e.target.closest("[data-cookie-prefs]"); if (a) { e.preventDefault(); openPrefs(); }
      var w = e.target.closest('a[href*="wa.me/"]'); if (w) window.alienTrack("contact", { method: "whatsapp", page: location.pathname });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ui); else ui();
})();
