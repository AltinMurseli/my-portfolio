// Resume download functionality
const downloadCV = document.getElementById("download-cv");
downloadCV.addEventListener("click", () => {
  window.open("https://flowcv.com/resume/nddiqriwq40e");
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.classList.remove('scroll-up');
    return;
  }
  
  if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
    // Scroll Down
    navbar.classList.remove('scroll-up');
    navbar.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
    // Scroll Up
    navbar.classList.remove('scroll-down');
    navbar.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Project hover effects
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    project.querySelector('img').style.transform = 'scale(1.02)';
  });
  
  project.addEventListener('mouseleave', () => {
    project.querySelector('img').style.transform = 'scale(1)';
  });
});

// Enhanced fade-in animation for sections, cards, and project images
function revealOnScroll() {
  const fadeEls = document.querySelectorAll('.fade-in-section, .fade-in-up, .stagger-fade, .slide-in-left, .slide-in-right, .scale-in, .bounce-in');
  const observer = new window.IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger children if present
        if (entry.target.classList.contains('stagger-parent')) {
          const children = entry.target.querySelectorAll('.stagger-fade, .slide-in-left, .slide-in-right');
          children.forEach((child, idx) => {
            setTimeout(() => child.classList.add('is-visible'), idx * 120);
          });
        }
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', revealOnScroll);
