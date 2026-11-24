/*! Passo · © 2026 Upward Academy · UPW-PASSO-C3V1 · licença __UPW_LICENCA__ · revenda e redistribuição proibidas (LICENCA.txt) · https://app.upwardacademy.com.br/app/templates */

// ===== Dados do negócio: troque aqui =====
const NEGOCIO = {
  whatsapp: '5511900000000', // só números, com DDI e DDD
  mensagemPadrao: 'Hi! I found you through the Passo website.',
  // palavras que giram no título do topo
  palavras: ['ballet', 'jazz', 'hip hop', 'ballroom', 'forró', 'freestyle'],
};

// Autoria (não remover)
window.__UPW__ = Object.freeze({ template: 'UPW-PASSO-C3V1', licenca: '__UPW_LICENCA__', autor: 'Upward Academy', site: 'https://app.upwardacademy.com.br/app/templates' });
console.info('%cPasso · template criado por Upward Academy · UPW-PASSO-C3V1', 'color:#ff4d8d');

document.documentElement.classList.add('js');
const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Links de WhatsApp: <a data-whatsapp="mensagem">
document.querySelectorAll('[data-whatsapp]').forEach((a) => {
  const msg = a.dataset.whatsapp || NEGOCIO.mensagemPadrao;
  a.href = `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(msg)}`;
  a.target = '_blank';
  a.rel = 'noopener';
});

// Topo: fundo ao rolar e menu do celular
const topo = document.getElementById('topo');
const abrir = document.getElementById('abrir');
abrir?.addEventListener('click', () => {
  const aberto = topo.classList.toggle('is-aberto');
  abrir.setAttribute('aria-expanded', String(aberto));
});
document.querySelectorAll('#menu a').forEach((a) => a.addEventListener('click', () => {
  topo.classList.remove('is-aberto');
  abrir?.setAttribute('aria-expanded', 'false');
}));

// Rolagem: topo e faixa que inclina com a velocidade
const faixa = document.getElementById('faixa');
let ultimoY = window.scrollY;
let tempoFaixa;
const aoRolar = () => {
  const y = window.scrollY;
  topo.classList.toggle('is-rolou', y > 20);
  if (!reduzir && faixa) {
    const v = Math.max(-14, Math.min(14, (y - ultimoY) * 0.35));
    faixa.style.setProperty('--skew', `${-v}deg`);
    clearTimeout(tempoFaixa);
    tempoFaixa = setTimeout(() => faixa.style.setProperty('--skew', '0deg'), 120);
  }
  ultimoY = y;
};
aoRolar();
window.addEventListener('scroll', aoRolar, { passive: true });

// Entrada do hero
requestAnimationFrame(() => document.body.classList.add('is-pronto'));

// Palavra que gira no título
const gira = document.getElementById('gira');
if (gira && !reduzir && NEGOCIO.palavras.length > 1) {
  let i = 0;
  setInterval(() => {
    gira.classList.add('sai');
    setTimeout(() => {
      i = (i + 1) % NEGOCIO.palavras.length;
      gira.textContent = NEGOCIO.palavras[i];
      gira.classList.remove('sai');
      gira.classList.add('entra');
      void gira.offsetWidth;
      gira.classList.remove('entra');
    }, 460);
  }, 2400);
}

// Filtro da grade de horários
const filtros = document.querySelectorAll('.filtro');
filtros.forEach((b) => b.addEventListener('click', () => {
  const f = b.dataset.filtro;
  filtros.forEach((x) => { x.classList.toggle('is-ativo', x === b); x.setAttribute('aria-pressed', String(x === b)); });
  document.querySelectorAll('#grade li').forEach((li) => li.classList.toggle('apagado', f !== 'todas' && li.dataset.mod !== f));
}));

// Revelar ao rolar e contar números
const contar = (el) => {
  const ate = Number(el.dataset.ate || 0);
  if (reduzir) { el.textContent = ate; return; }
  const t0 = performance.now();
  const passo = (t) => {
    const p = Math.min(1, (t - t0) / 1400);
    el.textContent = Math.round(ate * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
};
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((itens) => {
    itens.forEach((it) => {
      if (!it.isIntersecting) return;
      it.target.classList.add('is-visivel');
      it.target.querySelectorAll?.('.conta').forEach(contar);
      io.unobserve(it.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  document.querySelectorAll('.revela').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 0.08}s`;
    io.observe(el);
  });
} else {
  document.querySelectorAll('.revela').forEach((el) => el.classList.add('is-visivel'));
  document.querySelectorAll('.conta').forEach(contar);
}

document.getElementById('ano').textContent = new Date().getFullYear();

// Ficha de matrícula: monta a mensagem e abre o WhatsApp (nada é salvo no site)
const ficha = document.getElementById('ficha');
ficha?.addEventListener('submit', (e) => {
  e.preventDefault();
  const erro = document.getElementById('ficha-erro');
  const d = new FormData(ficha);
  const nome = (d.get('nome') || '').toString().trim();
  if (!nome) { erro.textContent = 'Please tell us your name.'; ficha.querySelector('#f-nome').focus(); return; }
  erro.textContent = '';
  const msg = [
    `Hi! I'm ${nome} and I'd like to ${d.get('quero')} at Passo.`,
    `Style: ${d.get('modalidade')}`,
    `For: ${d.get('idade')}`,
  ].join('\n');
  window.open(`https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});
