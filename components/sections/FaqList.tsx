"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { faq } from "@/content/faq";

export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
      {faq.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span className="font-serif text-xl text-ivory md:text-2xl">{item.question}</span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-gold-500 transition-transform ${open ? "rotate-45" : ""}`}
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
              <p className="max-w-3xl pb-6 text-sm leading-[1.7] text-ivory/80 md:text-base">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
