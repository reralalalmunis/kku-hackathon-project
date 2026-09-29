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
      cvAction: "Print / Save PDF",
      cvExperience: "Experience",
      cvEducation: "Education",
      cvCertifications: "Professional Certifications",
      cvSkills: "Selected Skills",
      cvLanguages: "Languages",
      cvPreparationError: "The one-page CV could not be prepared. Please try again.",
      portfolioHighlights: "Portfolio highlights",
      initiativeFiles: "Initiative & Proposal Files",
      ideasDeveloped: "Ideas Developed in Detail",
      professionalFocus: "Professional Focus",
      focusAdministration: "Administration",
      focusProjectManagement: "Project Management",
      focusDecisionSupport: "Decision Support",
      focusStrategicPlanning: "Strategic Planning",
      focusInitiativeDevelopment: "Initiative Development",
      languageChanged: "English is now active."
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
      cvAction: "طباعة / حفظ PDF",
      cvExperience: "الخبرات",
      cvEducation: "التعليم",
      cvCertifications: "الشهادات المهنية",
      cvSkills: "المهارات المختارة",
      cvLanguages: "اللغات",
      cvPreparationError: "تعذّر إعداد السيرة الذاتية في صفحة واحدة. يرجى المحاولة مرة أخرى.",
      portfolioHighlights: "أبرز أعمال المبادرات والمقترحات",
      initiativeFiles: "ملفًا للمبادرات والمقترحات",
      ideasDeveloped: "فكرة مطوّرة بالتفصيل",
      professionalFocus: "التركيز المهني",
      focusAdministration: "الإدارة",
      focusProjectManagement: "إدارة المشاريع",
      focusDecisionSupport: "دعم القرار",
      focusStrategicPlanning: "التخطيط الاستراتيجي",
      focusInitiativeDevelopment: "تطوير المبادرات",
      languageChanged: "تم تفعيل اللغة العربية."
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

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function getCvData(language) {
    const content = portfolioData.stepTwo;
    const localized = (value) => value[language];
    const responsibilityIndexes = [[0, 1], [0, 1]];
    const skillIndexes = [0, 1, 2, 3, 5, 6, 8];

    return {
      locale: translations[language],
      language,
      name: translations[language].name,
      role: translations[language].role,
      summary: translations[language].summary,
      experience: content.experience.items.map((entry, index) => ({
        organization: localized(entry.organization),
        unit: localized(entry.unit),
        area: localized(entry.area),
        period: localized(entry.period),
        responsibilities: responsibilityIndexes[index].map((itemIndex) => localized(entry.responsibilities[itemIndex]))
      })),
      education: content.education.items.map((entry) => ({
        heading: localized(entry.heading),
        institution: localized(entry.institution),
        details: entry.details.map(localized)
      })),
      certifications: content.development.certifications.map((entry) => ({
        title: localized(entry.title),
        details: entry.details.map((detail) => ({
          label: localized(detail.label),
          value: localized(detail.value)
        }))
      })),
      skills: skillIndexes.map((index) => localized(content.skills.professional[index])),
      languages: content.languages.items.map((entry) => ({
        name: localized(entry.name),
        level: localized(entry.level)
      }))
    };
  }

  function renderCvDocument(data) {
    const list = (items, className = "") => `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
    const experience = data.experience.map((entry) => `
      <article class="experience-entry">
        <h3>${escapeHtml(entry.unit)}</h3>
        <p class="metadata"><span>${escapeHtml(entry.organization)}</span><time>${escapeHtml(entry.period)}</time></p>
        <p class="area">${escapeHtml(entry.area)}</p>
        ${list(entry.responsibilities, "responsibilities")}
      </article>`).join("");
    const education = data.education.map((entry) => `
      <article class="compact-entry">
        <h3>${escapeHtml(entry.heading)}</h3>
        <p>${escapeHtml(entry.institution)}</p>
        ${list(entry.details, "detail-list")}
      </article>`).join("");
    const certifications = data.certifications.map((entry) => `
      <article class="compact-entry certification-entry">
        <h3>${escapeHtml(entry.title)}</h3>
        ${entry.details.map((detail) => `<p><strong>${escapeHtml(detail.label)}:</strong> ${escapeHtml(detail.value)}</p>`).join("")}
      </article>`).join("");
    const languages = data.languages.map((entry) => `<li><strong>${escapeHtml(entry.name)}</strong><span>${escapeHtml(entry.level)}</span></li>`).join("");
    const direction = data.language === "ar" ? "rtl" : "ltr";

    return `<!doctype html>
<html lang="${data.language}" dir="${direction}">
<head>
<meta charset="utf-8">
<title>${escapeHtml(data.name)} - CV</title>
<style>
  @page { size: A4 portrait; margin: 0; }
  :root { --ink: #102d43; --navy: #0b2942; --blue: #164f78; --line: #c5d9e6; }
  * { box-sizing: border-box; }
  html, body { width: 210mm; min-height: 297mm; margin: 0; background: #fff; color: var(--ink); }
  body { font-family: Arial, "Segoe UI", sans-serif; font-size: 9.3pt; line-height: 1.3; }
  html[lang="ar"] body { font-family: Tahoma, "Segoe UI", Arial, sans-serif; line-height: 1.35; }
  .cv-page { width: 210mm; height: 297mm; padding: 11mm 12mm; background: #fff; }
  .cv-content { height: 275mm; }
  .cv-header { padding-block-end: 3mm; border-block-end: 1.4pt solid var(--blue); }
  h1, h2, h3, p { margin: 0; }
  h1 { color: var(--navy); font-size: 22pt; letter-spacing: -0.03em; line-height: 1.05; }
  html[lang="ar"] h1 { letter-spacing: 0; line-height: 1.2; }
  .role { margin-block-start: 1.25mm; color: var(--blue); font-size: 11.2pt; font-weight: 700; }
  .summary { margin-block: 3mm 3.5mm; color: var(--ink); }
  .cv-grid { display: grid; grid-template-columns: minmax(0, 1.34fr) minmax(45mm, 0.86fr); gap: 5mm; }
  section + section { margin-block-start: 3.3mm; }
  h2 { margin-block-end: 1.7mm; color: var(--blue); font-size: 8.6pt; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; break-after: avoid-page; }
  html[lang="ar"] h2 { letter-spacing: 0; text-transform: none; }
  h3 { color: var(--navy); font-size: 9.4pt; line-height: 1.22; }
  .experience-entry, .compact-entry { break-inside: avoid-page; }
  .experience-entry + .experience-entry, .compact-entry + .compact-entry { margin-block-start: 2.5mm; }
  .metadata { display: flex; justify-content: space-between; gap: 2mm; margin-block-start: 0.65mm; color: var(--blue); font-size: 8.5pt; font-weight: 700; }
  .metadata time { unicode-bidi: plaintext; white-space: nowrap; }
  .area { margin-block-start: 0.5mm; color: #465e70; font-size: 8.35pt; }
  ul { padding: 0; margin: 0; list-style: none; }
  .responsibilities { display: grid; gap: 0.75mm; margin-block-start: 1.1mm; color: #243f54; }
  .responsibilities li { position: relative; padding-inline-start: 3.2mm; }
  .responsibilities li::before { position: absolute; inset-block-start: 0.55em; inset-inline-start: 0; width: 1.2mm; height: 1.2mm; border-radius: 50%; background: var(--blue); content: ""; }
  .compact-entry > p { margin-block-start: 0.55mm; color: #465e70; }
  .detail-list { display: grid; gap: 0.45mm; margin-block-start: 0.7mm; color: #465e70; }
  .certification-entry p { font-size: 8.35pt; }
  .skill-list { display: flex; flex-wrap: wrap; gap: 1.15mm; }
  .skill-list li { padding: 0.7mm 1.2mm; border: 0.7pt solid var(--line); border-radius: 99px; color: #243f54; font-size: 8.1pt; line-height: 1.2; }
  .language-list { display: grid; gap: 1mm; }
  .language-list li { display: flex; justify-content: space-between; gap: 2mm; padding-block-end: 0.85mm; border-block-end: 0.7pt solid var(--line); }
  .language-list span { color: #465e70; }
  .cv-page[data-density="compact"] { font-size: 8.8pt; }
  .cv-page[data-density="compact"] .cv-content { height: 275mm; }
  .cv-page[data-density="compact"] .summary { margin-block: 2.3mm 2.6mm; }
  .cv-page[data-density="compact"] .cv-grid { gap: 3.5mm; }
  .cv-page[data-density="compact"] section + section { margin-block-start: 2.4mm; }
  .cv-page[data-density="compact"] .experience-entry + .experience-entry, .cv-page[data-density="compact"] .compact-entry + .compact-entry { margin-block-start: 1.8mm; }
  .cv-page[data-density="tight"] { font-size: 8.3pt; }
  .cv-page[data-density="tight"] h1 { font-size: 20pt; }
  .cv-page[data-density="tight"] .role { font-size: 10.2pt; }
  .cv-page[data-density="tight"] .summary { margin-block: 1.8mm 2mm; }
  .cv-page[data-density="tight"] .cv-grid { gap: 3mm; }
  .cv-page[data-density="tight"] section + section { margin-block-start: 1.9mm; }
  .cv-page[data-density="tight"] h2 { margin-block-end: 1mm; }
  .cv-page[data-density="tight"] .experience-entry + .experience-entry, .cv-page[data-density="tight"] .compact-entry + .compact-entry { margin-block-start: 1.4mm; }
  .cv-page[data-density="tight"] .responsibilities { gap: 0.4mm; margin-block-start: 0.7mm; }
  @media print { html, body { print-color-adjust: exact; -webkit-print-color-adjust: exact; } }
</style>
</head>
<body>
<main class="cv-page" data-density="standard">
  <div class="cv-content">
    <header class="cv-header"><h1>${escapeHtml(data.name)}</h1><p class="role">${escapeHtml(data.role)}</p></header>
    <p class="summary">${escapeHtml(data.summary)}</p>
    <div class="cv-grid">
      <div>
        <section><h2>${escapeHtml(data.locale.cvExperience)}</h2>${experience}</section>
        <section><h2>${escapeHtml(data.locale.cvEducation)}</h2>${education}</section>
      </div>
      <aside>
        <section><h2>${escapeHtml(data.locale.cvCertifications)}</h2>${certifications}</section>
        <section><h2>${escapeHtml(data.locale.cvSkills)}</h2>${list(data.skills, "skill-list")}</section>
        <section><h2>${escapeHtml(data.locale.cvLanguages)}</h2><ul class="language-list">${languages}</ul></section>
      </aside>
    </div>
  </div>
</main>
</body>
</html>`;
  }

  function prepareCvForPrint(trigger) {
    if (!portfolioData || !portfolioData.stepTwo) {
      statusMessage.textContent = translations[currentLanguage].cvPreparationError;
      return;
    }

    const frame = document.createElement("iframe");
    const data = getCvData(currentLanguage);
    let isCleanedUp = false;
    const cleanup = () => {
      if (isCleanedUp) {
        return;
      }

      isCleanedUp = true;
      frame.remove();
      trigger.focus();
    };

    frame.setAttribute("aria-hidden", "true");
    frame.tabIndex = -1;
    frame.style.cssText = "position:fixed; inset-block-start:0; inset-inline-start:-220mm; width:210mm; height:297mm; border:0; opacity:0; pointer-events:none;";
    frame.addEventListener("load", () => {
      const frameWindow = frame.contentWindow;
      const frameDocument = frame.contentDocument;
      const page = frameDocument.querySelector(".cv-page");
      const content = frameDocument.querySelector(".cv-content");
      const densities = ["standard", "compact", "tight"];

      const fitAndPrint = () => {
        const density = densities.shift();
        if (!density) {
          cleanup();
          statusMessage.textContent = translations[currentLanguage].cvPreparationError;
          return;
        }

        page.dataset.density = density;
        frameWindow.requestAnimationFrame(() => {
          if (content.scrollHeight <= content.clientHeight + 1) {
            frameWindow.addEventListener("afterprint", cleanup, { once: true });
            frameWindow.focus();
            frameWindow.print();
            window.setTimeout(cleanup, 60000);
          } else {
            fitAndPrint();
          }
        });
      };

      frameWindow.requestAnimationFrame(() => frameWindow.requestAnimationFrame(fitAndPrint));
    }, { once: true });
    frame.srcdoc = renderCvDocument(data);
    document.body.append(frame);
  }

  document.querySelector("#print-cv").addEventListener("click", (event) => {
    prepareCvForPrint(event.currentTarget);
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
