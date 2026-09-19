/* ==========================================================================
   Pharmacists' Day 2026 — Digital Event Portal (Prototype)
   script.js
   ==========================================================================
   Everything here is written to be easy to swap for real backend calls
   later. Search for "SUPABASE" comments to find the exact spots to wire up.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initSmoothNavClose();
  initProgramTabs();
  initRegistrationForm();
  initQuestionForm();
  initJoinOnlineButton();
});

/* ==========================================================================
   Toast notifications
   ========================================================================== */
function showToast({ title, message, variant = "success", duration = 5000 }) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast" + (variant === "error" ? " toast-error" : "");
  toast.setAttribute("role", "status");

  toast.innerHTML = `
    <div class="toast-body">
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(message)}</p>
    </div>
    <button class="toast-close" aria-label="Dismiss notification">&times;</button>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => toast.remove());
  container.appendChild(toast);

  setTimeout(() => {
    if (toast.isConnected) toast.remove();
  }, duration);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

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

/* ==========================================================================
   Program schedule
   ========================================================================== */
const PROGRAM_DATA = {
  1: {
    label: "24 September — Event Day",
    sessions: [
      { time: "09:00", title: "Registration & Welcome", tag: "Preliminary" },
      { time: "09:30", title: "Keynote Session", tag: "Preliminary — speaker to be confirmed" },
      { time: "11:00", title: "Professional Panel", tag: "Preliminary — panelists to be confirmed" },
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
          <span class="session-title">${escapeHtml(s.title)}</span>
          <span class="session-tag">${escapeHtml(s.tag)}</span>
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
   "Join Online" quick action — no fake meeting link
   ========================================================================== */
function initJoinOnlineButton() {
  const btn = document.getElementById("join-online-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    showToast({
      title: "Online link not yet published",
      message: "The official online meeting link will be published by the organizing team closer to the event.",
      variant: "success",
    });
  });
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
        title: "Check the form",
        message: "Some required fields need your attention before submitting.",
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

  if (!values.full_name) errors.full_name = "Please enter your full name.";
  if (!values.profession) errors.profession = "Please select your profession.";

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[0-9+\s()-]{6,}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.attendance_type) errors.attendance_type = "Please choose how you will attend.";
  if (!values.consent) errors.consent = "Consent is required to register.";

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
      title: "Registration successful",
      message: `Participant ID: ${participantCode}. A confirmation has been recorded.`,
      variant: "success",
      duration: 7000,
    });

    form.reset();
    clearFieldErrors(form);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Registration failed:", err);
    showToast({
      title: "Couldn't submit registration",
      message: "Please check your connection, or verify supabase-config.js has been set up with your project credentials.",
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
        title: "Add your question",
        message: "Please write a question before submitting.",
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
        title: "Question submitted",
        message: "Your question has been sent to the moderation queue.",
        variant: "success",
      });
      form.reset();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Question submission failed:", err);
      showToast({
        title: "Couldn't submit question",
        message: "Please check your connection, or verify supabase-config.js has been set up with your project credentials.",
        variant: "error",
      });
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}
