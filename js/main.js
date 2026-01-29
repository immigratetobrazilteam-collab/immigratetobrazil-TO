// ===== UNIQUE FUNCTIONALITY FOR TOCANTINS =====

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Navbar highlight on scroll
  highlightNavOnScroll();

  // Interactive elements
  initializeInteractiveElements();

  // FAQ functionality
  initializeFAQ();
});

// Highlight nav item based on current section
function highlightNavOnScroll() {
  const navLinks = document.querySelectorAll('.nav-item a');
  const sections = document.querySelectorAll('section, [id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// Interactive elements - hover effects
function initializeInteractiveElements() {
  const cards = document.querySelectorAll('.card, .service-card, .faq-item');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// FAQ accordion
function initializeFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const item = this.parentElement;
      item.classList.toggle('active');
      
      // Close other open items
      document.querySelectorAll('.faq-item.active').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('active');
        }
      });
    });
  });
}

// Scroll to top button
window.addEventListener('scroll', function() {
  const topBtn = document.getElementById('scroll-to-top');
  if (topBtn) {
    if (window.scrollY > 300) {
      topBtn.style.display = 'block';
      setTimeout(() => topBtn.style.opacity = '1', 0);
    } else {
      topBtn.style.opacity = '0';
      setTimeout(() => topBtn.style.display = 'none', 300);
    }
  }
});

// Scroll to top functionality
const topButton = document.getElementById('scroll-to-top');
if (topButton) {
  topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Add animation class on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .service-card').forEach(el => {
  observer.observe(el);
});

// Form validation
function validateForm(form) {
  const inputs = form.querySelectorAll('input, textarea');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });

  return isValid;
}

// Utility: Add active class to current page link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.parentElement.classList.add('active');
    }
  });
}

setActiveNavLink();
