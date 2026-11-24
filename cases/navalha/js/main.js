/*! Navalha · © 2026 Upward Academy · UPW-NAVALHA-R4X8 · licença __UPW_LICENCA__ · revenda e redistribuição proibidas (LICENCA.txt) · https://app.upwardacademy.com.br/app/templates */

// ===== Dados do negócio: troque aqui =====
const NEGOCIO = {
  whatsapp: '5511900000000', // só números, com DDI e DDD
  mensagemPadrao: 'Olá! Vim pelo site da Navalha.',
  // Horário por dia da semana (0 = domingo ... 6 = sábado): [abre, fecha] em horas, ou null se fechado.
  // Mantenha igual à tabela da seção "Endereço e horário" no index.html.
  horario: { 0: null, 1: [10, 20], 2: [9, 20], 3: [9, 20], 4: [9, 21], 5: [9, 21], 6: [8, 18] },
};

// Autoria (não remover)
window.__UPW__ = Object.freeze({ template: 'UPW-NAVALHA-R4X8', licenca: '__UPW_LICENCA__', autor: 'Upward Academy', site: 'https://app.upwardacademy.com.br/app/templates' });
console.info('%cNavalha · template criado por Upward Academy · UPW-NAVALHA-R4X8', 'color:#c9a063');

document.documentElement.classList.add('js');

// Links de WhatsApp: <a data-whatsapp="mensagem">
document.querySelectorAll('[data-whatsapp]').forEach((a) => {
  const msg = a.dataset.whatsapp || NEGOCIO.mensagemPadrao;
  a.href = `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(msg)}`;
  a.target = '_blank';
  a.rel = 'noopener';
});

// Aberto agora? Destaca o dia de hoje na tabela e mostra o aviso no topo da página
(() => {
  const agora = new Date();
  const dia = agora.getDay();
  const hora = agora.getHours() + agora.getMinutes() / 60;
  document.querySelector(`.horario tr[data-dia="${dia}"]`)?.classList.add('is-hoje');
  const aviso = document.getElementById('hoje');
  const ponto = document.querySelector('.hero__hoje .ponto');
  if (!aviso) return;
  const h = (n) => `${Math.floor(n)}h${n % 1 ? String(Math.round((n % 1) * 60)).padStart(2, '0') : ''}`;
  const hoje = NEGOCIO.horario[dia];
  if (hoje && hora >= hoje[0] && hora < hoje[1]) {
    aviso.textContent = `Aberto agora · até ${h(hoje[1])}`;
    return;
  }
  ponto?.classList.add('is-fechado');
  for (let i = 0; i < 7; i++) {
    const d = (dia + i) % 7;
    const faixa = NEGOCIO.horario[d];
    if (!faixa || (i === 0 && hora >= faixa[0])) continue;
    const quando = i === 0 ? 'hoje' : i === 1 ? 'amanhã' : ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'][d];
    aviso.textContent = `Fechado agora · abre ${quando} às ${h(faixa[0])}`;
    return;
  }
})();

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

// Revelar ao rolar
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((itens) => {
    itens.forEach((it) => {
      if (!it.isIntersecting) return;
      it.target.classList.add('is-visivel');
      io.unobserve(it.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  document.querySelectorAll('.revela').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 0.09}s`;
    io.observe(el);
  });
} else {
  document.querySelectorAll('.revela').forEach((el) => el.classList.add('is-visivel'));
}

document.getElementById('ano').textContent = new Date().getFullYear();
