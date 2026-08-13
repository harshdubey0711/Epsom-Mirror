/** Inject shared partials with correct base path */
const FA_CDN =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";

function ensureFontAwesome() {
  if (document.getElementById("fa-cdn")) return;
  const link = document.createElement("link");
  link.id = "fa-cdn";
  link.rel = "stylesheet";
  link.href = FA_CDN;
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
}

function resolveBase() {
  const script = document.querySelector('script[src*="layout.js"]');
  if (script) {
    const src = script.getAttribute("src") || "";
    if (src.startsWith("../../")) return "../../";
    if (src.startsWith("../")) return "../";
  }
  const path = window.location.pathname;
  if (/\/locations\/[a-z0-9-]+\/?/i.test(path)) return "../../";
  if (/\/[a-z0-9-]+\/(index\.html)?$/i.test(path)) return "../";
  return "./";
}

async function loadPartials() {
  ensureFontAwesome();
  const depth = resolveBase();

  const slots = [
    { id: "site-header-slot", file: "partials/header.html" },
    { id: "site-footer-slot", file: "partials/footer.html" },
    { id: "booking-modal-slot", file: "partials/booking-modal.html" },
  ];

  await Promise.all(
    slots.map(async ({ id, file }) => {
      const el = document.getElementById(id);
      if (!el) return;
      try {
        const res = await fetch(depth + file);
        if (!res.ok) return;
        let html = await res.text();
        html = html.replace(/\{\{BASE\}\}/g, depth);
        el.innerHTML = html;
      } catch (e) {
        console.warn("Partial load failed:", file, e);
      }
    })
  );
}

loadPartials().then(() => {
  import("./main.js");
});
