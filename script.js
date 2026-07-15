// Slide-in drawer navigation
(function () {
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');
  if (!toggle || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }
  function toggleDrawer() {
    drawer.classList.contains('open') ? closeDrawer() : openDrawer();
  }

  toggle.addEventListener('click', toggleDrawer);
  overlay.addEventListener('click', closeDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  // Highlight the link for the current page
  const here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.drawer-links a').forEach(function (a) {
    const target = a.getAttribute('href');
    if (target === here || (here === 'index.html' && target === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// FAQ - instant toggle (bez animacija)
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const open = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-sign').textContent = '+';
  });
  if (!open) {
    item.classList.add('open');
    item.querySelector('.faq-sign').textContent = '–';
  }
}

// Obrazac za prijavu - potvrda bez pop-upa.
// NAPOMENA: povezati s backendom / e-mail servisom (npr. Formspree, EmailJS, vlastiti API).
function submitForm(e) {
  e.preventDefault();
  const card = document.getElementById('formCard');
  card.innerHTML =
    '<div class="form-done">' +
    '<div class="mark">✓</div>' +
    '<h3>Prijava zaprimljena!</h3>' +
    '<p>Hvala ti. Javljam ti se u najkraćem roku na dogovor besplatnih konzultacija.</p>' +
    '</div>';
  return false;
}
