export const site = {
  name: "VisionG LLC",
  shortName: "VISIONG",
  tagline: "Consulting & Marketing Services",
  description: "Consultoría y servicios de marketing y ventas para negocios digitales.",
  email: "nicolasaliagachl@gmail.com",
  instagram: "@nickxanderz",
  instagramUrl: "https://instagram.com/nickxanderz",
  whatsapp: "",
  founder: {
    name: "Nicolás Aliaga",
    role: "Founder & Consultant",
    bio: "Consultor especializado en marketing, ventas y sistemas comerciales para negocios digitales.",
    image: "/nicolas-aliaga.jpg",
    hasPhoto: true,
  },
};

export const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#casos", label: "Casos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const legalLinks = [
  { href: "/terminos", label: "Términos y Condiciones" },
  { href: "/privacidad", label: "Política de Privacidad" },
  { href: "/reembolsos", label: "Política de Reembolsos y Cancelaciones" },
] as const;
