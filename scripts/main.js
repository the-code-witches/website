// Intersection Observer for fade-in
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
sections.forEach((s) => observer.observe(s));

// Active link highlight based on viewport center
const links = document.querySelectorAll('.nav__link');
const sectionMap = [...sections].reduce((acc, s) => (acc[s.id] = s, acc), {});

const getCurrentSectionId = () => {
  const viewportCenter = window.scrollY + window.innerHeight / 2;
  let bestId = 'hero';
  let smallestDistance = Infinity;
  for (const id in sectionMap) {
    const el = sectionMap[id];
    const elCenter = el.offsetTop + el.offsetHeight / 2;
    const d = Math.abs(elCenter - viewportCenter);
    if (d < smallestDistance) { smallestDistance = d; bestId = id; }
  }
  return bestId;
};

const onScroll = () => {
  const current = getCurrentSectionId();
  links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Centered scroll on nav click
links.forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href')?.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    target.scrollIntoView({ behavior: 'auto', block: 'center' });
    // ensure active state updates after scroll
    setTimeout(onScroll, 0);
  });
});

// (Optional) Language toggle scaffold
document.querySelector('.lang-toggle')?.addEventListener('click', () => {
  alert('Language toggle coming soon ✨'); // replace with real i18n if needed
});
