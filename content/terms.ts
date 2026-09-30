export type LegalSection = {
  id: string;
  title: string;
  body: string;
};

// TODO: pegar aquí el texto completo de "Términos y Condiciones — VisionG LLC"
const pending =
  "[PENDIENTE: pegar el texto oficial de esta sección desde el documento «Términos y Condiciones — VisionG LLC».]";

export const termsUpdated = "[FECHA]";

export const termsSections: LegalSection[] = [
  { id: "identificacion", title: "1. Identificación del prestador", body: pending },
  { id: "aceptacion", title: "2. Aceptación de los términos", body: pending },
  { id: "servicios", title: "3. Servicios", body: pending },
  { id: "contratacion", title: "4. Contratación y propuestas", body: pending },
  { id: "honorarios", title: "5. Honorarios y pagos", body: pending },
  { id: "cliente", title: "6. Obligaciones del cliente", body: pending },
  { id: "propiedad", title: "7. Propiedad intelectual", body: pending },
  { id: "confidencialidad", title: "8. Confidencialidad", body: pending },
  { id: "resultados", title: "9. Resultados", body: pending },
  { id: "cancelacion", title: "10. Cancelación y reembolsos", body: pending },
  { id: "responsabilidad", title: "11. Limitación de responsabilidad", body: pending },
  { id: "contacto", title: "12. Ley aplicable y contacto", body: pending },
];
