/*! Luz de Domingo · © 2026 Upward Academy · UPW-DOMINGO-F9R3 · licença __UPW_LICENCA__ · revenda e redistribuição proibidas (LICENCA.txt) · https://app.upwardacademy.com.br/app/templates */

// ===== Dados do negócio: troque aqui =====
const NEGOCIO = {
  whatsapp: '5511900000000', // só números, com DDI e DDD
  mensagemPadrao: 'Hi! I found you through the Luz de Domingo website.',
};

// Autoria (não remover)
window.__UPW__ = Object.freeze({ template: 'UPW-DOMINGO-F9R3', licenca: '__UPW_LICENCA__', autor: 'Upward Academy', site: 'https://app.upwardacademy.com.br/app/templates' });
console.info('%cLuz de Domingo · template criado por Upward Academy · UPW-DOMINGO-F9R3', 'color:#9a7a58');

document.documentElement.classList.add('js');

const linkZap = (msg) => `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(msg || NEGOCIO.mensagemPadrao)}`;

// Links de WhatsApp: <a data-whatsapp="mensagem">
document.querySelectorAll('[data-whatsapp]').forEach((a) => {
  a.href = linkZap(a.dataset.whatsapp);
  a.target = '_blank';
  a.rel = 'noopener';
});

// Topo: fundo claro depois do hero e menu do celular
const topo = document.getElementById('topo');
const abrir = document.getElementById('abrir');
const hero = document.getElementById('inicio');
const aoRolar = () => topo.classList.toggle('is-rolou', window.scrollY > hero.offsetHeight - 100);
aoRolar();
window.addEventListener('scroll', aoRolar, { passive: true });
window.addEventListener('resize', aoRolar);
abrir?.addEventListener('click', () => {
  const aberto = topo.classList.toggle('is-aberto');
  abrir.setAttribute('aria-expanded', String(aberto));
});
document.querySelectorAll('#menu a').forEach((a) => a.addEventListener('click', () => {
  topo.classList.remove('is-aberto');
  abrir?.setAttribute('aria-expanded', 'false');
}));

// Consulta de data: monta a mensagem e abre o WhatsApp
document.getElementById('consulta')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.currentTarget;
  const [a, m, d] = (f.data.value || '').split('-');
  const data = d ? new Date(`${a}-${m}-${d}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'our date';
  const cidade = f.cidade.value.trim();
  const nomes = f.nomes.value.trim();
  let msg = `Hi, Davi! ${nomes ? `We're ${nomes} and we'd like` : "We'd like"} to know if you're available on ${data}`;
  msg += cidade ? `, in ${cidade}.` : '.';
  window.open(linkZap(msg), '_blank', 'noopener');
});

// Revelar ao rolar e contar números
const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const contar = (el) => {
  const ate = Number(el.dataset.ate || 0);
  if (reduzir) { el.textContent = ate; return; }
  const t0 = performance.now();
  const passo = (t) => {
    const p = Math.min(1, (t - t0) / 1800);
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
      it.target.querySelectorAll('.conta').forEach(contar);
      io.unobserve(it.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
  document.querySelectorAll('.revela, .sobre__numeros').forEach((el, i) => {
    if (el.classList.contains('revela')) el.style.transitionDelay = `${(i % 2) * 0.12}s`;
    io.observe(el);
  });
} else {
  document.querySelectorAll('.revela').forEach((el) => el.classList.add('is-visivel'));
  document.querySelectorAll('.conta').forEach(contar);
}

document.getElementById('ano').textContent = new Date().getFullYear();
