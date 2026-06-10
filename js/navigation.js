/* StateFlow International Gateway JS - public demo cleanup
Static prototype only. No API calls. No user data collection.
*/
(function () {
  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-mobile-nav]');

  if (!menuButton || !nav) return;

  function setMenu(open) {
    nav.setAttribute('data-open', open ? 'true' : 'false');
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  menuButton.addEventListener('click', function () {
    const open = nav.getAttribute('data-open') === 'true';
    setMenu(!open);
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setMenu(false);
    });
  });
})();
