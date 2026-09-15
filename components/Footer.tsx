import Image from "next/image";
import Link from "next/link";
import { normalizeHref, seoNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="salt-texture bg-epsom-soft border-t border-epsom-crystal pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/assets/images/logo/logo.png"
                alt="Epsom Cryo Spa"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <h3 className="font-display text-xl text-epsom-ink mb-2">Epsom Wellness</h3>
            <p className="text-epsom-muted text-sm">
              Mumbai&apos;s premier cryotherapy &amp; wellness center for recovery, biohacking, and luxury
              self-care.
            </p>
            <p className="text-epsom-muted text-sm mt-4">
              <a href="tel:+919867670764" className="hover:text-epsom-maroon">
                +91 9867670764
              </a>
              <br />
              <a href="tel:+919867670762" className="hover:text-epsom-maroon">
                +91 9867670762
              </a>
            </p>
            <a href={`mailto:${siteConfig.contact.email}`} className="text-epsom-maroon text-sm hover:underline">
              {siteConfig.contact.email}
            </a>
            <div className="flex gap-3 mt-5">
              {(
                [
                  ["instagram", siteConfig.social.instagram, "fa-instagram"],
                  ["facebook", siteConfig.social.facebook, "fa-facebook-f"],
                  ["linkedin", siteConfig.social.linkedin, "fa-linkedin-in"],
                  ["youtube", siteConfig.social.youtube, "fa-youtube"],
                ] as const
              ).map(([label, href, icon]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-epsom-crystal/50 flex items-center justify-center text-epsom-maroon hover:bg-epsom-deep hover:text-epsom-ink hover:border-epsom-deep transition"
                  aria-label={label}
                >
                  <i className={`fa-brands ${icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-epsom-ink font-semibold mb-4">Our Locations</h4>
            <ul className="space-y-4 text-sm text-epsom-muted">
              {siteConfig.locations.map((loc) => (
                <li key={loc.id}>
                  <span className="text-epsom-ink font-medium">{loc.name}</span>
                  <div className="mt-1 flex flex-wrap gap-3">
                    <Link href={`/locations/${loc.id}/`} className="hover:text-epsom-maroon">
                      Get Directions
                    </Link>
                    <a
                      href={loc.gmbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-epsom-maroon"
                    >
                      View on Google
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-epsom-ink font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-epsom-muted">
              {seoNav.footerServices.map((s) => (
                <li key={s.href}>
                  <Link href={normalizeHref(s.href)} className="hover:text-epsom-maroon">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-epsom-ink font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-epsom-muted">
              {[
                ["Home", "/"],
                ["Services", "/health-optimisation-longevity/"],
                ["About Us", "/about/"],
                ["Franchise", "/franchise/"],
                ["Contact", "/contact/"],
                ["FAQ", "/faq/"],
                ["Refund Policy", "/refund-policy/"],
                ["Blog", "/blog/"],
                ["Memberships", "/memberships/"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-epsom-maroon">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-epsom-crystal mt-12 pt-8 text-center text-epsom-muted text-sm">
          <p>&copy; 2026 Epsom Cryo Spa. All rights reserved.</p>
          <p className="mt-2 text-xs">Cryotherapy in Mumbai | IV Drip Therapy | Wellness Center Mumbai</p>
        </div>
      </div>
    </footer>
  );
}
