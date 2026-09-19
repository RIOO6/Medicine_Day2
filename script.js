
const appState = {
  lang: "en",
};

const translations = {
  en: {
    brand_subtitle: "Digital Event Portal",
    nav_home: "Home",
    nav_about: "About",
    nav_program: "Program",
    nav_speakers: "Speakers",
    nav_register: "Registration",
    cta_register: "Register",
    hero_kicker: "Annual event for pharmacists and healthcare leaders",
    hero_date: "24 September 2026",
    hero_text: "A memorable day of professional exchange, scientific insight, networking, and collaboration for the pharmacy and healthcare community.",
    hero_register: "Register to Attend",
    hero_program: "Explore Program",
    fact_september: "September",
    fact_hybrid_label: "Hybrid",
    fact_hybrid_text: "Physical + Online",
    fact_hybrid_note: "(proposed)",
    fact_digital_label: "Digital",
    fact_digital_text: "Participation",
    qa_register_title: "Register",
    qa_register_text: "Reserve your place and choose how you will attend.",
    qa_register_link: "Go to registration →",
    qa_program_title: "Program",
    qa_program_text: "View sessions, speakers and the event schedule.",
    qa_program_link: "View program →",
    qa_media_title: "Event Media",
    qa_media_text: "Photos and videos from the event will be shared here after the day.",
    qa_media_link: "See media updates →",
    about_eyebrow: "The Digital Concept",
    about_title: "One event, one digital experience.",
    about_text: "The proposed digital system acts as a simple digital layer around the physical event. Participants register once, organizers receive structured information, and both physical and online audiences have a clear way to participate.",
    feature_registration_title: "Registration",
    feature_registration_text: "Collect participant information through a structured digital form.",
    feature_registration_badge: "Database Ready",
    feature_attendance_title: "Attendance",
    feature_attendance_text: "Use participant IDs and QR check-in to reduce manual attendance work.",
    feature_attendance_badge: "QR Ready",
    feature_interaction_title: "Interaction",
    feature_interaction_text: "Allow physical and online participants to submit questions to moderators.",
    feature_interaction_badge: "Interaction Ready",
    feature_record_title: "Event Record",
    feature_record_text: "Keep feedback, resources and event information organized digitally.",
    feature_record_badge: "Expandable",
    program_eyebrow: "Preliminary Program",
    program_title: "Program at a glance",
    program_stamp: "Draft — Subject to Confirmation",
    program_tab_label: "24 September — Event Day",
    speakers_eyebrow: "Preliminary",
    speakers_title: "Speakers & Contributors",
    speakers_text: "A distinguished line-up of professionals, educators, and leaders shaping the future of pharmacy practice and healthcare excellence.",
    speaker_name_1: "Speaker Name",
    speaker_role_1: "Professional Title / Organization",
    speaker_badge: "To Be Confirmed",
    speaker_name_2: "Speaker Name",
    speaker_role_2: "Professional Title / Organization",
    speaker_badge_2: "To Be Confirmed",
    speaker_name_3: "Speaker Name",
    speaker_role_3: "Professional Title / Organization",
    speaker_badge_3: "To Be Confirmed",
    speaker_name_4: "Speaker Name",
    speaker_role_4: "Professional Title / Organization",
    speaker_badge_4: "To Be Confirmed",
    registration_eyebrow: "Registration",
    registration_title: "Reserve your place",
    registration_text: "Join pharmacists, students, healthcare professionals, and partners for a focused day of learning, dialogue, and professional connection.",
    registration_notice_title: "Early registration",
    registration_notice_text: "Secure your seat and help the organizing team plan the day around attendees, sessions, and participation needs.",
    form_full_name: "Full Name",
    form_full_name_placeholder: "e.g. Amina Hassan",
    form_profession: "Profession",
    form_profession_placeholder: "Select your profession",
    profession_pharmacist: "Pharmacist",
    profession_student: "Pharmacy Student",
    profession_healthcare: "Healthcare Professional",
    profession_org: "Organization Representative",
    profession_guest: "Guest",
    profession_other: "Other",
    form_email: "Email",
    form_email_placeholder: "name@example.com",
    form_phone: "Phone",
    form_phone_placeholder: "+249 ...",
    form_organization: "Organization / Institution",
    form_organization_placeholder: "e.g. Sudanese Pharmacists Association",
    form_attendance_type: "Attendance Type",
    attendance_physical: "Physical",
    attendance_online: "Online",
    consent_text: "I agree that the information provided may be used for event registration and attendance management.",
    form_submit: "Submit Registration",
    form_footer_text: "Your details are sent directly to the event database.",
    questions_eyebrow: "Interaction",
    questions_title: "Ask a Question",
    questions_text: "Share your question for the speakers and moderators so the conversations stay relevant, thoughtful, and engaging.",
    question_name: "Name",
    question_name_placeholder: "Your name",
    question_session: "Session",
    question_session_placeholder: "Select a session",
    question_session_1: "24 September — Registration & Welcome",
    question_session_2: "24 September — Keynote Session",
    question_session_3: "24 September — Professional Panel",
    question_question: "Question",
    question_question_placeholder: "Write your question",
    question_anonymous: "Submit anonymously",
    question_submit: "Submit Question",
    media_eyebrow: "After the Event",
    media_title: "Photos & Videos",
    media_text: "Event photos and videos will be uploaded here after Pharmacists’ Day 2026.",
    media_photos_title: "Event Photos",
    media_photos_text: "A collection of moments from the event will appear here.",
    media_videos_title: "Event Videos",
    media_videos_text: "Talks, highlights, and selected recordings will be added here.",
    media_highlights_title: "Event Highlights",
    media_highlights_text: "Follow this space for memorable moments and event updates.",
    media_status: "Available after the event",
    media_status_2: "Available after the event",
    media_status_3: "Coming after 24 September",
    footer_date: "24– September 2026",
    footer_tag_1: "Physical + Online",
    footer_tag_2: "Digital Registration",
    footer_tag_3: "QR Attendance",
    footer_bottom: "Pharmacists’ Day 2026 · A day of learning, leadership, and community.",
    form_full_name_required: "Please enter your full name.",
    form_profession_required: "Please select your profession.",
    form_email_required: "Please enter your email address.",
    form_email_invalid: "Please enter a valid email address.",
    form_phone_required: "Please enter a phone number.",
    form_phone_invalid: "Please enter a valid phone number.",
    form_attendance_required: "Please choose how you will attend.",
    form_consent_required: "Consent is required to register.",
    form_check_title: "Check the form",
    form_check_message: "Some required fields need your attention before submitting.",
    form_success_title: "Registration successful",
    form_success_message: "Participant ID: {code}. A confirmation has been recorded.",
    form_fail_title: "Couldn't submit registration",
    form_fail_message: "Please check your connection, or verify supabase-config.js has been set up with your project credentials.",
    question_add_title: "Add your question",
    question_add_message: "Please write a question before submitting.",
    question_success_title: "Question submitted",
    question_success_message: "Your question has been sent to the moderation queue.",
    question_fail_title: "Couldn't submit question",
    question_fail_message: "Please check your connection, or verify supabase-config.js has been set up with your project credentials.",
    join_online_title: "Online link not yet published",
    join_online_message: "The official online meeting link will be published by the organizing team closer to the event.",
    program_day_one_label: "24 September — Event Day",
    program_day_one_session_1: "Registration & Welcome",
    program_day_one_session_1_tag: "Opening session",
    program_day_one_session_2: "Keynote Session",
    program_day_one_session_2_tag: "Featured address",
    program_day_one_session_3: "Professional Panel",
    program_day_one_session_3_tag: "Expert discussion",
  },
  ar: {
    brand_subtitle: "بوابة الفعالية الرقمية",
    nav_home: "الرئيسية",
    nav_about: "عن الفعالية",
    nav_program: "البرنامج",
    nav_speakers: "المتحدثون",
    nav_register: "التسجيل",
    cta_register: "تسجيل",
    hero_kicker: "فعالية سنوية للصيادلة وقادة الرعاية الصحية",
    hero_date: "24 سبتمبر 2026",
    hero_text: "يوم مليء بالتبادل المهني، والرؤية العلمية، والتواصل، والتعاون لمجتمع الصيدلة والرعاية الصحية.",
    hero_register: "سجل الحضور",
    hero_program: "استكشف البرنامج",
    fact_september: "سبتمبر",
    fact_hybrid_label: "هجين",
    fact_hybrid_text: "حضوري + أونلاين",
    fact_hybrid_note: "(مقترح)",
    fact_digital_label: "رقمي",
    fact_digital_text: "مشاركة",
    qa_register_title: "تسجيل",
    qa_register_text: "احجز مكانك واختر طريقة حضورك.",
    qa_register_link: "اذهب إلى التسجيل →",
    qa_program_title: "البرنامج",
    qa_program_text: "اعرض الجلسات والمتحدثين وجدول الفعالية.",
    qa_program_link: "عرض البرنامج →",
    qa_media_title: "وسائط الفعالية",
    qa_media_text: "سيتم نشر صور وفيديوهات الفعالية هنا بعد انتهاء اليوم.",
    qa_media_link: "عرض تحديثات الوسائط →",
    about_eyebrow: "عن الفعالية",
    about_title: "يوم واحد مليء بالإلهام والمعرفة والتواصل.",
    about_text: "تجمع فعالية يوم الصيادلة 2026 بين المهنيين والطلاب وشركاء الرعاية الصحية في يوم مركّز من التعليم والقيادة والمناقشة حول مستقبل مهنة الصيدلة.",
    feature_registration_title: "التسجيل",
    feature_registration_text: "تسجيل بسيط وواضح للحضور والمتحدثين والشركاء.",
    feature_registration_badge: "وصول سهل",
    feature_attendance_title: "الحضور",
    feature_attendance_text: "تسجيل دخول مبسط وإدارة الضيوف لتسهيل يوم الفعالية.",
    feature_attendance_badge: "دخول سلس",
    feature_interaction_title: "التفاعل",
    feature_interaction_text: "تتيح للمشاركين حضورياً وأونلاين طرح الأسئلة للمشرفين.",
    feature_interaction_badge: "جاهز للتفاعل",
    feature_record_title: "سجل الفعالية",
    feature_record_text: "الوصول إلى المعلومات الأساسية وتحديثات الجلسات والملفات المهمة في مكان واحد.",
    feature_record_badge: "جاهز للفعالية",
    program_eyebrow: "برنامج الفعالية",
    program_title: "البرنامج في لمحة سريعة",
    program_stamp: "مسودة — خاضع للتأكيد",
    program_tab_label: "24 سبتمبر — يوم الفعالية",
    speakers_eyebrow: "الأصوات الرئيسية",
    speakers_title: "المتحدثون والمساهمون",
    speakers_text: "أداء مميز من المهنيين والمعلمين وقادة المستقبل في مهنة الصيدلة والرعاية الصحية.",
    speaker_name_1: "اسم المتحدث",
    speaker_role_1: "المسمى الوظيفي / الجهة",
    speaker_badge: "قيد التأكيد",
    speaker_name_2: "اسم المتحدث",
    speaker_role_2: "المسمى الوظيفي / الجهة",
    speaker_badge_2: "قيد التأكيد",
    speaker_name_3: "اسم المتحدث",
    speaker_role_3: "المسمى الوظيفي / الجهة",
    speaker_badge_3: "قيد التأكيد",
    speaker_name_4: "اسم المتحدث",
    speaker_role_4: "المسمى الوظيفي / الجهة",
    speaker_badge_4: "قيد التأكيد",
    registration_eyebrow: "التسجيل",
    registration_title: "احجز مكانك",
    registration_text: "انضم إلى الصيادلة والطلاب والمهنيين في الرعاية الصحية والشركاء ليوم مركّز من التعليم والحوار والتواصل المهني.",
    registration_notice_title: "تسجيل مبكر",
    registration_notice_text: "احجز مقعدك وساعد فريق التنظيم على التخطيط للفعالية حسب عدد الحضور والجلسات ومتطلبات المشاركة.",
    form_full_name: "الاسم الكامل",
    form_full_name_placeholder: "مثال: أمينة حسن",
    form_profession: "المهنة",
    form_profession_placeholder: "اختر مهنتك",
    profession_pharmacist: "صيدلي",
    profession_student: "طالب صيدلة",
    profession_healthcare: "مهني في الرعاية الصحية",
    profession_org: "ممثل جهة",
    profession_guest: "ضيف",
    profession_other: "أخرى",
    form_email: "البريد الإلكتروني",
    form_email_placeholder: "name@example.com",
    form_phone: "الهاتف",
    form_phone_placeholder: "+249 ...",
    form_organization: "الجهة / المؤسسة",
    form_organization_placeholder: "مثال: جمعية الصيادلة السودانية",
    form_attendance_type: "نوع الحضور",
    attendance_physical: "حضوري",
    attendance_online: "أونلاين",
    consent_text: "أوافق على استخدام المعلومات المسجلة لأغراض التسجيل في الفعالية وإدارة الحضور.",
    form_submit: "إرسال التسجيل",
    form_footer_text: "يتم إرسال تفاصيلك مباشرة إلى قاعدة بيانات الفعالية.",
    questions_eyebrow: "التفاعل",
    questions_title: "اطرح سؤالاً",
    questions_text: "شارك سؤالك للمتحدثين والمشرفين حتى تبقى المناقشات ذات صلة وملهمة.",
    question_name: "الاسم",
    question_name_placeholder: "اسمك",
    question_session: "الجلسة",
    question_session_placeholder: "اختر جلسة",
    question_session_1: "24 سبتمبر — الترحيب والتسجيل",
    question_session_2: "24 سبتمبر — الجلسة الافتتاحية",
    question_session_3: "24 سبتمبر — الجلسة المهنية",
    question_question: "السؤال",
    question_question_placeholder: "اكتب سؤالك",
    question_anonymous: "إرسال مجهول",
    question_submit: "إرسال السؤال",
    media_eyebrow: "بعد الفعالية",
    media_title: "الصور والفيديوهات",
    media_text: "سيتم رفع صور وفيديوهات يوم الصيادلة 2026 هنا بعد انتهاء الفعالية.",
    media_photos_title: "صور الفعالية",
    media_photos_text: "ستظهر هنا مجموعة من أجمل لحظات الفعالية.",
    media_videos_title: "فيديوهات الفعالية",
    media_videos_text: "ستتم إضافة الكلمات واللقطات والتسجيلات المختارة هنا.",
    media_highlights_title: "أبرز اللحظات",
    media_highlights_text: "تابع هذا المكان لأجمل اللحظات وتحديثات الفعالية.",
    media_status: "متاحة بعد الفعالية",
    media_status_2: "متاحة بعد الفعالية",
    media_status_3: "ستتوفر بعد 24 سبتمبر",
    footer_date: "24 سبتمبر 2026",
    footer_tag_1: "حضوري + أونلاين",
    footer_tag_2: "تسجيل رقمي",
    footer_tag_3: "حضور QR",
    footer_bottom: "يوم الصيادلة 2026 · يوم من التعلم والقيادة والمجتمع.",
    form_full_name_required: "يرجى إدخال الاسم الكامل.",
    form_profession_required: "يرجى اختيار المهنة.",
    form_email_required: "يرجى إدخال البريد الإلكتروني.",
    form_email_invalid: "يرجى إدخال بريد إلكتروني صحيح.",
    form_phone_required: "يرجى إدخال رقم الهاتف.",
    form_phone_invalid: "يرجى إدخال رقم هاتف صحيح.",
    form_attendance_required: "يرجى اختيار طريقة الحضور.",
    form_consent_required: "يجب الموافقة على الشروط للتسجيل.",
    form_check_title: "راجع النموذج",
    form_check_message: "بعض الحقول المطلوبة تحتاج إلى مراجعة قبل الإرسال.",
    form_success_title: "نجح التسجيل",
    form_success_message: "معرف المشارك: {code}. تم تسجيل تأكيد التسجيل.",
    form_fail_title: "تعذّر إرسال التسجيل",
    form_fail_message: "يرجى التحقق من الاتصال أو التأكد من إعداد ملف supabase-config.js بالبيانات الصحيحة.",
    question_add_title: "أضف سؤالك",
    question_add_message: "يرجى كتابة سؤال قبل الإرسال.",
    question_success_title: "تم إرسال السؤال",
    question_success_message: "تم إرسال سؤالك إلى قائمة المراجعة.",
    question_fail_title: "تعذّر إرسال السؤال",
    question_fail_message: "يرجى التحقق من الاتصال أو التأكد من إعداد ملف supabase-config.js بالبيانات الصحيحة.",
    join_online_title: "الرابط الإلكتروني لم يُنشر بعد",
    join_online_message: "سيتم نشر رابط الاجتماع الرسمي من قبل فريق التنظيم بالقرب من موعد الفعالية.",
    program_day_one_label: "24 سبتمبر — يوم الفعالية",
    program_day_one_session_1: "التسجيل والترحيب",
    program_day_one_session_1_tag: "جلسة افتتاحية",
    program_day_one_session_2: "الجلسة الافتتاحية",
    program_day_one_session_2_tag: "كلمة بارزة",
    program_day_one_session_3: "الجلسة المهنية",
    program_day_one_session_3_tag: "نقاش خبراء",
  },
};

function t(key, fallback = "") {
  return translations[appState.lang]?.[key] || translations.en[key] || fallback || key;
}

function setLanguage(lang) {
  appState.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.lang = appState.lang;
  document.documentElement.dir = appState.lang === "ar" ? "rtl" : "ltr";

  const programTab = document.querySelector(".tab-btn");
  if (programTab) programTab.textContent = t("program_day_one_label");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t(key)) el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t(key)) el.placeholder = t(key);
  });

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.textContent = appState.lang === "ar" ? "EN" : "AR";
    langToggle.setAttribute("aria-label", appState.lang === "ar" ? "Switch to English" : "تبديل اللغة إلى العربية");
  }

  renderProgramDay("1");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initSmoothNavClose();
  initProgramTabs();
  initRegistrationForm();
  initQuestionForm();

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      setLanguage(appState.lang === "en" ? "ar" : "en");
    });
  }

  setLanguage("en");
});

/* ==========================================================================
   Mobile navigation
   ========================================================================== */
function initMobileMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("menu-toggle");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function initSmoothNavClose() {
  // Close the mobile menu after a nav link is tapped.
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("menu-toggle");
  document.querySelectorAll(".main-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (header) header.classList.remove("is-open");
      if (toggle) {
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

const PROGRAM_DATA = {
  1: {
    sessions: [
      { time: "09:00", titleKey: "program_day_one_session_1", tagKey: "program_day_one_session_1_tag" },
      { time: "09:30", titleKey: "program_day_one_session_2", tagKey: "program_day_one_session_2_tag" },
      { time: "11:00", titleKey: "program_day_one_session_3", tagKey: "program_day_one_session_3_tag" },
    ],
  },
};

function renderProgramDay(day) {
  const panel = document.getElementById("program-panel");
  if (!panel) return;
  const data = PROGRAM_DATA[day];
  if (!data) return;

  panel.innerHTML = data.sessions
    .map(
      (s) => `
      <div class="session-row">
        <span class="session-time">${escapeHtml(s.time)}</span>
        <div>
          <span class="session-title">${escapeHtml(t(s.titleKey))}</span>
          <span class="session-tag">${escapeHtml(t(s.tagKey))}</span>
        </div>
      </div>`
    )
    .join("");
}

function initProgramTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      renderProgramDay(tab.dataset.day);

      const panel = document.getElementById("program-panel");
      if (panel) panel.setAttribute("aria-labelledby", tab.id);
    });
  });

  // Initial render
  renderProgramDay("1");
}

/* ==========================================================================
   Registration form
   ========================================================================== */
function initRegistrationForm() {
  const form = document.getElementById("registration-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearFieldErrors(form);

    const formData = new FormData(form);
    const values = {
      full_name: (formData.get("full_name") || "").toString().trim(),
      profession: (formData.get("profession") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      organization: (formData.get("organization") || "").toString().trim(),
      attendance_type: (formData.get("attendance_type") || "").toString().trim(),
      consent: formData.get("consent") === "on",
    };

    const errors = validateRegistration(values);
    if (Object.keys(errors).length > 0) {
      applyFieldErrors(form, errors);
      showToast({
        title: t("form_check_title"),
        message: t("form_check_message"),
        variant: "error",
      });
      return;
    }

    // -----------------------------------------------------------------
    // Data model matching the future `participants` table in Supabase:
    //   id, full_name, profession, email, phone, organization,
    //   attendance_type, registration_date, attendance_status
    // -----------------------------------------------------------------
    const participant = {
      full_name: values.full_name,
      profession: values.profession,
      email: values.email,
      phone: values.phone,
      organization: values.organization || null,
      attendance_type: values.attendance_type,
      registration_date: new Date().toISOString(),
      attendance_status: "registered",
    };

    submitRegistrationDemo(participant, form);
  });
}

function validateRegistration(values) {
  const errors = {};

  if (!values.full_name) errors.full_name = t("form_full_name_required");
  if (!values.profession) errors.profession = t("form_profession_required");

  if (!values.email) {
    errors.email = t("form_email_required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = t("form_email_invalid");
  }

  if (!values.phone) {
    errors.phone = t("form_phone_required");
  } else if (!/^[0-9+\s()-]{6,}$/.test(values.phone)) {
    errors.phone = t("form_phone_invalid");
  }

  if (!values.attendance_type) errors.attendance_type = t("form_attendance_required");
  if (!values.consent) errors.consent = t("form_consent_required");

  return errors;
}

function applyFieldErrors(form, errors) {
  Object.entries(errors).forEach(([field, message]) => {
    const errorEl = form.querySelector(`[data-error-for="${field}"]`);
    if (errorEl) errorEl.textContent = message;

    const input = form.querySelector(`[name="${field}"]`);
    if (input) input.classList.add("has-error");
  });
}

function clearFieldErrors(form) {
  form.querySelectorAll(".field-error").forEach((el) => (el.textContent = ""));
  form.querySelectorAll(".has-error").forEach((el) => el.classList.remove("has-error"));
}

function generateParticipantCode() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `PH26-${random}`;
}

/**
 * Live submission handler — writes to the `participants` table in Supabase.
 * Requires SUPABASE_URL and SUPABASE_ANON_KEY to be set in supabase-config.js.
 */
async function submitRegistrationDemo(participant, form) {
  const participantCode = generateParticipantCode();
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) submitBtn.disabled = true;

  try {
    const { error } = await supabaseClient
      .from("participants")
      .insert([{ ...participant, participant_code: participantCode }]);

    if (error) throw error;

    showToast({
      title: t("form_success_title"),
      message: t("form_success_message").replace("{code}", participantCode),
      variant: "success",
      duration: 7000,
    });

    form.reset();
    clearFieldErrors(form);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Registration failed:", err);
    showToast({
      title: t("form_fail_title"),
      message: t("form_fail_message"),
      variant: "error",
      duration: 7000,
    });
  } finally {
    if (submitBtn) submitBtn.disabled = false;
  }
}

/* ==========================================================================
   Question / interaction form (demo)
   ========================================================================== */
function initQuestionForm() {
  const form = document.getElementById("question-form");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const question = (formData.get("question") || "").toString().trim();

    if (!question) {
      showToast({
        title: t("question_add_title"),
        message: t("question_add_message"),
        variant: "error",
      });
      return;
    }

    const isAnonymous = formData.get("anonymous") === "on";
    const questionEntry = {
      name: isAnonymous ? "anonymous" : (formData.get("name") || "").toString().trim() || null,
      session: (formData.get("session") || "").toString().trim() || null,
      question,
      anonymous: isAnonymous,
    };

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const { error } = await supabaseClient.from("questions").insert([questionEntry]);
      if (error) throw error;

      showToast({
        title: t("question_success_title"),
        message: t("question_success_message"),
        variant: "success",
      });
      form.reset();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Question submission failed:", err);
      showToast({
        title: t("question_fail_title"),
        message: t("question_fail_message"),
        variant: "error",
      });
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}
