// Smooth scrolling for navigation buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission handler (demo mode)
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for your request! We will contact you shortly.');
  form.reset();
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});
