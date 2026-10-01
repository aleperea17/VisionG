import type { Metadata } from "next";
import { termsSections, termsUpdated } from "@/content/terms";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y Condiciones de los servicios de consultoría de VisionG LLC.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Términos y Condiciones" updated={termsUpdated} sections={termsSections} />
  );
}
