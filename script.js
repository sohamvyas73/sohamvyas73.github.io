// Typed text animation
const phrases = [
  'AI Engineer',
  'LLM Systems Architect',
  'DocumentAI Builder',
  'Healthcare AI Developer',
  'Research & Patent Holder',
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const el = document.getElementById('typed');

function type() {
  const current = phrases[phraseIdx];
  if (deleting) {
    el.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
    setTimeout(type, 60);
  } else {
    el.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) { deleting = true; setTimeout(type, 1800); return; }
    setTimeout(type, 80);
  }
}
type();

// Navbar scroll style
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(13,17,23,0.97)'
    : 'rgba(13,17,23,0.85)';
});

// Mobile hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Scroll fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.timeline-card, .project-card, .patent-card, .pub-card, .edu-card, .stat-card, .skill-group'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});
