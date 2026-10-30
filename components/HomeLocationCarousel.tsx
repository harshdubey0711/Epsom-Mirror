
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { homeLocations } from "@/content/home";

export function HomeLocationCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const locations = homeLocations;
  const activeLocation = locations[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      if (!locations.length) return;

      setActiveIndex((index + locations.length) % locations.length);
    },
    [locations.length]
  );

  useEffect(() => {
    if (paused || locations.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % locations.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [paused, locations.length]);

  if (!activeLocation || !locations.length) return null;

  return (
<section
  id="locations"
  aria-label="Epsom Wellness locations"
  className="w-full overflow-hidden bg-[#E9DCCF] py-12 sm:py-16 md:py-20"
>
  <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-6 flex flex-col gap-5 sm:mb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-epsom-maroon sm:text-xs sm:tracking-[0.24em]">
              <span className="h-px w-6 bg-epsom-maroon sm:w-8" />
              Your Wellness Destination
            </span>

            <h2 className="mt-3 font-display text-3xl leading-tight text-epsom-ink sm:mt-4 sm:text-4xl md:text-5xl">
              Find Us Near You
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-epsom-muted sm:text-base sm:leading-7">
              Thoughtfully designed spaces. Personalised wellness.
              A better way to feel your best.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-3 md:justify-end">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-epsom-muted sm:text-xs">
              Explore locations
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous location"
                className="grid h-10 w-10 place-items-center rounded-full border border-epsom-maroon/30 bg-white/50 text-epsom-ink transition hover:bg-epsom-maroon hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-epsom-maroon sm:h-11 sm:w-11"
              >
                <span aria-hidden="true" className="text-lg">←</span>
              </button>

              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next location"
                className="grid h-10 w-10 place-items-center rounded-full border border-epsom-maroon/30 bg-white/50 text-epsom-ink transition hover:bg-epsom-maroon hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-epsom-maroon sm:h-11 sm:w-11"
              >
                <span aria-hidden="true" className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Responsive hero carousel */}
        <div
          className="group relative isolate overflow-hidden rounded-2xl border border-white/70 bg-[#B9A394] shadow-[0_20px_55px_-25px_rgba(60,35,20,0.4)] sm:rounded-[1.75rem] md:rounded-[2rem]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(
                event.relatedTarget as Node | null
              )
            ) {
              setPaused(false);
            }
          }}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="relative min-h-[540px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[650px]">
            {/* Images */}
            {locations.map((location, index) => (
              <div
                key={location.id}
                aria-hidden={index !== activeIndex}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === activeIndex
                    ? "z-10 opacity-100"
                    : "pointer-events-none z-0 opacity-0"
                }`}
              >
                <Image
                  src={location.image}
                  alt={`${location.name} Epsom Wellness location`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={`object-cover ${
                    index === activeIndex ? "scale-105" : "scale-100"
                  } transition-transform duration-[7000ms] ease-out`}
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#211812]/85 via-[#211812]/45 to-[#211812]/20 sm:bg-gradient-to-r sm:from-[#211812]/75 sm:via-[#211812]/40 sm:to-[#211812]/10"
                  aria-hidden="true"
                />
              </div>
            ))}

            {/* Decorative border */}
            <div
              className="pointer-events-none absolute inset-2 z-20 rounded-xl border border-white/25 sm:inset-4 sm:rounded-2xl"
              aria-hidden="true"
            />

            {/* Content */}
           {/* Content */}
<div
  key={activeLocation.id}
  className="relative z-20 flex min-h-[540px] flex-col items-start justify-center px-6 pb-28 pt-10 sm:min-h-[520px] sm:px-12 sm:pb-28 md:min-h-[580px] md:px-16 lg:min-h-[650px] lg:px-20"
>
  <div className="animate-location-reveal w-full max-w-3xl">
    <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md sm:px-4 sm:text-xs">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A24C]" />
      {activeLocation.city}
    </span>
  </div>

  <p
    className="animate-location-reveal mt-6 text-xs font-medium uppercase tracking-[0.18em] text-[#E9DCCF]/90 sm:mt-8 sm:text-sm sm:tracking-[0.22em]"
    style={{ animationDelay: "100ms" }}
  >
    EPSOM WELLNESS · {activeLocation.city}
  </p>

  <h3
    className="animate-location-reveal mt-3 w-full max-w-3xl font-display text-4xl leading-[1.12] text-white sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl"
    style={{ animationDelay: "180ms" }}
  >
    {activeLocation.name}
  </h3>

  <div
    className="animate-location-reveal mt-5 h-px w-16 bg-[#D4A24C] sm:mt-6 sm:w-20"
    style={{ animationDelay: "240ms" }}
    aria-hidden="true"
  />

  <p
    className="animate-location-reveal mt-5 w-full max-w-2xl text-sm leading-7 text-white/90 sm:mt-6 sm:text-base sm:leading-8 md:text-lg"
    style={{ animationDelay: "300ms" }}
  >
    {activeLocation.description}
  </p>

  <p
    className="animate-location-reveal mt-3 w-full max-w-2xl text-xs leading-6 text-white/80 sm:mt-4 sm:text-sm"
    style={{ animationDelay: "360ms" }}
  >
    {activeLocation.address}
  </p>

  <Link
    href={activeLocation.href}
    className="animate-location-reveal mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#E9DCCF] via-[#D4A24C] to-[#B98A43] px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#38251D] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-8 sm:px-9 sm:tracking-[0.15em]"
    style={{ animationDelay: "420ms" }}
  >
    Explore Location
    <span aria-hidden="true" className="text-base">↗</span>
  </Link>
</div>
            {/* Dots and slide count */}
            <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center gap-2 px-4 pb-4 sm:gap-3 sm:pb-6 md:pb-8">
              <div
                className="flex max-w-full flex-wrap items-center justify-center gap-1 sm:gap-2"
                role="group"
                aria-label="Choose a location"
              >
                {locations.map((location, index) => (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Show ${location.name}`}
                    aria-pressed={index === activeIndex}
                    className="group/dot flex h-7 w-7 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white sm:h-8 sm:w-8"
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "h-3 w-3 border-2 border-white bg-transparent shadow-[0_0_0_3px_rgba(255,255,255,0.18)]"
                          : "h-2 w-2 bg-white/65 group-hover/dot:bg-white"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/80 sm:text-[10px] sm:tracking-[0.2em]">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(locations.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-[11px] text-epsom-muted sm:hidden">
          Swipe not required — use the arrows or dots to explore locations.
        </p>
      </div>

      <style jsx>{`
        @keyframes locationReveal {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-location-reveal {
          animation: locationReveal 650ms cubic-bezier(0.2, 0.65, 0.3, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-location-reveal {
            animation: none;
          }

          * {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
