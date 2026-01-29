/* =============================================
   DESIGN SYSTEM v3.0.0 - TO
   ============================================= */

(function() {
    'use strict';
    
    // Design System State: TO
    const DesignSystem = {
        version: '3.0.0',
        state: 'TO',
        
        // Initialize all components
        init() {
            this.setupScrollEffects();
            this.setupAnimations();
            this.setupInteractiveElements();
            console.log(`Design System v${this.version} initialized for ${this.state}`);
        },
        
        // Scroll effects
        setupScrollEffects() {
            const scrollBtn = document.getElementById('scroll-to-top');
            if (scrollBtn) {
                window.addEventListener('scroll', () => {
                    if (window.pageYOffset > 300) {
                        scrollBtn.style.opacity = '1';
                        scrollBtn.style.visibility = 'visible';
                        scrollBtn.style.display = 'block';
                    } else {
                        scrollBtn.style.opacity = '0';
                        scrollBtn.style.visibility = 'hidden';
                    }
                });
                
                scrollBtn.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
            
            // Sticky header
            const header = document.querySelector('header');
            if (header) {
                let lastScroll = 0;
                window.addEventListener('scroll', () => {
                    const currentScroll = window.pageYOffset;
                    if (currentScroll > 100) {
                        header.classList.add('sticky');
                        header.style.transform = currentScroll > lastScroll ? 'translateY(-100%)' : 'translateY(0)';
                    } else {
                        header.classList.remove('sticky');
                    }
                    lastScroll = currentScroll;
                });
            }
        },
        
        // Animations
        setupAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            
            document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
        },
        
        // Interactive elements
        setupInteractiveElements() {
            // Tooltips
            document.querySelectorAll('[data-tooltip]').forEach(el => {
                el.addEventListener('mouseenter', function() {
                    const tooltip = document.createElement('div');
                    tooltip.className = 'tooltip';
                    tooltip.textContent = this.getAttribute('data-tooltip');
                    tooltip.style.cssText = 'position:absolute;background:rgba(0,0,0,0.9);color:white;padding:8px 12px;border-radius:6px;font-size:14px;z-index:1000;pointer-events:none;';
                    document.body.appendChild(tooltip);
                    const rect = this.getBoundingClientRect();
                    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
                    tooltip.style.left = rect.left + (rect.width - tooltip.offsetWidth) / 2 + 'px';
                    this._tooltip = tooltip;
                });
                el.addEventListener('mouseleave', function() {
                    if (this._tooltip) {
                        this._tooltip.remove();
                        delete this._tooltip;
                    }
                });
            });
            
            // Tabs
            document.querySelectorAll('[data-tab]').forEach(tab => {
                tab.addEventListener('click', function() {
                    const target = this.getAttribute('data-tab');
                    const group = this.closest('[data-tab-group]');
                    if (group) {
                        group.querySelectorAll('[data-tab]').forEach(t => t.classList.remove('active'));
                        group.querySelectorAll('[data-tab-panel]').forEach(p => p.classList.remove('active'));
                        this.classList.add('active');
                        const panel = group.querySelector(`[data-tab-panel="${target}"]`);
                        if (panel) panel.classList.add('active');
                    }
                });
            });
            
            // Accordions
            document.querySelectorAll('[data-accordion-header]').forEach(header => {
                header.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const isOpen = content.classList.contains('open');
                    const group = this.closest('[data-accordion-group]');
                    if (group) {
                        group.querySelectorAll('[data-accordion-content]').forEach(c => {
                            c.classList.remove('open');
                            c.style.maxHeight = null;
                        });
                    }
                    if (!isOpen) {
                        content.classList.add('open');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });
            });
        }
    };
    
    // Auto-initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => DesignSystem.init());
    } else {
        DesignSystem.init();
    }
    
    window.DesignSystem = DesignSystem;
})();
