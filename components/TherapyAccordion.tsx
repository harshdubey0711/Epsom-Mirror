"use client";

import { useState } from "react";

type TherapyItem = {
  name: string;
  description: string;
};

export function TherapyAccordion({ items }: { items: TherapyItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-4 items-start">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.name}
            className={`faq-item${open ? " open" : ""} p-5 bg-epsom-maroon`}
          >
            <button
              type="button"
              className="faq-toggle"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              {item.name}
              <span className="faq-icon" aria-hidden="true" />
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p className="text-epsom-crystal/90 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}