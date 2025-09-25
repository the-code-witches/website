// Intersection Observer for fade-in
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
sections.forEach((s) => observer.observe(s));

// Active link highlight based on scroll position
const links = document.querySelectorAll('.nav__link');

// Cache header height to avoid DOM queries on every scroll
const getHeaderHeight = () => {
  const header = document.querySelector('.site-header');
  return header ? header.offsetHeight : 64; // Fallback to 64px if header not found
};

let cachedHeaderHeight = null;

const getCurrentSectionId = () => {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  
  // Get header height (cached after first call)
  if (cachedHeaderHeight === null) {
    cachedHeaderHeight = getHeaderHeight();
  }
  const headerHeight = cachedHeaderHeight;
  
  // Use intersection-based detection for more accurate results
  let currentSection = 'hero';
  let maxVisibleArea = 0;
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;
    const sectionHeight = rect.height;
    
    // Calculate how much of the section is visible
    const visibleTop = Math.max(sectionTop, headerHeight);
    const visibleBottom = Math.min(sectionBottom, viewportHeight);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
    const visibleRatio = visibleHeight / sectionHeight;
    
    // Section is considered "current" if:
    // 1. It's the most visible section (by area), OR
    // 2. Its top is within the upper portion of the viewport
    if (visibleRatio > 0.3 && visibleHeight > maxVisibleArea) {
      maxVisibleArea = visibleHeight;
      currentSection = section.id;
    } else if (sectionTop <= headerHeight + 50 && sectionBottom > headerHeight + 100) {
      // If section top is near the header, prioritize it
      currentSection = section.id;
    }
  });
  
  return currentSection;
};

let scrollTimeout;
const onScroll = () => {
  // Debounce scroll events to prevent rapid state changes
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const current = getCurrentSectionId();
    // Clear all active states first to prevent multiple active links
    links.forEach((a) => a.classList.remove('active'));
    // Then set the current one
    links.forEach((a) => {
      if (a.getAttribute('href') === '#' + current) {
        a.classList.add('active');
      }
    });
  }, 50); // Small delay to debounce
};

window.addEventListener('scroll', onScroll, { passive: true });

// Recalculate header height on resize (in case it changes with screen size)
window.addEventListener('resize', () => {
  cachedHeaderHeight = null; // Reset cache to force recalculation
}, { passive: true });

onScroll();

// Simple scroll to top of section on nav click
links.forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href')?.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    
    // Clear any existing scroll timeout to prevent conflicts
    clearTimeout(scrollTimeout);
    
    // Immediately update active state for better UX
    links.forEach((link) => link.classList.remove('active'));
    a.classList.add('active');
    
    // Scroll to section (let CSS scroll-snap handle the smooth behavior)
    target.scrollIntoView({ behavior: 'auto', block: 'start' });
    
    // Ensure active state updates after scroll completes
    setTimeout(() => {
      onScroll();
    }, 100); // Short delay since we're using instant scroll now
  });
});

// (Optional) Language toggle scaffold
document.querySelector('.lang-toggle')?.addEventListener('click', () => {
  alert('Language toggle coming soon ✨'); // replace with real i18n if needed
});

// About section image movement on column hover (desktop only)
document.addEventListener('DOMContentLoaded', () => {
  const aboutImage = document.querySelector('.about__image');
  const leftColumn = document.querySelector('.column__left');
  const rightColumn = document.querySelector('.column__right');
  
  if (aboutImage && leftColumn && rightColumn && window.innerWidth >= 768) {
    // When hovering left column, move image to the right
    leftColumn.addEventListener('mouseenter', () => {
      aboutImage.style.transform = 'translateX(0%)';
    });
    
    // When hovering right column, move image to the left
    rightColumn.addEventListener('mouseenter', () => {
      aboutImage.style.transform = 'translateX(-100%)';
    });
    
    // Reset position when not hovering any column
    [leftColumn, rightColumn].forEach(column => {
      column.addEventListener('mouseleave', () => {
        aboutImage.style.transform = 'translateX(-50%)';
      });
    });
  }
});

// Video autoplay handling for mobile devices
document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.gif__box video');
  
  if (video) {
    // Ensure video plays automatically on mobile
    const playVideo = () => {
      video.play().catch(error => {
        console.log('Video autoplay failed:', error);
        // If autoplay fails, try again after user interaction
        document.addEventListener('touchstart', () => {
          video.play().catch(e => console.log('Video play failed:', e));
        }, { once: true });
      });
    };
    
    // Try to play immediately
    playVideo();
    
    // Also try when the video comes into view
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          playVideo();
        }
      });
    }, { threshold: 0.5 });
    
    videoObserver.observe(video);
  }
});
