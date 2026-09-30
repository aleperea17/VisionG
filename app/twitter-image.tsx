import { createOgImage, ogSize } from "@/lib/og-card";

export const alt = "VisionG LLC — Consultoría de marketing y ventas para negocios digitales";
export const size = ogSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return createOgImage();
}
