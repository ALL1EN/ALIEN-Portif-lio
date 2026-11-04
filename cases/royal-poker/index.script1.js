
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var NS = "http://www.w3.org/2000/svg";
  function el(tag, attrs, parent) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }

  /* ---------- traced logo ---------- */
  Promise.resolve().then(function () { return JSON.parse(document.getElementById("traceData").textContent); }).then(function (T) {
    // hero
    var hero = document.getElementById("heroLogo");
    T.paths.forEach(function (d) { el("path", { d: d, class: "k", pathLength: 1 }, hero); });
    el("path", { d: T.crown[0], class: "gd", pathLength: 1 }, hero);
    // construction
    var svg = document.getElementById("consSvg");
    var gF = svg.querySelector(".fill"), gO = svg.querySelector(".outline"), gA = svg.querySelector(".anc");
    T.paths.forEach(function (d) { el("path", { d: d, class: "k" }, gF); });
    el("path", { d: T.crown[0], class: "gd" }, gF);
    T.paths.concat(T.crown).forEach(function (d) { el("path", { d: d, pathLength: 1 }, gO); });
    T.pts.forEach(function (p, i) { var r = el("rect", { x: p[0] - 7, y: p[1] - 7, width: 14, height: 14 }, gA); r.style.setProperty("--i", i); r.style.transformOrigin = p[0] + "px " + p[1] + "px"; r.style.transformBox = "view-box"; });
    // zoomed symbol
    var z = document.getElementById("zoomR");
    [T.crown[0], T.paths[0]].forEach(function (d) { el("path", { d: d }, z); });
    T.pts.filter(function (p) { return p[0] < 810; }).forEach(function (p) { el("rect", { x: p[0] - 4, y: p[1] - 4, width: 8, height: 8 }, z); });
  }).catch(function () {
    var hero = document.getElementById("heroLogo");
    hero.outerHTML = '<img src="a/logo-eps-light.svg" alt="Royal Poker" style="width:min(84%,1040px)">';
  });
  if (!reduce) document.documentElement.classList.add("anim");

  /* ---------- marquee ---------- */
  var lines = ["The table belongs to royalty", "Prove your worth", "Only one becomes king", "The game evolved", "Did you?"];
  var suits = ["spade", "club", "heart", "diamond"];
  function fill(id, offset) {
    var t = document.getElementById(id), html = "";
    for (var r = 0; r < 2; r++) lines.forEach(function (l, i) {
      var cls = (i + offset) % 3 === 0 ? "o" : ((i + offset) % 3 === 1 ? "" : "gg");
      html += '<span><b class="' + cls + '" style="font-weight:inherit">' + l + '</b><svg viewBox="0 0 100 100"><use href="#' + suits[(i + offset) % 4] + '"/></svg></span>';
    });
    t.innerHTML = html;
  }
  fill("mq1", 0); fill("mq2", 1);

  /* ---------- phone apps ---------- */
  var apps = document.getElementById("apps"), ah = "";
  for (var i = 0; i < 16; i++) ah += i === 5 ? '<div class="ap rp"><div class="ic"><img src="a/symbol-eps-light.svg" alt=""></div><span>Royal Poker</span></div>' : '<div class="ap"><div class="ic"></div><span>&nbsp;</span></div>';
  apps.innerHTML = ah;

  /* ---------- colors ---------- */
  var colors = [
    { n: "Deep Wine", h: "#420C12", rgb: "66 12 18", cmyk: "0 82 73 74", fg: "#EDE8D9", cls: "big", c: "radial-gradient(120% 100% at 20% 0%, #6B1622, #420C12 55%, #2A0709)", why: "The throne's velvet. The brand's main color, from surfaces to tables." },
    { n: "Crown Gold", h: "#F5AD24", rgb: "245 173 36", cmyk: "0 29 85 4", fg: "#241411", c: "linear-gradient(180deg,#FDD009,#F5AD24 55%,#F19530)", why: "The prize. Crown, keywords and CTAs. Gradient from #FDD009 to #F19530." },
    { n: "Parchment", h: "#EDE8D9", rgb: "237 232 217", cmyk: "0 2 8 7", fg: "#420C12", c: "#EDE8D9", why: "Headline color. Old paper, never pure white." },
    { n: "Wine Night", h: "#1A0405", rgb: "26 4 5", cmyk: "0 85 81 90", fg: "#C49547", c: "#1A0405", why: "The background of everything. A black with wine in its blood." },
    { n: "Old Gold", h: "#C49547", rgb: "196 149 71", cmyk: "0 24 64 23", fg: "#1A0405", c: "#C49547", why: "Lines, ornaments and the card back." },
    { n: "Graphite", h: "#383837", rgb: "56 56 55", cmyk: "0 0 2 78", fg: "#EDE8D9", cls: "wide2", c: "#383837", why: "Logo on light backgrounds." }
  ];
  var bento = document.getElementById("bento"), toast = document.getElementById("toast"), tt;
  colors.forEach(function (c, i) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "sw rv " + (c.cls || ""); b.setAttribute("data-reveal", ""); b.style.setProperty("--d", i);
    b.style.setProperty("--c", c.c); b.style.setProperty("--fg", c.fg);
    b.setAttribute("aria-label", c.n + ", " + c.h + ". Copiar HEX");
    b.innerHTML = '<span class="copy">Copy</span><span><span class="nm">' + c.n + '</span><br><span class="codes">' + c.h + '<br>RGB ' + c.rgb + '<br>CMYK ' + c.cmyk + '</span></span><span class="why">' + c.why + '</span>';
    b.addEventListener("click", function () {
      var show = function (m) { toast.textContent = m; toast.classList.add("show"); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove("show"); }, 1600); };
      try { navigator.clipboard.writeText(c.h).then(function () { show(c.h + " copiado"); }, function () { show(c.h); }); } catch (e) { show(c.h); }
    });
    bento.appendChild(b);
  });

  /* ---------- posts ---------- */
  var P = [["a/post-hands.webp", "Post The game starts in your hands"], ["a/post-king.webp", "Post Only one becomes King"], ["a/post-evolved.webp", "Post The game evolved, Did you?"]];
  var acts = '<button type="button" aria-label="Like"><svg viewBox="0 0 24 24" class="heart"><path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3.2 5 6.6 5c2 0 3.4 1.1 5.4 3.2C14 6.1 15.4 5 17.4 5c3.4 0 5.4 3.6 4.1 6.8C19.5 16.4 12 21 12 21z"/></svg></button>' +
    '<button type="button" aria-label="Comment"><svg viewBox="0 0 24 24"><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z"/></svg></button>' +
    '<button type="button" aria-label="Share"><svg viewBox="0 0 24 24"><path d="M22 3 11 14M22 3l-7 19-4-8-8-4z"/></svg></button>' +
    '<button type="button" class="sv" aria-label="Save"><svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z"/></svg></button>';
  var posts = document.getElementById("posts");
  P.forEach(function (p, i) {
    var f = document.createElement("figure");
    f.className = "post rv"; f.setAttribute("data-reveal", ""); f.style.setProperty("--d", i);
    f.innerHTML = '<div class="im" data-tilt><img src="' + p[0] + '" alt="' + p[1] + '" width="900" height="1125"></div><div class="acts">' + acts + '</div>';
    posts.appendChild(f);
  });
  posts.addEventListener("click", function (e) {
    var b = e.target.closest("button[aria-label='Like']"); if (!b) return;
    var h = b.querySelector(".heart"); var on = h.getAttribute("data-off") !== "1";
    h.setAttribute("data-off", on ? "1" : "0"); h.style.fill = on ? "none" : ""; h.style.stroke = on ? "#EDE8D9" : "";
  });


  /* ---------- teaser player ---------- */
  var v = document.getElementById("teaser"), pb = document.getElementById("playBtn"), sb = document.getElementById("soundBtn"), bar = document.getElementById("pbar"), pctl = document.querySelector(".pctl");
  if (reduce) { v.removeAttribute("autoplay"); v.pause(); pb.classList.add("paused"); pb.setAttribute("aria-label", "Play video"); }
  pb.addEventListener("click", function () {
    if (v.paused) { v.play(); pb.classList.remove("paused"); pb.setAttribute("aria-label", "Pause video"); }
    else { v.pause(); pb.classList.add("paused"); pb.setAttribute("aria-label", "Play video"); }
  });
  sb.addEventListener("click", function () {
    v.muted = !v.muted;
    if (!v.muted) { if (v.paused) { v.play(); pb.classList.remove("paused"); } v.currentTime = 0; }
    sb.classList.toggle("on", !v.muted); sb.querySelector("span").textContent = v.muted ? "Turn on sound" : "Sound on";
  });
  v.addEventListener("timeupdate", function () { if (v.duration) bar.style.transform = "scaleX(" + (v.currentTime / v.duration) + ")"; });
  var idleT; v.parentNode.addEventListener("pointermove", function () { pctl.classList.remove("idle"); clearTimeout(idleT); idleT = setTimeout(function () { pctl.classList.add("idle"); }, 2500); });
  if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { es.forEach(function (e) { if (!e.isIntersecting && !v.paused && v.muted === false) { v.pause(); pb.classList.add("paused"); } }); }, { threshold: 0.2 }).observe(v);


  /* ---------- cards ---------- */
  var R = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"], S = ["s","h","d","c"];
  var V = { A: 14, K: 13, Q: 12, J: 11 };
  function val(r) { return V[r] || +r; }
  var deck = []; S.forEach(function (s) { R.forEach(function (r) { deck.push(s + r); }); });
  var hand = document.getElementById("hand"), hn = document.getElementById("handName"), db = document.getElementById("dealBtn");
  var slots = [];
  var start = ["sA","sK","sQ","sJ","s10"];
  start.forEach(function (c, i) {
    var p = document.createElement("div"); p.className = "pc win"; p.style.setProperty("--r", ((i - 2) * 2) + "deg");
    p.innerHTML = '<div class="in2"><div class="face f"><img alt="" src="a/cards/' + c + '.webp"></div><div class="face b"><img alt="" src="a/cards/back.webp"></div></div>';
    p.setAttribute("role", "img"); p.setAttribute("aria-label", c);
    p.addEventListener("click", function () { p.classList.toggle("down"); });
    hand.appendChild(p); slots.push(p);
  });
  function evaluate(cs) {
    var vals = cs.map(function (c) { return val(c.slice(1)); }).sort(function (a, b) { return b - a; });
    var suits = cs.map(function (c) { return c[0]; });
    var flush = suits.every(function (x) { return x === suits[0]; });
    var uniq = vals.filter(function (v, i) { return vals.indexOf(v) === i; });
    var straight = uniq.length === 5 && (vals[0] - vals[4] === 4 || vals.join() === "14,5,4,3,2");
    var cnt = {}; vals.forEach(function (v) { cnt[v] = (cnt[v] || 0) + 1; });
    var g = Object.keys(cnt).map(function (k) { return cnt[k]; }).sort(function (a, b) { return b - a; });
    if (straight && flush) return vals[0] === 14 && vals[4] === 10 ? "Royal Flush" : "Straight Flush";
    if (g[0] === 4) return "Four of a Kind";
    if (g[0] === 3 && g[1] === 2) return "Full House";
    if (flush) return "Flush";
    if (straight) return "Straight";
    if (g[0] === 3) return "Three of a Kind";
    if (g[0] === 2 && g[1] === 2) return "Two Pair";
    if (g[0] === 2) return "Pair";
    return "High Card";
  }
  var busy = false;
  db.addEventListener("click", function () {
    if (busy) return; busy = true;
    var d = deck.slice(); for (var i = d.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = d[i]; d[i] = d[j]; d[j] = t; }
    var pick = d.slice(0, 5);
    var name = evaluate(pick);
    slots.forEach(function (p, i) { setTimeout(function () { p.classList.remove("win"); p.classList.add("down"); }, i * 70); });
    setTimeout(function () {
      slots.forEach(function (p, i) {
        p.querySelector(".f img").src = "a/cards/" + pick[i] + ".webp"; p.setAttribute("aria-label", pick[i]);
        setTimeout(function () { p.classList.remove("down"); }, 200 + i * 160);
      });
      setTimeout(function () {
        hn.textContent = name; hn.classList.remove("pop"); void hn.offsetWidth; hn.classList.add("pop");
        if (name !== "Carta alta") slots.forEach(function (p) { p.classList.add("win"); });
        busy = false;
      }, 200 + 5 * 160 + 500);
    }, reduce ? 0 : 900);
  });
  function row(id, list) { var r = document.getElementById(id), h = ""; for (var k = 0; k < 2; k++) list.forEach(function (c) { h += '<img loading="lazy" alt="" src="a/cards/' + c + '.webp">'; }); r.innerHTML = h; }
  var top = ["back","joker-gold"].concat(R.map(function (r) { return "d" + r; }), R.map(function (r) { return "h" + r; }));
  var bot = ["joker-silver","back"].concat(R.map(function (r) { return "s" + r; }), R.map(function (r) { return "c" + r; }));
  row("dr1", top); row("dr2", bot);

  /* ---------- construction toggle ---------- */
  var cons = document.getElementById("cons");
  document.querySelectorAll(".seg button").forEach(function (b) {
    b.addEventListener("click", function () {
      cons.setAttribute("data-mode", b.getAttribute("data-mode"));
      document.querySelectorAll(".seg button").forEach(function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
    });
  });

  /* ---------- weight slider ---------- */
  var w = document.getElementById("wght"), wo = document.getElementById("wout"), ws = document.getElementById("wsample");
  w.addEventListener("input", function () { ws.style.fontWeight = w.value; wo.textContent = w.value; });

  /* ---------- reveal ---------- */
  var vh = window.innerHeight;
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (!reduce && "IntersectionObserver" in window) {
    items.forEach(function (n) { if (n.getBoundingClientRect().top > vh * 0.92) n.classList.add("pre"); });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove("pre"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    items.forEach(function (n) { if (n.classList.contains("pre")) io.observe(n); });

    // one-shot draw animations + counters
    var once = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var n = e.target; once.unobserve(n);
        if (n.id === "cons") n.classList.add("drawing");
        if (n.hasAttribute("data-count")) {
          var to = +n.getAttribute("data-count"), suf = n.getAttribute("data-suffix") || "", t0 = performance.now();
          (function tick(now) { var k = Math.min(1, (now - t0) / 1400); k = 1 - Math.pow(1 - k, 3); n.textContent = Math.round(to * k) + suf; if (k < 1) requestAnimationFrame(tick); })(t0);
        }
      });
    }, { threshold: 0.3 });
    [document.getElementById("cons")].forEach(function (n) { if (n.getBoundingClientRect().top > vh * 0.8) once.observe(n); });
    document.querySelectorAll("[data-count]").forEach(function (n) { if (n.getBoundingClientRect().top > vh) { n.textContent = "0" + (n.getAttribute("data-suffix") || ""); once.observe(n); } });
  }

  /* ---------- scroll: progress, parallax ---------- */
  var prog = document.getElementById("progress"), pars = document.querySelectorAll("[data-par]"), ticking = false;
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.setProperty("--p", h > 0 ? window.scrollY / h : 0);
    if (!reduce) {
      pars.forEach(function (p) { var r = p.parentNode.getBoundingClientRect(); var off = (r.top + r.height / 2 - window.innerHeight / 2) * +p.getAttribute("data-par"); p.style.translate = "0 " + off.toFixed(1) + "px"; });
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- pointer: spotlight + tilt ---------- */
  if (!reduce && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".board").forEach(function (b) {
      b.addEventListener("pointermove", function (e) { var r = b.getBoundingClientRect(); b.style.setProperty("--mx", (e.clientX - r.left) + "px"); b.style.setProperty("--my", (e.clientY - r.top) + "px"); });
    });
    document.addEventListener("pointermove", function (e) {
      var tEl = e.target.closest && e.target.closest("[data-tilt]");
      document.querySelectorAll("[data-tilt].tilting").forEach(function (o) { if (o !== tEl) { o.classList.remove("tilting"); o.style.transform = ""; } });
      if (!tEl) return;
      var r = tEl.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      tEl.classList.add("tilting");
      tEl.style.transform = "perspective(900px) rotateY(" + (x * 14).toFixed(2) + "deg) rotateX(" + (-y * 14).toFixed(2) + "deg) translateZ(10px)";
    });
  }

  document.getElementById("top").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });
})();

