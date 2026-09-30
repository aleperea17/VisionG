import { Handshake, Megaphone, Settings2, type LucideIcon } from "lucide-react";

export const problems: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Megaphone,
    title: "Marketing",
    text: "Contenido, adquisición y posicionamiento sin una estructura clara.",
  },
  {
    icon: Handshake,
    title: "Ventas",
    text: "Procesos comerciales que dependen demasiado de la persona que vende.",
  },
  {
    icon: Settings2,
    title: "Sistemas",
    text: "Falta de procesos, seguimiento y métricas para tomar mejores decisiones.",
  },
];
