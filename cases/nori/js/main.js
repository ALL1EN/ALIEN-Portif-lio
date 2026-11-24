/*! Nori · © 2026 Upward Academy · UPW-NORI-X5B8 · licença __UPW_LICENCA__ · revenda e redistribuição proibidas (LICENCA.txt) · https://app.upwardacademy.com.br/app/templates */

// ===== Dados do negócio: troque aqui =====
const NEGOCIO = {
  whatsapp: '5511900000000', // só números, com DDI e DDD
  mensagemPadrao: 'Olá! Vim pelo site do Nori.',
  linkApp: 'https://www.ifood.com.br/', // link do seu delivery por aplicativo
  lugaresMax: 8, // lugares no balcão do omakase
};

// Autoria (não remover)
window.__UPW__ = Object.freeze({ template: 'UPW-NORI-X5B8', licenca: '__UPW_LICENCA__', autor: 'Upward Academy', site: 'https://app.upwardacademy.com.br/app/templates' });
console.info('%cNori · template criado por Upward Academy · UPW-NORI-X5B8', 'color:#e5432a');

document.documentElement.classList.add('js');
const zap = (msg) => `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(msg || NEGOCIO.mensagemPadrao)}`;

// Links de WhatsApp: <a data-whatsapp="mensagem">
document.querySelectorAll('[data-whatsapp]').forEach((a) => {
  a.href = zap(a.dataset.whatsapp);
  a.target = '_blank';
  a.rel = 'noopener';
});
document.querySelectorAll('[data-app]').forEach((a) => {
  a.href = NEGOCIO.linkApp;
  a.target = '_blank';
  a.rel = 'noopener';
});

// Entrada do hero
requestAnimationFrame(() => document.getElementById('inicio')?.classList.add('is-pronto'));

// Topo: fundo ao rolar e menu do celular
const topo = document.getElementById('topo');
const abrir = document.getElementById('abrir');
const aoRolar = () => topo.classList.toggle('is-rolou', window.scrollY > 20);
aoRolar();
window.addEventListener('scroll', aoRolar, { passive: true });
abrir?.addEventListener('click', () => {
  const aberto = topo.classList.toggle('is-aberto');
  abrir.setAttribute('aria-expanded', String(aberto));
});
document.querySelectorAll('#menu a').forEach((a) => a.addEventListener('click', () => {
  topo.classList.remove('is-aberto');
  abrir?.setAttribute('aria-expanded', 'false');
}));

// Abas do cardápio (sem JS, todas as categorias aparecem uma embaixo da outra)
const abas = [...document.querySelectorAll('.aba')];
const mostrar = (aba, focar) => {
  abas.forEach((a) => {
    const ativa = a === aba;
    a.setAttribute('aria-selected', String(ativa));
    a.tabIndex = ativa ? 0 : -1;
    const painel = document.getElementById(a.getAttribute('aria-controls'));
    painel.hidden = !ativa;
    if (ativa) { painel.classList.remove('is-entra'); void painel.offsetWidth; painel.classList.add('is-entra'); }
  });
  if (focar) aba.focus();
};
abas.forEach((a, i) => {
  a.addEventListener('click', () => mostrar(a));
  a.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const prox = abas[(i + (e.key === 'ArrowRight' ? 1 : -1) + abas.length) % abas.length];
    mostrar(prox, true);
  });
});
if (abas.length) mostrar(abas[0]);

// Reserva do omakase: sessão + lugares viram a mensagem do WhatsApp
const saida = document.getElementById('pessoas');
const reservar = document.getElementById('reservar');
let lugares = 2;
const atualizarReserva = () => {
  const sessao = document.querySelector('input[name="sessao"]:checked')?.value || '19h';
  saida.textContent = lugares;
  reservar.href = zap(`Olá! Quero reservar o omakase no balcão do Nori: sessão das ${sessao}, ${lugares} ${lugares === 1 ? 'lugar' : 'lugares'}. Qual a próxima data disponível?`);
};
if (saida && reservar) {
  document.getElementById('menos').addEventListener('click', () => { lugares = Math.max(1, lugares - 1); atualizarReserva(); });
  document.getElementById('mais').addEventListener('click', () => { lugares = Math.min(NEGOCIO.lugaresMax, lugares + 1); atualizarReserva(); });
  document.querySelectorAll('input[name="sessao"]').forEach((r) => r.addEventListener('change', atualizarReserva));
  atualizarReserva();
}

// Horário: destaca o dia de hoje
const hoje = new Date().getDay(); // 0 = domingo
const grupo = { 0: '0', 1: '1', 2: '2', 3: '2', 4: '2', 5: '5', 6: '6' }[hoje];
document.querySelector(`.horario__lista li[data-dia="${grupo}"]`)?.classList.add('is-hoje');
const agora = document.getElementById('agora');
if (agora && hoje === 1) {
  agora.classList.remove('tag--viva'); agora.classList.add('tag--fechado');
  agora.lastChild.textContent = 'Fechado hoje';
}

// Revelar ao rolar e contar números
const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
  document.querySelectorAll('.revela, .numeros').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 0.08}s`;
    io.observe(el);
  });
} else {
  document.querySelectorAll('.revela').forEach((el) => el.classList.add('is-visivel'));
  document.querySelectorAll('.conta').forEach(contar);
}

document.getElementById('ano').textContent = new Date().getFullYear();
