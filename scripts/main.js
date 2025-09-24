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

const getCurrentSectionId = () => {
  const scrollY = window.scrollY;
  const offset = 100; // Small offset to account for header
  
  // Find the section that's currently at the top of the viewport
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section.offsetTop <= scrollY + offset) {
      return section.id;
    }
  }
  return 'hero'; // Default to hero if at very top
};

const onScroll = () => {
  const current = getCurrentSectionId();
  links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Simple scroll to top of section on nav click
links.forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href')?.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // ensure active state updates after scroll
    setTimeout(onScroll, 100);
  });
});

// (Optional) Language toggle scaffold
document.querySelector('.lang-toggle')?.addEventListener('click', () => {
  alert('Language toggle coming soon ✨'); // replace with real i18n if needed
});

// About section image movement on column hover/click
document.addEventListener('DOMContentLoaded', () => {
  const aboutImage = document.querySelector('.about__image');
  const leftColumn = document.querySelector('.column__left');
  const rightColumn = document.querySelector('.column__right');
  
  if (aboutImage && leftColumn && rightColumn) {
    const isMobile = () => window.innerWidth <= 768;
    
    // Desktop behavior (hover)
    const handleDesktopHover = () => {
      if (!isMobile()) {
        // When hovering left column, move image to the right to expose left column
        leftColumn.addEventListener('mouseenter', () => {
          aboutImage.classList.add('move-right');
          aboutImage.classList.remove('move-left');
        });
        
        // When hovering right column, move image to the left to expose right column
        rightColumn.addEventListener('mouseenter', () => {
          aboutImage.classList.add('move-left');
          aboutImage.classList.remove('move-right');
        });
        
        // Reset position when not hovering any column
        [leftColumn, rightColumn].forEach(column => {
          column.addEventListener('mouseleave', () => {
            aboutImage.classList.remove('move-left', 'move-right');
          });
        });
      }
    };
    
    // Mobile behavior (click)
    const handleMobileClick = () => {
      if (isMobile()) {
        // Click on Sehera (left) moves image down
        leftColumn.addEventListener('click', () => {
          aboutImage.classList.remove('move-up');
          aboutImage.classList.add('move-down');
        });
        
        // Click on Denise (right) moves image up
        rightColumn.addEventListener('click', () => {
          aboutImage.classList.remove('move-down');
          aboutImage.classList.add('move-up');
        });
      }
    };
    
    // Initialize appropriate behavior
    handleDesktopHover();
    handleMobileClick();
    
    // Re-initialize on window resize
    window.addEventListener('resize', () => {
      // Clean up classes
      aboutImage.classList.remove('move-left', 'move-right', 'move-up', 'move-down');
      handleDesktopHover();
      handleMobileClick();
    });
  }
});

// Services and About sections mobile click toggle
document.addEventListener('DOMContentLoaded', () => {
  const isMobile = () => window.innerWidth <= 768;
  
  if (isMobile()) {
    // Handle services section
    const serviceColumns = document.querySelectorAll('.section__services .column');
    serviceColumns.forEach(column => {
      column.addEventListener('click', () => {
        // Remove active class from all service columns
        serviceColumns.forEach(col => col.classList.remove('active'));
        // Add active class to clicked column
        column.classList.add('active');
      });
    });

    // Handle about section
    const aboutColumns = document.querySelectorAll('.section__about .column');
    aboutColumns.forEach(column => {
      column.addEventListener('click', () => {
        // Remove active class from all about columns
        aboutColumns.forEach(col => col.classList.remove('active'));
        // Add active class to clicked column
        column.classList.add('active');
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
