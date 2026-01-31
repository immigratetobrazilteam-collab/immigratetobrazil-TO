/* =============================================
   Premium Multi-Theme Design System v3.1.0
   Applies Apple-like polish with per-state palettes
   ============================================= */

(function() {
  'use strict';

  // --- State profiles with unique palettes and metadata ---
  const STATE_PROFILES = {
    ac: { code: 'AC', name: 'Acre', hub: 'Rio Branco', phone: '+55 (68) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Nature-forward relocation guidance', accent: '#16a34a', accentStrong: '#0f7d35', accentSoft: 'rgba(22, 163, 74, 0.12)', accentInk: '#0b1f14', bg: '#f4fbf6', surface: '#ffffff', ink: '#0b1f12', muted: '#4a5d50', pattern1: 'rgba(22, 163, 74, 0.07)', pattern2: 'rgba(11, 31, 18, 0.08)', pill: 'Rio Branco • Trusted network' },
    al: { code: 'AL', name: 'Alagoas', hub: 'Maceió', phone: '+55 (82) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Coastal calm, concierge visas', accent: '#ef476f', accentStrong: '#d9315a', accentSoft: 'rgba(239, 71, 111, 0.12)', accentInk: '#1f0f16', bg: '#fff7f9', surface: '#ffffff', ink: '#1f0f16', muted: '#5a4450', pattern1: 'rgba(239, 71, 111, 0.08)', pattern2: 'rgba(31, 15, 22, 0.06)', pill: 'Maceió • Beachside clarity' },
    am: { code: 'AM', name: 'Amazonas', hub: 'Manaus', phone: '+55 (92) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Gateway to the Amazon with premium care', accent: '#008b6f', accentStrong: '#006650', accentSoft: 'rgba(0, 139, 111, 0.12)', accentInk: '#0d1f1a', bg: '#f3fbf7', surface: '#ffffff', ink: '#0d1f1a', muted: '#4a5b56', pattern1: 'rgba(0, 139, 111, 0.08)', pattern2: 'rgba(13, 31, 26, 0.08)', pill: 'Manaus • Riverfront specialists' },
    ap: { code: 'AP', name: 'Amapá', hub: 'Macapá', phone: '+55 (96) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Calm, premium guidance for the north coast', accent: '#0071e3', accentStrong: '#0d5cb6', accentSoft: 'rgba(0, 113, 227, 0.12)', accentInk: '#0b1424', bg: '#f6f7fb', surface: '#ffffff', ink: '#0b1220', muted: '#5a6473', pattern1: 'rgba(0, 113, 227, 0.05)', pattern2: 'rgba(12, 22, 40, 0.06)', pill: 'Macapá • Trusted local network' },
    ba: { code: 'BA', name: 'Bahia', hub: 'Salvador', phone: '+55 (71) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Vibrant culture, seamless relocation', accent: '#ff8c37', accentStrong: '#d96c0d', accentSoft: 'rgba(255, 140, 55, 0.14)', accentInk: '#201208', bg: '#fff8f1', surface: '#ffffff', ink: '#201208', muted: '#5e5147', pattern1: 'rgba(255, 140, 55, 0.08)', pattern2: 'rgba(32, 18, 8, 0.07)', pill: 'Salvador • Cultural concierge' },
    ce: { code: 'CE', name: 'Ceará', hub: 'Fortaleza', phone: '+55 (85) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Atlantic breeze, modern processes', accent: '#7c3aed', accentStrong: '#5b23c2', accentSoft: 'rgba(124, 58, 237, 0.12)', accentInk: '#140f1f', bg: '#f6f3ff', surface: '#ffffff', ink: '#140f1f', muted: '#534a63', pattern1: 'rgba(124, 58, 237, 0.08)', pattern2: 'rgba(20, 15, 31, 0.07)', pill: 'Fortaleza • Northeast focus' },
    df: { code: 'DF', name: 'Distrito Federal', hub: 'Brasília', phone: '+55 (61) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Executive-grade guidance in the capital', accent: '#4f46e5', accentStrong: '#3730a3', accentSoft: 'rgba(79, 70, 229, 0.12)', accentInk: '#0f1024', bg: '#f5f6ff', surface: '#ffffff', ink: '#0f1024', muted: '#4d5166', pattern1: 'rgba(79, 70, 229, 0.08)', pattern2: 'rgba(15, 16, 36, 0.06)', pill: 'Brasília • Embassy ready' },
    es: { code: 'ES', name: 'Espírito Santo', hub: 'Vitória', phone: '+55 (27) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Coastal ease with industrial strength', accent: '#14b8a6', accentStrong: '#0f766e', accentSoft: 'rgba(20, 184, 166, 0.12)', accentInk: '#0d1f1e', bg: '#f2fbf9', surface: '#ffffff', ink: '#0d1f1e', muted: '#4b5d5a', pattern1: 'rgba(20, 184, 166, 0.08)', pattern2: 'rgba(13, 31, 30, 0.07)', pill: 'Vitória • Port-side clarity' },
    go: { code: 'GO', name: 'Goiás', hub: 'Goiânia', phone: '+55 (62) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Agro-tech routes with premium care', accent: '#ff4d6d', accentStrong: '#d72648', accentSoft: 'rgba(255, 77, 109, 0.12)', accentInk: '#1f0f14', bg: '#fff6f8', surface: '#ffffff', ink: '#1f0f14', muted: '#5a4750', pattern1: 'rgba(255, 77, 109, 0.08)', pattern2: 'rgba(31, 15, 20, 0.06)', pill: 'Goiânia • Heartland network' },
    ma: { code: 'MA', name: 'Maranhão', hub: 'São Luís', phone: '+55 (98) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Historic charm, modern relocation', accent: '#d97706', accentStrong: '#b45309', accentSoft: 'rgba(217, 119, 6, 0.14)', accentInk: '#1f1407', bg: '#fff8ed', surface: '#ffffff', ink: '#1f1407', muted: '#5c503f', pattern1: 'rgba(217, 119, 6, 0.08)', pattern2: 'rgba(31, 20, 7, 0.07)', pill: 'São Luís • Heritage guided' },
    mg: { code: 'MG', name: 'Minas Gerais', hub: 'Belo Horizonte', phone: '+55 (31) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Mountain calm, business clarity', accent: '#1c64f2', accentStrong: '#1747a7', accentSoft: 'rgba(28, 100, 242, 0.12)', accentInk: '#0d1a35', bg: '#f4f6ff', surface: '#ffffff', ink: '#0b1220', muted: '#4f5770', pattern1: 'rgba(28, 100, 242, 0.08)', pattern2: 'rgba(11, 18, 32, 0.06)', pill: 'Belo Horizonte • Business hub' },
    ms: { code: 'MS', name: 'Mato Grosso do Sul', hub: 'Campo Grande', phone: '+55 (67) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Pantanal pathways with white-glove help', accent: '#0ea5e9', accentStrong: '#0284c7', accentSoft: 'rgba(14, 165, 233, 0.14)', accentInk: '#0d1b24', bg: '#f2f8ff', surface: '#ffffff', ink: '#0b1220', muted: '#4d5a64', pattern1: 'rgba(14, 165, 233, 0.08)', pattern2: 'rgba(11, 18, 32, 0.06)', pill: 'Campo Grande • Gateway to Pantanal' },
    mt: { code: 'MT', name: 'Mato Grosso', hub: 'Cuiabá', phone: '+55 (65) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Agro corridor, streamlined visas', accent: '#10b981', accentStrong: '#059669', accentSoft: 'rgba(16, 185, 129, 0.14)', accentInk: '#0c1f17', bg: '#f1fbf6', surface: '#ffffff', ink: '#0b1f14', muted: '#466154', pattern1: 'rgba(16, 185, 129, 0.08)', pattern2: 'rgba(12, 31, 23, 0.07)', pill: 'Cuiabá • Agro logistics ready' },
    pa: { code: 'PA', name: 'Pará', hub: 'Belém', phone: '+55 (91) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Amazon delta, precise relocation', accent: '#dc2626', accentStrong: '#b91c1c', accentSoft: 'rgba(220, 38, 38, 0.12)', accentInk: '#1f0c0c', bg: '#fff6f6', surface: '#ffffff', ink: '#1f0c0c', muted: '#5a4040', pattern1: 'rgba(220, 38, 38, 0.08)', pattern2: 'rgba(31, 12, 12, 0.06)', pill: 'Belém • River expertise' },
    pb: { code: 'PB', name: 'Paraíba', hub: 'João Pessoa', phone: '+55 (83) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Sunrise coast with boutique support', accent: '#8b5cf6', accentStrong: '#6d28d9', accentSoft: 'rgba(139, 92, 246, 0.12)', accentInk: '#160f24', bg: '#f5f0ff', surface: '#ffffff', ink: '#160f24', muted: '#514a64', pattern1: 'rgba(139, 92, 246, 0.08)', pattern2: 'rgba(22, 15, 36, 0.06)', pill: 'João Pessoa • Eastern edge' },
    pe: { code: 'PE', name: 'Pernambuco', hub: 'Recife', phone: '+55 (81) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Innovation coast, human guidance', accent: '#fb7185', accentStrong: '#e11d48', accentSoft: 'rgba(251, 113, 133, 0.13)', accentInk: '#200d14', bg: '#fff6f8', surface: '#ffffff', ink: '#200d14', muted: '#5a444d', pattern1: 'rgba(251, 113, 133, 0.08)', pattern2: 'rgba(32, 13, 20, 0.06)', pill: 'Recife • Innovation shore' },
    pi: { code: 'PI', name: 'Piauí', hub: 'Teresina', phone: '+55 (86) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'River meets sertão, with clarity', accent: '#f59e0b', accentStrong: '#d97706', accentSoft: 'rgba(245, 158, 11, 0.14)', accentInk: '#2a1904', bg: '#fff8f1', surface: '#ffffff', ink: '#2a1904', muted: '#64523c', pattern1: 'rgba(245, 158, 11, 0.08)', pattern2: 'rgba(42, 25, 4, 0.06)', pill: 'Teresina • Riverside routes' },
    pr: { code: 'PR', name: 'Paraná', hub: 'Curitiba', phone: '+55 (41) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Design-forward, cool climate relocation', accent: '#22c55e', accentStrong: '#15803d', accentSoft: 'rgba(34, 197, 94, 0.14)', accentInk: '#0f1f14', bg: '#f3fbf7', surface: '#ffffff', ink: '#0f1f14', muted: '#4c5d52', pattern1: 'rgba(34, 197, 94, 0.08)', pattern2: 'rgba(15, 31, 20, 0.07)', pill: 'Curitiba • Design capital' },
    rj: { code: 'RJ', name: 'Rio de Janeiro', hub: 'Rio de Janeiro', phone: '+55 (21) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Iconic coast, elevated service', accent: '#38bdf8', accentStrong: '#0284c7', accentSoft: 'rgba(56, 189, 248, 0.12)', accentInk: '#0d1b24', bg: '#f2f8ff', surface: '#ffffff', ink: '#0b1220', muted: '#4b5b6a', pattern1: 'rgba(56, 189, 248, 0.08)', pattern2: 'rgba(11, 18, 32, 0.06)', pill: 'Rio • Iconic horizons' },
    rn: { code: 'RN', name: 'Rio Grande do Norte', hub: 'Natal', phone: '+55 (84) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Sun routes with aerospace hubs', accent: '#6366f1', accentStrong: '#4338ca', accentSoft: 'rgba(99, 102, 241, 0.13)', accentInk: '#12122b', bg: '#f4f5ff', surface: '#ffffff', ink: '#12122b', muted: '#4d5268', pattern1: 'rgba(99, 102, 241, 0.08)', pattern2: 'rgba(18, 18, 43, 0.06)', pill: 'Natal • Sun and space' },
    ro: { code: 'RO', name: 'Rondônia', hub: 'Porto Velho', phone: '+55 (69) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Frontier energy, refined process', accent: '#e11d48', accentStrong: '#9f1239', accentSoft: 'rgba(225, 29, 72, 0.13)', accentInk: '#220c12', bg: '#fff5f8', surface: '#ffffff', ink: '#220c12', muted: '#5a4046', pattern1: 'rgba(225, 29, 72, 0.08)', pattern2: 'rgba(34, 12, 18, 0.06)', pill: 'Porto Velho • Frontier ready' },
    rr: { code: 'RR', name: 'Roraima', hub: 'Boa Vista', phone: '+55 (95) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Northern edge, precise visas', accent: '#84cc16', accentStrong: '#4d7c0f', accentSoft: 'rgba(132, 204, 22, 0.14)', accentInk: '#1a1f0c', bg: '#f7fce9', surface: '#ffffff', ink: '#1a1f0c', muted: '#556043', pattern1: 'rgba(132, 204, 22, 0.08)', pattern2: 'rgba(26, 31, 12, 0.06)', pill: 'Boa Vista • Northern edge' },
    rs: { code: 'RS', name: 'Rio Grande do Sul', hub: 'Porto Alegre', phone: '+55 (51) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Southern craft, measured guidance', accent: '#f97316', accentStrong: '#c2410c', accentSoft: 'rgba(249, 115, 22, 0.14)', accentInk: '#271408', bg: '#fff8f2', surface: '#ffffff', ink: '#271408', muted: '#5e5147', pattern1: 'rgba(249, 115, 22, 0.08)', pattern2: 'rgba(39, 20, 8, 0.06)', pill: 'Porto Alegre • Southern craft' },
    sc: { code: 'SC', name: 'Santa Catarina', hub: 'Florianópolis', phone: '+55 (48) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Island innovation, cool waters', accent: '#06b6d4', accentStrong: '#0e7490', accentSoft: 'rgba(6, 182, 212, 0.14)', accentInk: '#0c1a1f', bg: '#f1f8fb', surface: '#ffffff', ink: '#0c1a1f', muted: '#4c5d64', pattern1: 'rgba(6, 182, 212, 0.08)', pattern2: 'rgba(12, 26, 31, 0.06)', pill: 'Florianópolis • Island tech' },
    se: { code: 'SE', name: 'Sergipe', hub: 'Aracaju', phone: '+55 (79) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Compact state, elevated care', accent: '#a855f7', accentStrong: '#7e22ce', accentSoft: 'rgba(168, 85, 247, 0.12)', accentInk: '#1a0f26', bg: '#f6f0ff', surface: '#ffffff', ink: '#1a0f26', muted: '#524563', pattern1: 'rgba(168, 85, 247, 0.08)', pattern2: 'rgba(26, 15, 38, 0.06)', pill: 'Aracaju • Boutique guidance' },
    sp: { code: 'SP', name: 'São Paulo', hub: 'São Paulo', phone: '+55 (11) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Global city, precision process', accent: '#2563eb', accentStrong: '#1d4ed8', accentSoft: 'rgba(37, 99, 235, 0.14)', accentInk: '#0e1a36', bg: '#f4f6fb', surface: '#ffffff', ink: '#0b1220', muted: '#4c5366', pattern1: 'rgba(37, 99, 235, 0.08)', pattern2: 'rgba(11, 18, 32, 0.06)', pill: 'São Paulo • Global capital' },
    to: { code: 'TO', name: 'Tocantins', hub: 'Palmas', phone: '+55 (63) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Cerrado clarity, calm onboarding', accent: '#f43f5e', accentStrong: '#be123c', accentSoft: 'rgba(244, 63, 94, 0.14)', accentInk: '#250c14', bg: '#fff5f7', surface: '#ffffff', ink: '#250c14', muted: '#5a424a', pattern1: 'rgba(244, 63, 94, 0.08)', pattern2: 'rgba(37, 12, 20, 0.06)', pill: 'Palmas • Cerrado clarity' },
    default: { code: 'BR', name: 'Brazil', hub: 'Nationwide', phone: '+55 (00) 0000-0000', email: 'info@immigratetobrazil.com', tagline: 'Premium guidance across Brazil', accent: '#0071e3', accentStrong: '#0d5cb6', accentSoft: 'rgba(0, 113, 227, 0.12)', accentInk: '#0b1424', bg: '#f6f7fb', surface: '#ffffff', ink: '#0b1220', muted: '#5a6473', pattern1: 'rgba(0, 113, 227, 0.05)', pattern2: 'rgba(12, 22, 40, 0.06)', pill: 'Brazil • Nationwide network' }
  };

  const stateProfile = resolveStateProfile();
  applyTheme(stateProfile);

  // --- Design System core ---
  const DesignSystem = {
    version: '3.1.0',
    state: stateProfile.code,
    init() {
      this.setupScrollEffects();
      this.setupAnimations();
      this.setupInteractiveElements();
      console.log(`Design System v${this.version} initialized for ${this.state}`);
    },
    setupScrollEffects() {
      const scrollBtn = document.getElementById('scroll-to-top');
      if (scrollBtn) {
        window.addEventListener('scroll', () => {
          const shouldShow = window.pageYOffset > 320;
          scrollBtn.style.opacity = shouldShow ? '1' : '0';
          scrollBtn.style.visibility = shouldShow ? 'visible' : 'hidden';
        });

        scrollBtn.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      const header = document.querySelector('.site-header');
      if (header) {
        const toggleScrolled = () => {
          header.classList.toggle('is-scrolled', window.pageYOffset > 12);
        };
        window.addEventListener('scroll', toggleScrolled);
        toggleScrolled();
      }
    },
    setupAnimations() {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      this.applyAutoAnimations();

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    },
    applyAutoAnimations() {
      const selectors = ['section', '.section-block', '.card', '.footer-inner', '.header-inner', 'table', 'details'];
      document.querySelectorAll(selectors.join(',')).forEach(el => {
        if (!el.dataset.animate) {
          el.dataset.animate = 'fade-up';
        }
      });
    },
    setupInteractiveElements() {
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

  // --- Theme + profile helpers ---
  function resolveStateProfile() {
    const code = detectStateCode();
    const key = code && STATE_PROFILES[code] ? code : 'default';
    return STATE_PROFILES[key];
  }

  function detectStateCode() {
    const match = window.location.pathname.match(/\/(ac|al|am|ap|ba|ce|df|es|go|ma|mg|ms|mt|pa|pb|pe|pi|pr|rj|rn|ro|rr|rs|sc|se|sp|to)\//);
    return match ? match[1] : null;
  }

  function applyTheme(profile) {
    const root = document.documentElement;
    const tokens = {
      '--bg': profile.bg,
      '--surface': profile.surface,
      '--ink': profile.ink,
      '--muted': profile.muted,
      '--accent': profile.accent,
      '--accent-strong': profile.accentStrong,
      '--accent-soft': profile.accentSoft,
      '--accent-ink': profile.accentInk,
      '--bg-pattern-1': profile.pattern1,
      '--bg-pattern-2': profile.pattern2
    };
    Object.entries(tokens).forEach(([key, val]) => root.style.setProperty(key, val));
  }

  function renderChrome(profile) {
    const topBarHtml = `
      <div class="top-bar" data-animate>
        <div class="top-bar-inner">
          <div class="top-bar-meta">
            <span class="pill">Serving ${profile.name}, Brazil</span>
            <span>${profile.email}</span>
            <span>${profile.phone}</span>
          </div>
          <div class="top-bar-links">
            <a href="faq.html">FAQ</a>
            <a href="blog.html">Insights</a>
            <a href="resources.html">Resources</a>
            <a class="pill" href="contact.html">Talk with us</a>
          </div>
        </div>
      </div>`;

    const headerHtml = `
      <header class="site-header" itemscope itemtype="https://schema.org/Organization">
        <div class="header-inner">
          <a class="brand" href="index.html" itemprop="url">
            <span class="brand-mark">${profile.code}</span>
            <span class="brand-text">
              <span class="brand-title" itemprop="name">Immigrate to Brazil</span>
              <span class="brand-subtitle" itemprop="areaServed">${profile.name} • Premium guidance</span>
            </span>
          </a>
          <nav class="header-nav" aria-label="Primary navigation">
            <a href="services.html">Services</a>
            <a href="about.html">About</a>
            <a href="faq.html">FAQ</a>
            <a href="blog.html">Insights</a>
            <a href="contact.html">Contact</a>
          </nav>
          <div class="header-actions">
            <a class="btn ghost" href="about.html">Why ${profile.name}</a>
            <a class="btn" href="contact.html">Book a consult</a>
          </div>
          <button class="nav-toggle" type="button" aria-label="Toggle menu" data-mobile-menu-toggle aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>`;

    const footerHtml = `
      <footer class="site-footer" aria-label="Footer">
        <div class="footer-inner" data-animate>
          <div class="footer-brand">
            <h3>Immigrate to Brazil — ${profile.name}</h3>
            <p>${profile.tagline}</p>
            <div class="pill">${profile.hub} • ${profile.pill}</div>
          </div>
          <div class="footer-group">
            <h4>Explore</h4>
            <nav>
              <a href="index.html">Home</a>
              <a href="services.html">Services</a>
              <a href="about.html">About</a>
              <a href="blog.html">Insights</a>
              <a href="faq.html">FAQ</a>
            </nav>
          </div>
          <div class="footer-group">
            <h4>Resources</h4>
            <nav>
              <a href="services/visas/work.html">Work visas</a>
              <a href="services/visas/student.html">Study visas</a>
              <a href="services/family-visa.html">Family routes</a>
              <a href="services.html">Relocation playbook</a>
            </nav>
          </div>
          <div class="footer-group">
            <h4>Legal</h4>
            <nav>
              <a href="privacy.html">Privacy</a>
              <a href="terms.html">Terms</a>
              <a href="cookies.html">Cookies</a>
              <a href="accessibility.html">Accessibility</a>
            </nav>
          </div>
          <div class="footer-bottom">
            <span>© 2026 Immigrate to Brazil — ${profile.name}. All rights reserved.</span>
          </div>
        </div>
      </footer>`;

    const headerNode = htmlToElement(headerHtml);
    const topBarNode = htmlToElement(topBarHtml);
    const footerNode = htmlToElement(footerHtml);

    const existingHeader = document.querySelector('header.site-header');
    const main = document.querySelector('main');
    if (existingHeader) {
      existingHeader.replaceWith(headerNode);
    } else if (main) {
      main.parentNode.insertBefore(headerNode, main);
    } else {
      document.body.insertBefore(headerNode, document.body.firstChild);
    }

    const freshHeader = document.querySelector('header.site-header');
    const existingTop = document.querySelector('.top-bar');
    if (existingTop) {
      existingTop.replaceWith(topBarNode);
    } else if (freshHeader) {
      freshHeader.parentNode.insertBefore(topBarNode, freshHeader);
    } else {
      document.body.insertBefore(topBarNode, document.body.firstChild);
    }

    const existingFooter = document.querySelector('footer.site-footer');
    if (existingFooter) {
      existingFooter.replaceWith(footerNode);
    } else {
      document.body.appendChild(footerNode);
    }

    initializePartial(document);
  }

  function htmlToElement(html) {
    const template = document.createElement('div');
    template.innerHTML = html.trim();
    return template.firstElementChild;
  }

  // --- Partial loading with smart paths ---
  async function loadPartials() {
    const partialsPath = getPartialsPath();

    const dataIncludeElements = document.querySelectorAll('[data-include]');
    for (const element of dataIncludeElements) {
      await loadDataInclude(element);
    }

    const dataPlaceholders = document.querySelectorAll('[data-partial]');
    for (const placeholder of dataPlaceholders) {
      const partialName = placeholder.dataset.partial;
      await loadPartialInto(placeholder, partialName, partialsPath);
    }

    const partialIds = ['header-placeholder', 'footer-placeholder', 'cta-placeholder'];
    for (const id of partialIds) {
      const placeholder = document.getElementById(id);
      if (placeholder) {
        let partialName = id.replace('-placeholder', '');
        if (partialName === 'cta') partialName = 'contact-cta';
        await loadPartialInto(placeholder, partialName, partialsPath);
      }
    }

    normalizeRelativeLinks();
    cleanupLayoutArtifacts();
  }

  function getPartialsPath() {
    const currentPath = window.location.pathname;
    const stateMatch = currentPath.match(/\/(ac|al|am|ap|ba|ce|df|es|go|ma|mg|ms|mt|pa|pb|pe|pi|pr|rj|rn|ro|rr|rs|sc|se|sp|to)\//);
    if (!stateMatch) {
      return 'partials/';
    }
    const afterState = currentPath.substring(stateMatch.index + stateMatch[0].length);
    const pathParts = afterState.split('/').filter(p => p && !p.endsWith('.html'));
    const depth = pathParts.length;
    return depth === 0 ? 'partials/' : '../'.repeat(depth) + 'partials/';
  }

  function getRootPath() {
    const currentPath = window.location.pathname;
    const stateMatch = currentPath.match(/\/(ac|al|am|ap|ba|ce|df|es|go|ma|mg|ms|mt|pa|pb|pe|pi|pr|rj|rn|ro|rr|rs|sc|se|sp|to)\//);
    if (!stateMatch) {
      return '';
    }
    const afterState = currentPath.substring(stateMatch.index + stateMatch[0].length);
    const pathParts = afterState.split('/').filter(p => p && !p.endsWith('.html'));
    const depth = pathParts.length;
    return depth === 0 ? '' : '../'.repeat(depth);
  }

  async function loadDataInclude(element) {
    const includePath = element.getAttribute('data-include');
    if (!includePath) return;

    try {
      const currentPath = window.location.pathname;
      const stateMatch = currentPath.match(/\/(ac|al|am|ap|ba|ce|df|es|go|ma|mg|ms|mt|pa|pb|pe|pi|pr|rj|rn|ro|rr|rs|sc|se|sp|to)\//);
      if (!stateMatch) throw new Error('Could not detect state');

      const pageDir = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
      let resolvedPath = pageDir + includePath;
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
      initializePartial(element);
    } catch (error) {
      console.warn(`Failed to load data-include: ${includePath}`, error);
      element.innerHTML = `<!-- Failed to load include: ${includePath} -->`;
    }
  }

  async function loadPartialInto(placeholder, partialName, partialsPath) {
    try {
      const fullPath = `${partialsPath}${partialName}.html`;
      const response = await fetch(fullPath);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const html = await response.text();
      placeholder.innerHTML = html;
      initializePartial(placeholder);
    } catch (error) {
      console.warn(`Failed to load partial: ${partialName}`, error);
      placeholder.innerHTML = `<!-- Failed to load ${partialName} -->`;
    }
  }

  function initializePartial(element) {
    const mobileToggle = element.querySelector('[data-mobile-menu-toggle]');
    const nav = element.querySelector('.header-nav');
    if (mobileToggle && nav) {
      mobileToggle.addEventListener('click', function() {
        const expanded = nav.classList.toggle('mobile-active');
        this.setAttribute('aria-expanded', expanded.toString());
      });
    }

    const forms = element.querySelectorAll('form[data-form-handler]');
    forms.forEach(form => {
      form.addEventListener('submit', handleFormSubmit);
    });

    const accordions = element.querySelectorAll('[data-accordion]');
    accordions.forEach(initAccordion);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
    const successMsg = form.querySelector('[data-success-message]');
    if (successMsg) {
      successMsg.style.display = 'block';
      setTimeout(() => {
        successMsg.style.display = 'none';
        form.reset();
      }, 3000);
    }
  }

  function initAccordion(accordion) {
    const triggers = accordion.querySelectorAll('[data-accordion-trigger]');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('[data-accordion-icon]');
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

  function normalizeRelativeLinks() {
    const rootPath = getRootPath();
    const selector = 'a[href], link[href], script[src], img[src]';
    document.querySelectorAll(selector).forEach(el => {
      const attr = el.tagName.toLowerCase() === 'script' || el.tagName.toLowerCase() === 'img' ? 'src' : 'href';
      const value = el.getAttribute(attr);
      if (!value) return;
      if (value.startsWith('http') || value.startsWith('//') || value.startsWith('mailto:') || value.startsWith('tel:') || value.startsWith('#') || value.startsWith('/')) return;
      if (value.startsWith('../') || value.startsWith('./')) return;
      el.setAttribute(attr, rootPath + value);
    });
  }

  function cleanupLayoutArtifacts() {
    document.querySelectorAll('.legacy-placeholder').forEach(el => el.remove());
  }

  function ensureScrollToTop() {
    if (document.getElementById('scroll-to-top')) return;
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);
  }

  const ready = async () => {
    await loadPartials();
    renderChrome(stateProfile);
    ensureScrollToTop();
    DesignSystem.init();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }

})();
