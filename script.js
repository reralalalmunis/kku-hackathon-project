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
      navPublishedWork: "Published Work",
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
      navPublishedWork: "الأعمال المنشورة",
      navContact: "التواصل",
      eyebrow: "محترف أعمال معتمد",
      name: arabicName,
      role: "أخصائية إدارية | CBP",
      focus: "إدارة المشاريع • دعم القرار • التخطيط الاستراتيجي • تطوير المبادرات",
      summary: "خبرة في القطاع الحكومي تركز على العمل المنظم والمتابعة المهنية وتطوير المبادرات والمقترحات العملية.",
      profileAction: "استكشف الملف المهني",
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
  const sectionHost = document.querySelector("#portfolio-sections");
  const portfolioData = window.PORTFOLIO_DATA;
  let currentLanguage = "en";

  function makeElement(tagName, className = "") {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    return element;
  }

  function bindText(element, value) {
    element.dataset.localized = "true";
    element.localizedValue = value;
    element.textContent = value.en;
    return element;
  }

  function localizedElement(tagName, value, className = "") {
    return bindText(makeElement(tagName, className), value);
  }

  function appendTextList(parent, values, className = "") {
    const list = makeElement("ul", className);
    values.forEach((value) => {
      const item = localizedElement("li", value);
      list.append(item);
    });
    parent.append(list);
    return list;
  }

  function createSection(id, data) {
    const section = makeElement("section", "portfolio-section");
    const shell = makeElement("div", "page-shell section-shell");
    const header = makeElement("header", "section-header");
    const eyebrow = localizedElement("p", data.eyebrow, "section-kicker");
    const heading = localizedElement("h2", data.heading);

    heading.id = `${id}-heading`;
    section.id = id;
    section.setAttribute("aria-labelledby", heading.id);
    header.append(eyebrow, heading);
    shell.append(header);
    section.append(shell);
    return { section, shell, header };
  }

  function renderProfile(data) {
    const { section, shell } = createSection("profile", data);
    const summary = localizedElement("p", data.summary, "profile-summary");
    shell.append(summary);
    return section;
  }

  function renderFocus(data) {
    const { section, shell } = createSection("professional-focus", data);
    appendTextList(shell, data.items, "focus-area-list");
    return section;
  }

  function renderExperience(data) {
    const { section, shell } = createSection("experience", data);
    const list = makeElement("ol", "experience-list");

    data.items.forEach((entry) => {
      const item = makeElement("li", "experience-item");
      const article = makeElement("article", "experience-entry");
      const heading = localizedElement("h3", entry.organization, "experience-organization");
      const unit = localizedElement("p", entry.unit, "experience-unit");
      const period = localizedElement("time", entry.period, "experience-period");
      const area = makeElement("p", "experience-area");
      const areaLabel = localizedElement("span", entry.areaLabel, "meta-label");
      const areaValue = localizedElement("span", entry.area);
      const responsibilityHeading = localizedElement("h4", entry.responsibilitiesLabel, "record-label");
      const exposureHeading = localizedElement("h4", entry.exposureLabel, "record-label");
      const exposure = localizedElement("p", entry.exposure, "experience-exposure");

      area.append(areaLabel, areaValue);
      article.append(heading, unit, period, area, responsibilityHeading);
      appendTextList(article, entry.responsibilities, "responsibility-list");
      article.append(exposureHeading, exposure);
      item.append(article);
      list.append(item);
    });

    shell.append(list);
    return section;
  }

  function renderEducation(data) {
    const { section, shell } = createSection("education", data);
    const list = makeElement("div", "education-list");

    data.items.forEach((entry) => {
      const article = makeElement("article", "education-entry");
      const heading = localizedElement("h3", entry.heading);
      const institution = localizedElement("p", entry.institution, "education-institution");
      article.append(heading, institution);
      appendTextList(article, entry.details, "education-details");
      list.append(article);
    });

    shell.append(list);
    return section;
  }

  function renderDevelopment(data) {
    const { section, shell } = createSection("certifications", data);
    const certificationGroup = makeElement("section", "credential-group");
    const certificationHeading = localizedElement("h3", data.certificationLabel, "group-heading");

    data.certifications.forEach((entry) => {
      const certification = makeElement("article", "credential-entry");
      certification.append(localizedElement("h4", entry.title));

      entry.details.forEach((detail) => {
        const metadata = makeElement("p", "credential-meta");
        metadata.append(
          localizedElement("span", detail.label, "meta-label"),
          localizedElement("span", detail.value)
        );
        certification.append(metadata);
      });

      if (entry.note) {
        certification.append(localizedElement("p", entry.note, "experience-exposure"));
      }

      certificationGroup.append(certification);
    });

    certificationGroup.prepend(certificationHeading);

    const trainingGroup = makeElement("section", "credential-group");
    const trainingHeading = localizedElement("h3", data.trainingLabel, "group-heading");
    const trainingList = makeElement("div", "training-list");

    data.training.forEach((entry) => {
      const article = makeElement("article", "training-entry");
      article.append(localizedElement("h4", entry.title));

      if (entry.details) {
        appendTextList(article, entry.details, "training-details");
      }

      trainingList.append(article);
    });

    trainingGroup.append(trainingHeading, trainingList);
    shell.append(certificationGroup, trainingGroup);
    return section;
  }

  function renderSkills(data) {
    const { section, shell } = createSection("skills", data);
    const coreHeading = localizedElement("h3", data.coreLabel, "group-heading");
    const coreList = makeElement("div", "capability-grid");

    data.core.forEach((entry) => {
      const article = makeElement("article", "capability-entry");
      article.append(
        localizedElement("h4", entry.title),
        localizedElement("p", entry.description)
      );
      coreList.append(article);
    });

    const skillsHeading = localizedElement("h3", data.professionalLabel, "group-heading");
    shell.append(coreHeading, coreList, skillsHeading);
    appendTextList(shell, data.professional, "professional-skill-list");
    return section;
  }

  function renderLanguages(data) {
    const { section, shell } = createSection("languages", data);
    const list = makeElement("ul", "language-list");

    data.items.forEach((entry) => {
      const item = makeElement("li");
      const name = localizedElement("strong", entry.name);
      const level = localizedElement("span", entry.level);
      item.append(name, level);
      list.append(item);
    });

    shell.append(list);
    return section;
  }

  function renderCharacteristics(data) {
    const { section, shell } = createSection("characteristics", data);
    appendTextList(shell, data.items, "characteristic-list");
    return section;
  }

  function renderInitiatives(data) {
    const { section, shell } = createSection("initiatives", data);
    const introduction = localizedElement("p", data.introduction, "initiative-introduction");
    const volumeList = makeElement("ul", "initiative-volume-list");
    const workHeading = localizedElement("h3", data.areasLabel, "group-heading");
    const featuredHeading = localizedElement("h3", data.featuredLabel, "group-heading");
    const featured = makeElement("article", "initiative-entry");
    const publicTitle = makeElement("p", "initiative-public-title");
    const publicTitleLabel = localizedElement("span", data.item.publicTitleLabel, "meta-label");
    const status = makeElement("p", "initiative-status");
    const statusLabel = localizedElement("span", data.item.statusLabel, "meta-label");

    data.volumes.forEach((volume) => {
      volumeList.append(localizedElement("li", volume));
    });

    publicTitle.append(publicTitleLabel, localizedElement("span", data.item.title));
    status.append(statusLabel, localizedElement("span", data.item.status));
    featured.append(
      publicTitle,
      localizedElement("h4", data.item.title),
      localizedElement("p", data.item.description, "initiative-summary"),
      status
    );
    shell.append(introduction, volumeList, workHeading);
    appendTextList(shell, data.areas, "initiative-area-list");
    shell.append(featuredHeading, featured);
    return section;
  }

  function renderPublishedWork(data) {
    const { section, shell } = createSection("published-work", data);
    const work = makeElement("article", "published-work-entry");
    const metadata = makeElement("p", "published-work-meta");
    const link = document.createElement("a");

    metadata.append(
      localizedElement("span", data.item.typeLabel, "meta-label"),
      localizedElement("span", data.item.type)
    );
    link.href = data.item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.append(localizedElement("span", data.item.linkLabel));
    work.append(localizedElement("h3", data.item.title), metadata, link);
    shell.append(work);
    return section;
  }

  function renderContact(data) {
    const { section, shell } = createSection("contact", data);
    const form = makeElement("form", "contact-form");
    const fields = [
      { id: "contact-full-name", name: "full-name", type: "text", label: data.fullNameLabel, required: true, autocomplete: "name" },
      { id: "contact-email-address", name: "email-address", type: "email", label: data.emailAddressLabel, required: true, autocomplete: "email" },
      { id: "contact-phone-number", name: "phone-number", type: "tel", label: data.phoneNumberLabel, autocomplete: "tel" },
      { id: "contact-subject", name: "subject", type: "text", label: data.subjectLabel, required: true },
      { id: "contact-message", name: "message", tag: "textarea", label: data.messageLabel, required: true }
    ];

    fields.forEach((field) => {
      const fieldGroup = makeElement("div", "contact-field");
      const label = localizedElement("label", field.label, "meta-label");
      const control = makeElement(field.tag || "input", "contact-control");

      label.htmlFor = field.id;
      control.id = field.id;
      control.name = field.name;
      control.dir = "auto";
      control.required = Boolean(field.required);

      if (field.tag === "textarea") {
        control.rows = 6;
      } else {
        control.type = field.type;
        if (field.autocomplete) {
          control.autocomplete = field.autocomplete;
        }
      }

      fieldGroup.append(label, control);
      form.append(fieldGroup);
    });

    const submit = localizedElement("button", data.submitLabel, "button button-primary contact-submit");
    submit.type = "submit";
    form.append(submit, localizedElement("p", data.privacyNote, "contact-privacy-note"));
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    shell.append(form);
    return section;
  }

  function renderStepTwo() {
    if (!portfolioData || !portfolioData.stepTwo || !sectionHost) {
      return;
    }

    const data = portfolioData.stepTwo;
    sectionHost.append(
      renderProfile(data.profile),
      renderFocus(data.focus),
      renderExperience(data.experience),
      renderEducation(data.education),
      renderDevelopment(data.development),
      renderSkills(data.skills),
      renderLanguages(data.languages),
      renderCharacteristics(data.characteristics)
    );
  }

  function renderStepThree() {
    if (!portfolioData || !portfolioData.stepThree || !sectionHost) {
      return;
    }

    const data = portfolioData.stepThree;
    sectionHost.append(
      renderInitiatives(data.initiatives),
      renderPublishedWork(data.publishedWork),
      renderContact(data.contact)
    );
  }

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

    document.querySelectorAll("[data-localized]").forEach((element) => {
      if (element.localizedValue) {
        element.textContent = element.localizedValue[language];
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

  renderStepTwo();
  renderStepThree();

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
