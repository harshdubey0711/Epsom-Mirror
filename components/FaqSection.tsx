"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { FaqItem } from "@/lib/types";

const PAGE_SIZE = 4;

export function FaqSection({
  items,
  showContactCta = true,
}: {
  items: FaqItem[];
  showContactCta?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const pageCount = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const visible = useMemo(() => {
    const start = page * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE).map((item, i) => ({
      ...item,
      globalIndex: start + i,
    }));
  }, [items, page]);

  return (
    <section id="faq" className="faq-band py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="faq-stars" aria-label="5 star rating">
            <i className="fa-solid fa-star" aria-hidden="true" />
            <i className="fa-solid fa-star" aria-hidden="true" />
            <i className="fa-solid fa-star" aria-hidden="true" />
            <i className="fa-solid fa-star" aria-hidden="true" />
            <i className="fa-solid fa-star" aria-hidden="true" />
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-epsom-ink">
            FAQ&apos;s
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {visible.map((item) => {
            const open = openIndex === item.globalIndex;
            return (
              <div key={item.question} className={`faq-item${open ? " open" : ""} p-5 bg-epsom-maroon`}>
                <button
                  type="button"
                  className="faq-toggle"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : item.globalIndex)}
                >
                  {item.question}
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p className="text-epsom-crystal/90 text-sm">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {pageCount > 1 ? (
          <div className="faq-pagination flex-col sm:flex-row" aria-label="FAQ pages">
            <p className="text-sm text-epsom-muted order-first sm:order-none w-full sm:w-auto text-center">
              Page {page + 1} of {pageCount}
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                className="faq-page-btn"
                aria-label="Previous FAQ page"
                disabled={page === 0}
                onClick={() => {
                  setPage((p) => Math.max(0, p - 1));
                  setOpenIndex(null);
                }}
              >
                <i className="fa-solid fa-chevron-left" aria-hidden="true" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`faq-page-btn${i === page ? " is-active" : ""}`}
                    aria-label={`FAQ page ${i + 1}`}
                    onClick={() => {
                      setPage(i);
                      setOpenIndex(null);
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="faq-page-btn"
                aria-label="Next FAQ page"
                disabled={page >= pageCount - 1}
                onClick={() => {
                  setPage((p) => Math.min(pageCount - 1, p + 1));
                  setOpenIndex(null);
                }}
              >
                <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : null}

        {showContactCta ? (
          <div className="text-center mt-10">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm bg-epsom-maroon text-epsom-salt hover:bg-epsom-deep hover:text-epsom-ink transition-all"
            >
              Contact Us
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
