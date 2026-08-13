"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { seoNav } from "@/lib/site";

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileLocs, setMobileLocs] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setMegaOpen(false);
      setLocOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="border-b border-black/10 bg-white">
      <div className="bg-epsom-teal text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+919867670764" className="hover:text-white/80 transition inline-flex items-center gap-2">
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span>+91 98676 70764</span>
            </a>
            <a
              href="tel:+919867670762"
              className="hover:text-white/80 transition hidden sm:inline-flex items-center gap-2"
            >
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span>+91 98676 70762</span>
            </a>
            <a
              href="mailto:info@epsomcryospa.com"
              className="hover:text-white/80 transition hidden md:inline-flex items-center gap-2"
            >
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              <span>info@epsomcryospa.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919867670762"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition inline-flex items-center gap-2"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-base" aria-hidden="true" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              type="button"
              data-book-trigger
              className="bg-epsom-maroon text-white px-3 py-1 rounded-full font-semibold hover:bg-white hover:text-epsom-teal transition inline-flex items-center gap-2"
            >
              <i className="fa-solid fa-calendar-check" aria-hidden="true" />
              <span>Book Online</span>
            </button>
          </div>
        </div>
      </div>

      <header
        id="site-header"
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-black/10 transition-shadow duration-300 overflow-visible ${
          scrolled ? "shadow-soft" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/images/logo/logo.png"
                alt="Epsom Cryo Spa"
                width={160}
                height={48}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-6 overflow-visible" aria-label="Primary">
              <Link href="/" className="nav-link-accent">
                Home
              </Link>

              <div className="relative">
                <button
                  type="button"
                  className="nav-link-accent flex items-center gap-1"
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  onClick={() => {
                    setMegaOpen((v) => !v);
                    setLocOpen(false);
                  }}
                  onMouseEnter={() => {
                    setMegaOpen(true);
                    setLocOpen(false);
                  }}
                >
                  Services
                  <i className="fa-solid fa-chevron-down text-[10px]" aria-hidden="true" />
                </button>
              </div>

              <div className="relative">
                <button
                  type="button"
                  className="nav-link-accent flex items-center gap-1"
                  aria-expanded={locOpen}
                  aria-haspopup="true"
                  onClick={() => {
                    setLocOpen((v) => !v);
                    setMegaOpen(false);
                  }}
                >
                  Locations
                  <i className="fa-solid fa-chevron-down text-[10px]" aria-hidden="true" />
                </button>
                {locOpen ? (
                  <div className="nav-dropdown" role="menu">
                    {seoNav.locations.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}/`}
                        role="menuitem"
                        onClick={() => setLocOpen(false)}
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              <Link href="/about/" className="nav-link-accent">
                About Us
              </Link>
              <Link href="/blog/" className="nav-link-accent">
                Blog
              </Link>
              <Link href="/franchise/" className="nav-link-accent">
                Franchise
              </Link>
              <Link href="/contact/" className="nav-link-accent">
                Contact
              </Link>
              <button type="button" data-book-trigger className="btn-primary text-xs py-2 px-5">
                Book Now
              </button>
            </nav>

            <button
              type="button"
              className="lg:hidden text-black p-2 text-xl"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <i className="fa-solid fa-bars" aria-hidden="true" />
            </button>
          </div>
        </div>

        {megaOpen ? (
          <div
            className="mega-menu"
            role="menu"
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="mega-menu-inner">
              {seoNav.categories.map((cat) => (
                <div key={cat.slug}>
                  <Link
                    href={`/${cat.slug}/`}
                    className="font-semibold text-black text-sm hover:text-epsom-deep"
                    onClick={() => setMegaOpen(false)}
                  >
                    {cat.name}
                  </Link>
                  <ul className="mt-3 space-y-2 text-xs text-neutral-600">
                    {cat.treatments.map((t) => (
                      <li key={`${cat.slug}-${t.slug}`}>
                        <Link href={`/${t.slug}/`} onClick={() => setMegaOpen(false)}>
                          {t.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href={`/${cat.slug}/`}
                        className="text-epsom-deep font-medium"
                        onClick={() => setMegaOpen(false)}
                      >
                        View all →
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-full bg-white z-[60] transform transition-transform lg:hidden shadow-soft-lg border-l border-black/10 overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-black/10">
          <span className="font-display text-black">Menu</span>
          <button
            type="button"
            className="text-black text-xl p-2"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        </div>
        <nav className="p-6 flex flex-col gap-1 text-sm" aria-label="Mobile">
          <Link href="/" className="text-black hover:text-epsom-deep py-2" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          <button
            type="button"
            className="flex items-center justify-between text-black font-medium py-2 mt-2"
            aria-expanded={mobileServices}
            onClick={() => setMobileServices((v) => !v)}
          >
            <span>Services</span>
            <i className="fa-solid fa-chevron-down text-[10px]" aria-hidden="true" />
          </button>
          {mobileServices ? (
            <div className="pl-2 pb-2 space-y-4 border-l border-black/10 ml-1">
              {seoNav.categories.map((cat) => (
                <div key={cat.slug}>
                  <Link
                    href={`/${cat.slug}/`}
                    className="font-semibold text-black hover:text-epsom-deep"
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat.name}
                  </Link>
                  <ul className="mt-2 space-y-1.5 text-xs text-neutral-600">
                    {cat.treatments.slice(0, 5).map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/${t.slug}/`}
                          className="hover:text-black"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href={`/${cat.slug}/`}
                        className="text-epsom-deep font-medium"
                        onClick={() => setMobileOpen(false)}
                      >
                        View all →
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ) : null}

          <button
            type="button"
            className="flex items-center justify-between text-black font-medium py-2"
            aria-expanded={mobileLocs}
            onClick={() => setMobileLocs((v) => !v)}
          >
            <span>Locations</span>
            <i className="fa-solid fa-chevron-down text-[10px]" aria-hidden="true" />
          </button>
          {mobileLocs ? (
            <div className="pl-2 pb-2 space-y-1.5 border-l border-black/10 ml-1">
              {seoNav.locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}/`}
                  className="block text-black hover:text-epsom-deep py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          ) : null}

          <Link href="/about/" className="text-black hover:text-epsom-deep py-2" onClick={() => setMobileOpen(false)}>
            About Us
          </Link>
          <Link href="/blog/" className="text-black hover:text-epsom-deep py-2" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
          <Link
            href="/franchise/"
            className="text-black hover:text-epsom-deep py-2"
            onClick={() => setMobileOpen(false)}
          >
            Franchise
          </Link>
          <Link
            href="/contact/"
            className="text-black hover:text-epsom-deep py-2"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <button type="button" data-book-trigger className="btn-primary mt-4 w-full">
            Book Now
          </button>
        </nav>
      </div>
      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 bg-black/40 z-[55] lg:hidden"
          aria-label="Close menu overlay"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}
    </div>
  );
}
