
      (function () {
        var h = document.documentElement;
        h.classList.add('js');
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          h.classList.add('js-motion');
          setTimeout(function () {
            if (!window.__movimentoOk) h.classList.remove('js-motion');
          }, 8000);
        }
      })();
    
