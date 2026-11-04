
(() => {
  // Formulário: envia para FORM_ENDPOINT (site/config.js). Sem endereço configurado, abre o WhatsApp com a mensagem pronta.
  const f = document.getElementById("cf"), out = f.querySelector(".msg"), btn = f.querySelector(".send");
  const CFG = window.ALIEN_CONFIG || {};
  const L = {"req": "Please fill in the required fields (*) and accept the policy.", "sending": "Sending…", "ok": "Message sent! I’ll get back to you soon.", "fail": "Couldn’t send right now. Opening WhatsApp…", "hi": "Hi Pablo! I came from the website form.", "f": ["Name", "Email", "WhatsApp", "Company", "Service", "Budget", "Message"]};
  const say = (t, cls) => { out.textContent = t; out.className = "msg " + (cls || ""); };
  const toWhats = (d) => {
    const lines = [L.hi, "", L.f[0] + ": " + d.nome, L.f[1] + ": " + d.email, d.whatsapp && L.f[2] + ": " + d.whatsapp, d.empresa && L.f[3] + ": " + d.empresa, L.f[4] + ": " + d.servico, L.f[5] + ": " + d.orcamento, "", d.mensagem].filter((x) => x !== undefined && x !== "");
    window.open("https://wa.me/" + (CFG.WHATSAPP || "5516993370772") + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  };
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    if (d.site) return;                                   // robô
    if (!d.nome || !d.email || !/.+@.+\..+/.test(d.email) || !d.mensagem || !f.aceite.checked) return say(L.req, "err");
    window.alienTrack && window.alienTrack("generate_lead", { form: "contato", servico: d.servico });
    if (!CFG.FORM_ENDPOINT) { toWhats(d); return say(L.ok, "good"); }
    btn.disabled = true; say(L.sending);
    try {
      const r = await fetch(CFG.FORM_ENDPOINT, { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ ...d, pagina: location.href, idioma: document.documentElement.lang }) });
      if (!r.ok) throw new Error(r.status);
      f.reset(); say(L.ok, "good");
    } catch (err) { say(L.fail, "err"); toWhats(d); }
    finally { btn.disabled = false; }
  });
})();

