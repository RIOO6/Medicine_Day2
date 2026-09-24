const adminState = {
  participants: [],
  channel: null,
  sortKey: "registration_date",
  sortDirection: "desc",
};

const loginView = document.getElementById("login-view");
const dashboardView = document.getElementById("dashboard-view");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const logoutButton = document.getElementById("logout-button");
const statusMessage = document.getElementById("status-message");
const searchInput = document.getElementById("search-input");
const participantsBody = document.getElementById("participants-body");
const participantCount = document.getElementById("participant-count");
const emptyMessage = document.getElementById("empty-message");
const analysisTotal = document.getElementById("analysis-total");
const analysisPhysical = document.getElementById("analysis-physical");
const analysisOnline = document.getElementById("analysis-online");
const analysisProfession = document.getElementById("analysis-profession");

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value == null ? "" : String(value);
  return div.innerHTML;
}

function formatDate(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function hasExpired(value) {
  if (!value) return false;
  const expiry = /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? new Date(`${value}T23:59:59.999Z`)
    : new Date(value);
  return Number.isNaN(expiry.getTime()) || expiry <= new Date();
}

function compareParticipants(first, second) {
  const firstValue = first[adminState.sortKey] || "";
  const secondValue = second[adminState.sortKey] || "";
  const firstComparable = adminState.sortKey === "registration_date"
    ? new Date(firstValue).getTime()
    : String(firstValue).toLocaleLowerCase();
  const secondComparable = adminState.sortKey === "registration_date"
    ? new Date(secondValue).getTime()
    : String(secondValue).toLocaleLowerCase();

  if (firstComparable < secondComparable) return adminState.sortDirection === "asc" ? -1 : 1;
  if (firstComparable > secondComparable) return adminState.sortDirection === "asc" ? 1 : -1;
  return 0;
}

function renderAnalysis() {
  const professionCounts = {};
  adminState.participants.forEach((participant) => {
    const profession = participant.profession || "Unknown";
    professionCounts[profession] = (professionCounts[profession] || 0) + 1;
  });
  const topProfession = Object.entries(professionCounts).sort((first, second) => second[1] - first[1])[0];

  analysisTotal.textContent = adminState.participants.length;
  analysisPhysical.textContent = adminState.participants.filter((participant) => participant.attendance_type === "Physical").length;
  analysisOnline.textContent = adminState.participants.filter((participant) => participant.attendance_type === "Online").length;
  analysisProfession.textContent = topProfession ? `${topProfession[0]} (${topProfession[1]})` : "-";
}

function renderParticipants() {
  const query = searchInput.value.trim().toLowerCase();
  const rows = adminState.participants.filter((participant) =>
    [
      participant.full_name,
      participant.profession,
      participant.email,
      participant.phone,
      participant.organization,
      participant.attendance_type,
    ].some((value) => String(value || "").toLowerCase().includes(query))
  ).sort(compareParticipants);

  participantsBody.innerHTML = rows.map((participant) => `
    <tr>
      <td>${escapeHtml(participant.full_name)}</td>
      <td>${escapeHtml(participant.profession)}</td>
      <td>${escapeHtml(participant.email)}</td>
      <td>${escapeHtml(participant.phone)}</td>
      <td>${escapeHtml(participant.organization || "-")}</td>
      <td>${escapeHtml(participant.attendance_type)}</td>
      <td>${escapeHtml(formatDate(participant.registration_date))}</td>
    </tr>
  `).join("");

  participantCount.textContent = `${adminState.participants.length} registration${adminState.participants.length === 1 ? "" : "s"}`;
  emptyMessage.hidden = rows.length !== 0;
  renderAnalysis();
}

async function loadParticipants() {
  const { data, error } = await supabaseClient
    .from("participants")
    .select("id, full_name, profession, email, phone, organization, attendance_type, registration_date")
    .order("registration_date", { ascending: false });

  if (error) throw error;
  adminState.participants = data || [];
  renderParticipants();
}

function subscribeToParticipants() {
  adminState.channel = supabaseClient
    .channel("admin-participants-live")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "participants" },
      (payload) => {
        adminState.participants.unshift(payload.new);
        renderParticipants();
        statusMessage.textContent = "New registration received just now.";
      }
    )
    .subscribe((status) => {
      if (status === "SUBSCRIBED") statusMessage.textContent = "Live updates connected.";
      if (status === "CHANNEL_ERROR") statusMessage.textContent = "Live updates unavailable. Refresh to check again.";
    });
}

async function showDashboard() {
  loginView.hidden = true;
  dashboardView.hidden = false;
  try {
    await loadParticipants();
    subscribeToParticipants();
  } catch (error) {
    statusMessage.textContent = "Access expired or registration data is unavailable.";
    console.error("Admin data error:", error);
  }
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginError.textContent = "";
  const formData = new FormData(loginForm);

  const username = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const { data: admin, error } = await supabaseClient
    .from("admin_credentials")
    .select("username, password, display_name, enabled_until")
    .eq("username", username)
    .maybeSingle();

  if (error) {
    console.error("Admin login query error:", error);
    loginError.textContent = "Unable to verify the account. Check the Supabase access policy.";
    return;
  }

  if (!admin || admin.password !== password) {
    loginError.textContent = "The username or password is incorrect.";
    return;
  }

  if (hasExpired(admin.enabled_until)) {
    loginError.textContent = "This administrator account is no longer active.";
    return;
  }

  sessionStorage.setItem("admin_logged_in", "true");
  await showDashboard();
});

logoutButton.addEventListener("click", async () => {
  if (adminState.channel) await supabaseClient.removeChannel(adminState.channel);
  sessionStorage.removeItem("admin_logged_in");
  adminState.participants = [];
  dashboardView.hidden = true;
  loginView.hidden = false;
  loginForm.reset();
});

searchInput.addEventListener("input", renderParticipants);

document.querySelectorAll("[data-sort]").forEach((button) => {
  button.addEventListener("click", () => {
    const sortKey = button.dataset.sort;
    if (adminState.sortKey === sortKey) {
      adminState.sortDirection = adminState.sortDirection === "asc" ? "desc" : "asc";
    } else {
      adminState.sortKey = sortKey;
      adminState.sortDirection = sortKey === "registration_date" ? "desc" : "asc";
    }
    document.querySelectorAll("[data-sort] span").forEach((indicator) => {
      indicator.textContent = "↕";
    });
    button.querySelector("span").textContent = adminState.sortDirection === "asc" ? "↑" : "↓";
    renderParticipants();
  });
});

if (sessionStorage.getItem("admin_logged_in") === "true") showDashboard();
