import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <article
      className={`rounded-2xl border border-white/5 bg-black-800 p-6 transition duration-300 motion-safe:hover:-translate-y-0.5 hover:border-gold-500/40 md:p-8 ${className}`}
    >
      {children}
    </article>
  );
}
