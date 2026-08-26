/* ============================================================
   Mallorcan Bricks — site behaviour
   ============================================================ */

/* ------------------------------------------------------------
   1. YOUR DETAILS — edit these three lines and the whole site
      updates (contact list, WhatsApp link, enquiry form).
   ------------------------------------------------------------ */
const SITE = {
  email:         "hola@mallorcanbricks.com",
  phoneDisplay:  "+34 600 000 000",
  phoneWhatsApp: "34600000000"   // country code + number, digits only, no + or spaces
};

/* ------------------------------------------------------------
   2. Contact details
   ------------------------------------------------------------ */
(function applyContactDetails() {
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a => {
    a.href = "https://wa.me/" + SITE.phoneWhatsApp;
    a.textContent = SITE.phoneDisplay;
    a.rel = "noopener";
    a.target = "_blank";
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
    a.href = "mailto:" + SITE.email;
    a.textContent = SITE.email;
  });
})();

/* ------------------------------------------------------------
   3. Language
   ------------------------------------------------------------ */
const LANGS = ["en", "es", "ca"];

function pickInitialLang() {
  const saved = localStorage.getItem("mb-lang");
  if (LANGS.includes(saved)) return saved;
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  return LANGS.includes(browser) ? browser : "en";
}

let currentLang = pickInitialLang();

function t(key) {
  const dict = window.I18N[currentLang] || window.I18N.en;
  return dict[key] ?? window.I18N.en[key] ?? key;
}

function setLang(lang) {
  if (!LANGS.includes(lang)) lang = "en";
  currentLang = lang;
  localStorage.setItem("mb-lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  document.title = t("doc.title");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = t("doc.desc");

  document.querySelectorAll(".lang button").forEach(b => {
    const on = b.dataset.lang === lang;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", String(on));
  });

  // Contact details are not translated — put them back.
  applyContactDetailsAgain();
}

function applyContactDetailsAgain() {
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a => {
    a.textContent = SITE.phoneDisplay;
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
    a.textContent = SITE.email;
  });
}

document.querySelectorAll(".lang button").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

/* ------------------------------------------------------------
   4. Mobile menu
   ------------------------------------------------------------ */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

if (burger && navLinks) {
  burger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
}

/* ------------------------------------------------------------
   5. Enquiry form -> opens the visitor's email app
      (No server needed. See README for a real form service.)
   ------------------------------------------------------------ */
const form = document.getElementById("quoteForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const contact = (data.get("contact") || "").toString().trim();
    const qty = (data.get("qty") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    if (!name || !contact) {
      alert(t("f.required"));
      return;
    }

    const body = [
      t("f.name") + ": " + name,
      t("f.email") + ": " + contact,
      t("f.qty") + " " + (qty || "-"),
      "",
      t("f.msg") + ":",
      message || "-"
    ].join("\n");

    window.location.href =
      "mailto:" + SITE.email +
      "?subject=" + encodeURIComponent(t("mail.subject")) +
      "&body=" + encodeURIComponent(body);
  });
}

/* ------------------------------------------------------------
   6. Small things
   ------------------------------------------------------------ */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

setLang(currentLang);
