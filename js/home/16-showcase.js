/* Anima a entrada da seção de projetos só uma vez. */
(()=>{const e=document.getElementById("vitrine");if(!e)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return void e.classList.add("is-in");const o=new IntersectionObserver(s=>{s.forEach(s=>{s.isIntersecting&&(e.classList.add("is-in"),o.disconnect())})},{threshold:0,rootMargin:"0px 0px -35% 0px"});o.observe(e)})()
