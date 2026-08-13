"use client";

import { useCallback, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { TreatmentCard } from "@/components/TreatmentCard";
import type { TreatmentCard as TreatmentCardData } from "@/lib/types";

type Props = {
  treatments: TreatmentCardData[];
  label: string;
  slow?: boolean;
};

const MIN_SLIDES = 8;

const emblaOptions = {
  loop: true,
  align: "start" as const,
  dragFree: true, 
};

function expandSlides(treatments: TreatmentCardData[]): TreatmentCardData[] {
  if (treatments.length === 0) return treatments;
  const slides = [...treatments];
  while (slides.length < MIN_SLIDES) {
    slides.push(...treatments);
  }
  return slides;
}

export function TreatmentMarquee({ treatments, label, slow }: Props) {
  const slides = useMemo(() => expandSlides(treatments), [treatments]);

  const autoScroll = useRef(
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      direction: "forward",
      speed: slow ? 1 : 1.5,
      breakpoints: {
        "(prefers-reduced-motion: reduce)": { active: false },  
      },
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [autoScroll.current]);

  const scrollPrev = useCallback(() => {
    const plugin=emblaApi?.plugins().autoScroll;
    plugin?.stop();
    emblaApi?.scrollPrev();
    plugin?.play(3000); 
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    const plugin = emblaApi?.plugins().autoScroll;
    plugin?.stop();
    emblaApi?.scrollNext();
    plugin?.play(3000); 
  }, [emblaApi]);

  return (
    <div className="marquee-shell">
      <div className="treatment-marquee" aria-label={label} ref={emblaRef}>
        <div className="treatment-marquee-track">
          {slides.map((t, i) => (
            <div className="treatment-marquee-slide" key={`${t.slug}-${t.name}-${i}`}>
              <TreatmentCard treatment={t} />
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-nav">
        <button type="button" className="marquee-btn" aria-label="Previous Services" onClick={scrollPrev}>
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </button>
        <button type="button" className="marquee-btn" aria-label="Next Services" onClick={scrollNext}>
          <i className="fa-solid fa-chevron-right" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
