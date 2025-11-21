// Minimal JS for "in-view" fade-up effect and focus helpers.
// No contact form logic (site is static).

(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.card, .title, .section h2, .project, .skill').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

  // small accessibility helper: focus outline for keyboard users
  document.body.addEventListener('keyup', function (e) {
    if (e.key === 'Tab') document.documentElement.classList.add('show-focus');
  });
})();
