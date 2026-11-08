/* Shared behaviour: mobile menu + ScrollCraft mount. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var set = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () { set(!nav.classList.contains('is-open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    window.matchMedia('(min-width: 961px)').addEventListener('change', function () { set(false); });
  }
  if (window.ScrollCraft) {
    var start = function () { window.ScrollCraft.mount(document.body); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(start, start); else start();
  }
})();
