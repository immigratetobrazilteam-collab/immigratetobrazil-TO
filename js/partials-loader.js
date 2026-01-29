/**
 * Enhanced Partial Loader
 * Loads HTML partials dynamically and includes scroll-to-top functionality
 */

(function() {
  'use strict';

  // ============ PARTIAL LOADER ============
  async function loadPartials() {
    const placeholders = document.querySelectorAll('[data-partial]');
    
    for (const placeholder of placeholders) {
      const partialName = placeholder.dataset.partial;
      try {
        const response = await fetch(`partials/${partialName}.html`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const html = await response.text();
        placeholder.innerHTML = html;
        
        // Trigger any initialization after loading
        initializePartial(placeholder);
      } catch (error) {
        console.warn(`Failed to load partial: ${partialName}`, error);
        placeholder.innerHTML = `<!-- Failed to load ${partialName} -->`;
      }
    }
  }

  // Initialize specific partial features
  function initializePartial(element) {
    // Mobile menu toggle
    const mobileToggle = element.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = element.querySelector('[data-mobile-menu]');
    
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));
      });
    }

    // Language switcher
    const langSwitcher = element.querySelector('[data-lang-switcher]');
    if (langSwitcher) {
      initLanguageSwitcher(langSwitcher);
    }
  }

  // Language switcher functionality
  function initLanguageSwitcher(element) {
    const options = element.querySelectorAll('[data-lang]');
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    options.forEach(option => {
      option.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.dataset.lang;
        
        // Update localStorage
        localStorage.setItem('preferredLanguage', lang);
        
        // Update active state in UI
        options.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        
        // Announce language change
        console.log('✓ Language switched to:', lang === 'en' ? 'English' : lang === 'pt' ? 'Português' : 'Español');
        
        // Show visual feedback
        showNotification(`Idioma alterado para: ${lang === 'en' ? 'English' : lang === 'pt' ? 'Português' : 'Español'}`);
        
        // In production, you could reload the page with language parameter:
        // window.location.href = window.location.pathname + '?lang=' + lang;
      });
      
      // Set active state for current language
      if (option.dataset.lang === currentLang) {
        option.classList.add('active');
      }
    });
  }

  // Notification helper
  function showNotification(message) {
    const notif = document.createElement('div');
    notif.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #2d5016;
      color: white;
      padding: 12px 20px;
      border-radius: 6px;
      font-size: 14px;
      z-index: 9999;
      opacity: 0;
      animation: slideIn 0.3s ease forwards;
    `;
    notif.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(20px); }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notif);
    
    setTimeout(() => {
      notif.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => notif.remove(), 300);
    }, 2000);
  }

  // ============ SCROLL-TO-TOP BUTTON ============
  function initScrollToTop() {
    // Create scroll-to-top button
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scroll-to-top';
    scrollBtn.innerHTML = '↑ Top';
    scrollBtn.className = 'scroll-to-top-btn';
    scrollBtn.title = 'Scroll to top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .scroll-to-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 99;
        background: linear-gradient(135deg, #2d5016 0%, #4a7c2f 100%);
        color: white;
        border: none;
        padding: 12px 16px;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(45, 80, 22, 0.3);
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .scroll-to-top-btn:hover {
        background: linear-gradient(135deg, #4a7c2f 0%, #2d5016 100%);
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(45, 80, 22, 0.4);
      }

      .scroll-to-top-btn.show {
        opacity: 1;
        visibility: visible;
      }

      @media (max-width: 768px) {
        .scroll-to-top-btn {
          bottom: 20px;
          right: 20px;
          padding: 10px 14px;
          font-size: 12px;
        }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(scrollBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });

    // Smooth scroll to top
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============ KEYBOARD NAVIGATION ============
  function initKeyboardNav() {
    document.addEventListener('keydown', function(e) {
      // Skip to main content with Shift+M
      if (e.shiftKey && e.key === 'M') {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Scroll to top with Shift+T
      if (e.shiftKey && e.key === 'T') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // ============ INITIALIZATION ============
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      loadPartials();
      initScrollToTop();
      initKeyboardNav();
    });
  } else {
    loadPartials();
    initScrollToTop();
    initKeyboardNav();
  }

  // Expose loadPartials for manual calls
  window.loadPartials = loadPartials;
})();
