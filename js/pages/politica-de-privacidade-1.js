(() => { const e = (window.ALIEN_CONFIG || {}).EMAIL; if (e) document.querySelectorAll("[data-email]").forEach((s) => { s.innerHTML = " / <a href=\"mailto:" + e + "\">" + e + "</a>"; }); })();
