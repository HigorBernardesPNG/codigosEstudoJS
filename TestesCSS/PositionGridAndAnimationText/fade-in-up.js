const elementos = document.querySelectorAll('.hero-title');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // adiciona só a classe "box"
      entry.target.classList.add('animationViewer');

      // anima só uma vez
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));
