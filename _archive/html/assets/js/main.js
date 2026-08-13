import { initBooking } from "./booking.js";
import { fetchJSON, assetPath, getBasePath, setPageContext } from "./utils.js";

async function boot() {
  await initNav();
  initAOS();
  await initBooking();
  initStickyCTA();
  initContactForm();
  initFaq();
  initRevealLtr();
  initMarqueeNav();
}

// layout.js imports this after partials inject — run immediately
boot();

export function remountChrome() {
  initNav();
}

function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }
}

function setPanelOpen(panel, btn, open) {
  if (!panel) return;
  panel.classList.toggle("hidden", !open);
  if ("hidden" in panel) panel.hidden = !open;
  btn?.setAttribute("aria-expanded", open ? "true" : "false");
}

async function hydrateNavHrefs() {
  const base = getBasePath();
  // Rewrite any leftover {{BASE}} and normalize root-relative treatment links
  document.querySelectorAll("a[href*='{{BASE}}']").forEach((a) => {
    a.setAttribute("href", a.getAttribute("href").replace(/\{\{BASE\}\}/g, base));
  });

  try {
    const nav = await fetchJSON("data/seo-nav.json");
    const locationsMenu = document.getElementById("locations-nav-menu");
    const mobileLocations = document.getElementById("mobile-locations-panel");
    if (nav.locations?.length && locationsMenu) {
      locationsMenu.innerHTML = nav.locations
        .map(
          (loc) =>
            `<a href="${base}locations/${loc.slug}/" role="menuitem">${loc.name}</a>`
        )
        .join("");
    }
    if (nav.locations?.length && mobileLocations) {
      mobileLocations.innerHTML = nav.locations
        .map(
          (loc) =>
            `<a href="${base}locations/${loc.slug}/" class="block text-black hover:text-epsom-deep py-1">${loc.name}</a>`
        )
        .join("");
    }

    const grid = document.getElementById("services-mega-grid");
    if (nav.categories?.length && grid) {
      grid.innerHTML = nav.categories
        .map((cat) => {
          const items = (cat.treatments || [])
            .map(
              (t) =>
                `<li><a href="${base}${t.slug}/">${t.name}</a></li>`
            )
            .join("");
          return `<div>
            <a href="${base}${cat.href}" class="font-semibold text-black text-sm hover:text-epsom-deep">${cat.name}</a>
            <ul class="mt-3 space-y-2 text-xs text-neutral-600">
              ${items}
              <li><a href="${base}${cat.href}" class="text-epsom-deep font-medium">View all →</a></li>
            </ul>
          </div>`;
        })
        .join("");
    }
  } catch {
    // Static markup in partials/header.html remains as fallback
  }
}

async function initNav() {
  await hydrateNavHrefs();

  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-menu");
  const close = document.getElementById("nav-close");
  const header = document.getElementById("site-header");

  const setMenuOpen = (open) => {
    if (!menu) return;
    menu.classList.toggle("translate-x-full", !open);
    menu.classList.toggle("translate-x-0", open);
    toggle?.setAttribute("aria-expanded", open ? "true" : "false");
    const icon = toggle?.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars", !open);
      icon.classList.toggle("fa-xmark", open);
    }
  };

  toggle && (toggle.onclick = () => {
    const open = menu?.classList.contains("translate-x-full");
    setMenuOpen(!!open);
  });
  close && (close.onclick = () => setMenuOpen(false));

  const mega = document.getElementById("services-mega-menu");
  const megaBtn = document.getElementById("services-mega-btn");
  const locationsBtn = document.getElementById("locations-nav-btn");
  const locationsMenu = document.getElementById("locations-nav-menu");
  const locationsWrap = document.getElementById("locations-nav-wrap");

  const closeLocations = () => setPanelOpen(locationsMenu, locationsBtn, false);
  const closeMega = () => setPanelOpen(mega, megaBtn, false);
  const openMega = () => {
    closeLocations();
    setPanelOpen(mega, megaBtn, true);
  };
  const openLocations = () => {
    closeMega();
    setPanelOpen(locationsMenu, locationsBtn, true);
  };

  megaBtn &&
    (megaBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const willOpen = mega?.classList.contains("hidden") || mega?.hidden;
      if (willOpen) openMega();
      else closeMega();
    });

  locationsBtn &&
    (locationsBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const willOpen =
        locationsMenu?.classList.contains("hidden") || locationsMenu?.hidden;
      if (willOpen) openLocations();
      else closeLocations();
    });

  // Desktop hover support
  const hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");
  if (hoverMq.matches && megaBtn && mega) {
    let megaTimer;
    const enterMega = () => {
      clearTimeout(megaTimer);
      openMega();
    };
    const leaveMega = () => {
      megaTimer = setTimeout(closeMega, 160);
    };
    megaBtn.onmouseenter = enterMega;
    megaBtn.onmouseleave = leaveMega;
    mega.onmouseenter = enterMega;
    mega.onmouseleave = leaveMega;
  }
  if (hoverMq.matches && locationsWrap) {
    let locTimer;
    locationsWrap.onmouseenter = () => {
      clearTimeout(locTimer);
      openLocations();
    };
    locationsWrap.onmouseleave = () => {
      locTimer = setTimeout(closeLocations, 160);
    };
  }

  document.onclick = (e) => {
    const t = e.target;
    if (!(t instanceof Node)) return;
    const inMega =
      mega?.contains(t) || megaBtn?.contains(t);
    const inLoc = locationsWrap?.contains(t);
    if (!inMega) closeMega();
    if (!inLoc) closeLocations();
  };

  document.onkeydown = (e) => {
    if (e.key === "Escape") {
      closeMega();
      closeLocations();
      setMenuOpen(false);
    }
  };

  const mobileServicesToggle = document.getElementById("mobile-services-toggle");
  const mobileServicesPanel = document.getElementById("mobile-services-panel");
  const mobileLocationsToggle = document.getElementById("mobile-locations-toggle");
  const mobileLocationsPanel = document.getElementById("mobile-locations-panel");

  mobileServicesToggle &&
    (mobileServicesToggle.onclick = () => {
      const open = mobileServicesPanel?.classList.contains("hidden");
      setPanelOpen(mobileServicesPanel, mobileServicesToggle, !!open);
    });
  mobileLocationsToggle &&
    (mobileLocationsToggle.onclick = () => {
      const open = mobileLocationsPanel?.classList.contains("hidden");
      setPanelOpen(mobileLocationsPanel, mobileLocationsToggle, !!open);
    });

  window.onscroll = () => {
    if (window.scrollY > 40) header?.classList.add("shadow-soft");
    else header?.classList.remove("shadow-soft");
    closeMega();
    closeLocations();
  };
}

function initFaq() {
  document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => btn.closest(".faq-item")?.classList.toggle("open"));
  });

  // Homepage/faq.html run a dedicated inline pager; skip if already ready.
  const pager = document.getElementById("faq-pagination");
  if (pager?.dataset.ready === "1") return;
}

function initRevealLtr() {
  const items = document.querySelectorAll(".reveal-ltr");
  if (!items.length) return;
  const show = (el) => el.classList.add("is-visible");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach(show);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
  );
  items.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) show(el);
    else io.observe(el);
  });
}

function initMarqueeNav() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".marquee-shell").forEach((shell) => {
    const scroller = shell.querySelector(".treatment-marquee");
    const track = shell.querySelector(".treatment-marquee-track");
    const prev = shell.querySelector("[data-marquee-prev]");
    const next = shell.querySelector("[data-marquee-next]");
    if (!scroller || !track || !prev || !next) return;

    // Duplicate cards once so CSS translateX(-50%) loops seamlessly
    if (!track.dataset.looped) {
      const originals = Array.from(track.children).filter((el) =>
        el.classList?.contains("treatment-card")
      );
      originals.forEach((node) => {
        const clone = node.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.setAttribute("tabindex", "-1");
        track.appendChild(clone);
      });
      track.dataset.looped = "1";
    }

    const stepPx = () => {
      const card = track.querySelector(".treatment-card");
      if (!card) return 308;
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "20") || 20;
      return Math.round(card.getBoundingClientRect().width + gap);
    };

    // Arrows: reverse/forward CSS animation (keeps auto-scroll working on all sections)
    const setDirection = (reverse) => {
      scroller.classList.remove("is-manual");
      track.classList.toggle("is-reverse", reverse);
      scroller.classList.remove("is-paused");
    };

    prev.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (reduceMotion) {
        scroller.classList.add("is-manual");
        scroller.scrollBy({ left: -stepPx(), behavior: "smooth" });
        return;
      }
      setDirection(true);
    };
    next.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (reduceMotion) {
        scroller.classList.add("is-manual");
        scroller.scrollBy({ left: stepPx(), behavior: "smooth" });
        return;
      }
      setDirection(false);
    };
  });
}

async function initStickyCTA() {
  let config;
  try {
    config = await fetchJSON("data/site-config.json");
  } catch {
    return;
  }

  const waBtn = document.getElementById("sticky-whatsapp");
  if (waBtn && config.whatsapp) {
    const ctx = document.body.dataset.pageContext || "";
    let msg = config.whatsapp.defaultMessage;
    if (ctx) msg += ` Interested in: ${ctx}`;
    const url = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(msg)}`;
    waBtn.href = url;
    waBtn.target = "_blank";
    waBtn.rel = "noopener noreferrer";
  }
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = document.getElementById("form-status");
    const formData = new FormData(form);

    try {
      const res = await fetch(assetPath("contact.php"), {
        method: "POST",
        body: formData,
      });
      if (res.ok || res.redirected) {
        window.location.href = assetPath("thankyou.html");
      } else {
        throw new Error("Submit failed");
      }
    } catch {
      if (status) {
        status.textContent = "Unable to send. Please call or WhatsApp us directly.";
        status.classList.remove("hidden");
      }
    }
  });
}

export { setPageContext };
