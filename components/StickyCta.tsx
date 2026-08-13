"use client";

import { siteConfig } from "@/lib/site";

export function StickyCta({ pageContext }: { pageContext?: string }) {
  let msg = siteConfig.whatsapp.defaultMessage;
  if (pageContext) msg += ` Interested in: ${pageContext}`;
  const waUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(msg)}`;
  const phone = siteConfig.contact.phones[1] || siteConfig.contact.phones[0];

  return (
    <div className="sticky-cta" aria-label="Quick actions">
      <button type="button" data-book-trigger className="sticky-cta-btn sticky-cta-book" aria-label="Book consultation">
        <i className="fa-solid fa-calendar-check" aria-hidden="true" />
        <span className="sticky-cta-label">Book</span>
      </button>
      <a href={`tel:+${phone.replace(/\D/g, "")}`} className="sticky-cta-btn sticky-cta-call" aria-label="Call us">
        <i className="fa-solid fa-phone" aria-hidden="true" />
        <span className="sticky-cta-label">Call</span>
      </a>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-cta-btn sticky-cta-wa"
        aria-label="WhatsApp us"
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
        <span className="sticky-cta-label">WhatsApp</span>
      </a>
    </div>
  );
}
