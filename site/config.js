/* =====================================================================
   CONFIGURAÇÃO DO SITE — edite só este arquivo
   Todas as páginas (home, projetos e cada projeto) carregam este arquivo.
   ===================================================================== */
window.ALIEN_CONFIG = {

  /* ---------- Google Analytics 4 ----------
     Cole o ID de medição (começa com "G-"). Vazio = desligado.
     Só carrega depois que a pessoa aceita os cookies de análise. */
  GA4_ID: "",                // ex.: "G-XXXXXXXXXX"

  /* ---------- Meta Pixel (Facebook / Instagram Ads) ----------
     Cole o ID do pixel (só números). Vazio = desligado.
     Só carrega depois que a pessoa aceita os cookies de marketing. */
  META_PIXEL_ID: "",         // ex.: "123456789012345"

  /* ---------- Formulário de contato ----------
     Endereço que recebe o formulário (ex.: Formspree, Make, Zapier, n8n, sua API).
     Vazio = o formulário abre o WhatsApp com a mensagem pronta. */
  FORM_ENDPOINT: "",         // ex.: "https://formspree.io/f/xxxxxxx"

  /* ---------- Contato ---------- */
  WHATSAPP: "5516993370772",
  EMAIL: "",                 // aparece na política de privacidade, se preenchido

  /* ---------- Idioma por país ----------
     Brasil = português; qualquer outro país = inglês.
     A pessoa pode trocar manualmente (PT/EN) e a escolha fica salva. */
  GEO_LANGUAGE: true,
  GEO_API: "https://get.geojs.io/v1/ip/country.json"
};

/* =====================================================================
   OUTROS SCRIPTS (Hotjar, Clarity, TikTok Pixel, LinkedIn, Google Ads...)
   Coloque cada script dentro da função certa. Eles só rodam depois do
   consentimento da categoria correspondente.
   ===================================================================== */
window.ALIEN_SCRIPTS = {

  // Análise (ex.: Microsoft Clarity, Hotjar). Roda se aceitar "Análise".
  analytics: function () {
    /* cole aqui */
  },

  // Marketing / anúncios (ex.: TikTok Pixel, Google Ads, LinkedIn Insight). Roda se aceitar "Marketing".
  marketing: function () {
    /* cole aqui */
  },

  // Sempre roda (só use para scripts essenciais, que não rastreiam ninguém).
  always: function () {
    /* cole aqui */
  }
};
