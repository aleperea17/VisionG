import { z } from "zod";

export const businessTypes = [
  "Infoproductor",
  "Experto / consultor",
  "Creador de contenido",
  "Negocio digital",
  "Programa de formación",
  "Servicios profesionales",
  "Marca personal",
  "Otro",
] as const;

export const revenueRanges = [
  "Menos de US$3.000",
  "US$3.000 – US$10.000",
  "US$10.000 – US$30.000",
  "US$30.000 – US$100.000",
  "Más de US$100.000",
] as const;

export const sources = ["Instagram", "Recomendación", "Google", "YouTube", "Otro"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre.").max(120, "El nombre es demasiado largo."),
  email: z.string().trim().email("Ingresa un email válido.").max(180),
  business: z
    .string()
    .trim()
    .min(2, "Ingresa el nombre de tu empresa o negocio.")
    .max(160, "El nombre es demasiado largo."),
  instagram: z.string().trim().max(200).optional().or(z.literal("")),
  businessType: z.enum(businessTypes, {
    errorMap: () => ({ message: "Selecciona un tipo de negocio." }),
  }),
  challenge: z
    .string()
    .trim()
    .min(10, "Cuéntanos tu principal desafío.")
    .max(2000, "El texto es demasiado largo."),
  goals: z
    .string()
    .trim()
    .min(10, "Cuéntanos qué estás buscando mejorar.")
    .max(2000, "El texto es demasiado largo."),
  revenue: z.enum(revenueRanges, {
    errorMap: () => ({ message: "Selecciona un rango de facturación." }),
  }),
  source: z.enum(sources).optional().or(z.literal("")),
  accept: z.boolean().refine((value) => value, {
    message: "Debes aceptar la Política de Privacidad y los Términos y Condiciones.",
  }),
  company_website: z.string().optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
