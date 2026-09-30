export const site = {
  name: "VisionG LLC",
  shortName: "VISIONG",
  tagline: "Consulting & Marketing Services",
  description: "Consultoría y servicios de marketing y ventas para negocios digitales.",
  // TODO: reemplazar [EMAIL DE CONTACTO — ej. visiongllc@gmail.com] por el email real
  email: "[EMAIL DE CONTACTO — ej. visiongllc@gmail.com]",
  // TODO: reemplazar [@visiong] y la URL por el perfil real de Instagram
  instagramHandle: "[@visiong]",
  instagramUrl: "https://instagram.com/",
  // TODO: reemplazar [+XX XXX XXX XXXX] por el número real. Si queda "", WhatsApp no se muestra.
  whatsapp: "[+XX XXX XXX XXXX]",
  founder: {
    name: "Nicolás Aliaga",
    role: "Founder & Consultant",
    bio: "Consultor especializado en marketing, ventas y sistemas comerciales para negocios digitales.",
    // TODO: colocar la foto profesional en /public/nicolas-aliaga.jpg y pasar hasPhoto a true
    image: "/nicolas-aliaga.jpg",
    hasPhoto: false,
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
