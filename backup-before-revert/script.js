(() => {
  "use strict";

  const arabicName = String.fromCodePoint(
    0x0631, 0x064a, 0x062a, 0x0627, 0x0644,
    0x0020,
    0x0645, 0x062d, 0x0645, 0x062f
  );

  const translations = {
    en: {
      documentTitle: "Retal Mohammed | Professional Portfolio",
      description: "The bilingual professional portfolio of Retal Mohammed, Administrative Specialist and Certified Business Professional.",
      brandLabel: "Retal Mohammed — home",
      languageAction: "Switch website language to Arabic",
      languageToggle: "العربية",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      primaryNavigation: "Primary navigation",
      heroActions: "Profile actions",
      skipLink: "Skip to main content",
      brandName: "Retal Mohammed",
      navHome: "Home",
      navProfile: "Profile",
      navExperience: "Experience",
      navEducation: "Education",
      navSkills: "Skills",
      navCertifications: "Certifications",
      navInitiatives: "Initiatives",
      navContact: "Contact",
      eyebrow: "Certified Business Professional",
      name: "Retal Mohammed",
      role: "Administrative Specialist | CBP",
      focus: "Project Management • Decision Support • Strategic Planning • Initiative Development",
      summary: "Government-sector experience with a focus on structured work, professional follow-up, and development of practical initiatives and proposals.",
      profileAction: "Explore My Profile",
      experienceAction: "View Experience",
      cvAction: "Download CV",
      portfolioHighlights: "Portfolio highlights",
      initiativeFiles: "Initiative & Proposal Files",
      ideasDeveloped: "Ideas Developed in Detail",
      professionalFocus: "Professional Focus",
      focusAdministration: "Administration",
      focusProjectManagement: "Project Management",
      focusDecisionSupport: "Decision Support",
      focusStrategicPlanning: "Strategic Planning",
      focusInitiativeDevelopment: "Initiative Development",
      languageChanged: "English is now active.",
      profileNotice: "Profile will be available in Step 2.",
      experienceNotice: "Experience will be available in Step 2.",
      cvNotice: "Download CV will be available in Step 4."
    },
    ar: {
      documentTitle: arabicName + " | الملف المهني",
      description: "الملف المهني ثنائي اللغة لريتال محمد، أخصائية إدارية وحاصلة على شهادة محترف أعمال معتمد.",
      brandLabel: arabicName + " — الرئيسية",
      languageAction: "تغيير لغة الموقع إلى الإنجليزية",
      languageToggle: "English",
      openMenu: "فتح قائمة التنقل",
      closeMenu: "إغلاق قائمة التنقل",
      primaryNavigation: "التنقل الرئيسي",
      heroActions: "إجراءات الملف المهني",
      skipLink: "الانتقال إلى المحتوى الرئيسي",
      brandName: arabicName,
      navHome: "الرئيسية",
      navProfile: "الملف المهني",
      navExperience: "الخبرات",
      navEducation: "التعليم",
      navSkills: "المهارات",
      navCertifications: "الشهادات",
      navInitiatives: "المبادرات",
      navContact: "التواصل",
      eyebrow: "محترف أعمال معتمد",
      name: arabicName,
      role: "أخصائية إدارية | CBP",
      focus: "إدارة المشاريع • دعم القرار • التخطيط الاستراتيجي • تطوير المبادرات",
      summary: "خبرة في القطاع الحكومي تركز على العمل المنظم والمتابعة المهنية وتطوير المبادرات والمقترحات العملية.",
      profileAction: "استكشفي الملف المهني",
      experienceAction: "عرض الخبرات",
      cvAction: "تنزيل السيرة الذاتية",
      portfolioHighlights: "أبرز أعمال المبادرات والمقترحات",
      initiativeFiles: "ملفًا للمبادرات والمقترحات",
      ideasDeveloped: "فكرة مطوّرة بالتفصيل",
      professionalFocus: "التركيز المهني",
      focusAdministration: "الإدارة",
      focusProjectManagement: "إدارة المشاريع",
      focusDecisionSupport: "دعم القرار",
      focusStrategicPlanning: "التخطيط الاستراتيجي",
      focusInitiativeDevelopment: "تطوير المبادرات",
      languageChanged: "تم تفعيل اللغة العربية.",
      profileNotice: "سيتوفر الملف المهني في الخطوة الثانية.",
      experienceNotice: "ستتوفر الخبرات في الخطوة الثانية.",
      cvNotice: "سيتوفر تنزيل السيرة الذاتية في الخطوة الرابعة."
    }
  };

  const root = document.documentElement;
  const languageToggle = document.querySelector("#language-toggle");
  const menuToggle = document.querySelector("#menu-toggle");
  const navigation = document.querySelector("#primary-navigation");
  const statusMessage = document.querySelector("#status-message");
  const description = document.querySelector('meta[name="description"]');
  let currentLanguage = "en";

  function closeMenu({ restoreFocus = false } = {}) {
    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[currentLanguage].openMenu);

    if (restoreFocus) {
      menuToggle.focus();
    }
  }

  function openMenu() {
    navigation.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", translations[currentLanguage].closeMenu);
  }

  function applyLanguage(language, { announce = false } = {}) {
    const locale = translations[language];
    currentLanguage = language;

    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    document.title = locale.documentTitle;
    description.setAttribute("content", locale.description);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.hasOwn(locale, key)) {
        element.textContent = locale[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      if (Object.hasOwn(locale, key)) {
        element.setAttribute("aria-label", locale[key]);
      }
    });

    languageToggle.setAttribute("aria-pressed", String(language === "ar"));
    languageToggle.setAttribute("aria-label", locale.languageAction);
    menuToggle.setAttribute(
      "aria-label",
      navigation.classList.contains("is-open") ? locale.closeMenu : locale.openMenu
    );

    try {
      window.localStorage.setItem("retal-portfolio-language", language);
    } catch {
      // The page remains usable when browser storage is unavailable.
    }

    if (announce) {
      statusMessage.textContent = locale.languageChanged;
    }
  }

  function showActionNotice(action) {
    const locale = translations[currentLanguage];
    statusMessage.textContent = locale[action + "Notice"];
  }

  languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "ar" : "en", { announce: true });
  });

  menuToggle.addEventListener("click", () => {
    if (navigation.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      closeMenu({ restoreFocus: true });
    }
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.querySelectorAll(".hero-actions [data-pending]").forEach((button) => {
    button.addEventListener("click", () => {
      showActionNotice(button.dataset.pending);
    });
  });

  let savedLanguage = "en";
  try {
    const storedLanguage = window.localStorage.getItem("retal-portfolio-language");
    if (Object.hasOwn(translations, storedLanguage)) {
      savedLanguage = storedLanguage;
    }
  } catch {
    // Use English if storage cannot be read.
  }

  applyLanguage(savedLanguage);
})();
