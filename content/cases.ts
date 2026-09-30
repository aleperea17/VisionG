export type CaseStudy = {
  id: string;
  name: string;
  description: string;
  metric: string;
  context: string;
  progression?: string[];
  // TODO: confirmar respaldo de cada cifra antes de publicar. Si no hay respaldo, pasar showMetric a false.
  showMetric: boolean;
};

export const cases: CaseStudy[] = [
  {
    id: "01",
    name: "Jerson",
    description: "Optimización de estrategia comercial y acompañamiento durante el proceso de crecimiento.",
    metric: "US$150K generados en 30 días",
    context: "Proyecto específico · 30 días",
    showMetric: true,
  },
  {
    id: "02",
    name: "Natalia",
    description: "Desarrollo y optimización de estrategia comercial.",
    metric: "US$10K en 75 días",
    context: "Proyecto específico · 75 días",
    showMetric: true,
  },
  {
    id: "03",
    name: "Bastian",
    description: "Optimización del proceso comercial y estrategia de adquisición.",
    metric: "US$10K → US$25K → US$35K",
    context: "Progresión de un proyecto específico",
    progression: ["US$10K", "US$25K", "US$35K"],
    showMetric: true,
  },
];
