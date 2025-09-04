// Intersection Observer for fade-in
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
sections.forEach((s) => observer.observe(s));

// Active link highlight on scroll
const links = document.querySelectorAll('.nav__link');
const sectionMap = [...sections].reduce((acc, s) => (acc[s.id] = s, acc), {});

const onScroll = () => {
  const pos = window.scrollY + 90; // header offset
  let current = 'hero';
  for (const id in sectionMap) {
    const el = sectionMap[id];
    if (el.offsetTop <= pos) current = id;
  }
  links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// (Optional) Language toggle scaffold
document.querySelector('.lang-toggle')?.addEventListener('click', () => {
  alert('Language toggle coming soon ✨'); // replace with real i18n if needed
});
