// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Subtle reveal-on-scroll for sections
const revealEls = document.querySelectorAll('.section, .stats');
if ('IntersectionObserver' in window) {
  revealEls.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
}
