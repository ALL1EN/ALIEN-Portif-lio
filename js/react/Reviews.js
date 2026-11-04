/* Seção de depoimentos em React.
   Os textos ficam em js/data/reviews.pt.js e js/data/reviews.en.js.
   Usa React.createElement porque o site é publicado sem etapa de build (sem JSX). */
(function () {
  var data = window.ALIEN_REVIEWS;
  var root = document.getElementById("reviewsRoot");
  if (!data || !root || !window.React || !window.ReactDOM) return;

  var h = React.createElement;
  var STAR = "M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z";

  function Stars() {
    return h("span", { className: "rv-stars", role: "img", "aria-label": data.starsLabel },
      h("svg", { viewBox: "0 0 24 24", "aria-hidden": "true" }, h("path", { d: STAR })),
      h("span", null, "5.0"));
  }

  function ReviewCard(props) {
    var r = props.review;
    return h("button", {
        type: "button",
        className: "rv-card",
        style: { "--rd": r.delay },
        "aria-haspopup": "dialog",
        "aria-label": r.name + ", " + r.role + ". " + data.more,
        onClick: props.onOpen
      },
      h("span", { className: "rv-av", "aria-hidden": "true" }, r.initials),
      h("span", { className: "rv-body" },
        h("span", { className: "rv-name" }, r.name),
        h("span", { className: "rv-role" }, r.role)));
  }

  function ReviewDialog(props) {
    var ref = React.useRef(null);
    var r = props.review;

    React.useEffect(function () {
      var dialog = ref.current;
      if (r && !dialog.open) dialog.showModal();
      if (!r && dialog.open) dialog.close();
    }, [r]);

    return h("dialog", {
        ref: ref,
        className: "rv-dlg",
        "aria-label": r ? r.name : undefined,
        onClose: props.onClose,
        onClick: function (e) { if (e.target === ref.current) props.onClose(); }
      },
      r && h("div", { className: "rv-dlg-in" },
        h("button", { type: "button", className: "rv-dlg-x", "aria-label": data.close, onClick: props.onClose }, "×"),
        h("p", { className: "rv-dlg-name" }, r.name),
        h("p", { className: "rv-dlg-role" }, r.role),
        h("p", { className: "rv-dlg-quote" }, r.quote),
        h(Stars)));
  }

  /* Interação: o mouse ou o dedo empurra os cards, que se espalham e ficam onde pararam.
     Também dá para arrastar um card. O deslocamento vai em margin porque
     translate e rotate são usados pela flutuação. */
  function useCardPhysics() {
    React.useEffect(function () {
      var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var cards = Array.prototype.slice.call(root.querySelectorAll(".rv-card")).map(function (el) {
        return { el: el, ox: 0, oy: 0, vx: 0, vy: 0 };
      });
      var pointer = null, drag = null, skipClick = false, raf = 0, z = 30;
      var awakeUntil = 0, driftTimer = 0;

      function apply(c) {
        c.el.style.marginLeft = c.ox.toFixed(1) + "px";
        c.el.style.marginTop = c.oy.toFixed(1) + "px";
      }
      /* Pausa a flutuação por um tempo para os cards não voltarem a se cobrir logo. */
      function spread() {
        awakeUntil = performance.now() + 2800;
        root.classList.add("is-spread");
        clearTimeout(driftTimer);
        driftTimer = setTimeout(function () { root.classList.remove("is-spread"); }, 8000);
        if (!raf) raf = requestAnimationFrame(tick);
      }
      function tick() {
        raf = 0;
        var now = performance.now();
        var small = window.innerWidth < 810;
        var radius = small ? 130 : 210;
        var force = small ? 3.2 : 4.2;
        var g = root.getBoundingClientRect();
        var rects = cards.map(function (c) { return c.el.getBoundingClientRect(); });
        var fresh = pointer && now - pointer.t < 140;

        cards.forEach(function (c, i) {
          var r = rects[i];
          if (fresh && c !== (drag && drag.card) && c.el !== pointer.over) {
            var dx = r.left + r.width / 2 - pointer.x;
            var dy = r.top + r.height / 2 - pointer.y;
            var d = Math.sqrt(dx * dx + dy * dy) || 1;
            if (d < radius) {
              c.vx += dx / d * (1 - d / radius) * force;
              c.vy += dy / d * (1 - d / radius) * force;
            }
          }
          /* Cards sobrepostos se afastam um do outro. */
          if (now < awakeUntil) {
            for (var j = i + 1; j < cards.length; j++) {
              var o = rects[j];
              var ox = Math.min(r.right, o.right) - Math.max(r.left, o.left);
              var oy = Math.min(r.bottom, o.bottom) - Math.max(r.top, o.top);
              if (ox > 0 && oy > 0) {
                var sx = (r.left + r.right) < (o.left + o.right) ? -1 : 1;
                var sy = (r.top + r.bottom) < (o.top + o.bottom) ? -1 : 1;
                var pushX = ox < oy ? 1 : 0.2, pushY = ox < oy ? 0.2 : 1;
                c.vx += sx * pushX; c.vy += sy * pushY;
                cards[j].vx -= sx * pushX; cards[j].vy -= sy * pushY;
              }
            }
          }
        });

        var moving = false;
        cards.forEach(function (c, i) {
          if (drag && c === drag.card) { c.vx = c.vy = 0; return; }
          c.vx *= 0.9; c.vy *= 0.9;
          if (Math.abs(c.vx) + Math.abs(c.vy) < 0.04) { c.vx = c.vy = 0; return; }
          moving = true;
          c.ox += c.vx; c.oy += c.vy;
          /* Os cards ricocheteiam nas bordas da seção. */
          var r = rects[i];
          if (r.left + c.vx < g.left) { c.ox += g.left - r.left; c.vx = Math.abs(c.vx) * 0.6; }
          if (r.right + c.vx > g.right) { c.ox -= r.right - g.right; c.vx = -Math.abs(c.vx) * 0.6; }
          if (r.top + c.vy < g.top) { c.oy += g.top - r.top; c.vy = Math.abs(c.vy) * 0.6; }
          if (r.bottom + c.vy > g.bottom) { c.oy -= r.bottom - g.bottom; c.vy = -Math.abs(c.vy) * 0.6; }
          apply(c);
        });
        if (moving || fresh || now < awakeUntil) raf = requestAnimationFrame(tick);
      }
      function inDialog(e) { return e.target.closest && e.target.closest(".rv-dlg"); }
      function touchAt(x, y, over) {
        pointer = { x: x, y: y, over: over || null, t: performance.now() };
        if (!calm) spread();
      }

      function onDown(e) {
        if (inDialog(e) || e.button > 0) return;
        var el = e.target.closest(".rv-card");
        if (e.pointerType !== "mouse") touchAt(e.clientX, e.clientY, el);
        if (!el) return;
        var card = cards.filter(function (c) { return c.el === el; })[0];
        drag = { card: card, x: e.clientX, y: e.clientY, ox: card.ox, oy: card.oy, moved: false };
        el.setPointerCapture(e.pointerId);
        el.classList.add("is-drag");
        el.style.zIndex = ++z;
        skipClick = false;
      }
      function onMove(e) {
        if (inDialog(e)) return;
        var over = e.target.closest ? e.target.closest(".rv-card") : null;
        touchAt(e.clientX, e.clientY, over);
        if (drag) {
          var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
          if (Math.abs(dx) + Math.abs(dy) > 6) drag.moved = true;
          var card = drag.card;
          card.ox = drag.ox + dx;
          card.oy = drag.oy + dy;
          apply(card);
          /* não deixa o card sair da área da seção */
          var g = root.getBoundingClientRect(), b = card.el.getBoundingClientRect();
          if (b.left < g.left) card.ox += g.left - b.left;
          if (b.right > g.right) card.ox -= b.right - g.right;
          if (b.top < g.top) card.oy += g.top - b.top;
          if (b.bottom > g.bottom) card.oy -= b.bottom - g.bottom;
          apply(card);
        }
      }
      function onUp() {
        if (drag) {
          drag.card.el.classList.remove("is-drag");
          skipClick = drag.moved;
          drag = null;
        }
      }
      /* Mesmo quando o dedo está rolando a página, ele empurra os cards por onde passa. */
      function onTouchMove(e) {
        if (drag || inDialog(e) || !e.touches[0]) return;
        touchAt(e.touches[0].clientX, e.touches[0].clientY);
      }
      function onClick(e) {
        if (skipClick && e.target.closest(".rv-card")) { e.preventDefault(); e.stopPropagation(); }
        skipClick = false;
      }

      root.addEventListener("pointerdown", onDown);
      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerup", onUp);
      root.addEventListener("pointercancel", onUp);
      root.addEventListener("touchmove", onTouchMove, { passive: true });
      root.addEventListener("click", onClick, true);
      return function () { cancelAnimationFrame(raf); clearTimeout(driftTimer); };
    }, []);
  }

  function Reviews() {
    var state = React.useState(null);
    var open = state[0];
    var setOpen = state[1];
    useCardPhysics();
    return h(React.Fragment, null,
      data.items.map(function (r, i) {
        return h(ReviewCard, { key: r.name, review: r, onOpen: function () { setOpen(i); } });
      }),
      h(ReviewDialog, { review: open === null ? null : data.items[open], onClose: function () { setOpen(null); } }));
  }

  /* flushSync: os cartões precisam existir antes dos próximos scripts da página. */
  ReactDOM.flushSync(function () {
    ReactDOM.createRoot(root).render(h(Reviews));
  });
})();
