"use strict";
// Translation dictionary: English and Spanish
const translations = {
  en: {
    copy1: "Skip to content",
    copy2: "Home",
    copy3: "Product",
    copy4: "Features",
    copy5: "Reviews",
    copy6: "Team",
    copy7: "Join waitlist ↗",
    copy8: "NATURE CONNECTED. CARE REIMAGINED.",
    copy9: "Let nature grow.",
    copy10: "Let AI take care.",
    copy11:
      "Hand plant care over to an autonomous AI agent. Connect IoT sensors, diagnose with computer vision, and earn Web3 rewards for keeping nature alive.",
    copy12: "Discover PlantSync ↗",
    copy13: "Explore the ecosystem ↓",
    copy14: "Less worry. More life. Every day.",
    copy15: "Connected",
    copy16: "Your Monstera is thriving",
    copy17: "Moisture",
    copy18: "Temperature",
    copy19: "Optimal conditions",
    copy20: "Your agent takes it from here.",
    copy21: "Care grows into rewards.",
    copy22: "Illustrative interface · sample data",
    copy23: "ONE CONNECTED ECOSYSTEM",
    copy24: "Autonomous AI",
    copy25: "THE PRODUCT",
    copy26: "Nature is intelligent.",
    copy27: "Its care should be, too.",
    copy28: "Less uncertainty. More thriving plants.",
    copy29:
      "35% of household plants die due to inaccurate visual diagnoses and forgotten care.* PlantSync removes the cognitive load with a connected ecosystem that makes precision gardening accessible.",
    copy30: "less plant loss",
    copy31: "Our target, powered by autonomous decisions",
    copy32:
      "*Project premise awaiting validation. The 50% reduction is a target, not a demonstrated result.",
    copy33: "Meet your plant’s new intelligence.",
    copy34: "Video coming soon · YouTube embed ready",
    copy35: "PURPOSEFUL TECHNOLOGY",
    copy36: "One small ecosystem.",
    copy37: "One extraordinary leap.",
    copy38: "Three technologies. One living mission.",
    copy39: "01 / VISION",
    copy40: "A photo. A clearer picture.",
    copy41:
      "Computer vision analyzes photos in the cloud to identify botanical diseases, fungi and wilting. Turn uncertainty into informed care.",
    copy42: "COMPUTER VISION & AI",
    copy43: "02 / ACTION",
    copy44: "Intelligence that takes action.",
    copy45:
      "Connected to your IoT sensors, the autonomous agent sends real-time MQTT commands to irrigation systems and UV lights. Care moves from the screen into the real world.",
    copy46: "AUTONOMOUS AI AGENT",
    copy47: "03 / REWARD",
    copy48: "Grow something worth collecting.",
    copy49:
      "Maintain optimal conditions for 30 uninterrupted days. Verified telemetry triggers our Web Service to mint exclusive Eco-Token NFTs into your wallet through smart contracts.",
    copy50: "SMART CONTRACTS & WEB3",
    copy51: "HOW IT WORKS",
    copy52: "Connect. Cultivate. Collect.",
    copy53: "Connect your plant",
    copy54: "Monitor around the clock",
    copy55: "Let your agent act",
    copy56: "Collect Eco-Tokens",
    copy57: "Illustration of the proposed system",
    copy58: "A GREENER EVERYDAY",
    copy59: "Built around real-life care.",
    copy60: "Illustrative reviews · fictional people and experiences.",
    copy61:
      "“PlantSync saved my Monstera. I finally feel like I understand what my plants need.”",
    copy62: "Example profile",
    copy63:
      "“The Web3 integration is genius. Watching my plants thrive makes the rewards feel meaningful.”",
    copy64: "Example profile",
    copy65:
      "“Less guesswork, more green. Autonomous watering is exactly what my busy schedule needed.”",
    copy66: "Example profile",
    copy67: "THE PEOPLE",
    copy68: "Human minds.",
    copy69: "A naturally connected vision.",
    copy70:
      "Five creators. One shared ambition: help technology and nature grow together.",
    copy71: "Meet the minds behind PlantSync.",
    copy72: "Video coming soon · YouTube embed ready",
    copy73: "Project team",
    copy74: "Find on LinkedIn ↗",
    copy75: "Project team",
    copy76: "Project team",
    copy77: "Find on LinkedIn ↗",
    copy78: "Project team",
    copy79: "Project team",
    copy80: "Find on LinkedIn ↗",
    copy81: "Project team",
    copy82: "Project team",
    copy83: "Find on LinkedIn ↗",
    copy84: "Project team",
    copy85: "Project team",
    copy86: "Find on LinkedIn ↗",
    copy87: "Project team",
    copy88: "THE FUTURE IS GROWING",
    copy89: "Ready for a greener kind of smart?",
    copy90: "Be part of the next generation of plant care.",
    copy91: "Your email address",
    copy92: "Join the waitlist ↗",
    copy93: "Preview only. Your email is not sent or stored.",
    copy94:
      "Technology that cares. Nature that thrives. Building a more connected, greener everyday.",
    copy95: "Social links open searches; official profiles pending.",
    copy96: "Product",
    copy97: "Features",
    copy98: "Pricing",
    copy99: "Waitlist",
    copy100: "How it works",
    copy101: "Company",
    copy102: "About us",
    copy103: "Careers",
    copy104: "Contact",
    copy105: "Legal",
    copy106: "Privacy policy",
    copy107: "Terms of service",
    copy108: "A little more green in your inbox.",
    copy109: "Product updates and ideas for a connected future.",
    copy110: "Your email address",
    copy111: "Subscribe ↗",
    copy112: "Preview only. Your email is not sent or stored.",
    copy113: "All rights reserved.",
  },
  es: {
    copy1: "Saltar al contenido",
    copy2: "Inicio",
    copy3: "Producto",
    copy4: "Características",
    copy5: "Reseñas",
    copy6: "Equipo",
    copy7: "Acceso anticipado ↗",
    copy8: "NATURALEZA CONECTADA. CUIDADO REINVENTADO.",
    copy9: "Deja crecer la vida.",
    copy10: "Deja el cuidado a la IA.",
    copy11:
      "Delega el cuidado de tus plantas a un agente de IA autónomo. Conecta sensores IoT, diagnostica con visión computacional y gana recompensas Web3 por mantener la naturaleza viva.",
    copy12: "Descubre PlantSync ↗",
    copy13: "Explora el ecosistema ↓",
    copy14: "Menos preocupaciones. Más vida. Cada día.",
    copy15: "Conectado",
    copy16: "Tu Monstera está feliz",
    copy17: "Humedad",
    copy18: "Temperatura",
    copy19: "Condiciones óptimas",
    copy20: "Tu agente se encarga del resto.",
    copy21: "Tu cuidado se convierte en recompensas.",
    copy22: "Interfaz ilustrativa · datos de ejemplo",
    copy23: "UN ECOSISTEMA CONECTADO",
    copy24: "IA autónoma",
    copy25: "EL PRODUCTO",
    copy26: "La naturaleza es inteligente.",
    copy27: "Su cuidado también debería serlo.",
    copy28: "Menos incertidumbre. Más plantas que prosperan.",
    copy29:
      "El 35% de las plantas domésticas mueren por diagnósticos visuales inexactos y olvidos.* PlantSync elimina la carga cognitiva con un ecosistema conectado que democratiza la jardinería de precisión.",
    copy30: "menos pérdida de plantas",
    copy31: "Nuestro objetivo, mediante decisiones autónomas",
    copy32:
      "*Premisa del proyecto pendiente de validación. La reducción del 50% es un objetivo, no un resultado demostrado.",
    copy33: "Conoce la nueva inteligencia de tus plantas.",
    copy34: "Video próximamente · Espacio preparado para YouTube",
    copy35: "TECNOLOGÍA CON PROPÓSITO",
    copy36: "Un pequeño ecosistema.",
    copy37: "Un salto extraordinario.",
    copy38: "Tres tecnologías. Una misión llena de vida.",
    copy39: "01 / VISIÓN",
    copy40: "Una foto. Un diagnóstico más claro.",
    copy41:
      "La visión computacional analiza fotos en la nube para identificar enfermedades botánicas, hongos y marchitez. Convierte la incertidumbre en cuidado informado.",
    copy42: "VISIÓN COMPUTACIONAL E IA",
    copy43: "02 / ACCIÓN",
    copy44: "Inteligencia que pasa a la acción.",
    copy45:
      "Conectado a tus sensores IoT, el agente autónomo envía comandos MQTT en tiempo real al riego y las luces UV. El cuidado pasa de la pantalla al mundo real.",
    copy46: "AGENTE DE IA AUTÓNOMO",
    copy47: "03 / RECOMPENSA",
    copy48: "Cultiva algo que vale la pena coleccionar.",
    copy49:
      "Mantén condiciones óptimas durante 30 días ininterrumpidos. La telemetría verificada activa nuestro Web Service para acuñar NFTs Eco-Token exclusivos en tu wallet mediante smart contracts.",
    copy50: "SMART CONTRACTS Y WEB3",
    copy51: "CÓMO FUNCIONA",
    copy52: "Conecta. Cultiva. Colecciona.",
    copy53: "Conecta tu planta",
    copy54: "Monitorea las 24 horas",
    copy55: "Deja actuar a tu agente",
    copy56: "Colecciona Eco-Tokens",
    copy57: "Ilustración del sistema propuesto",
    copy58: "UN DÍA A DÍA MÁS VERDE",
    copy59: "Diseñado para el cuidado cotidiano.",
    copy60: "Reseñas ilustrativas · personas y experiencias ficticias.",
    copy61:
      "“PlantSync salvó mi Monstera. Por fin siento que entiendo lo que necesitan mis plantas.”",
    copy62: "Perfil de ejemplo",
    copy63:
      "“La integración Web3 es genial. Ver crecer mis plantas hace que las recompensas tengan sentido.”",
    copy64: "Perfil de ejemplo",
    copy65:
      "“Menos dudas, más verde. El riego autónomo es justo lo que necesitaba mi agenda.”",
    copy66: "Perfil de ejemplo",
    copy67: "LAS PERSONAS",
    copy68: "Mentes humanas.",
    copy69: "Una visión naturalmente conectada.",
    copy70:
      "Cinco creadores. Una ambición compartida: hacer crecer juntas la tecnología y la naturaleza.",
    copy71: "Conoce las mentes detrás de PlantSync.",
    copy72: "Video próximamente · Espacio preparado para YouTube",
    copy73: "Equipo del proyecto",
    copy74: "Buscar en LinkedIn ↗",
    copy75: "Equipo del proyecto",
    copy76: "Equipo del proyecto",
    copy77: "Buscar en LinkedIn ↗",
    copy78: "Equipo del proyecto",
    copy79: "Equipo del proyecto",
    copy80: "Buscar en LinkedIn ↗",
    copy81: "Equipo del proyecto",
    copy82: "Equipo del proyecto",
    copy83: "Buscar en LinkedIn ↗",
    copy84: "Equipo del proyecto",
    copy85: "Equipo del proyecto",
    copy86: "Buscar en LinkedIn ↗",
    copy87: "Equipo del proyecto",
    copy88: "EL FUTURO ESTÁ CRECIENDO",
    copy89: "¿Listo para una inteligencia más verde?",
    copy90: "Sé parte de la próxima generación del cuidado botánico.",
    copy91: "Tu correo electrónico",
    copy92: "Únete a la lista de espera ↗",
    copy93: "Solo demostración. Tu correo no se envía ni se guarda.",
    copy94:
      "Tecnología que cuida. Naturaleza que prospera. Construimos un día a día más verde y conectado.",
    copy95:
      "Los enlaces sociales abren búsquedas; perfiles oficiales pendientes.",
    copy96: "Producto",
    copy97: "Características",
    copy98: "Precios",
    copy99: "Lista de espera",
    copy100: "Cómo funciona",
    copy101: "Empresa",
    copy102: "Nosotros",
    copy103: "Carreras",
    copy104: "Contacto",
    copy105: "Legal",
    copy106: "Política de privacidad",
    copy107: "Términos de servicio",
    copy108: "Un poco más de verde en tu bandeja.",
    copy109: "Novedades del producto e ideas para un futuro conectado.",
    copy110: "Tu correo electrónico",
    copy111: "Suscríbete ↗",
    copy112: "Solo demostración. Tu correo no se envía ni se guarda.",
    copy113: "Todos los derechos reservados.",
  },
};

// Set real YouTube video IDs here when the project videos are ready.
const VIDEO_IDS = { product: "", team: "" };
let language = "en";
let stageIndex = 0;
let dialogKey = null;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
// Interactive process content
const stages = {
  en: [
    [
      "One plant. One node. Connected.",
      "Connect your IoT node and register your plant to start understanding its environment.",
    ],
    [
      "Every detail. Every hour.",
      "Telemetry and AI monitor 24/7. Edge Computing processes readings close to the sensors to understand moisture, light and temperature.",
    ],
    [
      "From insight to action.",
      "Your autonomous agent sends MQTT commands to connected irrigation and UV lighting hardware when your plant needs care.",
    ],
    [
      "Healthy habits. Living rewards.",
      "After 30 uninterrupted days of optimal conditions, verified telemetry triggers an exclusive Eco-Token NFT in your wallet.",
    ],
  ],
  es: [
    [
      "Una planta. Un nodo. Todo conectado.",
      "Conecta tu nodo IoT y registra tu planta para empezar a comprender su entorno.",
    ],
    [
      "Cada detalle. A cualquier hora.",
      "La telemetría y la IA monitorean 24/7. Edge Computing procesa las lecturas cerca del sensor para comprender la humedad, la luz y la temperatura.",
    ],
    [
      "Del análisis a la acción.",
      "Tu agente autónomo envía comandos MQTT al hardware de riego y luces UV conectado cuando tu planta necesita cuidados.",
    ],
    [
      "Hábitos saludables. Recompensas vivas.",
      "Tras 30 días ininterrumpidos de condiciones óptimas, la telemetría verificada activa un NFT Eco-Token exclusivo en tu wallet.",
    ],
  ],
};
// Accessible interface messages
const messages = {
  en: {
    invalid: "Enter a valid email, such as you@example.com.",
    valid:
      "Email validated. This is a preview; no subscription has been created.",
    menu: "Open menu",
    close: "Close menu",
    dialog: "Close dialog",
    nav: "Main navigation",
    placeholder: "you@example.com",
    title: "PlantSync — Intelligent care. Living rewards.",
    description:
      "Autonomous plant care powered by IoT, AI and Web3. Discover PlantSync.",
    product: "PlantSync product introduction",
    team: "Meet the PlantSync team",
  },
  es: {
    invalid: "Introduce un correo válido, como nombre@ejemplo.com.",
    valid:
      "Correo validado. Esta es una demo; no se ha realizado ninguna suscripción.",
    menu: "Abrir menú",
    close: "Cerrar menú",
    dialog: "Cerrar diálogo",
    nav: "Navegación principal",
    placeholder: "nombre@ejemplo.com",
    title: "PlantSync — Cuidado inteligente. Recompensas vivas.",
    description:
      "Cuidado autónomo de plantas con IoT, IA y Web3. Descubre PlantSync.",
    product: "Presentación del producto PlantSync",
    team: "Conoce al equipo PlantSync",
  },
};
// Modal content
const information = {
  en: {
    pricing: [
      "Pricing",
      "PlantSync is in development. Plans and pricing have not been announced.",
    ],
    careers: [
      "Careers",
      "No open positions have been announced. Meet the project creators in the Team section.",
    ],
    privacy: [
      "Preview privacy",
      "Forms validate your email in your browser only. They do not transmit or store it. Fonts load from Google Fonts, and social links open external searches. Configured videos load from YouTube. Final policies will be published before launch.",
    ],
    terms: [
      "Preview terms",
      "This page presents a project in development. Telemetry and reviews are illustrative; reviewers are fictional. No IoT devices, AI agents, wallets or smart contracts are connected. Eco-Tokens do not promise financial returns.",
    ],
  },
  es: {
    pricing: [
      "Precios",
      "PlantSync está en desarrollo. Aún no se han anunciado planes ni precios.",
    ],
    careers: [
      "Carreras",
      "No se han anunciado vacantes. Conoce a los creadores del proyecto en la sección Equipo.",
    ],
    privacy: [
      "Privacidad de la demo",
      "Los formularios validan tu correo solo en tu navegador. No lo transmiten ni almacenan. Las tipografías se cargan desde Google Fonts y los enlaces sociales abren búsquedas externas. Los videos configurados se cargan desde YouTube. Las políticas definitivas se publicarán antes del lanzamiento.",
    ],
    terms: [
      "Términos de la demo",
      "Esta página presenta un proyecto en desarrollo. La telemetría y las reseñas son ilustrativas; los autores son ficticios. No hay dispositivos IoT, agentes IA, wallets ni smart contracts conectados. Los Eco-Tokens no prometen rentabilidad financiera.",
    ],
  },
};
// DOM references
const header = document.querySelector("#header");
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav-links");
const dialog = document.querySelector("#info-dialog");
const tabs = [...document.querySelectorAll(".step")];
// Mobile navigation
function closeMenu() {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", messages[language].menu);
}
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", messages[language][open ? "close" : "menu"]);
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeMenu();
});
document.addEventListener("click", (e) => {
  if (!header.contains(e.target)) closeMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("open")) {
    closeMenu();
    menu.focus();
  }
});
window.matchMedia("(min-width:1050px)").addEventListener("change", closeMenu);
// Local photographs follow the four process steps.
const stagePhotos = [
  "connected-technology",
  "plant-diagnosis",
  "plant-watering",
  "web3-token",
];

// Interactive tabs and keyboard navigation
function selectStage(index, focus = false) {
  stageIndex = index;
  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
    tab.setAttribute("aria-selected", String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
  });
  document.querySelector("#panel-title").textContent =
    stages[language][index][0];
  document.querySelector("#panel-description").textContent =
    stages[language][index][1];
  const panelImage = document.querySelector("#panel-image");
  const nextImage = "assets/" + stagePhotos[index] + ".webp";
  if (panelImage.getAttribute("src") !== nextImage) {
    panelImage.setAttribute("src", nextImage);
    if (!reducedMotion.matches && typeof panelImage.animate === "function") {
      panelImage.animate(
        [
          { opacity: 0.3, transform: "scale(1.035)" },
          { opacity: 1, transform: "scale(1)" },
        ],
        { duration: 450, easing: "ease-out" },
      );
    }
  }
  document
    .querySelector("#step-panel")
    .setAttribute("aria-labelledby", tabs[index].id);
  if (focus) tabs[index].focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectStage(i));
  tab.addEventListener("keydown", (e) => {
    const next = {
      ArrowDown: (i + 1) % 4,
      ArrowUp: (i + 3) % 4,
      Home: 0,
      End: 3,
    }[e.key];
    if (next !== undefined) {
      e.preventDefault();
      selectStage(next, true);
    }
  });
});
function updateDialog() {
  if (!dialogKey) return;
  document.querySelector("#info-title").textContent =
    information[language][dialogKey][0];
  document.querySelector("#info-copy").textContent =
    information[language][dialogKey][1];
}
// Language switching
function setLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;
  document.title = messages[lang].title;
  document.querySelector('meta[name="description"]').content =
    messages[lang].description;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
  document
    .querySelectorAll("[data-language]")
    .forEach((btn) =>
      btn.setAttribute("aria-pressed", String(btn.dataset.language === lang)),
    );
  document
    .querySelectorAll('input[type="email"]')
    .forEach((input) => (input.placeholder = messages[lang].placeholder));
  // Local form validation
  document.querySelectorAll(".signup-form").forEach((form) => {
    if (form.dataset.state)
      form.querySelector(".form-message").textContent =
        messages[lang][form.dataset.state];
  });
  document
    .querySelectorAll("[data-video]")
    .forEach((frame) => (frame.title = messages[lang][frame.dataset.video]));
  document.querySelector(".nav").setAttribute("aria-label", messages[lang].nav);
  document
    .querySelector(".dialog-close")
    .setAttribute("aria-label", messages[lang].dialog);
  document
    .querySelectorAll(".social-links a")
    .forEach((a, i) =>
      a.setAttribute(
        "aria-label",
        (lang === "en" ? "Search PlantSync on " : "Buscar PlantSync en ") +
          (i ? "YouTube" : "LinkedIn"),
      ),
    );
  closeMenu();
  selectStage(stageIndex);
  updateDialog();
}
document
  .querySelectorAll("[data-language]")
  .forEach((btn) =>
    btn.addEventListener("click", () => setLanguage(btn.dataset.language)),
  );
document.querySelectorAll(".signup-form").forEach((form) => {
  const input = form.querySelector("input");
  const feedback = form.querySelector(".form-message");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    input.value = input.value.trim();
    const valid =
      input.validity.valid && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    form.dataset.state = valid ? "valid" : "invalid";
    input.setAttribute("aria-invalid", String(!valid));
    feedback.classList.toggle("error", !valid);
    feedback.textContent = messages[language][form.dataset.state];
    if (!valid) input.focus();
  });
  input.addEventListener("input", () => {
    delete form.dataset.state;
    input.removeAttribute("aria-invalid");
    feedback.textContent = "";
    feedback.classList.remove("error");
  });
});
document.querySelectorAll("[data-info]").forEach((btn) =>
  btn.addEventListener("click", () => {
    dialogKey = btn.dataset.info;
    updateDialog();
    dialog.showModal();
  }),
);
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      dialog.close();
  }
});
// Missing image fallback
document.querySelectorAll("img").forEach((img) => {
  const failed = () => {
    img.classList.add("image-missing");
    img.parentElement.classList.add("has-fallback");
  };
  img.addEventListener("error", failed);
  if (img.complete && img.naturalWidth === 0) failed();
});
document.querySelectorAll("[data-video]").forEach((frame) => {
  const id = VIDEO_IDS[frame.dataset.video];
  if (/^[\w-]{11}$/.test(id)) {
    frame.src = `https://www.youtube-nocookie.com/embed/${id}`;
    frame.nextElementSibling.hidden = true;
  }
});
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.parentElement.matches(".feature-grid,.team-grid,.review-grid"))
      el.style.transitionDelay = `${[...el.parentElement.children].indexOf(el) * 75}ms`;
    el.classList.add("ready");
    observer.observe(el);
  });
}
// Scroll and parallax
const layer = document.querySelector(".parallax-layer");
let queued = false;
function updateScroll() {
  header.classList.toggle("scrolled", window.scrollY > 12);
  layer.style.transform = reducedMotion.matches
    ? "none"
    : `translateY(${Math.min(window.scrollY, 700) * 0.035}px)`;
  queued = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(updateScroll);
    }
  },
  { passive: true },
);
reducedMotion.addEventListener("change", () => {
  if (reducedMotion.matches)
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("visible"));
  updateScroll();
});
// Magnetic button hover
const finePointer = window.matchMedia("(hover:hover) and (pointer:fine)");
document.querySelectorAll(".magnetic").forEach((btn) => {
  btn.addEventListener("pointermove", (e) => {
    if (reducedMotion.matches || !finePointer.matches) return;
    const r = btn.getBoundingClientRect();
    btn.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.08}px ${(e.clientY - r.top - r.height / 2) * 0.1}px`;
  });
  btn.addEventListener("pointerleave", () => {
    btn.style.translate = "0 0";
  });
});
document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage("en");
updateScroll();
