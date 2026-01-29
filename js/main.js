/** TO JS - Palmas - Eco-innovative with teal and green rivers */
const STATE_CONFIG = {
  stateCode: 'to',
  capital: 'Palmas',
  formspreeUrl: 'https://formspree.io/f/xlgeyvyo',
  colors: { primary: '#008080', secondary: '#20b2aa', accent: '#90ee90' },
  animations: {"enabled": true, "header": {"type": "ecoSlide", "duration": "0.8s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "sustainableReveal", "duration": "1.1s", "easing": "ease-in-out", "stagger": "0.2s"}, "hero": {"type": "waterParallax", "speed": 0.4, "direction": "multi"}, "cards": {"type": "ecoFloat", "organic": true, "gentle": true}, "images": {"type": "naturalReveal", "green": true, "duration": "1.2s"}},
  interactions: {"hover": "eco-lift", "scroll": "sustainable-flow", "transitions": "organic-ease", "click": "leaf-ripple"},
  premiumEffects: ["eco-gradient", "water-ripples", "leaf-particles", "solar-glow"]
};

const SECTIONS = ["to-index-section--map", "to-index-section-frequently-asked-questions-about-living-in-", "to-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
