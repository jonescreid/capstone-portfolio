// Fade-up on scroll
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.about-copy, .about-sidebar, .info-card, .looking-copy, .looking-quote, ' +
    '.goal-card, .exp-copy, .exp-sidebar, .connection-inner, ' +
    '.extras-copy, .resume-highlights, .project-copy, .project-sidebar, .gallery-slot'
  );

  targets.forEach(el => el.classList.add('fade-up'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));

  // Stagger goal cards
  document.querySelectorAll('.goal-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });

  // Stagger gallery
  document.querySelectorAll('.gallery-slot').forEach((slot, i) => {
    slot.style.transitionDelay = `${i * 0.06}s`;
  });
});
