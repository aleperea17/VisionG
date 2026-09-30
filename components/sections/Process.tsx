"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/content/process";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 55%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="proceso" className="scroll-mt-24 bg-black-950 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4">
        <GoldDivider className="mb-16" />
        <SectionHeading label="PROCESO" title="Nuestro proceso" />

        <div ref={ref} className="relative mt-16">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-white/10 md:hidden" aria-hidden="true" />
          <motion.div
            style={{ scaleY: reduce ? 1 : scaleY }}
            className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-gold-500 md:hidden"
            aria-hidden="true"
          />
          <div className="absolute left-0 right-0 top-3 hidden h-px bg-white/10 md:block" aria-hidden="true" />
          <motion.div
            style={{ scaleX: reduce ? 1 : scaleX }}
            className="absolute left-0 right-0 top-3 hidden h-px origin-left bg-gold-500 md:block"
            aria-hidden="true"
          />

          <ol className="grid gap-10 md:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.number} className="relative pl-8 md:pl-0 md:pt-10">
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-gold-500 bg-black-950 md:left-0 md:top-1" aria-hidden="true" />
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">{step.number} —</p>
                <h3 className="mt-3 font-serif text-2xl text-ivory">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14">
          <Button href="#contacto">Quiero analizar mi negocio</Button>
        </div>
      </div>
    </section>
  );
}
