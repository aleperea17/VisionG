import { audiences } from "@/content/audiences";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ForWho() {
  return (
    <section className="bg-black-900 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4">
        <GoldDivider className="mb-16" />
        <Reveal>
          <SectionHeading
            label="PARA QUIÉN ES"
            title="Trabajamos principalmente con negocios que ya tienen algo que vender y quieren estructurar mejor su crecimiento."
          />
        </Reveal>
        <div className="mt-12">
          <p className="text-sm font-medium text-ivory">Ideal para:</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {audiences.map((item) => (
              <li key={item} className="rounded-full border border-gold-500/70 px-4 py-2 text-sm text-gold-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 max-w-3xl border-l border-gold-500 pl-4 text-sm leading-relaxed text-muted md:text-base">
          No es una solución de &quot;hazte rico desde cero&quot;.
        </p>
      </div>
    </section>
  );
}
