"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

type Props = {
  treatments: any[];
  label?: string;
  slow?: boolean;
  viewAllHref?: string;
};

const COPIES = 3;

function getTitle(t: any): string {
  return t?.title ?? t?.name ?? t?.label ?? "";
}

function getDescription(t: any): string {
  return t?.description ?? t?.desc ?? t?.shortDescription ?? t?.excerpt ?? "";
}

function getImage(t: any): string {
  const img = t?.image ?? t?.img ?? t?.imageSrc ?? t?.thumbnail ?? t?.src ?? "";
  return typeof img === "string" ? img : img?.src ?? "";
}

function getHref(t: any): string {
  if (typeof t?.href === "string" && t.href) return t.href;
  if (typeof t?.url === "string" && t.url) return t.url;
  if (typeof t?.link === "string" && t.link) return t.link;
  if (typeof t?.path === "string" && t.path) return t.path;
  if (typeof t?.slug === "string" && t.slug) {
    return `/${t.slug.replace(/^\/|\/$/g, "")}/`;
  }
  return "#";
}

export function TreatmentMarquee({
  treatments,
  label,
  slow,
  viewAllHref,
}: Props) {
  const shellRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const pending = useRef(0);

  const speed = slow ? 25 : 45;

  useEffect(() => {
    // Shows the real field names of your data in the browser console
    if (treatments?.[0]) {
      console.log("Treatment fields:", Object.keys(treatments[0]), treatments[0]);
    }
  }, [treatments]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const track = trackRef.current;
      const shell = shellRef.current;
      const setWidth = track ? track.scrollWidth / COPIES : 0;

      if (track && shell && setWidth > 0) {
        const hovering = shell.matches(":hover");

        if (!hovering && !reduceMotion) {
          offset.current += speed * dt;
        }

        if (Math.abs(pending.current) > 0.5) {
          const step = pending.current * 0.15;
          offset.current += step;
          pending.current -= step;
        } else {
          pending.current = 0;
        }

        if (offset.current >= setWidth) offset.current -= setWidth;
        if (offset.current < 0) offset.current += setWidth;

        track.style.transform = `translate3d(${-offset.current}px,0,0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const slide = (direction: 1 | -1) => {
    pending.current += direction * 320;
  };

  const items = Array.isArray(treatments) ? treatments : [];

  const renderSet = (copy: number) => [
    ...items.map((t, i) => (
      <div
        key={`${copy}-${i}`}
        className="treatment-marquee-slide"
        aria-hidden={copy > 0}
      >
        <Link
          href={getHref(t)}
          className="treatment-card"
          tabIndex={copy > 0 ? -1 : 0}
        >
          <div className="treatment-card-media">
            <img src={getImage(t)} alt={getTitle(t)} loading="lazy" />
          </div>
          <div className="treatment-card-body">
            <h3 className="font-display text-lg text-epsom-ink">
              {getTitle(t)}
            </h3>
            <p className="text-sm text-epsom-muted mt-1">{getDescription(t)}</p>
            <span className="treatment-card-rule" />
          </div>
        </Link>
      </div>
    )),
    viewAllHref ? (
      <div
        key={`${copy}-cta`}
        className="treatment-marquee-slide"
        aria-hidden={copy > 0}
      >
        <Link
          href={viewAllHref}
          className="treatment-card-cta"
          tabIndex={copy > 0 ? -1 : 0}
        >
          View All Treatments →
        </Link>
      </div>
    ) : null,
  ];

  return (
    <div ref={shellRef} className="marquee-shell" aria-label={label}>
      <div className="treatment-marquee">
        <div ref={trackRef} className="treatment-marquee-track">
          {Array.from({ length: COPIES }, (_, c) => renderSet(c))}
        </div>
      </div>

      <div className="marquee-nav">
        <button
          type="button"
          className="marquee-btn"
          aria-label="Previous"
          onClick={() => slide(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="marquee-btn"
          aria-label="Next"
          onClick={() => slide(1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default TreatmentMarquee;