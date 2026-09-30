export type Service = {
  number: string;
  title: string;
  description: string;
  includesLabel: string;
  items: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Consultoría estratégica",
    description:
      "Análisis del negocio y acompañamiento estratégico para identificar oportunidades y definir prioridades de marketing y ventas.",
    includesLabel: "Incluye, según el proyecto:",
    items: [
      "Auditoría del negocio",
      "Análisis de oferta",
      "Análisis de avatar",
      "Estrategia de adquisición",
      "Estrategia comercial",
      "Plan de acción",
    ],
  },
  {
    number: "02",
    title: "Sistemas de marketing",
    description: "Diseñamos y optimizamos sistemas para atraer y convertir oportunidades comerciales.",
    includesLabel: "Puede incluir:",
    items: [
      "Estrategia de contenido",
      "Guiones",
      "Embudos",
      "Campañas",
      "Retargeting",
      "Optimización de perfiles",
      "Estrategia de captación",
    ],
  },
  {
    number: "03",
    title: "Sistemas de ventas",
    description:
      "Ayudamos a estructurar procesos comerciales para mejorar la gestión y conversión de oportunidades.",
    includesLabel: "Puede incluir:",
    items: [
      "Estructuración del proceso comercial",
      "Scripts",
      "Capacitación de closers",
      "Revisión de llamadas",
      "Seguimiento de leads",
      "Optimización del proceso de cierre",
      "Métricas comerciales",
    ],
  },
  {
    number: "04",
    title: "Acompañamiento e implementación",
    description:
      "No nos limitamos a entregar recomendaciones. Dependiendo del proyecto, acompañamos al cliente durante la implementación para ayudar a convertir la estrategia en procesos ejecutables.",
    includesLabel: "Puede incluir:",
    items: ["Reuniones estratégicas", "Revisión de implementación", "Feedback", "Seguimiento", "Optimización"],
  },
];
