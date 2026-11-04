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
    return h("div", { className: "rv-stars", "aria-label": data.starsLabel },
      h("svg", { viewBox: "0 0 24 24", "aria-hidden": "true" }, h("path", { d: STAR })),
      h("span", null, "5.0"));
  }

  function ReviewCard(props) {
    var r = props.review;
    return h("article", { className: "rv-card" + (r.dark ? " is-dark" : ""), style: { "--rd": r.delay } },
      h("span", { className: "rv-av", "aria-hidden": "true" }, r.initials),
      h("div", { className: "rv-body" },
        h("h3", { className: "rv-name" }, r.name),
        h("p", { className: "rv-role" }, r.role),
        h("p", { className: "rv-quote" }, r.quote),
        h(Stars)));
  }

  function Reviews() {
    return h(React.Fragment, null, data.items.map(function (r) {
      return h(ReviewCard, { key: r.name, review: r });
    }));
  }

  /* flushSync: os cartões precisam existir antes dos próximos scripts da página. */
  ReactDOM.flushSync(function () {
    ReactDOM.createRoot(root).render(h(Reviews));
  });
})();
