// Theme toggle
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const key = "pref-theme";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  function applyTheme(mode) {
    if (mode === "dark") {
      root.setAttribute("data-theme", "dark");
      btn.innerHTML = '<i class="fa-solid fa-sun"></i>'
    } else {
      btn.innerHTML = '<i class="fa-solid fa-moon"></i>'
      root.removeAttribute("data-theme");
    }
  }
  const saved = localStorage.getItem(key);
  applyTheme(saved || (prefersDark.matches ? "dark" : "light"));
  btn &&
    btn.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(key, next);
    });
  // keep in sync with system if user hasn't set preference
  prefersDark.addEventListener("change", (e) => {
    if (!localStorage.getItem(key)) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
})();

// Language toggle
(function () {
  const root = document.documentElement;
  const body = document.body;
  const btn = document.getElementById("lang-toggle");
  const key = "pref-lang";
  
  // Import translations dynamically
  let translations = {};
  
  // Load translations from data.js
  import('./data.js').then(module => {
    translations = module.translations;
    
    // Get translation helper
    function t(key, lang) {
      const keys = key.split('.');
      let value = translations[lang];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    }
    
    // Update all elements with data-i18n attribute
    function updateContent(lang) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key, lang);
      });
      
      // Re-render dynamic content (skills and projects)
      if (window.renderSkills) window.renderSkills();
      if (window.renderProjects) window.renderProjects();
    }
    
    function applyLang(lang) {
      if (lang === "ar") {
        root.setAttribute("lang", "ar");
        body.setAttribute("dir", "rtl");
        btn && (btn.textContent = "English");
      } else {
        root.setAttribute("lang", "en");
        body.setAttribute("dir", "ltr");
        btn && (btn.textContent = "عربي");
      }
      updateContent(lang);
    }
    
    const saved = localStorage.getItem(key);
    applyLang(saved || "en");
    
    btn &&
      btn.addEventListener("click", () => {
        const current = root.getAttribute("lang") || "en";
        const next = current === "ar" ? "en" : "ar";
        applyLang(next);
        localStorage.setItem(key, next);
      });
  });
})();

// Mobile nav toggle
(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;
  function setExpanded(expanded) {
    nav.setAttribute("aria-expanded", String(expanded));
    toggle.setAttribute("aria-expanded", String(expanded));
  }
  setExpanded(false);
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    setExpanded(!expanded);
  });
  // close on link click (mobile)
  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.tagName === "A") {
      setExpanded(false);
    }
  });
})();
