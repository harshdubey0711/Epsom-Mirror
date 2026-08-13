#!/usr/bin/env node
/**
 * Generate root category hubs, flat treatment stubs (with breadcrumbs),
 * and nested location pages.
 * Usage: node scripts/generate-seo-stubs.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const nav = JSON.parse(fs.readFileSync(path.join(ROOT, "data/seo-nav.json"), "utf8"));
const catBySlug = Object.fromEntries(nav.categories.map((c) => [c.slug, c]));

function treatmentPage({ title, description, categoryName, categoryHref, h1, intro }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Epsom Cryo Spa Mumbai</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="https://www.epsomcryospa.com/${h1.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}/">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Tenor+Sans&display=swap" rel="stylesheet">
  <link href="../assets/css/main.css" rel="stylesheet">
</head>
<body class="salt-texture" data-page-context="${h1}">
  <div id="site-header-slot"></div>
  <main class="pt-8 pb-24 px-4">
    <div class="max-w-3xl mx-auto">
      <nav class="text-sm text-epsom-muted mb-6" aria-label="Breadcrumb">
        <a href="../index.html" class="hover:text-epsom-maroon">Home</a>
        <span class="mx-2">/</span>
        <a href="../${categoryHref}" class="hover:text-epsom-maroon">${categoryName}</a>
        <span class="mx-2">/</span>
        <span class="text-epsom-maroon" aria-current="page">${h1}</span>
      </nav>
      <h1 class="font-display text-4xl md:text-5xl text-epsom-ink">${h1}</h1>
      <p class="text-epsom-muted mt-6 leading-relaxed">${intro}</p>
      <p class="text-epsom-muted text-sm mt-4">Full treatment details coming soon. Book a consultation to learn more about availability at Santacruz, Borivali, and Andheri.</p>
      <div class="flex flex-wrap gap-4 mt-10">
        <button type="button" data-book-trigger class="btn-primary">Book Now</button>
        <a href="../contact.html" class="btn-outline">Contact Us</a>
      </div>
    </div>
  </main>
  <div id="site-footer-slot"></div>
  <div id="booking-modal-slot"></div>
  <script type="module" src="../assets/js/layout.js"></script>
</body>
</html>`;
}

function categoryPage(cat) {
  const links = cat.treatments
    .map(
      (t) =>
        `<li><a href="../${t.slug}/" class="glass-card-hover p-4 block text-epsom-ink font-medium hover:text-epsom-maroon">${t.name}</a></li>`
    )
    .join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cat.name} | Epsom Cryo Spa Mumbai</title>
  <meta name="description" content="${cat.name} treatments at Epsom Cryo Spa — Mumbai's premier cryotherapy and wellness center.">
  <link rel="canonical" href="https://www.epsomcryospa.com/${cat.slug}/">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Tenor+Sans&display=swap" rel="stylesheet">
  <link href="../assets/css/main.css" rel="stylesheet">
</head>
<body class="salt-texture" data-page-context="${cat.name}">
  <div id="site-header-slot"></div>
  <main class="pt-8 pb-24 px-4">
    <div class="max-w-4xl mx-auto">
      <nav class="text-sm text-epsom-muted mb-6" aria-label="Breadcrumb">
        <a href="../index.html" class="hover:text-epsom-maroon">Home</a>
        <span class="mx-2">/</span>
        <span class="text-epsom-maroon" aria-current="page">${cat.name}</span>
      </nav>
      <h1 class="font-display text-4xl md:text-5xl text-epsom-ink">${cat.name}</h1>
      <p class="text-epsom-muted mt-6 leading-relaxed">Explore our ${cat.name.toLowerCase()} treatments at Epsom Cryo Spa. Full category content will be expanded from our SEO content plan. Browse treatments below or book a consultation today.</p>
      <ul class="mt-10 grid sm:grid-cols-2 gap-4 list-none p-0">${links}</ul>
      <button type="button" data-book-trigger class="btn-primary mt-12">Book Consultation</button>
    </div>
  </main>
  <div id="site-footer-slot"></div>
  <div id="booking-modal-slot"></div>
  <script type="module" src="../assets/js/layout.js"></script>
</body>
</html>`;
}

function locationPage(loc) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${loc.name} | Epsom Cryo Spa Mumbai</title>
  <meta name="description" content="Visit Epsom Cryo Spa ${loc.name} — cryotherapy and wellness center in Mumbai.">
  <link rel="canonical" href="https://www.epsomcryospa.com/locations/${loc.slug}/">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Tenor+Sans&display=swap" rel="stylesheet">
  <link href="../../assets/css/main.css" rel="stylesheet">
</head>
<body class="salt-texture" data-page-context="${loc.name}">
  <div id="site-header-slot"></div>
  <main class="pt-8 pb-24 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <nav class="text-sm text-epsom-muted mb-6" aria-label="Breadcrumb">
        <a href="../../index.html" class="hover:text-epsom-maroon">Home</a>
        <span class="mx-2">/</span>
        <span class="text-epsom-muted">Locations</span>
        <span class="mx-2">/</span>
        <span class="text-epsom-maroon" aria-current="page">${loc.name}</span>
      </nav>
      <h1 class="font-display text-4xl text-epsom-ink">${loc.name}</h1>
      <p class="text-epsom-maroon mt-2">${loc.label || ""}</p>
      <p class="text-epsom-muted mt-6 leading-relaxed">${loc.address}</p>
      <div class="flex flex-wrap gap-4 justify-center mt-10">
        <a href="${loc.mapsUrl}" target="_blank" rel="noopener" class="btn-outline">Get Directions</a>
        <button type="button" data-book-trigger class="btn-primary">Book at ${loc.name.split(" ")[0]}</button>
      </div>
      <div class="mt-12 glass-card p-4 aspect-video flex items-center justify-center text-epsom-muted">
        <a href="${loc.mapsUrl}" target="_blank" rel="noopener" class="hover:text-epsom-maroon">Open in Google Maps →</a>
      </div>
      <div class="mt-10 flex flex-wrap justify-center gap-4 text-sm">
        ${(nav.locations || [])
          .filter((l) => l.slug !== loc.slug)
          .map((l) => `<a href="../${l.slug}/" class="text-epsom-maroon hover:underline">${l.name}</a>`)
          .join(" <span class=\"text-epsom-crystal\">|</span> ")}
      </div>
    </div>
  </main>
  <div id="site-footer-slot"></div>
  <div id="booking-modal-slot"></div>
  <script type="module" src="../../assets/js/layout.js"></script>
</body>
</html>`;
}

// Category hubs (hub only)
nav.categories.forEach((cat) => {
  const dir = path.join(ROOT, cat.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), categoryPage(cat));
  console.log("Category:", cat.slug);
});

// Salon hub-style page
const salonDir = path.join(ROOT, "salon");
fs.mkdirSync(salonDir, { recursive: true });
fs.writeFileSync(
  path.join(salonDir, "index.html"),
  categoryPage({
    slug: "salon",
    name: "Salon",
    treatments: [{ slug: "circadia-facials", name: "Circadia® Facials" }],
  }).replace(
    "Explore our salon treatments",
    "Explore our salon and beauty-adjacent treatments"
  )
);
console.log("Category: salon");

// Flat treatments with primaryCategory breadcrumb
const displayName = {};
nav.categories.forEach((cat) => {
  cat.treatments.forEach((t) => {
    if (!displayName[t.slug]) displayName[t.slug] = t.name;
  });
});

const primary = nav.primaryCategory || {};
Object.keys(displayName).forEach((slug) => {
  const primarySlug = primary[slug] || nav.categories.find((c) => c.treatments.some((t) => t.slug === slug))?.slug;
  const cat = catBySlug[primarySlug];
  if (!cat) {
    console.warn("No primary category for", slug);
    return;
  }
  const name = displayName[slug];
  const dir = path.join(ROOT, slug);
  fs.mkdirSync(dir, { recursive: true });
  const html = treatmentPage({
    title: name,
    description: `${name} in Mumbai at Epsom Cryo Spa. Book across Santacruz, Borivali & Andheri.`,
    categoryName: cat.name,
    categoryHref: cat.href,
    h1: name,
    intro: `${name} at Epsom Cryo Spa — part of our ${cat.name} pathway. Science-backed wellness in a calm, premium setting.`,
  }).replace(
    /rel="canonical" href="[^"]+"/,
    `rel="canonical" href="https://www.epsomcryospa.com/${slug}/"`
  );
  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log("Treatment:", slug, "→", primarySlug);
});

// Nested locations
(nav.locations || []).forEach((loc) => {
  const dir = path.join(ROOT, "locations", loc.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), locationPage(loc));
  console.log("Location:", loc.slug);
});

console.log(
  `Done. ${Object.keys(displayName).length} treatments, ${nav.categories.length} categories, ${(nav.locations || []).length} locations.`
);
