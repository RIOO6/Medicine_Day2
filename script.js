const appState = {
  lang: "ar",
};
const registrationUnlockDate = new Date(2026, 8, 24);

/* ==========================================================================
   UI copy — bilingual dictionary (ar is the primary/default language)
   ========================================================================== */
const translations = {
  ar: {
    event_title: "اليوم العالمي للصيدلي 2026",
    brand_subtitle: "تمكين الصيدلي لمستقبل أكثر صحة",
    nav_home: "الرئيسية",
    nav_about: "عن الفعالية",
    nav_program: "البرنامج",
    nav_speakers: "المتحدثون",
    nav_donors: "الداعمون",
    nav_other_events: "احتفالات أخرى",
    nav_contact: "تواصل معنا",
    nav_register: "التسجيل",
    cta_register: "تسجيل",
    hero_kicker: "وزارة الصحة الاتحادية — الإدارة العامة للصيدلة",
    hero_slogan: "تمكين الصيدلي لمستقبل أكثر صحة",
    hero_date: "الخميس، 24 سبتمبر 2026",
    hero_text: "يوم وطني يجمع الصيادلة وطلاب الصيدلة وقادة الرعاية الصحية والشركاء في جلسات علمية، تكريم، ومبادرات مجتمعية.",
    hero_register: "سجّل حضورك",
    hero_program: "استعرض البرنامج",
    fact_september: "سبتمبر 2026",
    fact_phases_label: "3",
    fact_phases_text: "مراحل رئيسية",
    fact_digital_label: "رقمي",
    fact_digital_text: "تسجيل وتفاعل",
    qa_register_title: "التسجيل",
    qa_register_text: "احجز مكانك واختر طريقة حضورك.",
    qa_register_link: "اذهب إلى التسجيل ←",
    qa_program_title: "البرنامج",
    qa_program_text: "اطّلع على مراحل اليوم والجلسات والمتحدثين.",
    qa_program_link: "عرض البرنامج ←",
    qa_donors_title: "الداعمون",
    qa_donors_text: "تعرّف على الجهات الداعمة للفعالية.",
    qa_donors_link: "عرض الداعمين ←",
    about_eyebrow: "عن الفعالية",
    about_title: "يوم واحد، تجربة رقمية متكاملة.",
    about_text: "تسجيل واحد يكفي: يستلم المشاركون معرّفاً رقمياً، ويحصل فريق التنظيم على بيانات منظمة، ويملك الحضور الحضوري والإلكتروني قناة واضحة للمشاركة والتفاعل طوال اليوم.",
    feature_registration_title: "التسجيل",
    feature_registration_text: "استمارة رقمية واحدة لتسجيل جميع بيانات المشاركين.",
    feature_registration_badge: "متاح الآن",
    feature_attendance_title: "الحضور",
    feature_attendance_text: "معرّف مشارك خاص بكل تسجيل لتسهيل إدارة اليوم.",
    feature_attendance_badge: "جاهز",
    feature_interaction_title: "التفاعل",
    feature_interaction_text: "يمكن للحضور الحضوري والإلكتروني إرسال أسئلتهم للمشرفين مباشرة.",
    feature_interaction_badge: "جاهز",
    feature_record_title: "سجل الفعالية",
    feature_record_text: "البرنامج، المتحدثون، وتحديثات اليوم في مكان واحد.",
    feature_record_badge: "محدّث باستمرار",
    speakers_eyebrow: "المتحدثون",
    speakers_title: "المتحدثون والمساهمون",
    speakers_text: "نخبة من القيادات الصحية والأكاديمية تتحدث في الجلسة الافتتاحية والجلسة العلمية ليوم 24 سبتمبر.",
    speaker_name_1: "د. هيثم محمد إبراهيم",
    speaker_role_1: "وزير الصحة الاتحادي",
    speaker_badge_1: "الكلمة الرئيسية",
    speaker_name_2: "د. علي بابكر سيد أحمد",
    speaker_role_2: "وكيل وزارة الصحة الاتحادية",
    speaker_badge_2: "الجلسة الافتتاحية",
    speaker_name_3: "د. محمد مروان",
    speaker_role_3: "رئيس اللجنة المنظمة",
    speaker_badge_3: "الجلسة الافتتاحية",
    speaker_name_4: "د. نجم الدين أحمد المجذوب",
    speaker_role_4: "مدير الإدارة العامة للصيدلة",
    speaker_badge_4: "الممارسة الصيدلانية ومسار الصيدلي",
    speaker_name_6: "د. حسن أبو علي",
    speaker_role_6: "الجلسة العلمية",
    speaker_badge_6: "التصنيع الدوائي والخارطة الاستثمارية",
    speaker_name_8: "د. هالة موسى",
    speaker_role_8: "",
    speaker_badge_8: "المبادرات المجتمعية",
    print_header_title: "اليوم العالمي للصيدلي 2026",
    print_header_subtitle: "وزارة الصحة الاتحادية — الإدارة العامة للصيدلة · الخميس 24 سبتمبر 2026",
    program_eyebrow: "برنامج اليوم",
    program_title: "البرنامج الكامل — الخميس 24 سبتمبر 2026",
    program_download: "تحميل البرنامج (PDF)",
    program_download_note: "تُفتح نافذة الطباعة — اختر «حفظ كملف PDF»",
    registration_eyebrow: "التسجيل",
    registration_title: "احجز مكانك",
    registration_text: "انضم إلى الصيادلة والطلاب والمهنيين في الرعاية الصحية والشركاء ليوم مركّز من التعليم والحوار والتواصل المهني.",
    registration_notice_title: "التسجيل المبكر",
    registration_notice_text: "احجز مقعدك وساعد فريق التنظيم على التخطيط لليوم حسب عدد الحضور والجلسات ومتطلبات المشاركة.",
    registration_locked_title: "التسجيل مغلق مؤقتاً",
    registration_locked_text: "يفتح التسجيل يوم 24 سبتمبر 2026، تزامناً مع يوم الاحتفال.",
    registration_open_title: "التسجيل مفتوح",
    registration_open_text: "يمكنك الآن إرسال بياناتك للتسجيل في الفعالية.",
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
    online_live_title: "الحضور أونلاين",
    online_live_text: "سيتم بث الفعالية مباشرة عبر صفحتنا على فيسبوك. تابع الصفحة لتصلك إشعارات البث.",
    online_live_link: "تابع صفحة فيسبوك للبث المباشر",
    consent_text: "أوافق على استخدام المعلومات المسجلة لأغراض التسجيل في الفعالية وإدارة الحضور.",
    form_submit: "إرسال التسجيل",
    form_footer_text: "يتم إرسال تفاصيلك مباشرة إلى قاعدة بيانات الفعالية.",
    contact_eyebrow: "تواصل معنا",
    contact_title: "نحن هنا لمساعدتك",
    contact_text: "للاستفسارات حول الفعالية أو التسجيل، تواصل مع فريق التنظيم عبر القناة المناسبة لك.",
    contact_email_label: "البريد الإلكتروني",
    contact_facebook_label: "فيسبوك",
    contact_facebook_text: "تابع آخر الأخبار والتحديثات",
    contact_whatsapp_label: "واتساب",
    contact_whatsapp_text: "راسل فريق التنظيم مباشرة",
    questions_eyebrow: "التفاعل",
    questions_title: "اطرح سؤالاً",
    questions_text: "شارك سؤالك للمتحدثين والمشرفين حتى تبقى المناقشات ذات صلة وملهمة.",
    question_name: "الاسم",
    question_name_placeholder: "اسمك",
    question_session: "المرحلة",
    question_session_placeholder: "اختر مرحلة",
    question_session_1: "24 سبتمبر — الافتتاح والبروتوكول",
    question_session_2: "24 سبتمبر — الجلسة العلمية والاستثمار",
    question_session_3: "24 سبتمبر — المبادرات المجتمعية والتكريم",
    question_session_other: "أخرى",
    question_question: "السؤال",
    question_question_placeholder: "اكتب سؤالك",
    question_anonymous: "إرسال مجهول",
    question_submit: "إرسال السؤال",
    donors_eyebrow: "شكر وتقدير",
    donors_title: "شكراً لداعمينا وشركائنا",
    donors_text: "نتوجه بالشكر والتقدير للجهات التي ساهمت في إنجاح اليوم العالمي للصيدلي 2026.",
    other_events_eyebrow: "احتفالات أخرى",
    other_events_title: "شاهد احتفالات الصيادلة حول العالم",
    other_events_text: "يمكنك استكشاف صفحات ومبادرات أخرى للاطلاع على استعداداتهم، وقد تجد بثاً مباشراً عبر فيسبوك في يوم الاحتفال.",
    other_events_notice_title: "ملاحظة مهمة",
    other_events_notice_text: "هذه روابط لاحتفالات منفصلة وليست جزءاً من موقعنا. قد لا تحتوي على نفس البرنامج أو الجداول أو المتحدثين أو الداعمين أو نظام التسجيل الموجود هنا.",
    other_event_open_link: "استكشف على فيسبوك",
    other_event_states_title: "احتفالات الولايات السودانية",
    other_event_states_text: "ابحث عن صفحات الصيادلة والجهات الصحية في الولايات الأخرى.",
    other_event_international_title: "منظمات واحتفالات دولية",
    other_event_international_text: "ابحث عن احتفالات ومنظمات صيدلانية في دول أخرى.",
    donor_hero_name: "وزارة الصحة الاتحادية",
    donor_hero_role: "الإدارة العامة للصيدلة",
    donor_hero_quote: "\u0022نشكر كل داعم ساهم في جعل اليوم العالمي للصيدلي 2026 فعالية تليق بمهنة الصيدلة ورسالتها.\u0022",
    donor_hero_note: "استبدل الصورة أعلاه بصورة رئيس الجهة",
    footer_date: "الخميس 24 سبتمبر 2026",
    footer_tag_1: "حضوري + أونلاين",
    footer_tag_2: "تسجيل رقمي",
    footer_tag_3: "3 مراحل",
    footer_bottom: "اليوم العالمي للصيدلي 2026 · وزارة الصحة الاتحادية — الإدارة العامة للصيدلة.",
    form_full_name_required: "يرجى إدخال الاسم الكامل.",
    form_profession_required: "يرجى اختيار المهنة.",
    form_email_required: "يرجى إدخال البريد الإلكتروني.",
    form_email_invalid: "يرجى إدخال بريد إلكتروني صحيح.",
    form_phone_required: "يرجى إدخال رقم الهاتف.",
    form_phone_invalid: "يرجى إدخال رقم هاتف صحيح.",
    form_full_name_too_long: "يجب ألا يتجاوز الاسم الكامل 100 حرف.",
    form_email_too_long: "يجب ألا يتجاوز البريد الإلكتروني 254 حرفاً.",
    form_phone_too_long: "يجب ألا يتجاوز الهاتف 25 حرفاً.",
    form_organization_too_long: "يجب ألا تتجاوز الجهة أو المؤسسة 150 حرفاً.",
    form_attendance_required: "يرجى اختيار طريقة الحضور.",
    form_consent_required: "يجب الموافقة على الشروط للتسجيل.",
    form_check_title: "راجع النموذج",
    form_check_message: "بعض الحقول المطلوبة تحتاج إلى مراجعة قبل الإرسال.",
    form_success_title: "نجح التسجيل",
    form_success_message: "معرف المشارك: {code}. تم تسجيل تأكيد التسجيل.",
    form_fail_title: "تعذّر إرسال التسجيل",
    form_fail_message: "يرجى التحقق من الاتصال، أو المحاولة لاحقاً.",
    question_add_title: "أضف سؤالك",
    question_add_message: "يرجى كتابة سؤال قبل الإرسال.",
    question_name_too_long: "يجب ألا يتجاوز الاسم 100 حرف.",
    question_too_long: "يجب ألا يتجاوز السؤال 1000 حرف.",
    question_success_title: "تم إرسال السؤال",
    question_success_message: "تم إرسال سؤالك إلى قائمة المراجعة.",
    question_fail_title: "تعذّر إرسال السؤال",
    question_fail_message: "يرجى التحقق من الاتصال، أو المحاولة لاحقاً.",
  },
  en: {
    event_title: "World Pharmacists' Day 2026",
    brand_subtitle: "Empowering the Pharmacist for a Healthier Future",
    nav_home: "Home",
    nav_about: "About",
    nav_program: "Program",
    nav_speakers: "Speakers",
    nav_donors: "Supporters",
    nav_other_events: "Other Celebrations",
    nav_contact: "Contact",
    nav_register: "Registration",
    cta_register: "Register",
    hero_kicker: "Federal Ministry of Health — General Directorate of Pharmacy",
    hero_slogan: "Empowering the Pharmacist for a Healthier Future",
    hero_date: "Thursday, 24 September 2026",
    hero_text: "A national day bringing together pharmacists, pharmacy students, healthcare leaders and partners for scientific sessions, recognition, and community initiatives.",
    hero_register: "Register to Attend",
    hero_program: "Explore Program",
    fact_september: "September 2026",
    fact_phases_label: "3",
    fact_phases_text: "Main Phases",
    fact_digital_label: "Digital",
    fact_digital_text: "Registration & Interaction",
    qa_register_title: "Register",
    qa_register_text: "Reserve your place and choose how you will attend.",
    qa_register_link: "Go to registration →",
    qa_program_title: "Program",
    qa_program_text: "See the day's phases, sessions, and speakers.",
    qa_program_link: "View program →",
    qa_donors_title: "Supporters",
    qa_donors_text: "Meet the organizations supporting the event.",
    qa_donors_link: "View supporters →",
    about_eyebrow: "About the Event",
    about_title: "One day, one digital experience.",
    about_text: "One registration is enough: participants receive a digital ID, the organizing team gets structured data, and both in-person and online audiences have a clear channel to participate and interact throughout the day.",
    feature_registration_title: "Registration",
    feature_registration_text: "A single digital form captures every participant's details.",
    feature_registration_badge: "Live Now",
    feature_attendance_title: "Attendance",
    feature_attendance_text: "Each registration gets a unique participant ID to keep the day running smoothly.",
    feature_attendance_badge: "Ready",
    feature_interaction_title: "Interaction",
    feature_interaction_text: "In-person and online attendees can send questions to moderators directly.",
    feature_interaction_badge: "Ready",
    feature_record_title: "Event Record",
    feature_record_text: "Program, speakers, and day-of updates, all in one place.",
    feature_record_badge: "Continuously Updated",
    speakers_eyebrow: "Speakers",
    speakers_title: "Speakers & Contributors",
    speakers_text: "Distinguished health and academic leaders speaking in the opening and scientific sessions on 24 September.",
    speaker_name_1: "Dr. Haitham Mohamed Ibrahim",
    speaker_role_1: "Federal Minister of Health",
    speaker_badge_1: "Keynote Address",
    speaker_name_2: "Dr. Ali Babiker Sid Ahmed",
    speaker_role_2: "Undersecretary, Federal Ministry of Health",
    speaker_badge_2: "Opening Session",
    speaker_name_3: "Dr. Mohamed Marwan",
    speaker_role_3: "Organizing Committee Chair",
    speaker_badge_3: "Opening Session",
    speaker_name_4: "Dr. Najm Aldeen Ahmed Elmagzoub",
    speaker_role_4: "Director General of Pharmacy",
    speaker_badge_4: "Pharmacy Practice & the Pharmacist's Career Path",
    speaker_name_6: "dr. Hassan Abu Ali",
    speaker_role_6: "Scientific Session",
    speaker_badge_6: "Pharmaceutical Manufacturing & Investment Roadmap",
    speaker_name_8: "Dr. Hala Musa",
    speaker_role_8: "",
    speaker_badge_8: "Community Initiatives",
    print_header_title: "World Pharmacists' Day 2026",
    print_header_subtitle: "Federal Ministry of Health — General Directorate of Pharmacy · Thursday 24 September 2026",
    program_eyebrow: "Day Program",
    program_title: "Full Program — Thursday 24 September 2026",
    program_download: "Download Schedule (PDF)",
    program_download_note: "Opens the print dialog — choose “Save as PDF”",
    registration_eyebrow: "Registration",
    registration_title: "Reserve your place",
    registration_text: "Join pharmacists, students, healthcare professionals, and partners for a focused day of learning, dialogue, and professional connection.",
    registration_notice_title: "Early registration",
    registration_notice_text: "Secure your seat and help the organizing team plan the day around attendees, sessions, and participation needs.",
    registration_locked_title: "Registration is temporarily closed",
    registration_locked_text: "Registration opens on 24 September 2026, on the celebration day.",
    registration_open_title: "Registration is open",
    registration_open_text: "You can now submit your details to register for the event.",
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
    online_live_title: "Online attendance",
    online_live_text: "The event will be streamed live on our Facebook page. Follow the page to receive live-stream updates.",
    online_live_link: "Follow the Facebook page for the live stream",
    consent_text: "I agree that the information provided may be used for event registration and attendance management.",
    form_submit: "Submit Registration",
    form_footer_text: "Your details are sent directly to the event database.",
    contact_eyebrow: "Contact Us",
    contact_title: "We are here to help",
    contact_text: "For questions about the event or registration, contact the organizing team through the channel that suits you.",
    contact_email_label: "Email",
    contact_facebook_label: "Facebook",
    contact_facebook_text: "Follow the latest news and updates",
    contact_whatsapp_label: "WhatsApp",
    contact_whatsapp_text: "Message the organizing team directly",
    questions_eyebrow: "Interaction",
    questions_title: "Ask a Question",
    questions_text: "Share your question for the speakers and moderators so the conversations stay relevant, thoughtful, and engaging.",
    question_name: "Name",
    question_name_placeholder: "Your name",
    question_session: "Phase",
    question_session_placeholder: "Select a phase",
    question_session_1: "24 September — Opening & Protocol",
    question_session_2: "24 September — Scientific Session & Investment",
    question_session_3: "24 September — Community Initiatives & Recognition",
    question_session_other: "Other",
    question_question: "Question",
    question_question_placeholder: "Write your question",
    question_anonymous: "Submit anonymously",
    question_submit: "Submit Question",
    donors_eyebrow: "Acknowledgment",
    donors_title: "Thank You to Our Supporters",
    donors_text: "With sincere thanks to the organizations that helped make World Pharmacists' Day 2026 possible.",
    other_events_eyebrow: "Other Celebrations",
    other_events_title: "Explore Pharmacists' Day Celebrations",
    other_events_text: "Explore other pages and initiatives to see how they are preparing, and look for a possible Facebook Live stream on the celebration day.",
    other_events_notice_title: "Important note",
    other_events_notice_text: "These are separate celebrations and are not part of this website. They may not provide the same program, schedules, speakers, supporters, or registration system available here.",
    other_event_open_link: "Explore on Facebook",
    other_event_states_title: "Celebrations in Other Sudanese States",
    other_event_states_text: "Search for pharmacy pages and health organizations in other states.",
    other_event_international_title: "International Organizations and Celebrations",
    other_event_international_text: "Search for pharmacy celebrations and organizations in other countries.",
    donor_hero_name: "Federal Ministry of Health",
    donor_hero_role: "General Directorate of Pharmacy",
    donor_hero_quote: "\u0022We thank every supporter who helped make World Pharmacists' Day 2026 an event worthy of the pharmacy profession and its mission.\u0022",
    donor_hero_note: "Replace the photo above with a photo of the organizing body's head",
    footer_date: "Thursday 24 September 2026",
    footer_tag_1: "Physical + Online",
    footer_tag_2: "Digital Registration",
    footer_tag_3: "3 Phases",
    footer_bottom: "World Pharmacists' Day 2026 · Federal Ministry of Health — General Directorate of Pharmacy.",
    form_full_name_required: "Please enter your full name.",
    form_profession_required: "Please select your profession.",
    form_email_required: "Please enter your email address.",
    form_email_invalid: "Please enter a valid email address.",
    form_phone_required: "Please enter a phone number.",
    form_phone_invalid: "Please enter a valid phone number.",
    form_full_name_too_long: "Full name must not exceed 100 characters.",
    form_email_too_long: "Email must not exceed 254 characters.",
    form_phone_too_long: "Phone must not exceed 25 characters.",
    form_organization_too_long: "Organization must not exceed 150 characters.",
    form_attendance_required: "Please choose how you will attend.",
    form_consent_required: "Consent is required to register.",
    form_check_title: "Check the form",
    form_check_message: "Some required fields need your attention before submitting.",
    form_success_title: "Registration successful",
    form_success_message: "Participant ID: {code}. A confirmation has been recorded.",
    form_fail_title: "Couldn't submit registration",
    form_fail_message: "Please check your connection, or try again shortly.",
    question_add_title: "Add your question",
    question_add_message: "Please write a question before submitting.",
    question_name_too_long: "Name must not exceed 100 characters.",
    question_too_long: "Question must not exceed 1,000 characters.",
    question_success_title: "Question submitted",
    question_success_message: "Your question has been sent to the moderation queue.",
    question_fail_title: "Couldn't submit question",
    question_fail_message: "Please check your connection, or try again shortly.",
  },
};

function t(key, fallback = "") {
  return translations[appState.lang]?.[key] || translations.ar[key] || fallback || key;
}

function setLanguage(lang) {
  appState.lang = lang === "en" ? "en" : "ar";
  document.documentElement.lang = appState.lang;
  document.documentElement.dir = appState.lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t(key)) el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t(key)) el.placeholder = t(key);
  });

  document.querySelectorAll(".brand-title, .footer-title").forEach((el) => {
    el.textContent = t("event_title");
  });
  document.querySelector(".hero-title").textContent = t("event_title");

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.querySelector(".lang-toggle-label").textContent = appState.lang === "ar" ? "Language: English" : "اللغة: العربية";
    langToggle.setAttribute("aria-label", appState.lang === "ar" ? "Switch to English" : "تبديل اللغة إلى العربية");
  }

  renderProgram();
  renderDonors();
  renderOtherEvents();
  updateRegistrationLock();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ==========================================================================
   Toasts — was referenced 6x in this file but never implemented; fixed here.
   ========================================================================== */
function showToast({ title, message, variant = "success", duration = 5000 }) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast" + (variant === "error" ? " toast-error" : "");
  toast.innerHTML = `
    <div class="toast-body">
      <strong></strong>
      <p></p>
    </div>
    <button type="button" class="toast-close" aria-label="close">&times;</button>
  `;
  toast.querySelector("strong").textContent = title || "";
  toast.querySelector("p").textContent = message || "";

  const remove = () => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  };
  toast.querySelector(".toast-close").addEventListener("click", remove);
  container.appendChild(toast);

  if (duration > 0) setTimeout(remove, duration);
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initSmoothNavClose();
  initRegistrationForm();
  initQuestionForm();
  initScheduleDownload();

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      setLanguage(appState.lang === "ar" ? "en" : "ar");
    });
  }

  setLanguage("ar");
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

/* ==========================================================================
  Program / Schedule — 24 September 2026, in three phases
   Source: official event schedule (Scheduel.md)
   ========================================================================== */
const SCHEDULE_DATA = [
  {
    time: { ar: "08:30 – 11:30", en: "08:30 – 11:30" },
    title: { ar: "الافتتاح والبروتوكول", en: "Opening & Protocol" },
    sessions: [
      {
        time: "08:30 – 09:30",
        title: { ar: "الاستقبال وافتتاح المعرض", en: "Reception & Exhibition Opening" },
        desc: {
          ar: "التسجيل واستراحة القهوة والشاي؛ افتتاح المعرض الدوائي وقص الشريط بحضور وزير الصحة الاتحادي والضيوف.",
          en: "Registration and a coffee/tea break; opening of the pharmaceutical exhibition and ribbon-cutting with the Federal Minister of Health and guests.",
        },
      },
      {
        time: "09:30 – 10:45",
        title: { ar: "الجلسة الافتتاحية والكلمات الرسمية", en: "Opening Session & Official Remarks" },
        desc: {
          ar: "آيات من القرآن الكريم؛ كلمة رئيس اللجنة المنظمة (د. محمد مروان)؛ كلمات ممثلي طلاب الصيدلة والقطاع الخاص والمنظمات؛ كلمة وكيل وزارة الصحة الاتحادية (د. علي بابكر سيد أحمد)؛ الكلمة الرئيسية لوزير الصحة الاتحادي (د. هيثم محمد إبراهيم).",
          en: "Qur'an recitation; remarks by the Organizing Committee Chair (Dr. Mohamed Marwan); brief remarks from pharmacy student, private sector, and organization representatives; remarks by the Undersecretary of the Federal Ministry of Health (Dr. Ali Babiker Sid Ahmed); keynote address by the Federal Minister of Health (Dr. Haitham Mohamed Ibrahim).",
        },
      },
      {
        time: "10:45 – 11:30",
        title: { ar: "العرض الوثائقي وإطلاق المبادرة الوطنية", en: "Documentary & National Initiative Launch" },
        desc: {
          ar: "عرض الفيلم الوثائقي الافتتاحي؛ لقاء الضيوف والمتحدثين؛ الإعلان الرسمي وإطلاق «مبادرة إعادة تأهيل دار الصيدلة».",
          en: "Screening of the opening documentary; a meet-and-greet with guests and speakers; the official announcement and launch of the 'Pharmacy Rehabilitation Initiative'.",
        },
      },
    ],
  },
  {
    time: { ar: "11:30 – 14:30", en: "11:30 – 14:30" },
    title: { ar: "الجلسة العلمية والاستثمار", en: "Scientific Session & Investment" },
    sessions: [
      {
        time: "11:30 – 13:30",
        title: { ar: "مستقبل الصيدلة والاستثمار", en: "The Future of Pharmacy & Investment" },
        desc: {
          ar: "الممارسة الصيدلانية ومسار الصيدلي — د. نجم الدين أحمد المجذوب؛ التصنيع الدوائي والخارطة الاستثمارية والنباتات الطبية — بروفيسور عاصم يوسف؛ إضاءات من منصاتنا الرقمية على أفضل المشاركات؛ مناقشة تفاعلية وقراءة التوصيات النهائية.",
          en: "Pharmacy Practice & the Pharmacist's Career Path — Dr. Najm Aldeen Ahmed Elmagzoub; Pharmaceutical Manufacturing, Investment Roadmap & Medicinal Plants — Prof. Asim Yousif; highlights from our digital platforms' top contributions; interactive discussion and final recommendations.",
        },
      },
      {
        time: "13:30 – 14:30",
        title: { ar: "استراحة الغداء وجولة المعرض", en: "Lunch Break & Exhibition Tour" },
        desc: {
          ar: "استراحة الغداء، التواصل الاجتماعي، وجولة داخل المعرض الدوائي.",
          en: "Lunch, networking, and a tour of the pharmaceutical exhibition.",
        },
      },
    ],
  },
  {
    time: { ar: "14:30 – 17:00", en: "14:30 – 17:00" },
    title: { ar: "المبادرات المجتمعية والتكريم", en: "Community Initiatives & Recognition" },
    sessions: [
      {
        time: "14:30 – 15:30",
        title: { ar: "المبادرات المجتمعية والبرنامج المصاحب", en: "Community Initiatives & Accompanying Program" },
        desc: {
          ar: "عرض فيلم وثائقي واستعراض المبادرات المجتمعية — د. هالة موسى؛ تسليط الضوء على الأنشطة والأثر المجتمعي للصيدلي.",
          en: "Documentary screening and an overview of community initiatives — Dr. Hala Musa; a spotlight on the pharmacist's community activities and impact.",
        },
      },
      {
        time: "15:30 – 16:30",
        title: { ar: "فقرة التكريم والاحتفاء", en: "Recognition & Appreciation" },
        desc: {
          ar: "تكريم الشخصيات الصيدلانية المتميزة، الداعمين، والشركاء.",
          en: "Honoring distinguished pharmacy figures, supporters, and partners.",
        },
      },
      {
        time: "16:30 – 17:00",
        title: { ar: "الحفل الختامي", en: "Closing Ceremony" },
        desc: {
          ar: "الكلمات الختامية الرسمية؛ التقاط الصورة الجماعية الرسمية وإسدال الستار على الفعالية.",
          en: "Official closing remarks; the official group photo, and the curtain closes on the event.",
        },
      },
    ],
  },
];

function renderProgram() {
  const panel = document.getElementById("program-panel");
  if (!panel) return;
  const lang = appState.lang;

  panel.innerHTML = SCHEDULE_DATA.map(
    (phase, i) => `
    <div class="program-phase">
      <div class="program-phase-head">
        <span class="program-phase-num">${i + 1}</span>
        <span class="program-phase-title">${escapeHtml(phase.title[lang])}</span>
        <span class="program-phase-time">${escapeHtml(phase.time[lang])}</span>
      </div>
      <div class="program-panel">
        ${phase.sessions
          .map(
            (s) => `
          <div class="session-row">
            <span class="session-time">${escapeHtml(s.time)}</span>
            <div>
              <span class="session-title">${escapeHtml(s.title[lang])}</span>
              <span class="session-desc">${escapeHtml(s.desc[lang])}</span>
            </div>
          </div>`
          )
          .join("")}
      </div>
    </div>`
  ).join("");
}

function initScheduleDownload() {
  const btn = document.getElementById("download-schedule");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.print();
  });
}

/* ==========================================================================
   Donors / Supporters
   --------------------------------------------------------------------------
   No hierarchy — every sponsor gets an identical plaque, same size, same
   treatment, listed in a plain grid. Add real entries here as they're
   confirmed (any number, any order — nothing about position implies rank).

   Each entry expects two image files placed next to index.html:
     logo           → sponsor-N-logo.jpg           (background of the plaque)
     representative → sponsor-N-representative.jpg  (cropped photo, foreground)
   Until those files exist:
     - a missing logo falls back to the Ministry emblem (logo.jpeg)
     - a missing representative photo falls back to the sponsor's initial
   So the section never looks broken while photos are still being collected.
   ========================================================================== */
const DONORS_DATA = [
  { name: { ar: "VITA PHARMA", en: "VITA PHARMA" }, representative: { ar: "", en: "" }, logo: "sponsor-1-logo.jpg", photo: "sponsor-1-logo.jpg" },
  { name: { ar: "DAWINA", en: "DAWINA" }, representative: { ar: "", en: "" }, logo: "sponsor-2-logo.jpg", photo: "sponsor-2-logo.jpg" },
  { name: { ar: "ELITE PHARMA Compony", en: "ELITE PHARMA Company" }, representative: { ar: "د.أحمد علي فهمي", en: "Dr.Ahmed Ali Fahmy" }, logo: "sponsor-3-logo.jpg", photo: "sponsor-3-representative.png" },
  { name: { ar: "IBAA", en: "IBAA" }, representative: { ar: "", en: "" }, logo: "sponsor-4-logo.jpg", photo: "sponsor-4-logo.jpg" },
  { name: { ar: "AL-FORQAN", en: "AL-FORQAN" }, representative: { ar: "", en: "" }, logo: "sponsor-5-logo.jpg", photo: "sponsor-5-logo.jpg" },
  { name: { ar: "EL-SHAHBA", en: "EL-SHAHBA" }, representative: { ar: "", en: "" }, logo: "sponsor-6-logo.jpg", photo: "sponsor-6-logo.jpg" },
  { name: { ar: "WAFRAPHARMA", en: "WAFRAPHARMA" }, representative: { ar: "", en: "" }, logo: "sponsor-7-logo.jpg", photo: "sponsor-7-logo.jpg" },
  { name: { ar: "جامعة كرري", en: "University of Karrara" }, representative: { ar: "دليل الجامعات", en: "University Guide" }, logo: "sponsor-8-logo.jpg", photo: "sponsor-8-representative.png" },
  { name: { ar: "من سيكون التالي؟", en: "Who will be next?" }, representative: { ar: "", en: "" }, logo: "next.svg", photo: "next.svg" },
];

function renderDonors() {
  const grid = document.getElementById("donors-grid");
  if (!grid) return;
  const lang = appState.lang;

  grid.innerHTML = DONORS_DATA.map((d) => {
    const name = escapeHtml(d.name[lang]);
    const representative = escapeHtml(d.representative?.[lang] || "");
    const initial = escapeHtml(d.name[lang].trim().charAt(0));
    return `
    <div class="donor-plaque">
      <img
        class="donor-plaque-bg"
        src="${escapeHtml(d.logo)}"
        alt=""
        aria-hidden="true"
        onerror="this.onerror=null; this.src='logo.jpeg';"
      >
      <div class="donor-plaque-body">
        <div class="donor-plaque-photo">
          <img
            src="${escapeHtml(d.photo)}"
            alt="${name}"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >
          <span class="donor-plaque-photo-fallback" style="display:none;" aria-hidden="true">${initial}</span>
        </div>
        <div class="donor-plaque-name">${name}</div>
        ${representative ? `<div class="donor-plaque-representative">${representative}</div>` : ""}
      </div>
    </div>`;
  }).join("");
}

const OTHER_EVENTS_DATA = [
  {
    title: { ar: "احتفالات الولايات السودانية- ولاية الجزيرة", en: "Celebrations in Other Sudanese States - Al-Jazira State" },
    text: { ar: "تابع احتفال ولاية الجزيرة", en: "Al-Jazira State Celebration" },
    url: "https://www.facebook.com/share/p/1DQhQpvdfT/",
  },
  {
    title: { ar: "منظمات واحتفالات دولية", en: "International Organizations and Celebrations" },
    text: { ar: "ابحث عن احتفالات ومنظمات صيدلانية في دول أخرى.", en: "Search for pharmacy celebrations and organizations in other countries." },
    url: "https://www.facebook.com/search/pages?q=World%20Pharmacists%20Day%202026",
  },
];

function renderOtherEvents() {
  const grid = document.getElementById("other-events-grid");
  if (!grid) return;

  const lang = appState.lang;
  grid.innerHTML = OTHER_EVENTS_DATA.map((event) => `
    <article class="other-event-card">
      <span class="other-event-icon" aria-hidden="true">f</span>
      <h3>${escapeHtml(event.title[lang])}</h3>
      <p>${escapeHtml(event.text[lang])}</p>
      <a href="${escapeHtml(event.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("other_event_open_link"))}</a>
    </article>
  `).join("");
}

/* ==========================================================================
   Registration form — writes to the `participants` table in Supabase.
   Table/column names and Supabase client are unchanged from the original.
   ========================================================================== */
function initRegistrationForm() {
  const form = document.getElementById("registration-form");
  if (!form) return;

  updateRegistrationLock();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (new Date() < registrationUnlockDate) {
      showToast({
        title: t("registration_locked_title"),
        message: t("registration_locked_text"),
        variant: "error",
      });
      return;
    }

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
    // Data model matches the `participants` table in Supabase:
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

    submitRegistration(participant, form);
  });
}

function updateRegistrationLock() {
  const form = document.getElementById("registration-form");
  if (!form) return;

  const submitBtn = form.querySelector("[data-registration-submit]");
  const lockNotice = form.closest(".registration").querySelector(".registration-lock-notice");
  const registrationOpen = new Date() >= registrationUnlockDate;

  if (submitBtn) submitBtn.disabled = !registrationOpen;
  if (lockNotice) {
    lockNotice.querySelector("strong").textContent = t(registrationOpen ? "registration_open_title" : "registration_locked_title");
    lockNotice.querySelector("p").textContent = t(registrationOpen ? "registration_open_text" : "registration_locked_text");
    lockNotice.classList.toggle("is-open", registrationOpen);
  }
}

function validateRegistration(values) {
  const errors = {};

  if (!values.full_name) errors.full_name = t("form_full_name_required");
  else if (values.full_name.length > 100) errors.full_name = t("form_full_name_too_long");
  if (!values.profession) errors.profession = t("form_profession_required");

  if (!values.email) {
    errors.email = t("form_email_required");
  } else if (values.email.length > 254) {
    errors.email = t("form_email_too_long");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = t("form_email_invalid");
  }

  if (!values.phone) {
    errors.phone = t("form_phone_required");
  } else if (values.phone.length > 25) {
    errors.phone = t("form_phone_too_long");
  } else if (!/^[0-9+\s()-]{6,}$/.test(values.phone)) {
    errors.phone = t("form_phone_invalid");
  }

  if (values.organization.length > 150) errors.organization = t("form_organization_too_long");
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

async function submitRegistration(participant, form) {
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
   Question / interaction form — writes to the `questions` table in Supabase.
   ========================================================================== */
function initQuestionForm() {
  const form = document.getElementById("question-form");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const question = (formData.get("question") || "").toString().trim();
    const questionName = (formData.get("name") || "").toString().trim();

    if (!question) {
      showToast({
        title: t("question_add_title"),
        message: t("question_add_message"),
        variant: "error",
      });
      return;
    }

    if (question.length > 1000 || questionName.length > 100) {
      showToast({
        title: t("form_check_title"),
        message: question.length > 1000 ? t("question_too_long") : t("question_name_too_long"),
        variant: "error",
      });
      return;
    }

    const isAnonymous = formData.get("anonymous") === "on";
    const questionEntry = {
      name: isAnonymous ? "anonymous" : questionName || null,
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