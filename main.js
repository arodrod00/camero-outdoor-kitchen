const video      = document.getElementById('bgVideo');
const videoOverlay = document.querySelector('.video-overlay');
const progressBar  = document.getElementById('progressBar');
const nav          = document.getElementById('nav');
const navBurger    = document.getElementById('navBurger');
const navLinks     = document.querySelector('.nav-links');

// ─────────────────────────────────────────────────────────
// i18n — translations
// ─────────────────────────────────────────────────────────
const T = {
  es: {
    'page-title'        : 'Camero Outdoor Kitchen — Miami',
    'nav.servicios'     : 'Servicios',
    'nav.proceso'       : 'Proceso',
    'nav.galeria'       : 'Galería',
    'nav.cotizar'       : 'Cotizar',
    'hero.eyebrow'      : 'Miami · Cocinas Exteriores',
    'hero.sub'          : 'Construimos cocinas exteriores personalizadas.<br/>Diseño, durabilidad y estilo para tu espacio.',
    'hero.cta.primary'  : 'Solicitar cotización',
    'hero.cta.ghost'    : 'Ver servicios',
    'hero.scroll'       : 'Scroll para explorar',
    'hero.stat.custom'  : 'Personalizado',
    'hero.stat.based'   : 'Based',
    'hero.stat.followers': 'Seguidores',
    'svc.label'         : 'Lo que construimos',
    'svc.title'         : 'Nuestros Servicios',
    'svc.grill.title'   : 'Estaciones de Parrilla',
    'svc.grill.desc'    : 'Módulos con grill integrado de alta potencia, resistentes a la intemperie. Diseño robusto para uso diario.',
    'svc.kitchen.title' : 'Cocinas Completas',
    'svc.kitchen.desc'  : 'Cocinas exteriores con countertop, gabinetes, grill, fregadero y refrigerador en un solo conjunto.',
    'svc.sink.title'    : 'Módulo de Fregadero',
    'svc.sink.desc'     : 'Estaciones con fregadero de acero inoxidable y grifo. Perfectas para completar tu outdoor kitchen.',
    'svc.fridge.title'  : 'Módulo Refrigerador',
    'svc.fridge.desc'   : 'Gabinetes con refrigerador outdoor integrado, construidos para el clima de Florida.',
    'svc.custom.title'  : 'Diseño 100% Custom',
    'svc.custom.desc'   : 'Medidas, acabados, layout y combinaciones adaptadas a tu espacio. Sin proyectos iguales.',
    'svc.install.title' : 'Instalación en Miami',
    'svc.install.desc'  : 'Servicio completo de instalación en toda el área de Miami-Dade. Rápido, limpio y profesional.',
    'proc.label'        : 'Cómo trabajamos',
    'proc.title'        : 'El Proceso',
    'proc.step1.title'  : 'Consulta Gratis',
    'proc.step1.desc'   : 'Nos contactas por teléfono o WhatsApp. Evaluamos tu espacio, tus necesidades y te asesoramos sin costo.',
    'proc.step2.title'  : 'Diseño y Cotización',
    'proc.step2.desc'   : 'Te presentamos el diseño personalizado con materiales, dimensiones y precio final. Sin sorpresas.',
    'proc.step3.title'  : 'Fabricación',
    'proc.step3.desc'   : 'Construimos tu cocina con los mejores materiales: panels corrugados, acero inoxidable y countertop de calidad.',
    'proc.step4.title'  : 'Instalación',
    'proc.step4.desc'   : 'Instalamos en tu propiedad en Miami. Terminamos limpio y te hacemos el walkthrough completo.',
    'gal.label'         : 'Trabajo real',
    'gal.title'         : 'Proyectos Completados',
    'gal.placeholder'   : 'Agrega tus fotos aquí',
    'gal.cta.text'      : 'Sigue nuestro trabajo en Instagram',
    'gal.cta.btn'       : '@outdoor_kitchen97',
    'showcase.eyebrow'  : 'El resultado final',
    'showcase.title'    : 'Así luce tu<br/>espacio exterior',
    'showcase.btn'      : 'Quiero el mío',
    'contact.label'     : 'Hablemos',
    'contact.title'     : 'Solicita tu<br/>Cotización',
    'contact.desc'      : 'Contáctanos directamente por WhatsApp o llámanos. Sin compromiso, te asesoramos gratis.',
    'contact.wa.label'  : 'WhatsApp',
    'contact.phone.label': 'Llamar',
    'contact.ig.label'  : 'Instagram',
    'form.name.label'   : 'Nombre',
    'form.name.ph'      : 'Tu nombre',
    'form.phone.label'  : 'Teléfono / WhatsApp',
    'form.phone.ph'     : '(786) 000-0000',
    'form.service.label': 'Servicio de interés',
    'form.service.default': 'Selecciona un servicio',
    'form.service.1'    : 'Cocina exterior completa',
    'form.service.2'    : 'Estación de parrilla',
    'form.service.3'    : 'Módulo con fregadero',
    'form.service.4'    : 'Módulo con refrigerador',
    'form.service.5'    : 'Diseño personalizado',
    'form.message.label': 'Cuéntanos de tu proyecto',
    'form.message.ph'   : 'Tamaño del espacio, estilo, presupuesto...',
    'form.submit'       : 'Enviar solicitud',
    'legal.title'       : 'Aviso Legal & Términos',
    'legal.block1.title': 'Sobre los proyectos mostrados',
    'legal.block1.p'    : 'Las imágenes y proyectos publicados en este sitio son trabajos representativos realizados por Camero Outdoor Kitchen. Los resultados finales pueden variar según las dimensiones del espacio, los materiales seleccionados por el cliente y las condiciones del sitio de instalación.',
    'legal.block2.title': 'Cotizaciones y contratos',
    'legal.block2.p'    : 'Los precios, materiales y plazos de entrega están sujetos a cambios sin previo aviso hasta que se emita una cotización formal por escrito y ambas partes la firmen. Solo el contrato escrito y firmado entre las partes es documento válido de acuerdo.',
    'legal.block3.title': 'Permisos y regulaciones',
    'legal.block3.p'    : 'Ciertos trabajos de construcción e instalación pueden requerir permisos municipales según las ordenanzas de Miami-Dade County. Es responsabilidad del propietario verificar y obtener dichos permisos, salvo que se acuerde lo contrario por escrito en el contrato.',
    'legal.block4.title': 'Limitación de responsabilidad',
    'legal.block4.p'    : 'Camero Outdoor Kitchen no asume responsabilidad por daños derivados del uso inadecuado de los productos instalados, del incumplimiento de las instrucciones de mantenimiento, o de condiciones externas fuera de nuestro control.',
    'legal.block5.title': 'Privacidad de datos',
    'legal.block5.p'    : 'Este sitio no recopila datos personales de forma automatizada. La información enviada a través del formulario se utiliza exclusivamente para responder a su consulta y no es compartida con terceros.',
    'legal.block6.title': 'Jurisdicción aplicable',
    'legal.block6.p'    : 'Todos los servicios son prestados desde Miami, Florida. Para cualquier disputa se aplicará la ley del Estado de Florida, con jurisdicción exclusiva en los tribunales de Miami-Dade County.',
    'legal.note'        : 'Última actualización: junio 2026. Para consultas legales contactar a',
    'footer.location'   : 'Miami, Florida',
    'footer.link.legal' : 'Aviso Legal',
    'footer.link.contact': 'Contacto',
    'footer.copy'       : '© 2026 Camero Outdoor Kitchen. Todos los derechos reservados.',
    'wa.greeting'       : 'Hola Camero Outdoor Kitchen!',
    'wa.name'           : 'Nombre',
    'wa.phone'          : 'Teléfono',
    'wa.service'        : 'Servicio',
    'wa.service.none'   : 'No especificado',
    'wa.message'        : 'Mensaje',
    'wa.message.none'   : 'Sin mensaje adicional',
    'wa.closing'        : 'Solicito una cotización.',
    'form.sending'      : '✓ Abriendo WhatsApp...',
  },
  en: {
    'page-title'        : 'Camero Outdoor Kitchen — Miami',
    'nav.servicios'     : 'Services',
    'nav.proceso'       : 'Process',
    'nav.galeria'       : 'Gallery',
    'nav.cotizar'       : 'Get a Quote',
    'hero.eyebrow'      : 'Miami · Outdoor Kitchens',
    'hero.sub'          : 'We build custom outdoor kitchens.<br/>Design, durability and style for your space.',
    'hero.cta.primary'  : 'Request a Quote',
    'hero.cta.ghost'    : 'Our Services',
    'hero.scroll'       : 'Scroll to explore',
    'hero.stat.custom'  : 'Custom',
    'hero.stat.based'   : 'Based',
    'hero.stat.followers': 'Followers',
    'svc.label'         : 'What we build',
    'svc.title'         : 'Our Services',
    'svc.grill.title'   : 'Grill Stations',
    'svc.grill.desc'    : 'High-power integrated grill modules, weather-resistant and built for everyday use.',
    'svc.kitchen.title' : 'Complete Kitchens',
    'svc.kitchen.desc'  : 'Full outdoor kitchens with countertop, cabinets, grill, sink and refrigerator in one setup.',
    'svc.sink.title'    : 'Sink Module',
    'svc.sink.desc'     : 'Stations with stainless steel sink and faucet. Perfect to complete your outdoor kitchen.',
    'svc.fridge.title'  : 'Refrigerator Module',
    'svc.fridge.desc'   : "Cabinets with built-in outdoor refrigerator, engineered for Florida's climate.",
    'svc.custom.title'  : '100% Custom Design',
    'svc.custom.desc'   : 'Dimensions, finishes, layout and combinations tailored to your space. No two projects alike.',
    'svc.install.title' : 'Miami Installation',
    'svc.install.desc'  : 'Full installation service across Miami-Dade. Fast, clean and professional.',
    'proc.label'        : 'How we work',
    'proc.title'        : 'The Process',
    'proc.step1.title'  : 'Free Consultation',
    'proc.step1.desc'   : 'Contact us by phone or WhatsApp. We evaluate your space and needs at no cost.',
    'proc.step2.title'  : 'Design & Quote',
    'proc.step2.desc'   : 'We present your custom design with materials, dimensions and final price. No surprises.',
    'proc.step3.title'  : 'Fabrication',
    'proc.step3.desc'   : 'We build your kitchen with the best materials: corrugated panels, stainless steel and quality countertop.',
    'proc.step4.title'  : 'Installation',
    'proc.step4.desc'   : 'We install at your property in Miami. We finish clean and give you a full walkthrough.',
    'gal.label'         : 'Real work',
    'gal.title'         : 'Completed Projects',
    'gal.placeholder'   : 'Add your photos here',
    'gal.cta.text'      : 'Follow our work on Instagram',
    'gal.cta.btn'       : '@outdoor_kitchen97',
    'showcase.eyebrow'  : 'The final result',
    'showcase.title'    : 'This is what your<br/>outdoor space looks like',
    'showcase.btn'      : 'I want mine',
    'contact.label'     : "Let's talk",
    'contact.title'     : 'Request your<br/>Quote',
    'contact.desc'      : 'Contact us directly via WhatsApp or give us a call. No commitment — free consultation.',
    'contact.wa.label'  : 'WhatsApp',
    'contact.phone.label': 'Call us',
    'contact.ig.label'  : 'Instagram',
    'form.name.label'   : 'Name',
    'form.name.ph'      : 'Your name',
    'form.phone.label'  : 'Phone / WhatsApp',
    'form.phone.ph'     : '(786) 000-0000',
    'form.service.label': 'Service of interest',
    'form.service.default': 'Select a service',
    'form.service.1'    : 'Full outdoor kitchen',
    'form.service.2'    : 'Grill station',
    'form.service.3'    : 'Sink module',
    'form.service.4'    : 'Refrigerator module',
    'form.service.5'    : 'Custom design',
    'form.message.label': 'Tell us about your project',
    'form.message.ph'   : 'Space size, style, budget...',
    'form.submit'       : 'Send request',
    'legal.title'       : 'Legal Notice & Terms',
    'legal.block1.title': 'About the projects shown',
    'legal.block1.p'    : 'The images and projects published on this site are representative work by Camero Outdoor Kitchen. Final results may vary based on space dimensions, materials selected by the client, and installation site conditions.',
    'legal.block2.title': 'Quotes and contracts',
    'legal.block2.p'    : 'Prices, materials and delivery timelines are subject to change without notice until a formal written quote is issued and signed by both parties. Only the written signed contract constitutes a binding agreement.',
    'legal.block3.title': 'Permits and regulations',
    'legal.block3.p'    : "Certain construction and installation work may require municipal permits under Miami-Dade County ordinances. It is the owner's responsibility to verify and obtain such permits, unless otherwise agreed in writing.",
    'legal.block4.title': 'Limitation of liability',
    'legal.block4.p'    : 'Camero Outdoor Kitchen assumes no liability for damages resulting from improper use of installed products, failure to follow maintenance instructions, or external conditions beyond our control.',
    'legal.block5.title': 'Data privacy',
    'legal.block5.p'    : 'This site does not collect personal data automatically. Information submitted through the contact form is used solely to respond to your inquiry and is not shared with third parties.',
    'legal.block6.title': 'Applicable jurisdiction',
    'legal.block6.p'    : 'All services are provided from Miami, Florida. For any dispute, Florida State law applies, with exclusive jurisdiction in the courts of Miami-Dade County.',
    'legal.note'        : 'Last updated: June 2026. For legal inquiries contact',
    'footer.location'   : 'Miami, Florida',
    'footer.link.legal' : 'Legal Notice',
    'footer.link.contact': 'Contact',
    'footer.copy'       : '© 2026 Camero Outdoor Kitchen. All rights reserved.',
    'wa.greeting'       : 'Hi Camero Outdoor Kitchen!',
    'wa.name'           : 'Name',
    'wa.phone'          : 'Phone',
    'wa.service'        : 'Service',
    'wa.service.none'   : 'Not specified',
    'wa.message'        : 'Message',
    'wa.message.none'   : 'No additional message',
    'wa.closing'        : "I'd like to request a quote.",
    'form.sending'      : '✓ Opening WhatsApp...',
  }
};

let currentLang = 'es';

function applyLang(lang) {
  currentLang = lang;
  const t = T[lang];

  document.title = t['page-title'];
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v === undefined) return;
    // Sanitize: only <br> tags allowed — strips any other HTML to prevent XSS
    el.innerHTML = v.replace(/<(?!br\s*\/?>)[^>]*>/gi, '');
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t[el.dataset.i18nPh];
    if (v !== undefined) el.placeholder = v;
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'es' ? 'EN' : 'ES';

  localStorage.setItem('camero-lang', lang);
}

function detectLang() {
  const saved = localStorage.getItem('camero-lang');
  if (saved && T[saved]) return saved;
  const browser = (navigator.language || 'es').toLowerCase();
  return browser.startsWith('en') ? 'en' : 'es';
}

applyLang(detectLang());

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

// ─────────────────────────────────────────────────────────
// Video — wait for seekable state
// ─────────────────────────────────────────────────────────
let videoReady = false;

function onVideoReady() {
  if (videoReady) return;
  videoReady = true;
  // iOS requires play() to be called at least once before currentTime
  // seeks render any frame — without this the video stays black
  const p = video.play();
  if (p) p.then(() => video.pause()).catch(() => {});
}

video.addEventListener('loadedmetadata', onVideoReady, { once: true });
video.addEventListener('canplay', onVideoReady, { once: true });
if (video.readyState >= 2) onVideoReady();

// ─────────────────────────────────────────────────────────
// Scroll → target fraction (UI updates only)
// ─────────────────────────────────────────────────────────
let targetFraction = 0;

window.addEventListener('scroll', () => {
  const scrollY   = window.scrollY;
  const maxScroll  = document.documentElement.scrollHeight - window.innerHeight;
  targetFraction   = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

  progressBar.style.width = (targetFraction * 100) + '%';
  nav.classList.toggle('scrolled', scrollY > 60);
}, { passive: true });

// ─────────────────────────────────────────────────────────
// rAF loop — lerp currentTime toward target (60fps smooth)
// Pauses when tab is hidden to save CPU/battery
// ─────────────────────────────────────────────────────────
let tabHidden = document.hidden;
document.addEventListener('visibilitychange', () => { tabHidden = document.hidden; });

(function videoTick() {
  if (!tabHidden && videoReady && video.duration) {
    const targetTime = targetFraction * video.duration;
    const diff = targetTime - video.currentTime;
    if (Math.abs(diff) > 0.008) {
      video.currentTime += diff * 0.12;
    }
  }
  requestAnimationFrame(videoTick);
}());

// ─────────────────────────────────────────────────────────
// Mobile nav
// ─────────────────────────────────────────────────────────
navBurger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navBurger.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navBurger.setAttribute('aria-expanded', 'false');
  });
});

// Close mobile nav on outside tap
document.addEventListener('click', e => {
  if (navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !navBurger.contains(e.target)) {
    navLinks.classList.remove('open');
    navBurger.setAttribute('aria-expanded', 'false');
  }
});

// ─────────────────────────────────────────────────────────
// Smooth anchor scroll
// ─────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ─────────────────────────────────────────────────────────
// Form → WhatsApp (bilingual message + submit feedback)
// ─────────────────────────────────────────────────────────
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const t       = T[currentLang];
  const btn     = document.getElementById('submitBtn');
  const name    = document.getElementById('name').value.trim();
  const phone   = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  const text = encodeURIComponent(
    `${t['wa.greeting']}\n\n` +
    `${t['wa.name']}: ${name}\n` +
    `${t['wa.phone']}: ${phone}\n` +
    `${t['wa.service']}: ${service || t['wa.service.none']}\n` +
    `${t['wa.message']}: ${message || t['wa.message.none']}\n\n` +
    `${t['wa.closing']}`
  );

  window.open(`https://wa.me/17862824653?text=${text}`, '_blank');

  // Visual feedback — show sending state for 3s then restore
  const original = btn.textContent;
  btn.textContent = t['form.sending'];
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
  }, 3000);
});

// ─────────────────────────────────────────────────────────
// Showcase: fade overlay when section is in view
// ─────────────────────────────────────────────────────────
videoOverlay.style.transition = 'opacity 1s ease';
const showcaseEl = document.querySelector('.section--showcase');
if (showcaseEl) {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      videoOverlay.style.opacity = entry.isIntersecting ? '0' : '';
    });
  }, { threshold: 0.35 }).observe(showcaseEl);
}

// ─────────────────────────────────────────────────────────
// Entrance animations — CSS is in style.css (not injected)
// unobserve after visible to free memory
// ─────────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .step, .gallery-item, .contact-method').forEach((el, i) => {
  el.classList.add('fade-up');
  el.style.transitionDelay = (i % 3) * 0.08 + 's';
  observer.observe(el);
});
