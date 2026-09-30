import Link from "next/link";
import type { ReactNode } from "react";

export function LegalLayout({
  title,
  updated,
  notice,
  sections,
}: {
  title: string;
  updated: string;
  notice?: ReactNode;
  sections: { id: string; title: string; body: ReactNode }[];
}) {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 pb-24 pt-32 md:pb-32 md:pt-40">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">Legal</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-gold-400 md:text-5xl">{title}</h1>
      <p className="mt-4 text-sm text-muted">Última actualización: {updated}</p>
      {notice ? <div className="mt-8 border-l border-gold-500 pl-4 text-sm leading-relaxed text-muted">{notice}</div> : null}

      <nav aria-label="Índice" className="mt-10 border-y border-white/10 py-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">Índice</p>
        <ol className="mt-4 space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-sm text-ivory/85 underline-offset-4 hover:text-gold-400 hover:underline">
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h2 className="font-serif text-2xl font-semibold text-ivory">{section.title}</h2>
            <div className="mt-4 space-y-4">{section.body}</div>
          </section>
        ))}
      </div>

      <p className="mt-16 text-sm text-muted">
        <Link href="/" className="text-gold-400 underline-offset-4 hover:underline">
          Volver al inicio
        </Link>
      </p>
    </article>
  );
}
