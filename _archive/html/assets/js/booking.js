import { fetchJSON, assetPath } from "./utils.js";

let siteConfig = null;
let modalEl = null;

export async function initBooking() {
  try {
    siteConfig = await fetchJSON("data/site-config.json");
  } catch (e) {
    console.warn("Booking config unavailable", e);
    return;
  }

  modalEl = document.getElementById("booking-modal");
  if (!modalEl) return;

  renderLocationCards();
  bindTriggers();
  bindModalClose();
}

function renderLocationCards() {
  const container = document.getElementById("booking-locations");
  if (!container || !siteConfig) return;

  container.innerHTML = siteConfig.locations
    .map(
      (loc) => `
    <button type="button" class="location-card glass-card-hover p-6 text-left w-full group"
      data-booking-url="${loc.bookingUrl}" data-location-name="${loc.name}">
      <h3 class="text-xl font-semibold text-epsom-ink group-hover:text-epsom-maroon transition-colors">${loc.name}</h3>
      <p class="text-sm text-epsom-muted mt-2 line-clamp-2">${loc.address}</p>
      <span class="inline-block mt-4 text-epsom-maroon text-sm font-medium">Continue to booking →</span>
    </button>
  `
    )
    .join("");

  container.querySelectorAll("[data-booking-url]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.bookingUrl;
      window.open(url, "_blank", "noopener,noreferrer");
      closeModal();
    });
  });
}

function bindTriggers() {
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-book-trigger]");
    if (trigger) {
      e.preventDefault();
      openModal();
    }
  });
}

function bindModalClose() {
  document.querySelectorAll("[data-booking-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });
  modalEl?.addEventListener("click", (e) => {
    if (e.target === modalEl) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

export function openModal() {
  modalEl?.classList.remove("hidden");
  modalEl?.classList.add("flex");
  document.body.style.overflow = "hidden";
}

export function closeModal() {
  modalEl?.classList.add("hidden");
  modalEl?.classList.remove("flex");
  document.body.style.overflow = "";
}
