/**
 * Enhanced Partial Loader with Smart Path Resolution
 * Loads HTML partials dynamically and includes scroll-to-top functionality
 * NOW HANDLES: data-include attributes with full paths
 */

(function() {
  'use strict';

  // ============ SMART PATH DETECTION ============
  function getPartialsPath() {
    // Calculate the correct path based on current page location
    const currentPath = window.location.pathname;
    
    // Match state code in path: /ac/, /sp/, etc.
    const stateMatch = currentPath.match(/\/(ac|al|am|ap|ba|ce|df|es|go|ma|mg|ms|mt|pa|pb|pe|pi|pr|rj|rn|ro|rr|rs|sc|se|sp|to)\//);
    
    if (!stateMatch) {
      // Fallback if state not detected
      return 'partials/';
    }
    
    // Get the path after the state code
    const afterState = currentPath.substring(stateMatch.index + stateMatch[0].length);
    const pathParts = afterState.split('/').filter(p => p && !p.endsWith('.html'));
    
    // Each directory level down needs one ../
    const depth = pathParts.length;
    
    if (depth === 0) {
      return 'partials/'; // Root level (index.html, about.html, etc.)
    } else {
      return '../'.repeat(depth) + 'partials/';
    }
  }

  // ============ DATA-INCLUDE LOADER ============
  async function loadDataInclude(element) {
    const includePath = element.getAttribute('data-include');
    if (!includePath) return;
    
    try {
      // Resolve the relative path from the current location
      const currentPath = window.location.pathname;
      const stateMatch = currentPath.match(/\/(ac|al|am|ap|ba|ce|df|es|go|ma|mg|ms|mt|pa|pb|pe|pi|pr|rj|rn|ro|rr|rs|sc|se|sp|to)\//);
      
      if (!stateMatch) {
        throw new Error('Could not detect state');
      }
      
      // Build absolute path from state root
      const stateCode = stateMatch[1];
      const pageDir = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
      
      // Resolve relative path
      let resolvedPath = pageDir + includePath;
      
      // Normalize the path (remove ../ and ./)
      const parts = resolvedPath.split('/').filter(p => p);
      const normalized = [];
      
      for (const part of parts) {
        if (part === '..') {
          normalized.pop();
        } else if (part !== '.') {
          normalized.push(part);
        }
      }
      
      resolvedPath = '/' + normalized.join('/');
      
      const response = await fetch(resolvedPath);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const html = await response.text();
      element.innerHTML = html;
      
      // Trigger any initialization after loading
      initializePartial(element);
    } catch (error) {
      console.warn(`Failed to load data-include: ${includePath}`, error);
      element.innerHTML = `<!-- Failed to load include: ${includePath} -->`;
    }
  }

  // ============ PARTIAL LOADER ============
  async function loadPartials() {
    const partialsPath = getPartialsPath();
    
    // Load by data-include attribute (NEW PRIMARY METHOD)
    const dataIncludeElements = document.querySelectorAll('[data-include]');
    for (const element of dataIncludeElements) {
      await loadDataInclude(element);
    }
    
    // Load by data-partial attribute (legacy support)
    const dataPlaceholders = document.querySelectorAll('[data-partial]');
    for (const placeholder of dataPlaceholders) {
      const partialName = placeholder.dataset.partial;
      await loadPartialInto(placeholder, partialName, partialsPath);
    }

    // Load by ID (header, footer, cta)
    const partialIds = ['header-placeholder', 'footer-placeholder', 'cta-placeholder'];
    for (const id of partialIds) {
      const placeholder = document.getElementById(id);
      if (placeholder) {
        let partialName = id.replace('-placeholder', '');
        if (partialName === 'cta') partialName = 'contact-cta';
        await loadPartialInto(placeholder, partialName, partialsPath);
      }
    }
  }

  // Helper to load a partial into an element
  async function loadPartialInto(placeholder, partialName, partialsPath) {
    try {
      const fullPath = `${partialsPath}${partialName}.html`;
      const response = await fetch(fullPath);
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

  // Initialize specific partial features
  function initializePartial(element) {
    // Mobile menu toggle
    const mobileToggle = element.querySelector('[data-mobile-menu-toggle]');
    const nav = element.querySelector('nav');
    
    if (mobileToggle && nav) {
      mobileToggle.addEventListener('click', function() {
        nav.classList.toggle('mobile-active');
        const icon = this.querySelector('i');
        if (icon) {
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
        }
      });
    }

    // Initialize any form handlers
    const forms = element.querySelectorAll('form[data-form-handler]');
    forms.forEach(form => {
      form.addEventListener('submit', handleFormSubmit);
    });

    // Initialize any accordions
    const accordions = element.querySelectorAll('[data-accordion]');
    accordions.forEach(initAccordion);
  }

  // ============ FORM HANDLER ============
  function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    console.log('Form submitted:', data);
    
    // Show success message
    const successMsg = form.querySelector('[data-success-message]');
    if (successMsg) {
      successMsg.style.display = 'block';
      setTimeout(() => {
        successMsg.style.display = 'none';
        form.reset();
      }, 3000);
    }
  }

  // ============ ACCORDION HANDLER ============
  function initAccordion(accordion) {
    const triggers = accordion.querySelectorAll('[data-accordion-trigger]');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('[data-accordion-icon]');
        
        // Toggle content
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          if (icon) icon.classList.remove('rotated');
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          if (icon) icon.classList.add('rotated');
        }
      });
    });
  }

  // ============ SCROLL TO TOP ============
  function initScrollToTop() {
    // Create scroll-to-top button
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--color-primary, #0066cc);
      color: white;
      border: none;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide on scroll
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
      } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
      }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ============ LAZY LOADING IMAGES ============
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  }

  // ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ============ INITIALIZATION ============
  async function init() {
    await loadPartials();
    initScrollToTop();
    initLazyLoading();
    initSmoothScroll();
    
    // Dispatch custom event when everything is loaded
    document.dispatchEvent(new CustomEvent('partialsLoaded'));
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
