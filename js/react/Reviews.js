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

  function Reviews() {
    var state = React.useState(null);
    var open = state[0];
    var setOpen = state[1];
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
