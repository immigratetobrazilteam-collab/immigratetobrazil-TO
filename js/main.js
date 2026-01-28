
// Master JS for State: TO - Persona: Savannah Transitioner
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 768;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const to_index_section_immigrate_to_tocantins = document.getElementById('to-index-section-immigrate-to-tocantins');
  if (to_index_section_immigrate_to_tocantins) {
    gsap.fromTo('#to-index-section-immigrate-to-tocantins', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_form_immigrate_to_tocantins = document.getElementById('to-index-form-immigrate-to-tocantins');
  if (to_index_form_immigrate_to_tocantins) {
    gsap.from('#to-index-form-immigrate-to-tocantins input, #to-index-form-immigrate-to-tocantins textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_state_vibe = document.getElementById('to-index-section-state-vibe');
  if (to_index_section_state_vibe) {
    gsap.fromTo('#to-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_quick_facts_snapshot = document.getElementById('to-index-section-quick-facts-snapshot');
  if (to_index_section_quick_facts_snapshot) {
    gsap.fromTo('#to-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_tocantins_map = document.getElementById('to-index-section-tocantins-map');
  if (to_index_section_tocantins_map) {
    gsap.fromTo('#to-index-section-tocantins-map', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_cost_of_living_tocantins = document.getElementById('to-index-section-cost-of-living-tocantins');
  if (to_index_section_cost_of_living_tocantins) {
    gsap.fromTo('#to-index-section-cost-of-living-tocantins', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_government_context = document.getElementById('to-index-section-government-context');
  if (to_index_section_government_context) {
    gsap.fromTo('#to-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_hero_immigration_notes = document.getElementById('to-index-hero-immigration-notes');
  if (to_index_hero_immigration_notes) {
    gsap.fromTo('#to-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_common_applicant_profiles = document.getElementById('to-index-list-common-applicant-profiles');
  if (to_index_list_common_applicant_profiles) {
    gsap.from('#to-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_economic_drivers = document.getElementById('to-index-list-economic-drivers');
  if (to_index_list_economic_drivers) {
    gsap.from('#to-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_demographics = document.getElementById('to-index-section-demographics');
  if (to_index_section_demographics) {
    gsap.fromTo('#to-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_regional_challenges = document.getElementById('to-index-section-regional-challenges');
  if (to_index_section_regional_challenges) {
    gsap.fromTo('#to-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_regional_opportunities = document.getElementById('to-index-section-regional-opportunities');
  if (to_index_section_regional_opportunities) {
    gsap.fromTo('#to-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_culture_daily_life = document.getElementById('to-index-section-culture-daily-life');
  if (to_index_section_culture_daily_life) {
    gsap.fromTo('#to-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_local_language_expressions = document.getElementById('to-index-list-local-language-expressions');
  if (to_index_list_local_language_expressions) {
    gsap.from('#to-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_food_cuisine = document.getElementById('to-index-list-food-cuisine');
  if (to_index_list_food_cuisine) {
    gsap.from('#to-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_festivals_traditions = document.getElementById('to-index-list-festivals-traditions');
  if (to_index_list_festivals_traditions) {
    gsap.from('#to-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_music_artistic_expression = document.getElementById('to-index-list-music-artistic-expression');
  if (to_index_list_music_artistic_expression) {
    gsap.from('#to-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_sports_recreation = document.getElementById('to-index-list-sports-recreation');
  if (to_index_list_sports_recreation) {
    gsap.from('#to-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_landmarks_historical_sites = document.getElementById('to-index-list-landmarks-historical-sites');
  if (to_index_list_landmarks_historical_sites) {
    gsap.from('#to-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_natural_features = document.getElementById('to-index-list-natural-features');
  if (to_index_list_natural_features) {
    gsap.from('#to-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_parks_protected_areas = document.getElementById('to-index-list-parks-protected-areas');
  if (to_index_list_parks_protected_areas) {
    gsap.from('#to-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_museums_cultural_institutions = document.getElementById('to-index-list-museums-cultural-institutions');
  if (to_index_list_museums_cultural_institutions) {
    gsap.from('#to-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_image_gallery = document.getElementById('to-index-section-image-gallery');
  if (to_index_section_image_gallery) {
    gsap.fromTo('#to-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_useful_government_links = document.getElementById('to-index-section-useful-government-links');
  if (to_index_section_useful_government_links) {
    gsap.fromTo('#to-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_hero_federal_police_immigration_links = document.getElementById('to-index-hero-federal-police-immigration-links');
  if (to_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#to-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_external_references = document.getElementById('to-index-section-external-references');
  if (to_index_section_external_references) {
    gsap.fromTo('#to-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_immigration_services_overview = document.getElementById('to-index-list-immigration-services-overview');
  if (to_index_list_immigration_services_overview) {
    gsap.from('#to-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_why_immigrate_here = document.getElementById('to-index-section-why-immigrate-here');
  if (to_index_section_why_immigrate_here) {
    gsap.fromTo('#to-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section_legal_guidance_disclaimers = document.getElementById('to-index-section-legal-guidance-disclaimers');
  if (to_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#to-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_travel_services = document.getElementById('to-index-list-travel-services');
  if (to_index_list_travel_services) {
    gsap.from('#to-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_list_how_the_process_works = document.getElementById('to-index-list-how-the-process-works');
  if (to_index_list_how_the_process_works) {
    gsap.from('#to-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_index_section__frequently_asked_questions_about_living_in_tocantins_ = document.getElementById('to-index-section--frequently-asked-questions-about-living-in-tocantins-');
  if (to_index_section__frequently_asked_questions_about_living_in_tocantins_) {
    gsap.fromTo('#to-index-section--frequently-asked-questions-about-living-in-tocantins-', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_contactcta_section_get_started_in_tocantins = document.getElementById('to-contactcta-section-get-started-in-tocantins');
  if (to_contactcta_section_get_started_in_tocantins) {
    gsap.fromTo('#to-contactcta-section-get-started-in-tocantins', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('to-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (to_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#to-renouncingcitizenship-form-renounce-brazilian-citizenship input, #to-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_list_quick_facts = document.getElementById('to-renouncingcitizenship-list-quick-facts');
  if (to_renouncingcitizenship_list_quick_facts) {
    gsap.from('#to-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('to-renouncingcitizenship-list-common-challenges-applicants-face');
  if (to_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#to-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('to-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (to_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#to-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_section_renunciation_overview = document.getElementById('to-renouncingcitizenship-section-renunciation-overview');
  if (to_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#to-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_form_who_is_this_for = document.getElementById('to-renouncingcitizenship-form-who-is-this-for');
  if (to_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#to-renouncingcitizenship-form-who-is-this-for input, #to-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_list_required_documents = document.getElementById('to-renouncingcitizenship-list-required-documents');
  if (to_renouncingcitizenship_list_required_documents) {
    gsap.from('#to-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_list_process = document.getElementById('to-renouncingcitizenship-list-process');
  if (to_renouncingcitizenship_list_process) {
    gsap.from('#to-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_section_timelines_deadlines = document.getElementById('to-renouncingcitizenship-section-timelines-deadlines');
  if (to_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#to-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_section_fees_costs = document.getElementById('to-renouncingcitizenship-section-fees-costs');
  if (to_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#to-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('to-renouncingcitizenship-list-risks-common-mistakes');
  if (to_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#to-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('to-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (to_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_section_tocantins_specific_context = document.getElementById('to-renouncingcitizenship-section-tocantins-specific-context');
  if (to_renouncingcitizenship_section_tocantins_specific_context) {
    gsap.fromTo('#to-renouncingcitizenship-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_section_what_our_clients_say = document.getElementById('to-renouncingcitizenship-section-what-our-clients-say');
  if (to_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#to-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('to-renouncingcitizenship-section-frequently-asked-questions');
  if (to_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#to-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_section_international_support = document.getElementById('to-renouncingcitizenship-section-international-support');
  if (to_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#to-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_list_our_credentials = document.getElementById('to-renouncingcitizenship-list-our-credentials');
  if (to_renouncingcitizenship_list_our_credentials) {
    gsap.from('#to-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_list_related_services = document.getElementById('to-renouncingcitizenship-list-related-services');
  if (to_renouncingcitizenship_list_related_services) {
    gsap.from('#to-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('to-renouncingcitizenship-section-youre-in-good-hands');
  if (to_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#to-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_renouncingcitizenship_section_21 = document.getElementById('to-renouncingcitizenship-section-21');
  if (to_renouncingcitizenship_section_21) {
    gsap.fromTo('#to-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('to-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (to_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#to-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #to-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_list_quick_facts = document.getElementById('to-provisional-list-quick-facts');
  if (to_provisional_list_quick_facts) {
    gsap.from('#to-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_list_common_challenges_applicants_face = document.getElementById('to-provisional-list-common-challenges-applicants-face');
  if (to_provisional_list_common_challenges_applicants_face) {
    gsap.from('#to-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_list_how_we_solve_these_challenges = document.getElementById('to-provisional-list-how-we-solve-these-challenges');
  if (to_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#to-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_section_naturalisation_overview = document.getElementById('to-provisional-section-naturalisation-overview');
  if (to_provisional_section_naturalisation_overview) {
    gsap.fromTo('#to-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_form_who_is_this_naturalisation_for = document.getElementById('to-provisional-form-who-is-this-naturalisation-for');
  if (to_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#to-provisional-form-who-is-this-naturalisation-for input, #to-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_list_required_documents = document.getElementById('to-provisional-list-required-documents');
  if (to_provisional_list_required_documents) {
    gsap.from('#to-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_list_application_process = document.getElementById('to-provisional-list-application-process');
  if (to_provisional_list_application_process) {
    gsap.from('#to-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_section_timelines_deadlines = document.getElementById('to-provisional-section-timelines-deadlines');
  if (to_provisional_section_timelines_deadlines) {
    gsap.fromTo('#to-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_section_fees_costs = document.getElementById('to-provisional-section-fees-costs');
  if (to_provisional_section_fees_costs) {
    gsap.fromTo('#to-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_list_risks_common_mistakes = document.getElementById('to-provisional-list-risks-common-mistakes');
  if (to_provisional_list_risks_common_mistakes) {
    gsap.from('#to-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_section_diy_vs_professional_assistance = document.getElementById('to-provisional-section-diy-vs-professional-assistance');
  if (to_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_section_tocantins_specific_context = document.getElementById('to-provisional-section-tocantins-specific-context');
  if (to_provisional_section_tocantins_specific_context) {
    gsap.fromTo('#to-provisional-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_section_what_our_clients_say = document.getElementById('to-provisional-section-what-our-clients-say');
  if (to_provisional_section_what_our_clients_say) {
    gsap.fromTo('#to-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_section_frequently_asked_questions = document.getElementById('to-provisional-section-frequently-asked-questions');
  if (to_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#to-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_section_international_support = document.getElementById('to-provisional-section-international-support');
  if (to_provisional_section_international_support) {
    gsap.fromTo('#to-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_list_our_credentials = document.getElementById('to-provisional-list-our-credentials');
  if (to_provisional_list_our_credentials) {
    gsap.from('#to-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_list_related_services = document.getElementById('to-provisional-list-related-services');
  if (to_provisional_list_related_services) {
    gsap.from('#to-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_section_youre_in_good_hands = document.getElementById('to-provisional-section-youre-in-good-hands');
  if (to_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#to-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_provisional_section_21 = document.getElementById('to-provisional-section-21');
  if (to_provisional_section_21) {
    gsap.fromTo('#to-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('to-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (to_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#to-special-form-special-naturalisation-in-brazil-for-particular-cases input, #to-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_list_quick_facts = document.getElementById('to-special-list-quick-facts');
  if (to_special_list_quick_facts) {
    gsap.from('#to-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_list_common_challenges_applicants_face = document.getElementById('to-special-list-common-challenges-applicants-face');
  if (to_special_list_common_challenges_applicants_face) {
    gsap.from('#to-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_list_how_we_solve_these_challenges = document.getElementById('to-special-list-how-we-solve-these-challenges');
  if (to_special_list_how_we_solve_these_challenges) {
    gsap.from('#to-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_section_naturalisation_overview = document.getElementById('to-special-section-naturalisation-overview');
  if (to_special_section_naturalisation_overview) {
    gsap.fromTo('#to-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_form_who_is_this_naturalisation_for = document.getElementById('to-special-form-who-is-this-naturalisation-for');
  if (to_special_form_who_is_this_naturalisation_for) {
    gsap.from('#to-special-form-who-is-this-naturalisation-for input, #to-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_list_required_documents = document.getElementById('to-special-list-required-documents');
  if (to_special_list_required_documents) {
    gsap.from('#to-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_list_application_process = document.getElementById('to-special-list-application-process');
  if (to_special_list_application_process) {
    gsap.from('#to-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_section_timelines_deadlines = document.getElementById('to-special-section-timelines-deadlines');
  if (to_special_section_timelines_deadlines) {
    gsap.fromTo('#to-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_section_fees_costs = document.getElementById('to-special-section-fees-costs');
  if (to_special_section_fees_costs) {
    gsap.fromTo('#to-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_list_risks_common_mistakes = document.getElementById('to-special-list-risks-common-mistakes');
  if (to_special_list_risks_common_mistakes) {
    gsap.from('#to-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_section_diy_vs_professional_assistance = document.getElementById('to-special-section-diy-vs-professional-assistance');
  if (to_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_section_tocantins_specific_context = document.getElementById('to-special-section-tocantins-specific-context');
  if (to_special_section_tocantins_specific_context) {
    gsap.fromTo('#to-special-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_section_what_our_clients_say = document.getElementById('to-special-section-what-our-clients-say');
  if (to_special_section_what_our_clients_say) {
    gsap.fromTo('#to-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_section_frequently_asked_questions = document.getElementById('to-special-section-frequently-asked-questions');
  if (to_special_section_frequently_asked_questions) {
    gsap.fromTo('#to-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_section_international_support = document.getElementById('to-special-section-international-support');
  if (to_special_section_international_support) {
    gsap.fromTo('#to-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_list_our_credentials = document.getElementById('to-special-list-our-credentials');
  if (to_special_list_our_credentials) {
    gsap.from('#to-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_list_related_services = document.getElementById('to-special-list-related-services');
  if (to_special_list_related_services) {
    gsap.from('#to-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_section_youre_in_good_hands = document.getElementById('to-special-section-youre-in-good-hands');
  if (to_special_section_youre_in_good_hands) {
    gsap.fromTo('#to-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_special_section_21 = document.getElementById('to-special-section-21');
  if (to_special_section_21) {
    gsap.fromTo('#to-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('to-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (to_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#to-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #to-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_list_quick_facts = document.getElementById('to-ordinary-list-quick-facts');
  if (to_ordinary_list_quick_facts) {
    gsap.from('#to-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_list_common_challenges_applicants_face = document.getElementById('to-ordinary-list-common-challenges-applicants-face');
  if (to_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#to-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_list_how_we_solve_these_challenges = document.getElementById('to-ordinary-list-how-we-solve-these-challenges');
  if (to_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#to-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_section_naturalisation_overview = document.getElementById('to-ordinary-section-naturalisation-overview');
  if (to_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#to-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_form_who_is_this_naturalisation_for = document.getElementById('to-ordinary-form-who-is-this-naturalisation-for');
  if (to_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#to-ordinary-form-who-is-this-naturalisation-for input, #to-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_list_required_documents = document.getElementById('to-ordinary-list-required-documents');
  if (to_ordinary_list_required_documents) {
    gsap.from('#to-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_list_application_process = document.getElementById('to-ordinary-list-application-process');
  if (to_ordinary_list_application_process) {
    gsap.from('#to-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_section_timelines_deadlines = document.getElementById('to-ordinary-section-timelines-deadlines');
  if (to_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#to-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_section_fees_costs = document.getElementById('to-ordinary-section-fees-costs');
  if (to_ordinary_section_fees_costs) {
    gsap.fromTo('#to-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_list_risks_common_mistakes = document.getElementById('to-ordinary-list-risks-common-mistakes');
  if (to_ordinary_list_risks_common_mistakes) {
    gsap.from('#to-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_section_diy_vs_professional_assistance = document.getElementById('to-ordinary-section-diy-vs-professional-assistance');
  if (to_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_section_tocantins_specific_context = document.getElementById('to-ordinary-section-tocantins-specific-context');
  if (to_ordinary_section_tocantins_specific_context) {
    gsap.fromTo('#to-ordinary-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_section_what_our_clients_say = document.getElementById('to-ordinary-section-what-our-clients-say');
  if (to_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#to-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_section_frequently_asked_questions = document.getElementById('to-ordinary-section-frequently-asked-questions');
  if (to_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#to-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_section_international_support = document.getElementById('to-ordinary-section-international-support');
  if (to_ordinary_section_international_support) {
    gsap.fromTo('#to-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_list_our_credentials = document.getElementById('to-ordinary-list-our-credentials');
  if (to_ordinary_list_our_credentials) {
    gsap.from('#to-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_list_related_services = document.getElementById('to-ordinary-list-related-services');
  if (to_ordinary_list_related_services) {
    gsap.from('#to-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_section_youre_in_good_hands = document.getElementById('to-ordinary-section-youre-in-good-hands');
  if (to_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#to-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_ordinary_section_21 = document.getElementById('to-ordinary-section-21');
  if (to_ordinary_section_21) {
    gsap.fromTo('#to-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('to-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (to_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#to-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #to-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_list_quick_facts = document.getElementById('to-extraordinary-list-quick-facts');
  if (to_extraordinary_list_quick_facts) {
    gsap.from('#to-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_list_common_challenges_applicants_face = document.getElementById('to-extraordinary-list-common-challenges-applicants-face');
  if (to_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#to-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_list_how_we_solve_these_challenges = document.getElementById('to-extraordinary-list-how-we-solve-these-challenges');
  if (to_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#to-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_section_naturalisation_overview = document.getElementById('to-extraordinary-section-naturalisation-overview');
  if (to_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#to-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('to-extraordinary-form-who-is-this-naturalisation-for');
  if (to_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#to-extraordinary-form-who-is-this-naturalisation-for input, #to-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_list_required_documents = document.getElementById('to-extraordinary-list-required-documents');
  if (to_extraordinary_list_required_documents) {
    gsap.from('#to-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_list_application_process = document.getElementById('to-extraordinary-list-application-process');
  if (to_extraordinary_list_application_process) {
    gsap.from('#to-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_section_timelines_deadlines = document.getElementById('to-extraordinary-section-timelines-deadlines');
  if (to_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#to-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_section_fees_costs = document.getElementById('to-extraordinary-section-fees-costs');
  if (to_extraordinary_section_fees_costs) {
    gsap.fromTo('#to-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_list_risks_common_mistakes = document.getElementById('to-extraordinary-list-risks-common-mistakes');
  if (to_extraordinary_list_risks_common_mistakes) {
    gsap.from('#to-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_section_diy_vs_professional_assistance = document.getElementById('to-extraordinary-section-diy-vs-professional-assistance');
  if (to_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_section_tocantins_specific_context = document.getElementById('to-extraordinary-section-tocantins-specific-context');
  if (to_extraordinary_section_tocantins_specific_context) {
    gsap.fromTo('#to-extraordinary-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_section_what_our_clients_say = document.getElementById('to-extraordinary-section-what-our-clients-say');
  if (to_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#to-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_section_frequently_asked_questions = document.getElementById('to-extraordinary-section-frequently-asked-questions');
  if (to_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#to-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_section_international_support = document.getElementById('to-extraordinary-section-international-support');
  if (to_extraordinary_section_international_support) {
    gsap.fromTo('#to-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_list_our_credentials = document.getElementById('to-extraordinary-list-our-credentials');
  if (to_extraordinary_list_our_credentials) {
    gsap.from('#to-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_list_related_services = document.getElementById('to-extraordinary-list-related-services');
  if (to_extraordinary_list_related_services) {
    gsap.from('#to-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_section_youre_in_good_hands = document.getElementById('to-extraordinary-section-youre-in-good-hands');
  if (to_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#to-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extraordinary_section_21 = document.getElementById('to-extraordinary-section-21');
  if (to_extraordinary_section_21) {
    gsap.fromTo('#to-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('to-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (to_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#to-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #to-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_list_quick_facts = document.getElementById('to-reacquisitioncitizenship-list-quick-facts');
  if (to_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#to-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('to-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (to_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#to-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('to-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (to_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#to-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('to-reacquisitioncitizenship-section-reacquisition-overview');
  if (to_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#to-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('to-reacquisitioncitizenship-form-who-is-this-for');
  if (to_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#to-reacquisitioncitizenship-form-who-is-this-for input, #to-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_list_required_documents = document.getElementById('to-reacquisitioncitizenship-list-required-documents');
  if (to_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#to-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_list_process = document.getElementById('to-reacquisitioncitizenship-list-process');
  if (to_reacquisitioncitizenship_list_process) {
    gsap.from('#to-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('to-reacquisitioncitizenship-section-timelines-deadlines');
  if (to_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#to-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_section_fees_costs = document.getElementById('to-reacquisitioncitizenship-section-fees-costs');
  if (to_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#to-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('to-reacquisitioncitizenship-list-risks-common-mistakes');
  if (to_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#to-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('to-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (to_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_section_tocantins_specific_context = document.getElementById('to-reacquisitioncitizenship-section-tocantins-specific-context');
  if (to_reacquisitioncitizenship_section_tocantins_specific_context) {
    gsap.fromTo('#to-reacquisitioncitizenship-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('to-reacquisitioncitizenship-section-what-our-clients-say');
  if (to_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#to-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('to-reacquisitioncitizenship-section-frequently-asked-questions');
  if (to_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#to-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_section_international_support = document.getElementById('to-reacquisitioncitizenship-section-international-support');
  if (to_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#to-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_list_our_credentials = document.getElementById('to-reacquisitioncitizenship-list-our-credentials');
  if (to_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#to-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_list_related_services = document.getElementById('to-reacquisitioncitizenship-list-related-services');
  if (to_reacquisitioncitizenship_list_related_services) {
    gsap.from('#to-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('to-reacquisitioncitizenship-section-youre-in-good-hands');
  if (to_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#to-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_reacquisitioncitizenship_section_21 = document.getElementById('to-reacquisitioncitizenship-section-21');
  if (to_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#to-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('to-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (to_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#to-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #to-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_list_quick_facts = document.getElementById('to-scientificresearch-list-quick-facts');
  if (to_scientificresearch_list_quick_facts) {
    gsap.from('#to-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_list_common_challenges_applicants_face = document.getElementById('to-scientificresearch-list-common-challenges-applicants-face');
  if (to_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#to-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('to-scientificresearch-list-how-we-solve-these-challenges');
  if (to_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#to-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_section_residency_overview = document.getElementById('to-scientificresearch-section-residency-overview');
  if (to_scientificresearch_section_residency_overview) {
    gsap.fromTo('#to-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_form_who_is_this_residency_for = document.getElementById('to-scientificresearch-form-who-is-this-residency-for');
  if (to_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#to-scientificresearch-form-who-is-this-residency-for input, #to-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_list_required_documents = document.getElementById('to-scientificresearch-list-required-documents');
  if (to_scientificresearch_list_required_documents) {
    gsap.from('#to-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_list_application_process = document.getElementById('to-scientificresearch-list-application-process');
  if (to_scientificresearch_list_application_process) {
    gsap.from('#to-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_section_timelines_deadlines = document.getElementById('to-scientificresearch-section-timelines-deadlines');
  if (to_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#to-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_section_fees_costs = document.getElementById('to-scientificresearch-section-fees-costs');
  if (to_scientificresearch_section_fees_costs) {
    gsap.fromTo('#to-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_list_risks_common_mistakes = document.getElementById('to-scientificresearch-list-risks-common-mistakes');
  if (to_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#to-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('to-scientificresearch-section-diy-vs-professional-assistance');
  if (to_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_section_tocantins_specific_context = document.getElementById('to-scientificresearch-section-tocantins-specific-context');
  if (to_scientificresearch_section_tocantins_specific_context) {
    gsap.fromTo('#to-scientificresearch-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_section_what_our_clients_say = document.getElementById('to-scientificresearch-section-what-our-clients-say');
  if (to_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#to-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_section_frequently_asked_questions = document.getElementById('to-scientificresearch-section-frequently-asked-questions');
  if (to_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#to-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_section_international_support = document.getElementById('to-scientificresearch-section-international-support');
  if (to_scientificresearch_section_international_support) {
    gsap.fromTo('#to-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_list_our_credentials = document.getElementById('to-scientificresearch-list-our-credentials');
  if (to_scientificresearch_list_our_credentials) {
    gsap.from('#to-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_list_related_services = document.getElementById('to-scientificresearch-list-related-services');
  if (to_scientificresearch_list_related_services) {
    gsap.from('#to-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_section_youre_in_good_hands = document.getElementById('to-scientificresearch-section-youre-in-good-hands');
  if (to_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#to-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_scientificresearch_section_21 = document.getElementById('to-scientificresearch-section-21');
  if (to_scientificresearch_section_21) {
    gsap.fromTo('#to-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_form_study_in_brazil_with_study_residency = document.getElementById('to-study-form-study-in-brazil-with-study-residency');
  if (to_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#to-study-form-study-in-brazil-with-study-residency input, #to-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_list_quick_facts = document.getElementById('to-study-list-quick-facts');
  if (to_study_list_quick_facts) {
    gsap.from('#to-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_list_common_challenges_applicants_face = document.getElementById('to-study-list-common-challenges-applicants-face');
  if (to_study_list_common_challenges_applicants_face) {
    gsap.from('#to-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_list_how_we_solve_these_challenges = document.getElementById('to-study-list-how-we-solve-these-challenges');
  if (to_study_list_how_we_solve_these_challenges) {
    gsap.from('#to-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_section_residency_overview = document.getElementById('to-study-section-residency-overview');
  if (to_study_section_residency_overview) {
    gsap.fromTo('#to-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_form_who_is_this_residency_for = document.getElementById('to-study-form-who-is-this-residency-for');
  if (to_study_form_who_is_this_residency_for) {
    gsap.from('#to-study-form-who-is-this-residency-for input, #to-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_list_required_documents = document.getElementById('to-study-list-required-documents');
  if (to_study_list_required_documents) {
    gsap.from('#to-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_list_application_process = document.getElementById('to-study-list-application-process');
  if (to_study_list_application_process) {
    gsap.from('#to-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_section_timelines_deadlines = document.getElementById('to-study-section-timelines-deadlines');
  if (to_study_section_timelines_deadlines) {
    gsap.fromTo('#to-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_section_fees_costs = document.getElementById('to-study-section-fees-costs');
  if (to_study_section_fees_costs) {
    gsap.fromTo('#to-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_list_risks_common_mistakes = document.getElementById('to-study-list-risks-common-mistakes');
  if (to_study_list_risks_common_mistakes) {
    gsap.from('#to-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_section_diy_vs_professional_assistance = document.getElementById('to-study-section-diy-vs-professional-assistance');
  if (to_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_section_tocantins_specific_context = document.getElementById('to-study-section-tocantins-specific-context');
  if (to_study_section_tocantins_specific_context) {
    gsap.fromTo('#to-study-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_section_what_our_clients_say = document.getElementById('to-study-section-what-our-clients-say');
  if (to_study_section_what_our_clients_say) {
    gsap.fromTo('#to-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_section_frequently_asked_questions = document.getElementById('to-study-section-frequently-asked-questions');
  if (to_study_section_frequently_asked_questions) {
    gsap.fromTo('#to-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_section_international_support = document.getElementById('to-study-section-international-support');
  if (to_study_section_international_support) {
    gsap.fromTo('#to-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_list_our_credentials = document.getElementById('to-study-list-our-credentials');
  if (to_study_list_our_credentials) {
    gsap.from('#to-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_list_related_services = document.getElementById('to-study-list-related-services');
  if (to_study_list_related_services) {
    gsap.from('#to-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_section_youre_in_good_hands = document.getElementById('to-study-section-youre-in-good-hands');
  if (to_study_section_youre_in_good_hands) {
    gsap.fromTo('#to-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_study_section_21 = document.getElementById('to-study-section-21');
  if (to_study_section_21) {
    gsap.fromTo('#to-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('to-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (to_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#to-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #to-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_list_quick_facts = document.getElementById('to-educationalexchange-list-quick-facts');
  if (to_educationalexchange_list_quick_facts) {
    gsap.from('#to-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_list_common_challenges_applicants_face = document.getElementById('to-educationalexchange-list-common-challenges-applicants-face');
  if (to_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#to-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('to-educationalexchange-list-how-we-solve-these-challenges');
  if (to_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#to-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_section_residency_overview = document.getElementById('to-educationalexchange-section-residency-overview');
  if (to_educationalexchange_section_residency_overview) {
    gsap.fromTo('#to-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_form_who_is_this_residency_for = document.getElementById('to-educationalexchange-form-who-is-this-residency-for');
  if (to_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#to-educationalexchange-form-who-is-this-residency-for input, #to-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_list_required_documents = document.getElementById('to-educationalexchange-list-required-documents');
  if (to_educationalexchange_list_required_documents) {
    gsap.from('#to-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_list_application_process = document.getElementById('to-educationalexchange-list-application-process');
  if (to_educationalexchange_list_application_process) {
    gsap.from('#to-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_section_timelines_deadlines = document.getElementById('to-educationalexchange-section-timelines-deadlines');
  if (to_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#to-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_section_fees_costs = document.getElementById('to-educationalexchange-section-fees-costs');
  if (to_educationalexchange_section_fees_costs) {
    gsap.fromTo('#to-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_list_risks_common_mistakes = document.getElementById('to-educationalexchange-list-risks-common-mistakes');
  if (to_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#to-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('to-educationalexchange-section-diy-vs-professional-assistance');
  if (to_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_section_tocantins_specific_context = document.getElementById('to-educationalexchange-section-tocantins-specific-context');
  if (to_educationalexchange_section_tocantins_specific_context) {
    gsap.fromTo('#to-educationalexchange-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_section_what_our_clients_say = document.getElementById('to-educationalexchange-section-what-our-clients-say');
  if (to_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#to-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_section_frequently_asked_questions = document.getElementById('to-educationalexchange-section-frequently-asked-questions');
  if (to_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#to-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_section_international_support = document.getElementById('to-educationalexchange-section-international-support');
  if (to_educationalexchange_section_international_support) {
    gsap.fromTo('#to-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_list_our_credentials = document.getElementById('to-educationalexchange-list-our-credentials');
  if (to_educationalexchange_list_our_credentials) {
    gsap.from('#to-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_list_related_services = document.getElementById('to-educationalexchange-list-related-services');
  if (to_educationalexchange_list_related_services) {
    gsap.from('#to-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_section_youre_in_good_hands = document.getElementById('to-educationalexchange-section-youre-in-good-hands');
  if (to_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#to-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_educationalexchange_section_21 = document.getElementById('to-educationalexchange-section-21');
  if (to_educationalexchange_section_21) {
    gsap.fromTo('#to-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('to-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (to_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#to-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #to-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_list_quick_facts = document.getElementById('to-humanitarian-list-quick-facts');
  if (to_humanitarian_list_quick_facts) {
    gsap.from('#to-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_list_common_challenges_applicants_face = document.getElementById('to-humanitarian-list-common-challenges-applicants-face');
  if (to_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#to-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_list_how_we_solve_these_challenges = document.getElementById('to-humanitarian-list-how-we-solve-these-challenges');
  if (to_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#to-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_section_residency_overview = document.getElementById('to-humanitarian-section-residency-overview');
  if (to_humanitarian_section_residency_overview) {
    gsap.fromTo('#to-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_form_who_is_this_residency_for = document.getElementById('to-humanitarian-form-who-is-this-residency-for');
  if (to_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#to-humanitarian-form-who-is-this-residency-for input, #to-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_list_required_documents = document.getElementById('to-humanitarian-list-required-documents');
  if (to_humanitarian_list_required_documents) {
    gsap.from('#to-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_list_application_process = document.getElementById('to-humanitarian-list-application-process');
  if (to_humanitarian_list_application_process) {
    gsap.from('#to-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_section_timelines_deadlines = document.getElementById('to-humanitarian-section-timelines-deadlines');
  if (to_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#to-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_section_fees_costs = document.getElementById('to-humanitarian-section-fees-costs');
  if (to_humanitarian_section_fees_costs) {
    gsap.fromTo('#to-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_list_risks_common_mistakes = document.getElementById('to-humanitarian-list-risks-common-mistakes');
  if (to_humanitarian_list_risks_common_mistakes) {
    gsap.from('#to-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_section_diy_vs_professional_assistance = document.getElementById('to-humanitarian-section-diy-vs-professional-assistance');
  if (to_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_section_tocantins_specific_context = document.getElementById('to-humanitarian-section-tocantins-specific-context');
  if (to_humanitarian_section_tocantins_specific_context) {
    gsap.fromTo('#to-humanitarian-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_section_what_our_clients_say = document.getElementById('to-humanitarian-section-what-our-clients-say');
  if (to_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#to-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_section_frequently_asked_questions = document.getElementById('to-humanitarian-section-frequently-asked-questions');
  if (to_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#to-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_section_international_support = document.getElementById('to-humanitarian-section-international-support');
  if (to_humanitarian_section_international_support) {
    gsap.fromTo('#to-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_list_our_credentials = document.getElementById('to-humanitarian-list-our-credentials');
  if (to_humanitarian_list_our_credentials) {
    gsap.from('#to-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_list_related_services = document.getElementById('to-humanitarian-list-related-services');
  if (to_humanitarian_list_related_services) {
    gsap.from('#to-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_section_youre_in_good_hands = document.getElementById('to-humanitarian-section-youre-in-good-hands');
  if (to_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#to-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_humanitarian_section_21 = document.getElementById('to-humanitarian-section-21');
  if (to_humanitarian_section_21) {
    gsap.fromTo('#to-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('to-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (to_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#to-digitalnomad-form-digital-nomad-residency-in-brazil input, #to-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_list_quick_facts = document.getElementById('to-digitalnomad-list-quick-facts');
  if (to_digitalnomad_list_quick_facts) {
    gsap.from('#to-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_list_common_challenges_applicants_face = document.getElementById('to-digitalnomad-list-common-challenges-applicants-face');
  if (to_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#to-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('to-digitalnomad-list-how-we-solve-these-challenges');
  if (to_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#to-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_section_residency_overview = document.getElementById('to-digitalnomad-section-residency-overview');
  if (to_digitalnomad_section_residency_overview) {
    gsap.fromTo('#to-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_form_who_is_this_residency_for = document.getElementById('to-digitalnomad-form-who-is-this-residency-for');
  if (to_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#to-digitalnomad-form-who-is-this-residency-for input, #to-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_list_required_documents = document.getElementById('to-digitalnomad-list-required-documents');
  if (to_digitalnomad_list_required_documents) {
    gsap.from('#to-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_list_application_process = document.getElementById('to-digitalnomad-list-application-process');
  if (to_digitalnomad_list_application_process) {
    gsap.from('#to-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_section_timelines_deadlines = document.getElementById('to-digitalnomad-section-timelines-deadlines');
  if (to_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#to-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_section_fees_costs = document.getElementById('to-digitalnomad-section-fees-costs');
  if (to_digitalnomad_section_fees_costs) {
    gsap.fromTo('#to-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_list_risks_common_mistakes = document.getElementById('to-digitalnomad-list-risks-common-mistakes');
  if (to_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#to-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('to-digitalnomad-section-diy-vs-professional-assistance');
  if (to_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_section_tocantins_specific_context = document.getElementById('to-digitalnomad-section-tocantins-specific-context');
  if (to_digitalnomad_section_tocantins_specific_context) {
    gsap.fromTo('#to-digitalnomad-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_section_what_our_clients_say = document.getElementById('to-digitalnomad-section-what-our-clients-say');
  if (to_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#to-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_section_frequently_asked_questions = document.getElementById('to-digitalnomad-section-frequently-asked-questions');
  if (to_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#to-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_section_international_support = document.getElementById('to-digitalnomad-section-international-support');
  if (to_digitalnomad_section_international_support) {
    gsap.fromTo('#to-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_list_our_credentials = document.getElementById('to-digitalnomad-list-our-credentials');
  if (to_digitalnomad_list_our_credentials) {
    gsap.from('#to-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_list_related_services = document.getElementById('to-digitalnomad-list-related-services');
  if (to_digitalnomad_list_related_services) {
    gsap.from('#to-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_section_youre_in_good_hands = document.getElementById('to-digitalnomad-section-youre-in-good-hands');
  if (to_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#to-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_digitalnomad_section_21 = document.getElementById('to-digitalnomad-section-21');
  if (to_digitalnomad_section_21) {
    gsap.fromTo('#to-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('to-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (to_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#to-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #to-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_list_quick_facts = document.getElementById('to-familyreunion-list-quick-facts');
  if (to_familyreunion_list_quick_facts) {
    gsap.from('#to-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_list_common_challenges_applicants_face = document.getElementById('to-familyreunion-list-common-challenges-applicants-face');
  if (to_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#to-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_list_how_we_solve_these_challenges = document.getElementById('to-familyreunion-list-how-we-solve-these-challenges');
  if (to_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#to-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_section_residency_overview = document.getElementById('to-familyreunion-section-residency-overview');
  if (to_familyreunion_section_residency_overview) {
    gsap.fromTo('#to-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_form_who_is_this_residency_for = document.getElementById('to-familyreunion-form-who-is-this-residency-for');
  if (to_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#to-familyreunion-form-who-is-this-residency-for input, #to-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_list_required_documents = document.getElementById('to-familyreunion-list-required-documents');
  if (to_familyreunion_list_required_documents) {
    gsap.from('#to-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_list_application_process = document.getElementById('to-familyreunion-list-application-process');
  if (to_familyreunion_list_application_process) {
    gsap.from('#to-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_section_timelines_deadlines = document.getElementById('to-familyreunion-section-timelines-deadlines');
  if (to_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#to-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_section_fees_costs = document.getElementById('to-familyreunion-section-fees-costs');
  if (to_familyreunion_section_fees_costs) {
    gsap.fromTo('#to-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_list_risks_common_mistakes = document.getElementById('to-familyreunion-list-risks-common-mistakes');
  if (to_familyreunion_list_risks_common_mistakes) {
    gsap.from('#to-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_section_diy_vs_professional_assistance = document.getElementById('to-familyreunion-section-diy-vs-professional-assistance');
  if (to_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_section_tocantins_specific_context = document.getElementById('to-familyreunion-section-tocantins-specific-context');
  if (to_familyreunion_section_tocantins_specific_context) {
    gsap.fromTo('#to-familyreunion-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_section_what_our_clients_say = document.getElementById('to-familyreunion-section-what-our-clients-say');
  if (to_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#to-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_section_frequently_asked_questions = document.getElementById('to-familyreunion-section-frequently-asked-questions');
  if (to_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#to-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_section_international_support = document.getElementById('to-familyreunion-section-international-support');
  if (to_familyreunion_section_international_support) {
    gsap.fromTo('#to-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_list_our_credentials = document.getElementById('to-familyreunion-list-our-credentials');
  if (to_familyreunion_list_our_credentials) {
    gsap.from('#to-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_list_related_services = document.getElementById('to-familyreunion-list-related-services');
  if (to_familyreunion_list_related_services) {
    gsap.from('#to-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_section_youre_in_good_hands = document.getElementById('to-familyreunion-section-youre-in-good-hands');
  if (to_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#to-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_familyreunion_section_21 = document.getElementById('to-familyreunion-section-21');
  if (to_familyreunion_section_21) {
    gsap.fromTo('#to-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('to-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (to_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#to-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #to-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_list_quick_facts = document.getElementById('to-mercosul-list-quick-facts');
  if (to_mercosul_list_quick_facts) {
    gsap.from('#to-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_list_common_challenges_applicants_face = document.getElementById('to-mercosul-list-common-challenges-applicants-face');
  if (to_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#to-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_list_how_we_solve_these_challenges = document.getElementById('to-mercosul-list-how-we-solve-these-challenges');
  if (to_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#to-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_section_residency_overview = document.getElementById('to-mercosul-section-residency-overview');
  if (to_mercosul_section_residency_overview) {
    gsap.fromTo('#to-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_form_who_is_this_residency_for = document.getElementById('to-mercosul-form-who-is-this-residency-for');
  if (to_mercosul_form_who_is_this_residency_for) {
    gsap.from('#to-mercosul-form-who-is-this-residency-for input, #to-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_list_required_documents = document.getElementById('to-mercosul-list-required-documents');
  if (to_mercosul_list_required_documents) {
    gsap.from('#to-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_list_application_process = document.getElementById('to-mercosul-list-application-process');
  if (to_mercosul_list_application_process) {
    gsap.from('#to-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_section_timelines_deadlines = document.getElementById('to-mercosul-section-timelines-deadlines');
  if (to_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#to-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_section_fees_costs = document.getElementById('to-mercosul-section-fees-costs');
  if (to_mercosul_section_fees_costs) {
    gsap.fromTo('#to-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_list_risks_common_mistakes = document.getElementById('to-mercosul-list-risks-common-mistakes');
  if (to_mercosul_list_risks_common_mistakes) {
    gsap.from('#to-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_section_diy_vs_professional_assistance = document.getElementById('to-mercosul-section-diy-vs-professional-assistance');
  if (to_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_section_tocantins_specific_context = document.getElementById('to-mercosul-section-tocantins-specific-context');
  if (to_mercosul_section_tocantins_specific_context) {
    gsap.fromTo('#to-mercosul-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_section_what_our_clients_say = document.getElementById('to-mercosul-section-what-our-clients-say');
  if (to_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#to-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_section_frequently_asked_questions = document.getElementById('to-mercosul-section-frequently-asked-questions');
  if (to_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#to-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_section_international_support = document.getElementById('to-mercosul-section-international-support');
  if (to_mercosul_section_international_support) {
    gsap.fromTo('#to-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_list_our_credentials = document.getElementById('to-mercosul-list-our-credentials');
  if (to_mercosul_list_our_credentials) {
    gsap.from('#to-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_list_related_services = document.getElementById('to-mercosul-list-related-services');
  if (to_mercosul_list_related_services) {
    gsap.from('#to-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_section_youre_in_good_hands = document.getElementById('to-mercosul-section-youre-in-good-hands');
  if (to_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#to-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_mercosul_section_21 = document.getElementById('to-mercosul-section-21');
  if (to_mercosul_section_21) {
    gsap.fromTo('#to-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('to-retiree-form-retire-in-brazil-with-retiree-residency');
  if (to_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#to-retiree-form-retire-in-brazil-with-retiree-residency input, #to-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_list_quick_facts = document.getElementById('to-retiree-list-quick-facts');
  if (to_retiree_list_quick_facts) {
    gsap.from('#to-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_list_common_challenges_applicants_face = document.getElementById('to-retiree-list-common-challenges-applicants-face');
  if (to_retiree_list_common_challenges_applicants_face) {
    gsap.from('#to-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_list_how_we_solve_these_challenges = document.getElementById('to-retiree-list-how-we-solve-these-challenges');
  if (to_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#to-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_section_residency_overview = document.getElementById('to-retiree-section-residency-overview');
  if (to_retiree_section_residency_overview) {
    gsap.fromTo('#to-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_form_who_is_this_residency_for = document.getElementById('to-retiree-form-who-is-this-residency-for');
  if (to_retiree_form_who_is_this_residency_for) {
    gsap.from('#to-retiree-form-who-is-this-residency-for input, #to-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_list_required_documents = document.getElementById('to-retiree-list-required-documents');
  if (to_retiree_list_required_documents) {
    gsap.from('#to-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_list_application_process = document.getElementById('to-retiree-list-application-process');
  if (to_retiree_list_application_process) {
    gsap.from('#to-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_section_timelines_deadlines = document.getElementById('to-retiree-section-timelines-deadlines');
  if (to_retiree_section_timelines_deadlines) {
    gsap.fromTo('#to-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_section_fees_costs = document.getElementById('to-retiree-section-fees-costs');
  if (to_retiree_section_fees_costs) {
    gsap.fromTo('#to-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_list_risks_common_mistakes = document.getElementById('to-retiree-list-risks-common-mistakes');
  if (to_retiree_list_risks_common_mistakes) {
    gsap.from('#to-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_section_diy_vs_professional_assistance = document.getElementById('to-retiree-section-diy-vs-professional-assistance');
  if (to_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_section_tocantins_specific_context = document.getElementById('to-retiree-section-tocantins-specific-context');
  if (to_retiree_section_tocantins_specific_context) {
    gsap.fromTo('#to-retiree-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_section_what_our_clients_say = document.getElementById('to-retiree-section-what-our-clients-say');
  if (to_retiree_section_what_our_clients_say) {
    gsap.fromTo('#to-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_section_frequently_asked_questions = document.getElementById('to-retiree-section-frequently-asked-questions');
  if (to_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#to-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_section_international_support = document.getElementById('to-retiree-section-international-support');
  if (to_retiree_section_international_support) {
    gsap.fromTo('#to-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_list_our_credentials = document.getElementById('to-retiree-list-our-credentials');
  if (to_retiree_list_our_credentials) {
    gsap.from('#to-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_list_related_services = document.getElementById('to-retiree-list-related-services');
  if (to_retiree_list_related_services) {
    gsap.from('#to-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_section_youre_in_good_hands = document.getElementById('to-retiree-section-youre-in-good-hands');
  if (to_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#to-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_retiree_section_21 = document.getElementById('to-retiree-section-21');
  if (to_retiree_section_21) {
    gsap.fromTo('#to-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('to-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (to_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#to-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #to-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_list_quick_facts = document.getElementById('to-volunteer-list-quick-facts');
  if (to_volunteer_list_quick_facts) {
    gsap.from('#to-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_list_common_challenges_applicants_face = document.getElementById('to-volunteer-list-common-challenges-applicants-face');
  if (to_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#to-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_list_how_we_solve_these_challenges = document.getElementById('to-volunteer-list-how-we-solve-these-challenges');
  if (to_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#to-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_section_residency_overview = document.getElementById('to-volunteer-section-residency-overview');
  if (to_volunteer_section_residency_overview) {
    gsap.fromTo('#to-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_form_who_is_this_residency_for = document.getElementById('to-volunteer-form-who-is-this-residency-for');
  if (to_volunteer_form_who_is_this_residency_for) {
    gsap.from('#to-volunteer-form-who-is-this-residency-for input, #to-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_list_required_documents = document.getElementById('to-volunteer-list-required-documents');
  if (to_volunteer_list_required_documents) {
    gsap.from('#to-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_list_application_process = document.getElementById('to-volunteer-list-application-process');
  if (to_volunteer_list_application_process) {
    gsap.from('#to-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_section_timelines_deadlines = document.getElementById('to-volunteer-section-timelines-deadlines');
  if (to_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#to-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_section_fees_costs = document.getElementById('to-volunteer-section-fees-costs');
  if (to_volunteer_section_fees_costs) {
    gsap.fromTo('#to-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_list_risks_common_mistakes = document.getElementById('to-volunteer-list-risks-common-mistakes');
  if (to_volunteer_list_risks_common_mistakes) {
    gsap.from('#to-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_section_diy_vs_professional_assistance = document.getElementById('to-volunteer-section-diy-vs-professional-assistance');
  if (to_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_section_tocantins_specific_context = document.getElementById('to-volunteer-section-tocantins-specific-context');
  if (to_volunteer_section_tocantins_specific_context) {
    gsap.fromTo('#to-volunteer-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_section_what_our_clients_say = document.getElementById('to-volunteer-section-what-our-clients-say');
  if (to_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#to-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_section_frequently_asked_questions = document.getElementById('to-volunteer-section-frequently-asked-questions');
  if (to_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#to-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_section_international_support = document.getElementById('to-volunteer-section-international-support');
  if (to_volunteer_section_international_support) {
    gsap.fromTo('#to-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_list_our_credentials = document.getElementById('to-volunteer-list-our-credentials');
  if (to_volunteer_list_our_credentials) {
    gsap.from('#to-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_list_related_services = document.getElementById('to-volunteer-list-related-services');
  if (to_volunteer_list_related_services) {
    gsap.from('#to-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_section_youre_in_good_hands = document.getElementById('to-volunteer-section-youre-in-good-hands');
  if (to_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#to-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_volunteer_section_21 = document.getElementById('to-volunteer-section-21');
  if (to_volunteer_section_21) {
    gsap.fromTo('#to-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('to-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (to_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#to-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #to-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_list_quick_facts = document.getElementById('to-skilledworker-list-quick-facts');
  if (to_skilledworker_list_quick_facts) {
    gsap.from('#to-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_list_common_challenges_applicants_face = document.getElementById('to-skilledworker-list-common-challenges-applicants-face');
  if (to_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#to-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_list_how_we_solve_these_challenges = document.getElementById('to-skilledworker-list-how-we-solve-these-challenges');
  if (to_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#to-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_section_residency_overview = document.getElementById('to-skilledworker-section-residency-overview');
  if (to_skilledworker_section_residency_overview) {
    gsap.fromTo('#to-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_form_who_is_this_residency_for = document.getElementById('to-skilledworker-form-who-is-this-residency-for');
  if (to_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#to-skilledworker-form-who-is-this-residency-for input, #to-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_list_required_documents = document.getElementById('to-skilledworker-list-required-documents');
  if (to_skilledworker_list_required_documents) {
    gsap.from('#to-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_list_application_process = document.getElementById('to-skilledworker-list-application-process');
  if (to_skilledworker_list_application_process) {
    gsap.from('#to-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_section_timelines_deadlines = document.getElementById('to-skilledworker-section-timelines-deadlines');
  if (to_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#to-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_section_fees_costs = document.getElementById('to-skilledworker-section-fees-costs');
  if (to_skilledworker_section_fees_costs) {
    gsap.fromTo('#to-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_list_risks_common_mistakes = document.getElementById('to-skilledworker-list-risks-common-mistakes');
  if (to_skilledworker_list_risks_common_mistakes) {
    gsap.from('#to-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_section_diy_vs_professional_assistance = document.getElementById('to-skilledworker-section-diy-vs-professional-assistance');
  if (to_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_section_tocantins_specific_context = document.getElementById('to-skilledworker-section-tocantins-specific-context');
  if (to_skilledworker_section_tocantins_specific_context) {
    gsap.fromTo('#to-skilledworker-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_section_what_our_clients_say = document.getElementById('to-skilledworker-section-what-our-clients-say');
  if (to_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#to-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_section_frequently_asked_questions = document.getElementById('to-skilledworker-section-frequently-asked-questions');
  if (to_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#to-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_section_international_support = document.getElementById('to-skilledworker-section-international-support');
  if (to_skilledworker_section_international_support) {
    gsap.fromTo('#to-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_list_our_credentials = document.getElementById('to-skilledworker-list-our-credentials');
  if (to_skilledworker_list_our_credentials) {
    gsap.from('#to-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_list_related_services = document.getElementById('to-skilledworker-list-related-services');
  if (to_skilledworker_list_related_services) {
    gsap.from('#to-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_section_youre_in_good_hands = document.getElementById('to-skilledworker-section-youre-in-good-hands');
  if (to_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#to-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_skilledworker_section_21 = document.getElementById('to-skilledworker-section-21');
  if (to_skilledworker_section_21) {
    gsap.fromTo('#to-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('to-religious-form-religious-residency-in-brazil-for-missions');
  if (to_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#to-religious-form-religious-residency-in-brazil-for-missions input, #to-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_list_quick_facts = document.getElementById('to-religious-list-quick-facts');
  if (to_religious_list_quick_facts) {
    gsap.from('#to-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_list_common_challenges_applicants_face = document.getElementById('to-religious-list-common-challenges-applicants-face');
  if (to_religious_list_common_challenges_applicants_face) {
    gsap.from('#to-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_list_how_we_solve_these_challenges = document.getElementById('to-religious-list-how-we-solve-these-challenges');
  if (to_religious_list_how_we_solve_these_challenges) {
    gsap.from('#to-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_section_residency_overview = document.getElementById('to-religious-section-residency-overview');
  if (to_religious_section_residency_overview) {
    gsap.fromTo('#to-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_form_who_is_this_residency_for = document.getElementById('to-religious-form-who-is-this-residency-for');
  if (to_religious_form_who_is_this_residency_for) {
    gsap.from('#to-religious-form-who-is-this-residency-for input, #to-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_list_required_documents = document.getElementById('to-religious-list-required-documents');
  if (to_religious_list_required_documents) {
    gsap.from('#to-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_list_application_process = document.getElementById('to-religious-list-application-process');
  if (to_religious_list_application_process) {
    gsap.from('#to-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_section_timelines_deadlines = document.getElementById('to-religious-section-timelines-deadlines');
  if (to_religious_section_timelines_deadlines) {
    gsap.fromTo('#to-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_section_fees_costs = document.getElementById('to-religious-section-fees-costs');
  if (to_religious_section_fees_costs) {
    gsap.fromTo('#to-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_list_risks_common_mistakes = document.getElementById('to-religious-list-risks-common-mistakes');
  if (to_religious_list_risks_common_mistakes) {
    gsap.from('#to-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_section_diy_vs_professional_assistance = document.getElementById('to-religious-section-diy-vs-professional-assistance');
  if (to_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_section_tocantins_specific_context = document.getElementById('to-religious-section-tocantins-specific-context');
  if (to_religious_section_tocantins_specific_context) {
    gsap.fromTo('#to-religious-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_section_what_our_clients_say = document.getElementById('to-religious-section-what-our-clients-say');
  if (to_religious_section_what_our_clients_say) {
    gsap.fromTo('#to-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_section_frequently_asked_questions = document.getElementById('to-religious-section-frequently-asked-questions');
  if (to_religious_section_frequently_asked_questions) {
    gsap.fromTo('#to-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_section_international_support = document.getElementById('to-religious-section-international-support');
  if (to_religious_section_international_support) {
    gsap.fromTo('#to-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_list_our_credentials = document.getElementById('to-religious-list-our-credentials');
  if (to_religious_list_our_credentials) {
    gsap.from('#to-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_list_related_services = document.getElementById('to-religious-list-related-services');
  if (to_religious_list_related_services) {
    gsap.from('#to-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_section_youre_in_good_hands = document.getElementById('to-religious-section-youre-in-good-hands');
  if (to_religious_section_youre_in_good_hands) {
    gsap.fromTo('#to-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_religious_section_21 = document.getElementById('to-religious-section-21');
  if (to_religious_section_21) {
    gsap.fromTo('#to-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('to-investor-form-gain-residency-in-brazil-through-investment');
  if (to_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#to-investor-form-gain-residency-in-brazil-through-investment input, #to-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_list_quick_facts = document.getElementById('to-investor-list-quick-facts');
  if (to_investor_list_quick_facts) {
    gsap.from('#to-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_list_common_challenges_applicants_face = document.getElementById('to-investor-list-common-challenges-applicants-face');
  if (to_investor_list_common_challenges_applicants_face) {
    gsap.from('#to-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_list_how_we_solve_these_challenges = document.getElementById('to-investor-list-how-we-solve-these-challenges');
  if (to_investor_list_how_we_solve_these_challenges) {
    gsap.from('#to-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_section_residency_overview = document.getElementById('to-investor-section-residency-overview');
  if (to_investor_section_residency_overview) {
    gsap.fromTo('#to-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_form_who_is_this_residency_for = document.getElementById('to-investor-form-who-is-this-residency-for');
  if (to_investor_form_who_is_this_residency_for) {
    gsap.from('#to-investor-form-who-is-this-residency-for input, #to-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_list_required_documents = document.getElementById('to-investor-list-required-documents');
  if (to_investor_list_required_documents) {
    gsap.from('#to-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_list_application_process = document.getElementById('to-investor-list-application-process');
  if (to_investor_list_application_process) {
    gsap.from('#to-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_section_timelines_deadlines = document.getElementById('to-investor-section-timelines-deadlines');
  if (to_investor_section_timelines_deadlines) {
    gsap.fromTo('#to-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_section_fees_costs = document.getElementById('to-investor-section-fees-costs');
  if (to_investor_section_fees_costs) {
    gsap.fromTo('#to-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_list_risks_common_mistakes = document.getElementById('to-investor-list-risks-common-mistakes');
  if (to_investor_list_risks_common_mistakes) {
    gsap.from('#to-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_section_diy_vs_professional_assistance = document.getElementById('to-investor-section-diy-vs-professional-assistance');
  if (to_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_section_tocantins_specific_context = document.getElementById('to-investor-section-tocantins-specific-context');
  if (to_investor_section_tocantins_specific_context) {
    gsap.fromTo('#to-investor-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_section_what_our_clients_say = document.getElementById('to-investor-section-what-our-clients-say');
  if (to_investor_section_what_our_clients_say) {
    gsap.fromTo('#to-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_section_frequently_asked_questions = document.getElementById('to-investor-section-frequently-asked-questions');
  if (to_investor_section_frequently_asked_questions) {
    gsap.fromTo('#to-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_section_international_support = document.getElementById('to-investor-section-international-support');
  if (to_investor_section_international_support) {
    gsap.fromTo('#to-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_list_our_credentials = document.getElementById('to-investor-list-our-credentials');
  if (to_investor_list_our_credentials) {
    gsap.from('#to-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_list_related_services = document.getElementById('to-investor-list-related-services');
  if (to_investor_list_related_services) {
    gsap.from('#to-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_section_youre_in_good_hands = document.getElementById('to-investor-section-youre-in-good-hands');
  if (to_investor_section_youre_in_good_hands) {
    gsap.fromTo('#to-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_investor_section_21 = document.getElementById('to-investor-section-21');
  if (to_investor_section_21) {
    gsap.fromTo('#to-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('to-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (to_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#to-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #to-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_list_quick_facts = document.getElementById('to-healthtreatment-list-quick-facts');
  if (to_healthtreatment_list_quick_facts) {
    gsap.from('#to-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_list_common_challenges_applicants_face = document.getElementById('to-healthtreatment-list-common-challenges-applicants-face');
  if (to_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#to-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('to-healthtreatment-list-how-we-solve-these-challenges');
  if (to_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#to-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_section_residency_overview = document.getElementById('to-healthtreatment-section-residency-overview');
  if (to_healthtreatment_section_residency_overview) {
    gsap.fromTo('#to-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_form_who_is_this_residency_for = document.getElementById('to-healthtreatment-form-who-is-this-residency-for');
  if (to_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#to-healthtreatment-form-who-is-this-residency-for input, #to-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_list_required_documents = document.getElementById('to-healthtreatment-list-required-documents');
  if (to_healthtreatment_list_required_documents) {
    gsap.from('#to-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_list_application_process = document.getElementById('to-healthtreatment-list-application-process');
  if (to_healthtreatment_list_application_process) {
    gsap.from('#to-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_section_timelines_deadlines = document.getElementById('to-healthtreatment-section-timelines-deadlines');
  if (to_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#to-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_section_fees_costs = document.getElementById('to-healthtreatment-section-fees-costs');
  if (to_healthtreatment_section_fees_costs) {
    gsap.fromTo('#to-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_list_risks_common_mistakes = document.getElementById('to-healthtreatment-list-risks-common-mistakes');
  if (to_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#to-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('to-healthtreatment-section-diy-vs-professional-assistance');
  if (to_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_section_tocantins_specific_context = document.getElementById('to-healthtreatment-section-tocantins-specific-context');
  if (to_healthtreatment_section_tocantins_specific_context) {
    gsap.fromTo('#to-healthtreatment-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_section_what_our_clients_say = document.getElementById('to-healthtreatment-section-what-our-clients-say');
  if (to_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#to-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_section_frequently_asked_questions = document.getElementById('to-healthtreatment-section-frequently-asked-questions');
  if (to_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#to-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_section_international_support = document.getElementById('to-healthtreatment-section-international-support');
  if (to_healthtreatment_section_international_support) {
    gsap.fromTo('#to-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_list_our_credentials = document.getElementById('to-healthtreatment-list-our-credentials');
  if (to_healthtreatment_list_our_credentials) {
    gsap.from('#to-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_list_related_services = document.getElementById('to-healthtreatment-list-related-services');
  if (to_healthtreatment_list_related_services) {
    gsap.from('#to-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_section_youre_in_good_hands = document.getElementById('to-healthtreatment-section-youre-in-good-hands');
  if (to_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#to-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_healthtreatment_section_21 = document.getElementById('to-healthtreatment-section-21');
  if (to_healthtreatment_section_21) {
    gsap.fromTo('#to-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('to-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (to_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#to-cplp-form-residency-for-cplp-citizens-in-brazil input, #to-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_list_quick_facts = document.getElementById('to-cplp-list-quick-facts');
  if (to_cplp_list_quick_facts) {
    gsap.from('#to-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_list_common_challenges_applicants_face = document.getElementById('to-cplp-list-common-challenges-applicants-face');
  if (to_cplp_list_common_challenges_applicants_face) {
    gsap.from('#to-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_list_how_we_solve_these_challenges = document.getElementById('to-cplp-list-how-we-solve-these-challenges');
  if (to_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#to-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_section_residency_overview = document.getElementById('to-cplp-section-residency-overview');
  if (to_cplp_section_residency_overview) {
    gsap.fromTo('#to-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_form_who_is_this_residency_for = document.getElementById('to-cplp-form-who-is-this-residency-for');
  if (to_cplp_form_who_is_this_residency_for) {
    gsap.from('#to-cplp-form-who-is-this-residency-for input, #to-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_list_required_documents = document.getElementById('to-cplp-list-required-documents');
  if (to_cplp_list_required_documents) {
    gsap.from('#to-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_list_application_process = document.getElementById('to-cplp-list-application-process');
  if (to_cplp_list_application_process) {
    gsap.from('#to-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_section_timelines_deadlines = document.getElementById('to-cplp-section-timelines-deadlines');
  if (to_cplp_section_timelines_deadlines) {
    gsap.fromTo('#to-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_section_fees_costs = document.getElementById('to-cplp-section-fees-costs');
  if (to_cplp_section_fees_costs) {
    gsap.fromTo('#to-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_list_risks_common_mistakes = document.getElementById('to-cplp-list-risks-common-mistakes');
  if (to_cplp_list_risks_common_mistakes) {
    gsap.from('#to-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_section_diy_vs_professional_assistance = document.getElementById('to-cplp-section-diy-vs-professional-assistance');
  if (to_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_section_tocantins_specific_context = document.getElementById('to-cplp-section-tocantins-specific-context');
  if (to_cplp_section_tocantins_specific_context) {
    gsap.fromTo('#to-cplp-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_section_what_our_clients_say = document.getElementById('to-cplp-section-what-our-clients-say');
  if (to_cplp_section_what_our_clients_say) {
    gsap.fromTo('#to-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_section_frequently_asked_questions = document.getElementById('to-cplp-section-frequently-asked-questions');
  if (to_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#to-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_section_international_support = document.getElementById('to-cplp-section-international-support');
  if (to_cplp_section_international_support) {
    gsap.fromTo('#to-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_list_our_credentials = document.getElementById('to-cplp-list-our-credentials');
  if (to_cplp_list_our_credentials) {
    gsap.from('#to-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_list_related_services = document.getElementById('to-cplp-list-related-services');
  if (to_cplp_list_related_services) {
    gsap.from('#to-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_section_youre_in_good_hands = document.getElementById('to-cplp-section-youre-in-good-hands');
  if (to_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#to-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_cplp_section_21 = document.getElementById('to-cplp-section-21');
  if (to_cplp_section_21) {
    gsap.fromTo('#to-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('to-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (to_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#to-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #to-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_list_quick_facts = document.getElementById('to-youthexchange-list-quick-facts');
  if (to_youthexchange_list_quick_facts) {
    gsap.from('#to-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_list_common_challenges_applicants_face = document.getElementById('to-youthexchange-list-common-challenges-applicants-face');
  if (to_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#to-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_list_how_we_solve_these_challenges = document.getElementById('to-youthexchange-list-how-we-solve-these-challenges');
  if (to_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#to-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_section_residency_overview = document.getElementById('to-youthexchange-section-residency-overview');
  if (to_youthexchange_section_residency_overview) {
    gsap.fromTo('#to-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_form_who_is_this_residency_for = document.getElementById('to-youthexchange-form-who-is-this-residency-for');
  if (to_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#to-youthexchange-form-who-is-this-residency-for input, #to-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_list_required_documents = document.getElementById('to-youthexchange-list-required-documents');
  if (to_youthexchange_list_required_documents) {
    gsap.from('#to-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_list_application_process = document.getElementById('to-youthexchange-list-application-process');
  if (to_youthexchange_list_application_process) {
    gsap.from('#to-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_section_timelines_deadlines = document.getElementById('to-youthexchange-section-timelines-deadlines');
  if (to_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#to-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_section_fees_costs = document.getElementById('to-youthexchange-section-fees-costs');
  if (to_youthexchange_section_fees_costs) {
    gsap.fromTo('#to-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_list_risks_common_mistakes = document.getElementById('to-youthexchange-list-risks-common-mistakes');
  if (to_youthexchange_list_risks_common_mistakes) {
    gsap.from('#to-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_section_diy_vs_professional_assistance = document.getElementById('to-youthexchange-section-diy-vs-professional-assistance');
  if (to_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_section_tocantins_specific_context = document.getElementById('to-youthexchange-section-tocantins-specific-context');
  if (to_youthexchange_section_tocantins_specific_context) {
    gsap.fromTo('#to-youthexchange-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_section_what_our_clients_say = document.getElementById('to-youthexchange-section-what-our-clients-say');
  if (to_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#to-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_section_frequently_asked_questions = document.getElementById('to-youthexchange-section-frequently-asked-questions');
  if (to_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#to-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_section_international_support = document.getElementById('to-youthexchange-section-international-support');
  if (to_youthexchange_section_international_support) {
    gsap.fromTo('#to-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_list_our_credentials = document.getElementById('to-youthexchange-list-our-credentials');
  if (to_youthexchange_list_our_credentials) {
    gsap.from('#to-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_list_related_services = document.getElementById('to-youthexchange-list-related-services');
  if (to_youthexchange_list_related_services) {
    gsap.from('#to-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_section_youre_in_good_hands = document.getElementById('to-youthexchange-section-youre-in-good-hands');
  if (to_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#to-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_youthexchange_section_21 = document.getElementById('to-youthexchange-section-21');
  if (to_youthexchange_section_21) {
    gsap.fromTo('#to-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('to-work-form-work-and-reside-in-brazil-with-work-residency');
  if (to_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#to-work-form-work-and-reside-in-brazil-with-work-residency input, #to-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_list_quick_facts = document.getElementById('to-work-list-quick-facts');
  if (to_work_list_quick_facts) {
    gsap.from('#to-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_list_common_challenges_applicants_face = document.getElementById('to-work-list-common-challenges-applicants-face');
  if (to_work_list_common_challenges_applicants_face) {
    gsap.from('#to-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_list_how_we_solve_these_challenges = document.getElementById('to-work-list-how-we-solve-these-challenges');
  if (to_work_list_how_we_solve_these_challenges) {
    gsap.from('#to-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_section_residency_overview = document.getElementById('to-work-section-residency-overview');
  if (to_work_section_residency_overview) {
    gsap.fromTo('#to-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_form_who_is_this_residency_for = document.getElementById('to-work-form-who-is-this-residency-for');
  if (to_work_form_who_is_this_residency_for) {
    gsap.from('#to-work-form-who-is-this-residency-for input, #to-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_list_required_documents = document.getElementById('to-work-list-required-documents');
  if (to_work_list_required_documents) {
    gsap.from('#to-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_list_application_process = document.getElementById('to-work-list-application-process');
  if (to_work_list_application_process) {
    gsap.from('#to-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_section_timelines_deadlines = document.getElementById('to-work-section-timelines-deadlines');
  if (to_work_section_timelines_deadlines) {
    gsap.fromTo('#to-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_section_fees_costs = document.getElementById('to-work-section-fees-costs');
  if (to_work_section_fees_costs) {
    gsap.fromTo('#to-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_list_risks_common_mistakes = document.getElementById('to-work-list-risks-common-mistakes');
  if (to_work_list_risks_common_mistakes) {
    gsap.from('#to-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_section_diy_vs_professional_assistance = document.getElementById('to-work-section-diy-vs-professional-assistance');
  if (to_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_section_tocantins_specific_context = document.getElementById('to-work-section-tocantins-specific-context');
  if (to_work_section_tocantins_specific_context) {
    gsap.fromTo('#to-work-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_section_what_our_clients_say = document.getElementById('to-work-section-what-our-clients-say');
  if (to_work_section_what_our_clients_say) {
    gsap.fromTo('#to-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_section_frequently_asked_questions = document.getElementById('to-work-section-frequently-asked-questions');
  if (to_work_section_frequently_asked_questions) {
    gsap.fromTo('#to-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_section_international_support = document.getElementById('to-work-section-international-support');
  if (to_work_section_international_support) {
    gsap.fromTo('#to-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_list_our_credentials = document.getElementById('to-work-list-our-credentials');
  if (to_work_list_our_credentials) {
    gsap.from('#to-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_list_related_services = document.getElementById('to-work-list-related-services');
  if (to_work_list_related_services) {
    gsap.from('#to-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_section_youre_in_good_hands = document.getElementById('to-work-section-youre-in-good-hands');
  if (to_work_section_youre_in_good_hands) {
    gsap.fromTo('#to-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_work_section_21 = document.getElementById('to-work-section-21');
  if (to_work_section_21) {
    gsap.fromTo('#to-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('to-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (to_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#to-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #to-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_list_quick_facts = document.getElementById('to-startup-list-quick-facts');
  if (to_startup_list_quick_facts) {
    gsap.from('#to-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_list_common_challenges_applicants_face = document.getElementById('to-startup-list-common-challenges-applicants-face');
  if (to_startup_list_common_challenges_applicants_face) {
    gsap.from('#to-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_list_how_we_solve_these_challenges = document.getElementById('to-startup-list-how-we-solve-these-challenges');
  if (to_startup_list_how_we_solve_these_challenges) {
    gsap.from('#to-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_section_visa_overview = document.getElementById('to-startup-section-visa-overview');
  if (to_startup_section_visa_overview) {
    gsap.fromTo('#to-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_form_who_is_this_visa_for = document.getElementById('to-startup-form-who-is-this-visa-for');
  if (to_startup_form_who_is_this_visa_for) {
    gsap.from('#to-startup-form-who-is-this-visa-for input, #to-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_list_required_documents = document.getElementById('to-startup-list-required-documents');
  if (to_startup_list_required_documents) {
    gsap.from('#to-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_list_application_process = document.getElementById('to-startup-list-application-process');
  if (to_startup_list_application_process) {
    gsap.from('#to-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_section_timelines_deadlines = document.getElementById('to-startup-section-timelines-deadlines');
  if (to_startup_section_timelines_deadlines) {
    gsap.fromTo('#to-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_section_fees_costs = document.getElementById('to-startup-section-fees-costs');
  if (to_startup_section_fees_costs) {
    gsap.fromTo('#to-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_list_risks_common_mistakes = document.getElementById('to-startup-list-risks-common-mistakes');
  if (to_startup_list_risks_common_mistakes) {
    gsap.from('#to-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_section_diy_vs_professional_assistance = document.getElementById('to-startup-section-diy-vs-professional-assistance');
  if (to_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_section_tocantins_specific_context = document.getElementById('to-startup-section-tocantins-specific-context');
  if (to_startup_section_tocantins_specific_context) {
    gsap.fromTo('#to-startup-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_section_what_our_clients_say = document.getElementById('to-startup-section-what-our-clients-say');
  if (to_startup_section_what_our_clients_say) {
    gsap.fromTo('#to-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_section_frequently_asked_questions = document.getElementById('to-startup-section-frequently-asked-questions');
  if (to_startup_section_frequently_asked_questions) {
    gsap.fromTo('#to-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_section_international_support = document.getElementById('to-startup-section-international-support');
  if (to_startup_section_international_support) {
    gsap.fromTo('#to-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_list_our_credentials = document.getElementById('to-startup-list-our-credentials');
  if (to_startup_list_our_credentials) {
    gsap.from('#to-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_list_related_services = document.getElementById('to-startup-list-related-services');
  if (to_startup_list_related_services) {
    gsap.from('#to-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_section_youre_in_good_hands = document.getElementById('to-startup-section-youre-in-good-hands');
  if (to_startup_section_youre_in_good_hands) {
    gsap.fromTo('#to-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_startup_section_21 = document.getElementById('to-startup-section-21');
  if (to_startup_section_21) {
    gsap.fromTo('#to-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('to-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (to_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#to-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #to-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_list_quick_facts = document.getElementById('to-family-list-quick-facts');
  if (to_family_list_quick_facts) {
    gsap.from('#to-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_list_common_challenges_applicants_face = document.getElementById('to-family-list-common-challenges-applicants-face');
  if (to_family_list_common_challenges_applicants_face) {
    gsap.from('#to-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_list_how_we_solve_these_challenges = document.getElementById('to-family-list-how-we-solve-these-challenges');
  if (to_family_list_how_we_solve_these_challenges) {
    gsap.from('#to-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_section_visa_overview = document.getElementById('to-family-section-visa-overview');
  if (to_family_section_visa_overview) {
    gsap.fromTo('#to-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_form_who_is_this_visa_for = document.getElementById('to-family-form-who-is-this-visa-for');
  if (to_family_form_who_is_this_visa_for) {
    gsap.from('#to-family-form-who-is-this-visa-for input, #to-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_list_required_documents = document.getElementById('to-family-list-required-documents');
  if (to_family_list_required_documents) {
    gsap.from('#to-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_list_application_process = document.getElementById('to-family-list-application-process');
  if (to_family_list_application_process) {
    gsap.from('#to-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_section_timelines_deadlines = document.getElementById('to-family-section-timelines-deadlines');
  if (to_family_section_timelines_deadlines) {
    gsap.fromTo('#to-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_section_fees_costs = document.getElementById('to-family-section-fees-costs');
  if (to_family_section_fees_costs) {
    gsap.fromTo('#to-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_list_risks_common_mistakes = document.getElementById('to-family-list-risks-common-mistakes');
  if (to_family_list_risks_common_mistakes) {
    gsap.from('#to-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_section_diy_vs_professional_assistance = document.getElementById('to-family-section-diy-vs-professional-assistance');
  if (to_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_section_tocantins_specific_context = document.getElementById('to-family-section-tocantins-specific-context');
  if (to_family_section_tocantins_specific_context) {
    gsap.fromTo('#to-family-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_section_what_our_clients_say = document.getElementById('to-family-section-what-our-clients-say');
  if (to_family_section_what_our_clients_say) {
    gsap.fromTo('#to-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_section_frequently_asked_questions = document.getElementById('to-family-section-frequently-asked-questions');
  if (to_family_section_frequently_asked_questions) {
    gsap.fromTo('#to-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_section_international_support = document.getElementById('to-family-section-international-support');
  if (to_family_section_international_support) {
    gsap.fromTo('#to-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_list_our_credentials = document.getElementById('to-family-list-our-credentials');
  if (to_family_list_our_credentials) {
    gsap.from('#to-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_list_related_services = document.getElementById('to-family-list-related-services');
  if (to_family_list_related_services) {
    gsap.from('#to-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_section_youre_in_good_hands = document.getElementById('to-family-section-youre-in-good-hands');
  if (to_family_section_youre_in_good_hands) {
    gsap.fromTo('#to-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_family_section_21 = document.getElementById('to-family-section-21');
  if (to_family_section_21) {
    gsap.fromTo('#to-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('to-sports-form-compete-in-brazil-with-the-sports-visa');
  if (to_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#to-sports-form-compete-in-brazil-with-the-sports-visa input, #to-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_list_quick_facts = document.getElementById('to-sports-list-quick-facts');
  if (to_sports_list_quick_facts) {
    gsap.from('#to-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_list_common_challenges_applicants_face = document.getElementById('to-sports-list-common-challenges-applicants-face');
  if (to_sports_list_common_challenges_applicants_face) {
    gsap.from('#to-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_list_how_we_solve_these_challenges = document.getElementById('to-sports-list-how-we-solve-these-challenges');
  if (to_sports_list_how_we_solve_these_challenges) {
    gsap.from('#to-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_section_visa_overview = document.getElementById('to-sports-section-visa-overview');
  if (to_sports_section_visa_overview) {
    gsap.fromTo('#to-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_form_who_is_this_visa_for = document.getElementById('to-sports-form-who-is-this-visa-for');
  if (to_sports_form_who_is_this_visa_for) {
    gsap.from('#to-sports-form-who-is-this-visa-for input, #to-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_list_required_documents = document.getElementById('to-sports-list-required-documents');
  if (to_sports_list_required_documents) {
    gsap.from('#to-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_list_application_process = document.getElementById('to-sports-list-application-process');
  if (to_sports_list_application_process) {
    gsap.from('#to-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_section_timelines_deadlines = document.getElementById('to-sports-section-timelines-deadlines');
  if (to_sports_section_timelines_deadlines) {
    gsap.fromTo('#to-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_section_fees_costs = document.getElementById('to-sports-section-fees-costs');
  if (to_sports_section_fees_costs) {
    gsap.fromTo('#to-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_list_risks_common_mistakes = document.getElementById('to-sports-list-risks-common-mistakes');
  if (to_sports_list_risks_common_mistakes) {
    gsap.from('#to-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_section_diy_vs_professional_assistance = document.getElementById('to-sports-section-diy-vs-professional-assistance');
  if (to_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_section_tocantins_specific_context = document.getElementById('to-sports-section-tocantins-specific-context');
  if (to_sports_section_tocantins_specific_context) {
    gsap.fromTo('#to-sports-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_section_what_our_clients_say = document.getElementById('to-sports-section-what-our-clients-say');
  if (to_sports_section_what_our_clients_say) {
    gsap.fromTo('#to-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_section_frequently_asked_questions = document.getElementById('to-sports-section-frequently-asked-questions');
  if (to_sports_section_frequently_asked_questions) {
    gsap.fromTo('#to-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_section_international_support = document.getElementById('to-sports-section-international-support');
  if (to_sports_section_international_support) {
    gsap.fromTo('#to-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_list_our_credentials = document.getElementById('to-sports-list-our-credentials');
  if (to_sports_list_our_credentials) {
    gsap.from('#to-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_list_related_services = document.getElementById('to-sports-list-related-services');
  if (to_sports_list_related_services) {
    gsap.from('#to-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_section_youre_in_good_hands = document.getElementById('to-sports-section-youre-in-good-hands');
  if (to_sports_section_youre_in_good_hands) {
    gsap.fromTo('#to-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_sports_section_21 = document.getElementById('to-sports-section-21');
  if (to_sports_section_21) {
    gsap.fromTo('#to-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('to-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (to_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#to-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #to-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_list_quick_facts = document.getElementById('to-medical-list-quick-facts');
  if (to_medical_list_quick_facts) {
    gsap.from('#to-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_list_common_challenges_applicants_face = document.getElementById('to-medical-list-common-challenges-applicants-face');
  if (to_medical_list_common_challenges_applicants_face) {
    gsap.from('#to-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_list_how_we_solve_these_challenges = document.getElementById('to-medical-list-how-we-solve-these-challenges');
  if (to_medical_list_how_we_solve_these_challenges) {
    gsap.from('#to-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_section_visa_overview = document.getElementById('to-medical-section-visa-overview');
  if (to_medical_section_visa_overview) {
    gsap.fromTo('#to-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_form_who_is_this_visa_for = document.getElementById('to-medical-form-who-is-this-visa-for');
  if (to_medical_form_who_is_this_visa_for) {
    gsap.from('#to-medical-form-who-is-this-visa-for input, #to-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_list_required_documents = document.getElementById('to-medical-list-required-documents');
  if (to_medical_list_required_documents) {
    gsap.from('#to-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_list_application_process = document.getElementById('to-medical-list-application-process');
  if (to_medical_list_application_process) {
    gsap.from('#to-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_section_timelines_deadlines = document.getElementById('to-medical-section-timelines-deadlines');
  if (to_medical_section_timelines_deadlines) {
    gsap.fromTo('#to-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_section_fees_costs = document.getElementById('to-medical-section-fees-costs');
  if (to_medical_section_fees_costs) {
    gsap.fromTo('#to-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_list_risks_common_mistakes = document.getElementById('to-medical-list-risks-common-mistakes');
  if (to_medical_list_risks_common_mistakes) {
    gsap.from('#to-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_section_diy_vs_professional_assistance = document.getElementById('to-medical-section-diy-vs-professional-assistance');
  if (to_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_section_tocantins_specific_context = document.getElementById('to-medical-section-tocantins-specific-context');
  if (to_medical_section_tocantins_specific_context) {
    gsap.fromTo('#to-medical-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_section_what_our_clients_say = document.getElementById('to-medical-section-what-our-clients-say');
  if (to_medical_section_what_our_clients_say) {
    gsap.fromTo('#to-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_section_frequently_asked_questions = document.getElementById('to-medical-section-frequently-asked-questions');
  if (to_medical_section_frequently_asked_questions) {
    gsap.fromTo('#to-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_section_international_support = document.getElementById('to-medical-section-international-support');
  if (to_medical_section_international_support) {
    gsap.fromTo('#to-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_list_our_credentials = document.getElementById('to-medical-list-our-credentials');
  if (to_medical_list_our_credentials) {
    gsap.from('#to-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_list_related_services = document.getElementById('to-medical-list-related-services');
  if (to_medical_list_related_services) {
    gsap.from('#to-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_section_youre_in_good_hands = document.getElementById('to-medical-section-youre-in-good-hands');
  if (to_medical_section_youre_in_good_hands) {
    gsap.fromTo('#to-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_medical_section_21 = document.getElementById('to-medical-section-21');
  if (to_medical_section_21) {
    gsap.fromTo('#to-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('to-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (to_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#to-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #to-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_list_quick_facts = document.getElementById('to-tourist-list-quick-facts');
  if (to_tourist_list_quick_facts) {
    gsap.from('#to-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_list_common_challenges_applicants_face = document.getElementById('to-tourist-list-common-challenges-applicants-face');
  if (to_tourist_list_common_challenges_applicants_face) {
    gsap.from('#to-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_list_how_we_solve_these_challenges = document.getElementById('to-tourist-list-how-we-solve-these-challenges');
  if (to_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#to-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_section_visa_overview = document.getElementById('to-tourist-section-visa-overview');
  if (to_tourist_section_visa_overview) {
    gsap.fromTo('#to-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_form_who_is_this_visa_for = document.getElementById('to-tourist-form-who-is-this-visa-for');
  if (to_tourist_form_who_is_this_visa_for) {
    gsap.from('#to-tourist-form-who-is-this-visa-for input, #to-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_list_required_documents = document.getElementById('to-tourist-list-required-documents');
  if (to_tourist_list_required_documents) {
    gsap.from('#to-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_list_application_process = document.getElementById('to-tourist-list-application-process');
  if (to_tourist_list_application_process) {
    gsap.from('#to-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_section_timelines_deadlines = document.getElementById('to-tourist-section-timelines-deadlines');
  if (to_tourist_section_timelines_deadlines) {
    gsap.fromTo('#to-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_section_fees_costs = document.getElementById('to-tourist-section-fees-costs');
  if (to_tourist_section_fees_costs) {
    gsap.fromTo('#to-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_list_risks_common_mistakes = document.getElementById('to-tourist-list-risks-common-mistakes');
  if (to_tourist_list_risks_common_mistakes) {
    gsap.from('#to-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_section_diy_vs_professional_assistance = document.getElementById('to-tourist-section-diy-vs-professional-assistance');
  if (to_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_section_tocantins_specific_context = document.getElementById('to-tourist-section-tocantins-specific-context');
  if (to_tourist_section_tocantins_specific_context) {
    gsap.fromTo('#to-tourist-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_section_what_our_clients_say = document.getElementById('to-tourist-section-what-our-clients-say');
  if (to_tourist_section_what_our_clients_say) {
    gsap.fromTo('#to-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_section_frequently_asked_questions = document.getElementById('to-tourist-section-frequently-asked-questions');
  if (to_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#to-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_section_international_support = document.getElementById('to-tourist-section-international-support');
  if (to_tourist_section_international_support) {
    gsap.fromTo('#to-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_list_our_credentials = document.getElementById('to-tourist-list-our-credentials');
  if (to_tourist_list_our_credentials) {
    gsap.from('#to-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_list_related_services = document.getElementById('to-tourist-list-related-services');
  if (to_tourist_list_related_services) {
    gsap.from('#to-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_section_youre_in_good_hands = document.getElementById('to-tourist-section-youre-in-good-hands');
  if (to_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#to-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_tourist_section_21 = document.getElementById('to-tourist-section-21');
  if (to_tourist_section_21) {
    gsap.fromTo('#to-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('to-transit-form-transit-through-brazil-with-the-transit-visa');
  if (to_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#to-transit-form-transit-through-brazil-with-the-transit-visa input, #to-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_list_quick_facts = document.getElementById('to-transit-list-quick-facts');
  if (to_transit_list_quick_facts) {
    gsap.from('#to-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_list_common_challenges_applicants_face = document.getElementById('to-transit-list-common-challenges-applicants-face');
  if (to_transit_list_common_challenges_applicants_face) {
    gsap.from('#to-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_list_how_we_solve_these_challenges = document.getElementById('to-transit-list-how-we-solve-these-challenges');
  if (to_transit_list_how_we_solve_these_challenges) {
    gsap.from('#to-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_section_visa_overview = document.getElementById('to-transit-section-visa-overview');
  if (to_transit_section_visa_overview) {
    gsap.fromTo('#to-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_form_who_is_this_visa_for = document.getElementById('to-transit-form-who-is-this-visa-for');
  if (to_transit_form_who_is_this_visa_for) {
    gsap.from('#to-transit-form-who-is-this-visa-for input, #to-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_list_required_documents = document.getElementById('to-transit-list-required-documents');
  if (to_transit_list_required_documents) {
    gsap.from('#to-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_list_application_process = document.getElementById('to-transit-list-application-process');
  if (to_transit_list_application_process) {
    gsap.from('#to-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_section_timelines_deadlines = document.getElementById('to-transit-section-timelines-deadlines');
  if (to_transit_section_timelines_deadlines) {
    gsap.fromTo('#to-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_section_fees_costs = document.getElementById('to-transit-section-fees-costs');
  if (to_transit_section_fees_costs) {
    gsap.fromTo('#to-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_list_risks_common_mistakes = document.getElementById('to-transit-list-risks-common-mistakes');
  if (to_transit_list_risks_common_mistakes) {
    gsap.from('#to-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_section_diy_vs_professional_assistance = document.getElementById('to-transit-section-diy-vs-professional-assistance');
  if (to_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_section_tocantins_specific_context = document.getElementById('to-transit-section-tocantins-specific-context');
  if (to_transit_section_tocantins_specific_context) {
    gsap.fromTo('#to-transit-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_section_what_our_clients_say = document.getElementById('to-transit-section-what-our-clients-say');
  if (to_transit_section_what_our_clients_say) {
    gsap.fromTo('#to-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_section_frequently_asked_questions = document.getElementById('to-transit-section-frequently-asked-questions');
  if (to_transit_section_frequently_asked_questions) {
    gsap.fromTo('#to-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_section_international_support = document.getElementById('to-transit-section-international-support');
  if (to_transit_section_international_support) {
    gsap.fromTo('#to-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_list_our_credentials = document.getElementById('to-transit-list-our-credentials');
  if (to_transit_list_our_credentials) {
    gsap.from('#to-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_list_related_services = document.getElementById('to-transit-list-related-services');
  if (to_transit_list_related_services) {
    gsap.from('#to-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_section_youre_in_good_hands = document.getElementById('to-transit-section-youre-in-good-hands');
  if (to_transit_section_youre_in_good_hands) {
    gsap.fromTo('#to-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_transit_section_21 = document.getElementById('to-transit-section-21');
  if (to_transit_section_21) {
    gsap.fromTo('#to-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_form_study_in_brazil_with_the_student_visa = document.getElementById('to-student-form-study-in-brazil-with-the-student-visa');
  if (to_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#to-student-form-study-in-brazil-with-the-student-visa input, #to-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_list_quick_facts = document.getElementById('to-student-list-quick-facts');
  if (to_student_list_quick_facts) {
    gsap.from('#to-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_list_common_challenges_applicants_face = document.getElementById('to-student-list-common-challenges-applicants-face');
  if (to_student_list_common_challenges_applicants_face) {
    gsap.from('#to-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_list_how_we_solve_these_challenges = document.getElementById('to-student-list-how-we-solve-these-challenges');
  if (to_student_list_how_we_solve_these_challenges) {
    gsap.from('#to-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_section_visa_overview = document.getElementById('to-student-section-visa-overview');
  if (to_student_section_visa_overview) {
    gsap.fromTo('#to-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_form_who_is_this_visa_for = document.getElementById('to-student-form-who-is-this-visa-for');
  if (to_student_form_who_is_this_visa_for) {
    gsap.from('#to-student-form-who-is-this-visa-for input, #to-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_list_required_documents = document.getElementById('to-student-list-required-documents');
  if (to_student_list_required_documents) {
    gsap.from('#to-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_list_application_process = document.getElementById('to-student-list-application-process');
  if (to_student_list_application_process) {
    gsap.from('#to-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_section_timelines_deadlines = document.getElementById('to-student-section-timelines-deadlines');
  if (to_student_section_timelines_deadlines) {
    gsap.fromTo('#to-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_section_fees_costs = document.getElementById('to-student-section-fees-costs');
  if (to_student_section_fees_costs) {
    gsap.fromTo('#to-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_list_risks_common_mistakes = document.getElementById('to-student-list-risks-common-mistakes');
  if (to_student_list_risks_common_mistakes) {
    gsap.from('#to-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_section_diy_vs_professional_assistance = document.getElementById('to-student-section-diy-vs-professional-assistance');
  if (to_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_section_tocantins_specific_context = document.getElementById('to-student-section-tocantins-specific-context');
  if (to_student_section_tocantins_specific_context) {
    gsap.fromTo('#to-student-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_section_what_our_clients_say = document.getElementById('to-student-section-what-our-clients-say');
  if (to_student_section_what_our_clients_say) {
    gsap.fromTo('#to-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_section_frequently_asked_questions = document.getElementById('to-student-section-frequently-asked-questions');
  if (to_student_section_frequently_asked_questions) {
    gsap.fromTo('#to-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_section_international_support = document.getElementById('to-student-section-international-support');
  if (to_student_section_international_support) {
    gsap.fromTo('#to-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_list_our_credentials = document.getElementById('to-student-list-our-credentials');
  if (to_student_list_our_credentials) {
    gsap.from('#to-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_list_related_services = document.getElementById('to-student-list-related-services');
  if (to_student_list_related_services) {
    gsap.from('#to-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_section_youre_in_good_hands = document.getElementById('to-student-section-youre-in-good-hands');
  if (to_student_section_youre_in_good_hands) {
    gsap.fromTo('#to-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_student_section_21 = document.getElementById('to-student-section-21');
  if (to_student_section_21) {
    gsap.fromTo('#to-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('to-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (to_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#to-business-form-conduct-business-in-brazil-with-the-business-visa input, #to-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_list_quick_facts = document.getElementById('to-business-list-quick-facts');
  if (to_business_list_quick_facts) {
    gsap.from('#to-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_list_common_challenges_applicants_face = document.getElementById('to-business-list-common-challenges-applicants-face');
  if (to_business_list_common_challenges_applicants_face) {
    gsap.from('#to-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_list_how_we_solve_these_challenges = document.getElementById('to-business-list-how-we-solve-these-challenges');
  if (to_business_list_how_we_solve_these_challenges) {
    gsap.from('#to-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_section_visa_overview = document.getElementById('to-business-section-visa-overview');
  if (to_business_section_visa_overview) {
    gsap.fromTo('#to-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_form_who_is_this_visa_for = document.getElementById('to-business-form-who-is-this-visa-for');
  if (to_business_form_who_is_this_visa_for) {
    gsap.from('#to-business-form-who-is-this-visa-for input, #to-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_list_required_documents = document.getElementById('to-business-list-required-documents');
  if (to_business_list_required_documents) {
    gsap.from('#to-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_list_application_process = document.getElementById('to-business-list-application-process');
  if (to_business_list_application_process) {
    gsap.from('#to-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_section_timelines_deadlines = document.getElementById('to-business-section-timelines-deadlines');
  if (to_business_section_timelines_deadlines) {
    gsap.fromTo('#to-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_section_fees_costs = document.getElementById('to-business-section-fees-costs');
  if (to_business_section_fees_costs) {
    gsap.fromTo('#to-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_list_risks_common_mistakes = document.getElementById('to-business-list-risks-common-mistakes');
  if (to_business_list_risks_common_mistakes) {
    gsap.from('#to-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_section_diy_vs_professional_assistance = document.getElementById('to-business-section-diy-vs-professional-assistance');
  if (to_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_section_tocantins_specific_context = document.getElementById('to-business-section-tocantins-specific-context');
  if (to_business_section_tocantins_specific_context) {
    gsap.fromTo('#to-business-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_section_what_our_clients_say = document.getElementById('to-business-section-what-our-clients-say');
  if (to_business_section_what_our_clients_say) {
    gsap.fromTo('#to-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_section_frequently_asked_questions = document.getElementById('to-business-section-frequently-asked-questions');
  if (to_business_section_frequently_asked_questions) {
    gsap.fromTo('#to-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_section_international_support = document.getElementById('to-business-section-international-support');
  if (to_business_section_international_support) {
    gsap.fromTo('#to-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_list_our_credentials = document.getElementById('to-business-list-our-credentials');
  if (to_business_list_our_credentials) {
    gsap.from('#to-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_list_related_services = document.getElementById('to-business-list-related-services');
  if (to_business_list_related_services) {
    gsap.from('#to-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_section_youre_in_good_hands = document.getElementById('to-business-section-youre-in-good-hands');
  if (to_business_section_youre_in_good_hands) {
    gsap.fromTo('#to-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_business_section_21 = document.getElementById('to-business-section-21');
  if (to_business_section_21) {
    gsap.fromTo('#to-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('to-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (to_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#to-research-form-conduct-research-in-brazil-with-the-research-visa input, #to-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_list_quick_facts = document.getElementById('to-research-list-quick-facts');
  if (to_research_list_quick_facts) {
    gsap.from('#to-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_list_common_challenges_applicants_face = document.getElementById('to-research-list-common-challenges-applicants-face');
  if (to_research_list_common_challenges_applicants_face) {
    gsap.from('#to-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_list_how_we_solve_these_challenges = document.getElementById('to-research-list-how-we-solve-these-challenges');
  if (to_research_list_how_we_solve_these_challenges) {
    gsap.from('#to-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_section_visa_overview = document.getElementById('to-research-section-visa-overview');
  if (to_research_section_visa_overview) {
    gsap.fromTo('#to-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_form_who_is_this_visa_for = document.getElementById('to-research-form-who-is-this-visa-for');
  if (to_research_form_who_is_this_visa_for) {
    gsap.from('#to-research-form-who-is-this-visa-for input, #to-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_list_required_documents = document.getElementById('to-research-list-required-documents');
  if (to_research_list_required_documents) {
    gsap.from('#to-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_list_application_process = document.getElementById('to-research-list-application-process');
  if (to_research_list_application_process) {
    gsap.from('#to-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_section_timelines_deadlines = document.getElementById('to-research-section-timelines-deadlines');
  if (to_research_section_timelines_deadlines) {
    gsap.fromTo('#to-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_section_fees_costs = document.getElementById('to-research-section-fees-costs');
  if (to_research_section_fees_costs) {
    gsap.fromTo('#to-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_list_risks_common_mistakes = document.getElementById('to-research-list-risks-common-mistakes');
  if (to_research_list_risks_common_mistakes) {
    gsap.from('#to-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_section_diy_vs_professional_assistance = document.getElementById('to-research-section-diy-vs-professional-assistance');
  if (to_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_section_tocantins_specific_context = document.getElementById('to-research-section-tocantins-specific-context');
  if (to_research_section_tocantins_specific_context) {
    gsap.fromTo('#to-research-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_section_what_our_clients_say = document.getElementById('to-research-section-what-our-clients-say');
  if (to_research_section_what_our_clients_say) {
    gsap.fromTo('#to-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_section_frequently_asked_questions = document.getElementById('to-research-section-frequently-asked-questions');
  if (to_research_section_frequently_asked_questions) {
    gsap.fromTo('#to-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_section_international_support = document.getElementById('to-research-section-international-support');
  if (to_research_section_international_support) {
    gsap.fromTo('#to-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_list_our_credentials = document.getElementById('to-research-list-our-credentials');
  if (to_research_list_our_credentials) {
    gsap.from('#to-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_list_related_services = document.getElementById('to-research-list-related-services');
  if (to_research_list_related_services) {
    gsap.from('#to-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_section_youre_in_good_hands = document.getElementById('to-research-section-youre-in-good-hands');
  if (to_research_section_youre_in_good_hands) {
    gsap.fromTo('#to-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_research_section_21 = document.getElementById('to-research-section-21');
  if (to_research_section_21) {
    gsap.fromTo('#to-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('to-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (to_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#to-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #to-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_list_quick_facts = document.getElementById('to-diplomatic-list-quick-facts');
  if (to_diplomatic_list_quick_facts) {
    gsap.from('#to-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_list_common_challenges_applicants_face = document.getElementById('to-diplomatic-list-common-challenges-applicants-face');
  if (to_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#to-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_list_how_we_solve_these_challenges = document.getElementById('to-diplomatic-list-how-we-solve-these-challenges');
  if (to_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#to-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_section_visa_overview = document.getElementById('to-diplomatic-section-visa-overview');
  if (to_diplomatic_section_visa_overview) {
    gsap.fromTo('#to-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_form_who_is_this_visa_for = document.getElementById('to-diplomatic-form-who-is-this-visa-for');
  if (to_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#to-diplomatic-form-who-is-this-visa-for input, #to-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_list_required_documents = document.getElementById('to-diplomatic-list-required-documents');
  if (to_diplomatic_list_required_documents) {
    gsap.from('#to-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_list_application_process = document.getElementById('to-diplomatic-list-application-process');
  if (to_diplomatic_list_application_process) {
    gsap.from('#to-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_section_timelines_deadlines = document.getElementById('to-diplomatic-section-timelines-deadlines');
  if (to_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#to-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_section_fees_costs = document.getElementById('to-diplomatic-section-fees-costs');
  if (to_diplomatic_section_fees_costs) {
    gsap.fromTo('#to-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_list_risks_common_mistakes = document.getElementById('to-diplomatic-list-risks-common-mistakes');
  if (to_diplomatic_list_risks_common_mistakes) {
    gsap.from('#to-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_section_diy_vs_professional_assistance = document.getElementById('to-diplomatic-section-diy-vs-professional-assistance');
  if (to_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_section_tocantins_specific_context = document.getElementById('to-diplomatic-section-tocantins-specific-context');
  if (to_diplomatic_section_tocantins_specific_context) {
    gsap.fromTo('#to-diplomatic-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_section_what_our_clients_say = document.getElementById('to-diplomatic-section-what-our-clients-say');
  if (to_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#to-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_section_frequently_asked_questions = document.getElementById('to-diplomatic-section-frequently-asked-questions');
  if (to_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#to-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_section_international_support = document.getElementById('to-diplomatic-section-international-support');
  if (to_diplomatic_section_international_support) {
    gsap.fromTo('#to-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_list_our_credentials = document.getElementById('to-diplomatic-list-our-credentials');
  if (to_diplomatic_list_our_credentials) {
    gsap.from('#to-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_list_related_services = document.getElementById('to-diplomatic-list-related-services');
  if (to_diplomatic_list_related_services) {
    gsap.from('#to-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_section_youre_in_good_hands = document.getElementById('to-diplomatic-section-youre-in-good-hands');
  if (to_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#to-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_diplomatic_section_21 = document.getElementById('to-diplomatic-section-21');
  if (to_diplomatic_section_21) {
    gsap.fromTo('#to-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('to-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (to_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#to-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #to-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_list_quick_facts = document.getElementById('to-journalist-list-quick-facts');
  if (to_journalist_list_quick_facts) {
    gsap.from('#to-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_list_common_challenges_applicants_face = document.getElementById('to-journalist-list-common-challenges-applicants-face');
  if (to_journalist_list_common_challenges_applicants_face) {
    gsap.from('#to-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_list_how_we_solve_these_challenges = document.getElementById('to-journalist-list-how-we-solve-these-challenges');
  if (to_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#to-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_section_visa_overview = document.getElementById('to-journalist-section-visa-overview');
  if (to_journalist_section_visa_overview) {
    gsap.fromTo('#to-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_form_who_is_this_visa_for = document.getElementById('to-journalist-form-who-is-this-visa-for');
  if (to_journalist_form_who_is_this_visa_for) {
    gsap.from('#to-journalist-form-who-is-this-visa-for input, #to-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_list_required_documents = document.getElementById('to-journalist-list-required-documents');
  if (to_journalist_list_required_documents) {
    gsap.from('#to-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_list_application_process = document.getElementById('to-journalist-list-application-process');
  if (to_journalist_list_application_process) {
    gsap.from('#to-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_section_timelines_deadlines = document.getElementById('to-journalist-section-timelines-deadlines');
  if (to_journalist_section_timelines_deadlines) {
    gsap.fromTo('#to-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_section_fees_costs = document.getElementById('to-journalist-section-fees-costs');
  if (to_journalist_section_fees_costs) {
    gsap.fromTo('#to-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_list_risks_common_mistakes = document.getElementById('to-journalist-list-risks-common-mistakes');
  if (to_journalist_list_risks_common_mistakes) {
    gsap.from('#to-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_section_diy_vs_professional_assistance = document.getElementById('to-journalist-section-diy-vs-professional-assistance');
  if (to_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_section_tocantins_specific_context = document.getElementById('to-journalist-section-tocantins-specific-context');
  if (to_journalist_section_tocantins_specific_context) {
    gsap.fromTo('#to-journalist-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_section_what_our_clients_say = document.getElementById('to-journalist-section-what-our-clients-say');
  if (to_journalist_section_what_our_clients_say) {
    gsap.fromTo('#to-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_section_frequently_asked_questions = document.getElementById('to-journalist-section-frequently-asked-questions');
  if (to_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#to-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_section_international_support = document.getElementById('to-journalist-section-international-support');
  if (to_journalist_section_international_support) {
    gsap.fromTo('#to-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_list_our_credentials = document.getElementById('to-journalist-list-our-credentials');
  if (to_journalist_list_our_credentials) {
    gsap.from('#to-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_list_related_services = document.getElementById('to-journalist-list-related-services');
  if (to_journalist_list_related_services) {
    gsap.from('#to-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_section_youre_in_good_hands = document.getElementById('to-journalist-section-youre-in-good-hands');
  if (to_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#to-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_journalist_section_21 = document.getElementById('to-journalist-section-21');
  if (to_journalist_section_21) {
    gsap.fromTo('#to-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('to-fines-form-resolve-immigration-fines-in-brazil');
  if (to_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#to-fines-form-resolve-immigration-fines-in-brazil input, #to-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_list_quick_facts = document.getElementById('to-fines-list-quick-facts');
  if (to_fines_list_quick_facts) {
    gsap.from('#to-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_list_common_challenges_applicants_face = document.getElementById('to-fines-list-common-challenges-applicants-face');
  if (to_fines_list_common_challenges_applicants_face) {
    gsap.from('#to-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_list_how_we_solve_these_challenges = document.getElementById('to-fines-list-how-we-solve-these-challenges');
  if (to_fines_list_how_we_solve_these_challenges) {
    gsap.from('#to-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_section_service_overview = document.getElementById('to-fines-section-service-overview');
  if (to_fines_section_service_overview) {
    gsap.fromTo('#to-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_form_who_is_this_service_for = document.getElementById('to-fines-form-who-is-this-service-for');
  if (to_fines_form_who_is_this_service_for) {
    gsap.from('#to-fines-form-who-is-this-service-for input, #to-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_list_required_documents = document.getElementById('to-fines-list-required-documents');
  if (to_fines_list_required_documents) {
    gsap.from('#to-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_list_process = document.getElementById('to-fines-list-process');
  if (to_fines_list_process) {
    gsap.from('#to-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_section_timelines_deadlines = document.getElementById('to-fines-section-timelines-deadlines');
  if (to_fines_section_timelines_deadlines) {
    gsap.fromTo('#to-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_section_fees_costs = document.getElementById('to-fines-section-fees-costs');
  if (to_fines_section_fees_costs) {
    gsap.fromTo('#to-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_list_risks_common_mistakes = document.getElementById('to-fines-list-risks-common-mistakes');
  if (to_fines_list_risks_common_mistakes) {
    gsap.from('#to-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_section_diy_vs_professional_assistance = document.getElementById('to-fines-section-diy-vs-professional-assistance');
  if (to_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_section_tocantins_specific_context = document.getElementById('to-fines-section-tocantins-specific-context');
  if (to_fines_section_tocantins_specific_context) {
    gsap.fromTo('#to-fines-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_section_what_our_clients_say = document.getElementById('to-fines-section-what-our-clients-say');
  if (to_fines_section_what_our_clients_say) {
    gsap.fromTo('#to-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_section_frequently_asked_questions = document.getElementById('to-fines-section-frequently-asked-questions');
  if (to_fines_section_frequently_asked_questions) {
    gsap.fromTo('#to-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_section_international_support = document.getElementById('to-fines-section-international-support');
  if (to_fines_section_international_support) {
    gsap.fromTo('#to-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_list_our_credentials = document.getElementById('to-fines-list-our-credentials');
  if (to_fines_list_our_credentials) {
    gsap.from('#to-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_list_related_services = document.getElementById('to-fines-list-related-services');
  if (to_fines_list_related_services) {
    gsap.from('#to-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_section_youre_in_good_hands = document.getElementById('to-fines-section-youre-in-good-hands');
  if (to_fines_section_youre_in_good_hands) {
    gsap.fromTo('#to-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_fines_section_21 = document.getElementById('to-fines-section-21');
  if (to_fines_section_21) {
    gsap.fromTo('#to-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_form_deportation_assistance_in_brazil = document.getElementById('to-deportation-form-deportation-assistance-in-brazil');
  if (to_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#to-deportation-form-deportation-assistance-in-brazil input, #to-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_list_quick_facts = document.getElementById('to-deportation-list-quick-facts');
  if (to_deportation_list_quick_facts) {
    gsap.from('#to-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_list_common_challenges_applicants_face = document.getElementById('to-deportation-list-common-challenges-applicants-face');
  if (to_deportation_list_common_challenges_applicants_face) {
    gsap.from('#to-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_list_how_we_solve_these_challenges = document.getElementById('to-deportation-list-how-we-solve-these-challenges');
  if (to_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#to-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_section_service_overview = document.getElementById('to-deportation-section-service-overview');
  if (to_deportation_section_service_overview) {
    gsap.fromTo('#to-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_form_who_is_this_service_for = document.getElementById('to-deportation-form-who-is-this-service-for');
  if (to_deportation_form_who_is_this_service_for) {
    gsap.from('#to-deportation-form-who-is-this-service-for input, #to-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_list_required_documents = document.getElementById('to-deportation-list-required-documents');
  if (to_deportation_list_required_documents) {
    gsap.from('#to-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_list_process = document.getElementById('to-deportation-list-process');
  if (to_deportation_list_process) {
    gsap.from('#to-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_section_timelines_deadlines = document.getElementById('to-deportation-section-timelines-deadlines');
  if (to_deportation_section_timelines_deadlines) {
    gsap.fromTo('#to-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_section_fees_costs = document.getElementById('to-deportation-section-fees-costs');
  if (to_deportation_section_fees_costs) {
    gsap.fromTo('#to-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_list_risks_common_mistakes = document.getElementById('to-deportation-list-risks-common-mistakes');
  if (to_deportation_list_risks_common_mistakes) {
    gsap.from('#to-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_section_diy_vs_professional_assistance = document.getElementById('to-deportation-section-diy-vs-professional-assistance');
  if (to_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_section_tocantins_specific_context = document.getElementById('to-deportation-section-tocantins-specific-context');
  if (to_deportation_section_tocantins_specific_context) {
    gsap.fromTo('#to-deportation-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_section_what_our_clients_say = document.getElementById('to-deportation-section-what-our-clients-say');
  if (to_deportation_section_what_our_clients_say) {
    gsap.fromTo('#to-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_section_frequently_asked_questions = document.getElementById('to-deportation-section-frequently-asked-questions');
  if (to_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#to-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_section_international_support = document.getElementById('to-deportation-section-international-support');
  if (to_deportation_section_international_support) {
    gsap.fromTo('#to-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_list_our_credentials = document.getElementById('to-deportation-list-our-credentials');
  if (to_deportation_list_our_credentials) {
    gsap.from('#to-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_list_related_services = document.getElementById('to-deportation-list-related-services');
  if (to_deportation_list_related_services) {
    gsap.from('#to-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_section_youre_in_good_hands = document.getElementById('to-deportation-section-youre-in-good-hands');
  if (to_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#to-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_deportation_section_21 = document.getElementById('to-deportation-section-21');
  if (to_deportation_section_21) {
    gsap.fromTo('#to-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('to-translation-form-sworn-document-translation-services-in-brazil');
  if (to_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#to-translation-form-sworn-document-translation-services-in-brazil input, #to-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_list_quick_facts = document.getElementById('to-translation-list-quick-facts');
  if (to_translation_list_quick_facts) {
    gsap.from('#to-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_list_common_challenges_applicants_face = document.getElementById('to-translation-list-common-challenges-applicants-face');
  if (to_translation_list_common_challenges_applicants_face) {
    gsap.from('#to-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_list_how_we_solve_these_challenges = document.getElementById('to-translation-list-how-we-solve-these-challenges');
  if (to_translation_list_how_we_solve_these_challenges) {
    gsap.from('#to-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_section_service_overview = document.getElementById('to-translation-section-service-overview');
  if (to_translation_section_service_overview) {
    gsap.fromTo('#to-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_form_who_is_this_service_for = document.getElementById('to-translation-form-who-is-this-service-for');
  if (to_translation_form_who_is_this_service_for) {
    gsap.from('#to-translation-form-who-is-this-service-for input, #to-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_list_required_documents = document.getElementById('to-translation-list-required-documents');
  if (to_translation_list_required_documents) {
    gsap.from('#to-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_list_process = document.getElementById('to-translation-list-process');
  if (to_translation_list_process) {
    gsap.from('#to-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_section_timelines_deadlines = document.getElementById('to-translation-section-timelines-deadlines');
  if (to_translation_section_timelines_deadlines) {
    gsap.fromTo('#to-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_section_fees_costs = document.getElementById('to-translation-section-fees-costs');
  if (to_translation_section_fees_costs) {
    gsap.fromTo('#to-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_list_risks_common_mistakes = document.getElementById('to-translation-list-risks-common-mistakes');
  if (to_translation_list_risks_common_mistakes) {
    gsap.from('#to-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_section_diy_vs_professional_assistance = document.getElementById('to-translation-section-diy-vs-professional-assistance');
  if (to_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_section_tocantins_specific_context = document.getElementById('to-translation-section-tocantins-specific-context');
  if (to_translation_section_tocantins_specific_context) {
    gsap.fromTo('#to-translation-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_section_what_our_clients_say = document.getElementById('to-translation-section-what-our-clients-say');
  if (to_translation_section_what_our_clients_say) {
    gsap.fromTo('#to-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_section_frequently_asked_questions = document.getElementById('to-translation-section-frequently-asked-questions');
  if (to_translation_section_frequently_asked_questions) {
    gsap.fromTo('#to-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_section_international_support = document.getElementById('to-translation-section-international-support');
  if (to_translation_section_international_support) {
    gsap.fromTo('#to-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_list_our_credentials = document.getElementById('to-translation-list-our-credentials');
  if (to_translation_list_our_credentials) {
    gsap.from('#to-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_list_related_services = document.getElementById('to-translation-list-related-services');
  if (to_translation_list_related_services) {
    gsap.from('#to-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_section_youre_in_good_hands = document.getElementById('to-translation-section-youre-in-good-hands');
  if (to_translation_section_youre_in_good_hands) {
    gsap.fromTo('#to-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_translation_section_21 = document.getElementById('to-translation-section-21');
  if (to_translation_section_21) {
    gsap.fromTo('#to-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('to-expulsion-form-expulsion-assistance-in-brazil');
  if (to_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#to-expulsion-form-expulsion-assistance-in-brazil input, #to-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_list_quick_facts = document.getElementById('to-expulsion-list-quick-facts');
  if (to_expulsion_list_quick_facts) {
    gsap.from('#to-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_list_common_challenges_applicants_face = document.getElementById('to-expulsion-list-common-challenges-applicants-face');
  if (to_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#to-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_list_how_we_solve_these_challenges = document.getElementById('to-expulsion-list-how-we-solve-these-challenges');
  if (to_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#to-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_section_service_overview = document.getElementById('to-expulsion-section-service-overview');
  if (to_expulsion_section_service_overview) {
    gsap.fromTo('#to-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_form_who_is_this_service_for = document.getElementById('to-expulsion-form-who-is-this-service-for');
  if (to_expulsion_form_who_is_this_service_for) {
    gsap.from('#to-expulsion-form-who-is-this-service-for input, #to-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_list_required_documents = document.getElementById('to-expulsion-list-required-documents');
  if (to_expulsion_list_required_documents) {
    gsap.from('#to-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_list_process = document.getElementById('to-expulsion-list-process');
  if (to_expulsion_list_process) {
    gsap.from('#to-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_section_timelines_deadlines = document.getElementById('to-expulsion-section-timelines-deadlines');
  if (to_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#to-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_section_fees_costs = document.getElementById('to-expulsion-section-fees-costs');
  if (to_expulsion_section_fees_costs) {
    gsap.fromTo('#to-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_list_risks_common_mistakes = document.getElementById('to-expulsion-list-risks-common-mistakes');
  if (to_expulsion_list_risks_common_mistakes) {
    gsap.from('#to-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_section_diy_vs_professional_assistance = document.getElementById('to-expulsion-section-diy-vs-professional-assistance');
  if (to_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_section_tocantins_specific_context = document.getElementById('to-expulsion-section-tocantins-specific-context');
  if (to_expulsion_section_tocantins_specific_context) {
    gsap.fromTo('#to-expulsion-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_section_what_our_clients_say = document.getElementById('to-expulsion-section-what-our-clients-say');
  if (to_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#to-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_section_frequently_asked_questions = document.getElementById('to-expulsion-section-frequently-asked-questions');
  if (to_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#to-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_section_international_support = document.getElementById('to-expulsion-section-international-support');
  if (to_expulsion_section_international_support) {
    gsap.fromTo('#to-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_list_our_credentials = document.getElementById('to-expulsion-list-our-credentials');
  if (to_expulsion_list_our_credentials) {
    gsap.from('#to-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_list_related_services = document.getElementById('to-expulsion-list-related-services');
  if (to_expulsion_list_related_services) {
    gsap.from('#to-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_section_youre_in_good_hands = document.getElementById('to-expulsion-section-youre-in-good-hands');
  if (to_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#to-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_expulsion_section_21 = document.getElementById('to-expulsion-section-21');
  if (to_expulsion_section_21) {
    gsap.fromTo('#to-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('to-appeals-form-appeal-immigration-denials-in-brazil');
  if (to_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#to-appeals-form-appeal-immigration-denials-in-brazil input, #to-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_list_quick_facts = document.getElementById('to-appeals-list-quick-facts');
  if (to_appeals_list_quick_facts) {
    gsap.from('#to-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_list_common_challenges_applicants_face = document.getElementById('to-appeals-list-common-challenges-applicants-face');
  if (to_appeals_list_common_challenges_applicants_face) {
    gsap.from('#to-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_list_how_we_solve_these_challenges = document.getElementById('to-appeals-list-how-we-solve-these-challenges');
  if (to_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#to-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_section_service_overview = document.getElementById('to-appeals-section-service-overview');
  if (to_appeals_section_service_overview) {
    gsap.fromTo('#to-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_form_who_is_this_service_for = document.getElementById('to-appeals-form-who-is-this-service-for');
  if (to_appeals_form_who_is_this_service_for) {
    gsap.from('#to-appeals-form-who-is-this-service-for input, #to-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_list_required_documents = document.getElementById('to-appeals-list-required-documents');
  if (to_appeals_list_required_documents) {
    gsap.from('#to-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_list_appeal_process = document.getElementById('to-appeals-list-appeal-process');
  if (to_appeals_list_appeal_process) {
    gsap.from('#to-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_section_timelines_deadlines = document.getElementById('to-appeals-section-timelines-deadlines');
  if (to_appeals_section_timelines_deadlines) {
    gsap.fromTo('#to-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_section_fees_costs = document.getElementById('to-appeals-section-fees-costs');
  if (to_appeals_section_fees_costs) {
    gsap.fromTo('#to-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_list_risks_common_mistakes = document.getElementById('to-appeals-list-risks-common-mistakes');
  if (to_appeals_list_risks_common_mistakes) {
    gsap.from('#to-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_section_diy_vs_professional_assistance = document.getElementById('to-appeals-section-diy-vs-professional-assistance');
  if (to_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_section_tocantins_specific_context = document.getElementById('to-appeals-section-tocantins-specific-context');
  if (to_appeals_section_tocantins_specific_context) {
    gsap.fromTo('#to-appeals-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_section_what_our_clients_say = document.getElementById('to-appeals-section-what-our-clients-say');
  if (to_appeals_section_what_our_clients_say) {
    gsap.fromTo('#to-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_section_frequently_asked_questions = document.getElementById('to-appeals-section-frequently-asked-questions');
  if (to_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#to-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_section_international_support = document.getElementById('to-appeals-section-international-support');
  if (to_appeals_section_international_support) {
    gsap.fromTo('#to-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_list_our_credentials = document.getElementById('to-appeals-list-our-credentials');
  if (to_appeals_list_our_credentials) {
    gsap.from('#to-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_list_related_services = document.getElementById('to-appeals-list-related-services');
  if (to_appeals_list_related_services) {
    gsap.from('#to-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_section_youre_in_good_hands = document.getElementById('to-appeals-section-youre-in-good-hands');
  if (to_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#to-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_appeals_section_21 = document.getElementById('to-appeals-section-21');
  if (to_appeals_section_21) {
    gsap.fromTo('#to-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('to-consular-form-consular-services-in-brazil-for-citizens');
  if (to_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#to-consular-form-consular-services-in-brazil-for-citizens input, #to-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_list_quick_facts = document.getElementById('to-consular-list-quick-facts');
  if (to_consular_list_quick_facts) {
    gsap.from('#to-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_list_common_challenges_applicants_face = document.getElementById('to-consular-list-common-challenges-applicants-face');
  if (to_consular_list_common_challenges_applicants_face) {
    gsap.from('#to-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_list_how_we_solve_these_challenges = document.getElementById('to-consular-list-how-we-solve-these-challenges');
  if (to_consular_list_how_we_solve_these_challenges) {
    gsap.from('#to-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_section_service_overview = document.getElementById('to-consular-section-service-overview');
  if (to_consular_section_service_overview) {
    gsap.fromTo('#to-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_form_who_is_this_service_for = document.getElementById('to-consular-form-who-is-this-service-for');
  if (to_consular_form_who_is_this_service_for) {
    gsap.from('#to-consular-form-who-is-this-service-for input, #to-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_list_required_documents = document.getElementById('to-consular-list-required-documents');
  if (to_consular_list_required_documents) {
    gsap.from('#to-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_list_process = document.getElementById('to-consular-list-process');
  if (to_consular_list_process) {
    gsap.from('#to-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_section_timelines_deadlines = document.getElementById('to-consular-section-timelines-deadlines');
  if (to_consular_section_timelines_deadlines) {
    gsap.fromTo('#to-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_section_fees_costs = document.getElementById('to-consular-section-fees-costs');
  if (to_consular_section_fees_costs) {
    gsap.fromTo('#to-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_list_risks_common_mistakes = document.getElementById('to-consular-list-risks-common-mistakes');
  if (to_consular_list_risks_common_mistakes) {
    gsap.from('#to-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_section_diy_vs_professional_assistance = document.getElementById('to-consular-section-diy-vs-professional-assistance');
  if (to_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_section_tocantins_specific_context = document.getElementById('to-consular-section-tocantins-specific-context');
  if (to_consular_section_tocantins_specific_context) {
    gsap.fromTo('#to-consular-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_section_what_our_clients_say = document.getElementById('to-consular-section-what-our-clients-say');
  if (to_consular_section_what_our_clients_say) {
    gsap.fromTo('#to-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_section_frequently_asked_questions = document.getElementById('to-consular-section-frequently-asked-questions');
  if (to_consular_section_frequently_asked_questions) {
    gsap.fromTo('#to-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_section_international_support = document.getElementById('to-consular-section-international-support');
  if (to_consular_section_international_support) {
    gsap.fromTo('#to-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_list_our_credentials = document.getElementById('to-consular-list-our-credentials');
  if (to_consular_list_our_credentials) {
    gsap.from('#to-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_list_related_services = document.getElementById('to-consular-list-related-services');
  if (to_consular_list_related_services) {
    gsap.from('#to-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_section_youre_in_good_hands = document.getElementById('to-consular-section-youre-in-good-hands');
  if (to_consular_section_youre_in_good_hands) {
    gsap.fromTo('#to-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_consular_section_21 = document.getElementById('to-consular-section-21');
  if (to_consular_section_21) {
    gsap.fromTo('#to-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('to-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (to_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#to-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #to-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_list_quick_facts = document.getElementById('to-criminalrecords-list-quick-facts');
  if (to_criminalrecords_list_quick_facts) {
    gsap.from('#to-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_list_common_challenges_applicants_face = document.getElementById('to-criminalrecords-list-common-challenges-applicants-face');
  if (to_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#to-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('to-criminalrecords-list-how-we-solve-these-challenges');
  if (to_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#to-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_section_service_overview = document.getElementById('to-criminalrecords-section-service-overview');
  if (to_criminalrecords_section_service_overview) {
    gsap.fromTo('#to-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_form_who_is_this_service_for = document.getElementById('to-criminalrecords-form-who-is-this-service-for');
  if (to_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#to-criminalrecords-form-who-is-this-service-for input, #to-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_list_required_documents = document.getElementById('to-criminalrecords-list-required-documents');
  if (to_criminalrecords_list_required_documents) {
    gsap.from('#to-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_list_process = document.getElementById('to-criminalrecords-list-process');
  if (to_criminalrecords_list_process) {
    gsap.from('#to-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_section_timelines_deadlines = document.getElementById('to-criminalrecords-section-timelines-deadlines');
  if (to_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#to-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_section_fees_costs = document.getElementById('to-criminalrecords-section-fees-costs');
  if (to_criminalrecords_section_fees_costs) {
    gsap.fromTo('#to-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_list_risks_common_mistakes = document.getElementById('to-criminalrecords-list-risks-common-mistakes');
  if (to_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#to-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('to-criminalrecords-section-diy-vs-professional-assistance');
  if (to_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_section_tocantins_specific_context = document.getElementById('to-criminalrecords-section-tocantins-specific-context');
  if (to_criminalrecords_section_tocantins_specific_context) {
    gsap.fromTo('#to-criminalrecords-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_section_what_our_clients_say = document.getElementById('to-criminalrecords-section-what-our-clients-say');
  if (to_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#to-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_section_frequently_asked_questions = document.getElementById('to-criminalrecords-section-frequently-asked-questions');
  if (to_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#to-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_section_international_support = document.getElementById('to-criminalrecords-section-international-support');
  if (to_criminalrecords_section_international_support) {
    gsap.fromTo('#to-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_list_our_credentials = document.getElementById('to-criminalrecords-list-our-credentials');
  if (to_criminalrecords_list_our_credentials) {
    gsap.from('#to-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_list_related_services = document.getElementById('to-criminalrecords-list-related-services');
  if (to_criminalrecords_list_related_services) {
    gsap.from('#to-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_section_youre_in_good_hands = document.getElementById('to-criminalrecords-section-youre-in-good-hands');
  if (to_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#to-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_criminalrecords_section_21 = document.getElementById('to-criminalrecords-section-21');
  if (to_criminalrecords_section_21) {
    gsap.fromTo('#to-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_form_extradition_assistance_in_brazil = document.getElementById('to-extradition-form-extradition-assistance-in-brazil');
  if (to_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#to-extradition-form-extradition-assistance-in-brazil input, #to-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_list_quick_facts = document.getElementById('to-extradition-list-quick-facts');
  if (to_extradition_list_quick_facts) {
    gsap.from('#to-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_list_common_challenges_applicants_face = document.getElementById('to-extradition-list-common-challenges-applicants-face');
  if (to_extradition_list_common_challenges_applicants_face) {
    gsap.from('#to-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_list_how_we_solve_these_challenges = document.getElementById('to-extradition-list-how-we-solve-these-challenges');
  if (to_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#to-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_section_service_overview = document.getElementById('to-extradition-section-service-overview');
  if (to_extradition_section_service_overview) {
    gsap.fromTo('#to-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_form_who_is_this_service_for = document.getElementById('to-extradition-form-who-is-this-service-for');
  if (to_extradition_form_who_is_this_service_for) {
    gsap.from('#to-extradition-form-who-is-this-service-for input, #to-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_list_required_documents = document.getElementById('to-extradition-list-required-documents');
  if (to_extradition_list_required_documents) {
    gsap.from('#to-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_list_process = document.getElementById('to-extradition-list-process');
  if (to_extradition_list_process) {
    gsap.from('#to-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_section_timelines_deadlines = document.getElementById('to-extradition-section-timelines-deadlines');
  if (to_extradition_section_timelines_deadlines) {
    gsap.fromTo('#to-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_section_fees_costs = document.getElementById('to-extradition-section-fees-costs');
  if (to_extradition_section_fees_costs) {
    gsap.fromTo('#to-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_list_risks_common_mistakes = document.getElementById('to-extradition-list-risks-common-mistakes');
  if (to_extradition_list_risks_common_mistakes) {
    gsap.from('#to-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_section_diy_vs_professional_assistance = document.getElementById('to-extradition-section-diy-vs-professional-assistance');
  if (to_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_section_tocantins_specific_context = document.getElementById('to-extradition-section-tocantins-specific-context');
  if (to_extradition_section_tocantins_specific_context) {
    gsap.fromTo('#to-extradition-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_section_what_our_clients_say = document.getElementById('to-extradition-section-what-our-clients-say');
  if (to_extradition_section_what_our_clients_say) {
    gsap.fromTo('#to-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_section_frequently_asked_questions = document.getElementById('to-extradition-section-frequently-asked-questions');
  if (to_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#to-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_section_international_support = document.getElementById('to-extradition-section-international-support');
  if (to_extradition_section_international_support) {
    gsap.fromTo('#to-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_list_our_credentials = document.getElementById('to-extradition-list-our-credentials');
  if (to_extradition_list_our_credentials) {
    gsap.from('#to-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_list_related_services = document.getElementById('to-extradition-list-related-services');
  if (to_extradition_list_related_services) {
    gsap.from('#to-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_section_youre_in_good_hands = document.getElementById('to-extradition-section-youre-in-good-hands');
  if (to_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#to-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_extradition_section_21 = document.getElementById('to-extradition-section-21');
  if (to_extradition_section_21) {
    gsap.fromTo('#to-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_form_discover_the_north_amazon_and_beyond = document.getElementById('to-north-form-discover-the-north-amazon-and-beyond');
  if (to_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#to-north-form-discover-the-north-amazon-and-beyond input, #to-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_list_quick_facts = document.getElementById('to-north-list-quick-facts');
  if (to_north_list_quick_facts) {
    gsap.from('#to-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_list_common_challenges_applicants_face = document.getElementById('to-north-list-common-challenges-applicants-face');
  if (to_north_list_common_challenges_applicants_face) {
    gsap.from('#to-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_list_how_we_solve_these_challenges = document.getElementById('to-north-list-how-we-solve-these-challenges');
  if (to_north_list_how_we_solve_these_challenges) {
    gsap.from('#to-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_section_trip_overview = document.getElementById('to-north-section-trip-overview');
  if (to_north_section_trip_overview) {
    gsap.fromTo('#to-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_form_who_is_this_trip_for = document.getElementById('to-north-form-who-is-this-trip-for');
  if (to_north_form_who_is_this_trip_for) {
    gsap.from('#to-north-form-who-is-this-trip-for input, #to-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_list_required_documents = document.getElementById('to-north-list-required-documents');
  if (to_north_list_required_documents) {
    gsap.from('#to-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_list_booking_process = document.getElementById('to-north-list-booking-process');
  if (to_north_list_booking_process) {
    gsap.from('#to-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_section_timelines_deadlines = document.getElementById('to-north-section-timelines-deadlines');
  if (to_north_section_timelines_deadlines) {
    gsap.fromTo('#to-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_section_fees_costs = document.getElementById('to-north-section-fees-costs');
  if (to_north_section_fees_costs) {
    gsap.fromTo('#to-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_list_risks_common_mistakes = document.getElementById('to-north-list-risks-common-mistakes');
  if (to_north_list_risks_common_mistakes) {
    gsap.from('#to-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_section_diy_vs_professional_assistance = document.getElementById('to-north-section-diy-vs-professional-assistance');
  if (to_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_section_tocantins_specific_context = document.getElementById('to-north-section-tocantins-specific-context');
  if (to_north_section_tocantins_specific_context) {
    gsap.fromTo('#to-north-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_section_what_our_clients_say = document.getElementById('to-north-section-what-our-clients-say');
  if (to_north_section_what_our_clients_say) {
    gsap.fromTo('#to-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_section_frequently_asked_questions = document.getElementById('to-north-section-frequently-asked-questions');
  if (to_north_section_frequently_asked_questions) {
    gsap.fromTo('#to-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_section_international_support = document.getElementById('to-north-section-international-support');
  if (to_north_section_international_support) {
    gsap.fromTo('#to-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_list_our_credentials = document.getElementById('to-north-list-our-credentials');
  if (to_north_list_our_credentials) {
    gsap.from('#to-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_list_related_services = document.getElementById('to-north-list-related-services');
  if (to_north_list_related_services) {
    gsap.from('#to-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_section_youre_in_good_hands = document.getElementById('to-north-section-youre-in-good-hands');
  if (to_north_section_youre_in_good_hands) {
    gsap.fromTo('#to-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_north_section_21 = document.getElementById('to-north-section-21');
  if (to_north_section_21) {
    gsap.fromTo('#to-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('to-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (to_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#to-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #to-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_list_quick_facts = document.getElementById('to-centralwest-list-quick-facts');
  if (to_centralwest_list_quick_facts) {
    gsap.from('#to-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_list_common_challenges_applicants_face = document.getElementById('to-centralwest-list-common-challenges-applicants-face');
  if (to_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#to-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_list_how_we_solve_these_challenges = document.getElementById('to-centralwest-list-how-we-solve-these-challenges');
  if (to_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#to-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_section_trip_overview = document.getElementById('to-centralwest-section-trip-overview');
  if (to_centralwest_section_trip_overview) {
    gsap.fromTo('#to-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_form_who_is_this_trip_for = document.getElementById('to-centralwest-form-who-is-this-trip-for');
  if (to_centralwest_form_who_is_this_trip_for) {
    gsap.from('#to-centralwest-form-who-is-this-trip-for input, #to-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_list_required_documents = document.getElementById('to-centralwest-list-required-documents');
  if (to_centralwest_list_required_documents) {
    gsap.from('#to-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_list_booking_process = document.getElementById('to-centralwest-list-booking-process');
  if (to_centralwest_list_booking_process) {
    gsap.from('#to-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_section_timelines_deadlines = document.getElementById('to-centralwest-section-timelines-deadlines');
  if (to_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#to-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_section_fees_costs = document.getElementById('to-centralwest-section-fees-costs');
  if (to_centralwest_section_fees_costs) {
    gsap.fromTo('#to-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_list_risks_common_mistakes = document.getElementById('to-centralwest-list-risks-common-mistakes');
  if (to_centralwest_list_risks_common_mistakes) {
    gsap.from('#to-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_section_diy_vs_professional_assistance = document.getElementById('to-centralwest-section-diy-vs-professional-assistance');
  if (to_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_section_tocantins_specific_context = document.getElementById('to-centralwest-section-tocantins-specific-context');
  if (to_centralwest_section_tocantins_specific_context) {
    gsap.fromTo('#to-centralwest-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_section_what_our_clients_say = document.getElementById('to-centralwest-section-what-our-clients-say');
  if (to_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#to-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_section_frequently_asked_questions = document.getElementById('to-centralwest-section-frequently-asked-questions');
  if (to_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#to-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_section_international_support = document.getElementById('to-centralwest-section-international-support');
  if (to_centralwest_section_international_support) {
    gsap.fromTo('#to-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_list_our_credentials = document.getElementById('to-centralwest-list-our-credentials');
  if (to_centralwest_list_our_credentials) {
    gsap.from('#to-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_list_related_services = document.getElementById('to-centralwest-list-related-services');
  if (to_centralwest_list_related_services) {
    gsap.from('#to-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_section_youre_in_good_hands = document.getElementById('to-centralwest-section-youre-in-good-hands');
  if (to_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#to-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_centralwest_section_21 = document.getElementById('to-centralwest-section-21');
  if (to_centralwest_section_21) {
    gsap.fromTo('#to-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('to-southeast-form-dynamic-southeast-cities-and-history');
  if (to_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#to-southeast-form-dynamic-southeast-cities-and-history input, #to-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_list_quick_facts = document.getElementById('to-southeast-list-quick-facts');
  if (to_southeast_list_quick_facts) {
    gsap.from('#to-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_list_common_challenges_applicants_face = document.getElementById('to-southeast-list-common-challenges-applicants-face');
  if (to_southeast_list_common_challenges_applicants_face) {
    gsap.from('#to-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_list_how_we_solve_these_challenges = document.getElementById('to-southeast-list-how-we-solve-these-challenges');
  if (to_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#to-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_section_trip_overview = document.getElementById('to-southeast-section-trip-overview');
  if (to_southeast_section_trip_overview) {
    gsap.fromTo('#to-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_form_who_is_this_trip_for = document.getElementById('to-southeast-form-who-is-this-trip-for');
  if (to_southeast_form_who_is_this_trip_for) {
    gsap.from('#to-southeast-form-who-is-this-trip-for input, #to-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_list_required_documents = document.getElementById('to-southeast-list-required-documents');
  if (to_southeast_list_required_documents) {
    gsap.from('#to-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_list_booking_process = document.getElementById('to-southeast-list-booking-process');
  if (to_southeast_list_booking_process) {
    gsap.from('#to-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_section_timelines_deadlines = document.getElementById('to-southeast-section-timelines-deadlines');
  if (to_southeast_section_timelines_deadlines) {
    gsap.fromTo('#to-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_section_fees_costs = document.getElementById('to-southeast-section-fees-costs');
  if (to_southeast_section_fees_costs) {
    gsap.fromTo('#to-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_list_risks_common_mistakes = document.getElementById('to-southeast-list-risks-common-mistakes');
  if (to_southeast_list_risks_common_mistakes) {
    gsap.from('#to-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_section_diy_vs_professional_assistance = document.getElementById('to-southeast-section-diy-vs-professional-assistance');
  if (to_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_section_tocantins_specific_context = document.getElementById('to-southeast-section-tocantins-specific-context');
  if (to_southeast_section_tocantins_specific_context) {
    gsap.fromTo('#to-southeast-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_section_what_our_clients_say = document.getElementById('to-southeast-section-what-our-clients-say');
  if (to_southeast_section_what_our_clients_say) {
    gsap.fromTo('#to-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_section_frequently_asked_questions = document.getElementById('to-southeast-section-frequently-asked-questions');
  if (to_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#to-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_section_international_support = document.getElementById('to-southeast-section-international-support');
  if (to_southeast_section_international_support) {
    gsap.fromTo('#to-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_list_our_credentials = document.getElementById('to-southeast-list-our-credentials');
  if (to_southeast_list_our_credentials) {
    gsap.from('#to-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_list_related_services = document.getElementById('to-southeast-list-related-services');
  if (to_southeast_list_related_services) {
    gsap.from('#to-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_section_youre_in_good_hands = document.getElementById('to-southeast-section-youre-in-good-hands');
  if (to_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#to-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_southeast_section_21 = document.getElementById('to-southeast-section-21');
  if (to_southeast_section_21) {
    gsap.fromTo('#to-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('to-northeast-form-vibrant-northeast-beaches-and-culture');
  if (to_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#to-northeast-form-vibrant-northeast-beaches-and-culture input, #to-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_list_quick_facts = document.getElementById('to-northeast-list-quick-facts');
  if (to_northeast_list_quick_facts) {
    gsap.from('#to-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_list_common_challenges_applicants_face = document.getElementById('to-northeast-list-common-challenges-applicants-face');
  if (to_northeast_list_common_challenges_applicants_face) {
    gsap.from('#to-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_list_how_we_solve_these_challenges = document.getElementById('to-northeast-list-how-we-solve-these-challenges');
  if (to_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#to-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_section_trip_overview = document.getElementById('to-northeast-section-trip-overview');
  if (to_northeast_section_trip_overview) {
    gsap.fromTo('#to-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_form_who_is_this_trip_for = document.getElementById('to-northeast-form-who-is-this-trip-for');
  if (to_northeast_form_who_is_this_trip_for) {
    gsap.from('#to-northeast-form-who-is-this-trip-for input, #to-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_list_required_documents = document.getElementById('to-northeast-list-required-documents');
  if (to_northeast_list_required_documents) {
    gsap.from('#to-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_list_booking_process = document.getElementById('to-northeast-list-booking-process');
  if (to_northeast_list_booking_process) {
    gsap.from('#to-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_section_timelines_deadlines = document.getElementById('to-northeast-section-timelines-deadlines');
  if (to_northeast_section_timelines_deadlines) {
    gsap.fromTo('#to-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_section_fees_costs = document.getElementById('to-northeast-section-fees-costs');
  if (to_northeast_section_fees_costs) {
    gsap.fromTo('#to-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_list_risks_common_mistakes = document.getElementById('to-northeast-list-risks-common-mistakes');
  if (to_northeast_list_risks_common_mistakes) {
    gsap.from('#to-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_section_diy_vs_professional_assistance = document.getElementById('to-northeast-section-diy-vs-professional-assistance');
  if (to_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_section_tocantins_specific_context = document.getElementById('to-northeast-section-tocantins-specific-context');
  if (to_northeast_section_tocantins_specific_context) {
    gsap.fromTo('#to-northeast-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_section_what_our_clients_say = document.getElementById('to-northeast-section-what-our-clients-say');
  if (to_northeast_section_what_our_clients_say) {
    gsap.fromTo('#to-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_section_frequently_asked_questions = document.getElementById('to-northeast-section-frequently-asked-questions');
  if (to_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#to-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_section_international_support = document.getElementById('to-northeast-section-international-support');
  if (to_northeast_section_international_support) {
    gsap.fromTo('#to-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_list_our_credentials = document.getElementById('to-northeast-list-our-credentials');
  if (to_northeast_list_our_credentials) {
    gsap.from('#to-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_list_related_services = document.getElementById('to-northeast-list-related-services');
  if (to_northeast_list_related_services) {
    gsap.from('#to-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_section_youre_in_good_hands = document.getElementById('to-northeast-section-youre-in-good-hands');
  if (to_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#to-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_northeast_section_21 = document.getElementById('to-northeast-section-21');
  if (to_northeast_section_21) {
    gsap.fromTo('#to-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_form_charming_south_wine_and_gauchos = document.getElementById('to-south-form-charming-south-wine-and-gauchos');
  if (to_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#to-south-form-charming-south-wine-and-gauchos input, #to-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_list_quick_facts = document.getElementById('to-south-list-quick-facts');
  if (to_south_list_quick_facts) {
    gsap.from('#to-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_list_common_challenges_applicants_face = document.getElementById('to-south-list-common-challenges-applicants-face');
  if (to_south_list_common_challenges_applicants_face) {
    gsap.from('#to-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_list_how_we_solve_these_challenges = document.getElementById('to-south-list-how-we-solve-these-challenges');
  if (to_south_list_how_we_solve_these_challenges) {
    gsap.from('#to-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_section_trip_overview = document.getElementById('to-south-section-trip-overview');
  if (to_south_section_trip_overview) {
    gsap.fromTo('#to-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_form_who_is_this_trip_for = document.getElementById('to-south-form-who-is-this-trip-for');
  if (to_south_form_who_is_this_trip_for) {
    gsap.from('#to-south-form-who-is-this-trip-for input, #to-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_list_required_documents = document.getElementById('to-south-list-required-documents');
  if (to_south_list_required_documents) {
    gsap.from('#to-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_list_booking_process = document.getElementById('to-south-list-booking-process');
  if (to_south_list_booking_process) {
    gsap.from('#to-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_section_timelines_deadlines = document.getElementById('to-south-section-timelines-deadlines');
  if (to_south_section_timelines_deadlines) {
    gsap.fromTo('#to-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_section_fees_costs = document.getElementById('to-south-section-fees-costs');
  if (to_south_section_fees_costs) {
    gsap.fromTo('#to-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_list_risks_common_mistakes = document.getElementById('to-south-list-risks-common-mistakes');
  if (to_south_list_risks_common_mistakes) {
    gsap.from('#to-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_section_diy_vs_professional_assistance = document.getElementById('to-south-section-diy-vs-professional-assistance');
  if (to_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#to-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_section_tocantins_specific_context = document.getElementById('to-south-section-tocantins-specific-context');
  if (to_south_section_tocantins_specific_context) {
    gsap.fromTo('#to-south-section-tocantins-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_section_what_our_clients_say = document.getElementById('to-south-section-what-our-clients-say');
  if (to_south_section_what_our_clients_say) {
    gsap.fromTo('#to-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_section_frequently_asked_questions = document.getElementById('to-south-section-frequently-asked-questions');
  if (to_south_section_frequently_asked_questions) {
    gsap.fromTo('#to-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_section_international_support = document.getElementById('to-south-section-international-support');
  if (to_south_section_international_support) {
    gsap.fromTo('#to-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_list_our_credentials = document.getElementById('to-south-list-our-credentials');
  if (to_south_list_our_credentials) {
    gsap.from('#to-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_list_related_services = document.getElementById('to-south-list-related-services');
  if (to_south_list_related_services) {
    gsap.from('#to-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_section_youre_in_good_hands = document.getElementById('to-south-section-youre-in-good-hands');
  if (to_south_section_youre_in_good_hands) {
    gsap.fromTo('#to-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

  const to_south_section_21 = document.getElementById('to-south-section-21');
  if (to_south_section_21) {
    gsap.fromTo('#to-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'easeInOutSine'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
