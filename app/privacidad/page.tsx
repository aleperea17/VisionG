import type { Metadata } from "next";
import { privacySections, privacyUpdated } from "@/content/privacy";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de Privacidad de VisionG LLC.",
};

export default function PrivacyPage() {
  return <LegalLayout title="Política de Privacidad" updated={privacyUpdated} sections={privacySections} />;
}
