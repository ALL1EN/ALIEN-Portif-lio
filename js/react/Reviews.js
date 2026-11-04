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

  /* Interação: arrastar um card e afastar os vizinhos do mouse ou do dedo.
     O deslocamento vai em margin porque translate e rotate são usados pela flutuação. */
  function useCardPhysics() {
    React.useEffect(function () {
      var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var cards = Array.prototype.slice.call(root.querySelectorAll(".rv-card")).map(function (el) {
        return { el: el, ox: 0, oy: 0, px: 0, py: 0 };
      });
      var pointer = null, drag = null, skipClick = false, raf = 0, z = 30;

      function tick() {
        raf = 0;
        var moving = false;
        var radius = window.innerWidth < 810 ? 120 : 190;
        var force = window.innerWidth < 810 ? 70 : 110;
        cards.forEach(function (c) {
          var tx = 0, ty = 0;
          if (pointer && !calm && c !== (drag && drag.card) && c.el !== pointer.over) {
            var b = c.el.getBoundingClientRect();
            var dx = b.left + b.width / 2 - pointer.x;
            var dy = b.top + b.height / 2 - pointer.y;
            var d = Math.sqrt(dx * dx + dy * dy) || 1;
            if (d < radius) {
              tx = dx / d * (1 - d / radius) * force;
              ty = dy / d * (1 - d / radius) * force;
            }
          }
          c.px += (tx - c.px) * 0.14;
          c.py += (ty - c.py) * 0.14;
          if (Math.abs(tx - c.px) > 0.3 || Math.abs(ty - c.py) > 0.3) moving = true;
          c.el.style.marginLeft = (c.ox + c.px).toFixed(1) + "px";
          c.el.style.marginTop = (c.oy + c.py).toFixed(1) + "px";
        });
        if (moving || pointer) raf = requestAnimationFrame(tick);
      }
      function wake() { if (!raf) raf = requestAnimationFrame(tick); }
      function inDialog(e) { return e.target.closest && e.target.closest(".rv-dlg"); }

      function onDown(e) {
        if (inDialog(e) || e.button > 0) return;
        var el = e.target.closest(".rv-card");
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
        pointer = { x: e.clientX, y: e.clientY, over: over };
        if (drag) {
          var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
          if (Math.abs(dx) + Math.abs(dy) > 6) drag.moved = true;
          var card = drag.card;
          var prevX = card.ox, prevY = card.oy;
          card.ox = drag.ox + dx;
          card.oy = drag.oy + dy;
          card.el.style.marginLeft = (card.ox + card.px).toFixed(1) + "px";
          card.el.style.marginTop = (card.oy + card.py).toFixed(1) + "px";
          /* não deixa o card sair da área da seção */
          var g = root.getBoundingClientRect(), b = card.el.getBoundingClientRect();
          if (b.left < g.left || b.right > g.right) card.ox = prevX;
          if (b.top < g.top || b.bottom > g.bottom) card.oy = prevY;
        }
        wake();
      }
      function onUp() {
        if (drag) {
          drag.card.el.classList.remove("is-drag");
          skipClick = drag.moved;
          drag = null;
        }
      }
      function onLeave() { if (!drag) { pointer = null; wake(); } }
      function onTouchEnd(e) { if (e.pointerType !== "mouse") { pointer = null; wake(); } }
      function onClick(e) {
        if (skipClick && e.target.closest(".rv-card")) { e.preventDefault(); e.stopPropagation(); }
        skipClick = false;
      }

      root.addEventListener("pointerdown", onDown);
      root.addEventListener("pointermove", onMove);
      root.addEventListener("pointerup", onUp);
      root.addEventListener("pointercancel", onUp);
      root.addEventListener("pointerup", onTouchEnd);
      root.addEventListener("pointercancel", onTouchEnd);
      root.addEventListener("pointerleave", onLeave);
      root.addEventListener("click", onClick, true);
      return function () { cancelAnimationFrame(raf); };
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
