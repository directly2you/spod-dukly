// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');

      // Animate hamburger icon
      this.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);

      if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Contact form — Formspree AJAX with i18n button labels from data attributes
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const btn = this.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    const sendingText = btn.dataset.sending || '...';
    const sentText = btn.dataset.sent || '✓';
    const errorText = btn.dataset.error || 'Error';

    btn.disabled = true;
    btn.textContent = sendingText;

    try {
      const response = await fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        this.reset();
        btn.textContent = sentText;
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = originalText;
        }, 4000);
      } else {
        btn.textContent = errorText;
        btn.disabled = false;
      }
    } catch {
      btn.textContent = errorText;
      btn.disabled = false;
    }
  });
}
