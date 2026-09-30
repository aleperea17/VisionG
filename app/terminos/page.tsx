import type { Metadata } from "next";
import { termsSections, termsUpdated } from "@/content/terms";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y Condiciones de los servicios de consultoría de VisionG LLC.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Términos y Condiciones"
      updated={termsUpdated}
      notice="Texto pendiente de publicación. Cada sección está preparada para pegar el documento oficial."
      sections={termsSections.map((section) => ({
        ...section,
        body: <p className="text-base leading-[1.7] text-ivory/85">{section.body}</p>,
      }))}
    />
  );
}
