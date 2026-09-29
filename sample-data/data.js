(() => {
  "use strict";

  const text = (en, ar) => ({ en, ar });

  window.PORTFOLIO_DATA = Object.freeze({
    stepTwo: {
      profile: {
        eyebrow: text("Profile", "الملف المهني"),
        heading: text("Profile / About", "نبذة مهنية"),
        summary: text(
          "Administrative Specialist and Certified Business Professional (CBP) with practical government-sector experience in project management, operational follow-up, and decision support. Experienced in organizing information, following up on directives, coordinating work, and developing structured initiative and proposal files. Currently pursuing a Bachelor’s degree through the bridging program at King Khalid University, with professional interests in strategic planning, institutional development, innovation, and practical development initiatives.",
          "أخصائية إدارية وحاصلة على شهادة محترف أعمال معتمد (CBP)، لدي خبرة عملية في القطاع الحكومي في إدارة المشاريع والمتابعة التشغيلية ودعم القرار. لدي خبرة في تنظيم المعلومات ومتابعة التوجيهات وتنسيق الأعمال وتطوير ملفات المبادرات والمقترحات بشكل منظم. أدرس حاليًا درجة البكالوريوس من خلال برنامج التجسير في جامعة الملك خالد، مع اهتمام مهني بالتخطيط الاستراتيجي والتطوير المؤسسي والابتكار والمبادرات التنموية العملية."
        )
      },
      focus: {
        eyebrow: text("Areas of practice", "مجالات الممارسة"),
        heading: text("Professional Focus", "التركيز المهني"),
        items: [
          text("Administration", "الإدارة"),
          text("Project Management", "إدارة المشاريع"),
          text("Decision Support", "دعم القرار"),
          text("Strategic Planning", "التخطيط الاستراتيجي"),
          text("Initiative Development", "تطوير المبادرات"),
          text("Proposal Development", "تطوير المقترحات"),
          text("Institutional Development", "التطوير المؤسسي"),
          text("Innovation", "الابتكار"),
          text("Operational Follow-up", "المتابعة التشغيلية"),
          text("Information Organization", "تنظيم المعلومات"),
          text("Community Development", "التنمية المجتمعية")
        ]
      },
      experience: {
        eyebrow: text("Professional background", "الخبرة المهنية"),
        heading: text("Experience", "الخبرات"),
        items: [
          {
            organization: text("Emirate of Aseer", "إمارة منطقة عسير"),
            unit: text("Projects & Services Department", "إدارة المشاريع والخدمات"),
            areaLabel: text("Area", "المجال"),
            area: text("Project Management / Administrative & Operational Projects", "إدارة المشاريع / المشاريع الإدارية والتشغيلية"),
            period: text("Sep 2025 – Dec 2025", "سبتمبر 2025 – ديسمبر 2025"),
            responsibilitiesLabel: text("Responsibilities", "المهام"),
            responsibilities: [
              text("Participated in planning and organizing administrative and operational projects.", "المشاركة في تخطيط وتنظيم المشاريع الإدارية والتشغيلية."),
              text("Followed up on implementation according to plans and schedules.", "متابعة التنفيذ وفق الخطط والجداول الزمنية."),
              text("Coordinated between departments.", "التنسيق بين الإدارات."),
              text("Supported project-related administrative and operational activities.", "دعم الأنشطة الإدارية والتشغيلية المرتبطة بالمشاريع.")
            ],
            exposureLabel: text("Professional exposure", "الخبرة العملية"),
            exposure: text("Practical exposure to project management, operational coordination, and government-sector work.", "خبرة عملية في إدارة المشاريع والتنسيق التشغيلي والعمل في القطاع الحكومي.")
          },
          {
            organization: text("Emirate of Aseer", "إمارة منطقة عسير"),
            unit: text("Center Etmam", "مركز إتمام"),
            areaLabel: text("Area", "المجال"),
            area: text("Decision Support / Monitoring & Follow-up", "دعم القرار / المراقبة والمتابعة"),
            period: text("Mar 2026 – Present", "مارس 2026 – حتى الآن"),
            responsibilitiesLabel: text("Responsibilities", "المهام"),
            responsibilities: [
              text("Recording directives of His Highness the Prince.", "تسجيل توجيهات سمو الأمير."),
              text("Sorting and classifying directives.", "فرز التوجيهات وتصنيفها."),
              text("Following up on directive status.", "متابعة حالة التوجيهات."),
              text("Organizing related information.", "تنظيم المعلومات ذات الصلة."),
              text("Following up on information and statuses.", "متابعة المعلومات والحالات."),
              text("Organizing professional follow-up files.", "تنظيم ملفات المتابعة المهنية."),
              text("Improving and developing work files and presentations.", "تحسين وتطوير ملفات العمل والعروض التقديمية."),
              text("Using Microsoft Office to organize and present information.", "استخدام Microsoft Office لتنظيم المعلومات وعرضها."),
              text("Communicating and following up with relevant entities when required.", "التواصل والمتابعة مع الجهات ذات العلاقة عند الحاجة.")
            ],
            exposureLabel: text("Core framing", "محاور العمل الأساسية"),
            exposure: text("Recording · Organization · Classification · Monitoring · Follow-up", "التسجيل · التنظيم · التصنيف · المراقبة · المتابعة")
          }
        ]
      },
      education: {
        eyebrow: text("Academic path", "المسار الأكاديمي"),
        heading: text("Education", "التعليم"),
        items: [
          {
            heading: text("Diploma in Business Administration", "دبلوم إدارة الأعمال"),
            institution: text("King Khalid University — Applied College", "جامعة الملك خالد — الكلية التطبيقية"),
            details: [text("2023 – January 2026", "2023 – يناير 2026")]
          },
          {
            heading: text("Bachelor’s Degree in Business Administration", "درجة البكالوريوس في إدارة الأعمال"),
            institution: text("King Khalid University", "جامعة الملك خالد"),
            details: [
              text("September 2026 – Present", "سبتمبر 2026 – حتى الآن"),
              text("Currently pursuing through the Bridging Program", "قيد الدراسة عبر برنامج التجسير")
            ]
          }
        ]
      },
      development: {
        eyebrow: text("Credential and learning", "الشهادات والتطوير المهني"),
        heading: text("Certifications & Professional Development", "الشهادات والتطوير المهني"),
        certificationLabel: text("Professional Certifications", "الشهادات المهنية"),
        certifications: [
          {
            title: text("Certified Business Professional (CBP)", "محترف أعمال معتمد (CBP)"),
            details: [
              { label: text("Field", "المجال"), value: text("Project Management", "إدارة المشاريع") },
              { label: text("Status", "الحالة"), value: text("Completed", "مكتمل") }
            ]
          },
          {
            title: text("KPI Professional", "محترف مؤشرات الأداء الرئيسية KPI"),
            details: [
              { label: text("Provider", "الجهة المقدمة"), value: text("KPI Institute", "معهد KPI") },
              { label: text("Status", "الحالة"), value: text("Completed", "مكتمل") }
            ]
          },
          {
            title: text("CAPM®", "CAPM®"),
            details: [
              { label: text("Status", "الحالة"), value: text("Certification Exam Candidate", "مرشحة لاختبار الشهادة") }
            ],
            note: text("The CAPM® exam is scheduled for tomorrow.", "اختبار CAPM® مقرر غدًا.")
          }
        ],
        trainingLabel: text("Skills & Professional Training", "المهارات والتدريب المهني"),
        training: [
          {
            title: text("Cybersecurity & Information Protection", "الأمن السيبراني وحماية المعلومات"),
            details: [text("Prince Muqrin University", "جامعة الأمير مقرن"), text("40 hours", "40 ساعة"), text("9–13 August 2026", "9–13 أغسطس 2026")]
          },
          { title: text("Advanced Excel", "Excel المتقدم") },
          { title: text("MOS Specialist", "MOS Specialist") },
          { title: text("GRC Specialist", "أخصائي GRC") },
          { title: text("Decision-Making Strategies", "استراتيجيات اتخاذ القرار") },
          { title: text("Effective Leadership for Institutional Work Organisation", "القيادة الفعالة لتنظيم العمل المؤسسي") },
          { title: text("Critical Thinking — Asir Emirate", "التفكير النقدي — إمارة منطقة عسير") },
          { title: text("Planning — Asir Emirate", "التخطيط — إمارة منطقة عسير") },
          { title: text("5S — Asir Emirate", "5S — إمارة منطقة عسير") },
          { title: text("IELTS Intensive Preparation", "الإعداد المكثف لاختبار IELTS") }
        ]
      },
      skills: {
        eyebrow: text("Practice and tools", "القدرات والمهارات"),
        heading: text("Skills & Capabilities", "المهارات والقدرات"),
        coreLabel: text("Core Capabilities", "القدرات الأساسية"),
        core: [
          { title: text("Strategic Planning", "التخطيط الاستراتيجي"), description: text("Organizing thinking around objectives, priorities, and planned actions.", "تنظيم التفكير حول الأهداف والأولويات والإجراءات المخطط لها.") },
          { title: text("Project Management & Implementation Follow-up", "إدارة المشاريع ومتابعة التنفيذ"), description: text("Supporting project planning, organization, and follow-up according to plans and schedules.", "دعم تخطيط المشاريع وتنظيمها ومتابعتها وفق الخطط والجداول الزمنية.") },
          { title: text("Decision Support", "دعم القرار"), description: text("Recording, classifying, organizing, and monitoring directives and related information.", "تسجيل التوجيهات وتصنيفها وتنظيمها ومتابعتها والمعلومات ذات العلاقة.") },
          { title: text("Analytical Thinking", "التفكير التحليلي"), description: text("Researching, understanding information, and organizing structured outputs.", "البحث وفهم المعلومات وتنظيم المخرجات المنظمة.") },
          { title: text("Problem Solving & Decision Making", "حل المشكلات واتخاذ القرار"), description: text("Active professional development and practical application.", "تطوير مهني مستمر وتطبيق عملي.") },
          { title: text("Professional Communication & Coordination", "التواصل والتنسيق المهني"), description: text("Professional communication and coordination in a government-sector environment.", "التواصل والتنسيق المهني في بيئة القطاع الحكومي.") }
        ],
        professionalLabel: text("Professional Skills", "المهارات المهنية"),
        professional: [
          text("Time Management", "إدارة الوقت"),
          text("Information Organization", "تنظيم المعلومات"),
          text("Operational Follow-up", "المتابعة التشغيلية"),
          text("Coordination", "التنسيق"),
          text("Research", "البحث"),
          text("Report Preparation", "إعداد التقارير"),
          text("Presentation Development", "تطوير العروض التقديمية"),
          text("Teamwork", "العمل الجماعي"),
          text("Microsoft Office", "Microsoft Office"),
          text("Professional English Communication", "التواصل المهني باللغة الإنجليزية")
        ]
      },
      languages: {
        eyebrow: text("Communication", "التواصل"),
        heading: text("Languages", "اللغات"),
        items: [
          { name: text("Arabic", "العربية"), level: text("Native", "اللغة الأم") },
          { name: text("English", "الإنجليزية"), level: text("Very Good", "جيد جدًا") }
        ]
      },
      characteristics: {
        eyebrow: text("Working approach", "الخصائص المهنية"),
        heading: text("Professional Characteristics", "الخصائص المهنية"),
        items: [
          text("Organized", "منظمة"),
          text("Disciplined", "منضبطة"),
          text("Detail-oriented", "دقيقة"),
          text("Structured", "منهجية"),
          text("Analytical", "تحليلية"),
          text("Research-oriented", "مهتمة بالبحث"),
          text("Proactive", "مبادرة"),
          text("Committed to continuous development", "حريصة على التطوير المستمر")
        ]
      }
    }
  });
})();
