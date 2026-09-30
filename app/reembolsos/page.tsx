import type { Metadata } from "next";
import { refundSections, refundsUpdated } from "@/content/refunds";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Reembolsos y Cancelaciones",
  description: "Política de reembolsos y cancelaciones de los servicios de VisionG LLC.",
};

export default function RefundsPage() {
  return (
    <LegalLayout title="Política de Reembolsos y Cancelaciones" updated={refundsUpdated} sections={refundSections} />
  );
}
