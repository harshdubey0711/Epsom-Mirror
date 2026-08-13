/** Resolve base path from the layout.js script src (./ or ../) */
export function getBasePath() {
  const script = document.querySelector('script[src*="layout.js"]');
  if (script) {
    const src = script.getAttribute("src") || "";
    if (src.startsWith("../../")) return "../../";
    if (src.startsWith("../")) return "../";
  }
  const path = window.location.pathname;
  // /locations/santacruz/ is two levels deep
  if (/\/locations\/[a-z0-9-]+\/?/i.test(path)) {
    return "../../";
  }
  if (/\/[a-z0-9-]+\/(index\.html)?$/i.test(path)) {
    return "../";
  }
  return "./";
}

export function assetPath(relative) {
  const base = getBasePath();
  if (relative.startsWith("http") || relative.startsWith("/")) return relative;
  return base + relative;
}

export async function fetchJSON(url) {
  const res = await fetch(assetPath(url));
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  return res.json();
}

export function setPageContext(name, type = "page") {
  document.body.dataset.pageContext = name;
  document.body.dataset.pageType = type;
}
