
(() => {
  const v = document.getElementById("film");
  const b = document.getElementById("playBtn");
  const player = v.parentElement;
  if (Number(player.dataset.w) === Number(player.dataset.h)) player.classList.add("square");
  const PAUSE = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="3.5" y="3" width="3" height="10" rx="1"/><rect x="9.5" y="3" width="3" height="10" rx="1"/></svg><span>Pause</span>';
  const PLAY = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4.5 2.8v10.4L13 8z"/></svg><span>Play</span>';
  const sync = () => { const on = !v.paused; b.innerHTML = on ? PAUSE : PLAY; b.setAttribute("aria-pressed", String(on)); };
  b.addEventListener("click", () => (v.paused ? v.play() : v.pause()));
  v.addEventListener("click", () => (v.paused ? v.play() : v.pause()));
  v.addEventListener("play", sync); v.addEventListener("pause", sync);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) v.pause();
  sync();
})();

