import type { ReactNode } from "react";
import { site } from "@/content/site";

export type RichSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export const termsUpdated = "30 de septiembre de 2026";

const p = "text-base leading-[1.7] text-ivory/85";
const list = "list-disc space-y-2 pl-5 text-ivory/85";

function ContactEmail() {
  return (
    <a href={`mailto:${site.email}`} className="text-gold-400 underline-offset-4 hover:underline">
      {site.email}
    </a>
  );
}

export const termsSections: RichSection[] = [
  {
    id: "identificacion",
    title: "1. Identificación",
    body: <p className={p}>VisionG LLC, representada por Nicolás Aliaga Rodríguez.</p>,
  },
  {
    id: "servicio",
    title: "2. Servicio",
    body: (
      <div className="space-y-4">
        <p className={p}>
          VisionG presta servicios de consultoría y acompañamiento estratégico en marketing y ventas para negocios
          digitales, infoproductores y empresas que comercializan productos o servicios mediante canales digitales.
        </p>
        <p className={p}>Los servicios pueden incluir, según el plan contratado:</p>
        <ul className={list}>
          <li>Consultoría estratégica.</li>
          <li>Estrategia de marketing.</li>
          <li>Optimización de oferta.</li>
          <li>Estrategias de adquisición.</li>
          <li>Sistemas de generación y gestión de leads.</li>
          <li>Estructuración y optimización de procesos comerciales.</li>
          <li>Guiones y estructuras de contenido.</li>
          <li>Revisión de llamadas de venta.</li>
          <li>Capacitación y acompañamiento de equipos comerciales.</li>
          <li>Implementación y optimización de sistemas de ventas.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "naturaleza",
    title: "3. Naturaleza del servicio",
    body: (
      <div className="space-y-4">
        <p className={p}>
          El cliente entiende que VisionG proporciona consultoría, estrategia, acompañamiento y/o implementación
          según el servicio contratado.
        </p>
        <p className={p}>
          La contratación de VisionG no constituye una garantía de ingresos, ventas, clientes, facturación o
          rentabilidad determinada.
        </p>
        <p className={p}>
          Los resultados dependen, entre otros factores, de la implementación del cliente, oferta, mercado, tráfico,
          producto, capacidad comercial, presupuesto publicitario y otros factores externos.
        </p>
      </div>
    ),
  },
  {
    id: "obligaciones",
    title: "4. Obligaciones del cliente",
    body: (
      <div className="space-y-4">
        <p className={p}>
          El cliente deberá proporcionar información, accesos, materiales, participación y colaboración
          razonablemente necesarios para prestar el servicio.
        </p>
        <p className={p}>
          También será responsable de ejecutar las acciones que correspondan a su equipo y de proporcionar
          información veraz.
        </p>
      </div>
    ),
  },
  {
    id: "duracion",
    title: "5. Duración",
    body: (
      <p className={p}>
        Cuando el servicio contratado corresponda al modelo establecido en el contrato vigente de VisionG, la
        duración será de 4 meses, salvo que las partes acuerden algo diferente por escrito.
      </p>
    ),
  },
  {
    id: "honorarios",
    title: "6. Honorarios y modelo de compensación",
    body: (
      <div className="space-y-4">
        <p className={p}>En el modelo establecido en el contrato de VisionG:</p>
        <ul className={list}>
          <li>El objetivo económico inicial corresponde a US$5.000.</li>
          <li>
            Durante la primera etapa, la utilidad neta generada se distribuye 50% para el cliente y 50% para
            VisionG hasta alcanzar dicho importe.
          </li>
          <li>
            Una vez recuperados los US$5.000, durante el período restante del contrato la distribución pasa a 70%
            para el cliente y 30% para VisionG.
          </li>
        </ul>
        <p className={p}>
          La utilidad neta se calcula descontando los costos directamente atribuibles a la generación y operación
          del programa, incluyendo, cuando corresponda, publicidad, setters/closers, community manager, edición,
          plataformas, software, herramientas, comisiones de pago, webinars y otros costos directamente
          relacionados.
        </p>
        <p className={p}>
          Los reembolsos y chargebacks también se consideran al determinar la utilidad correspondiente.
        </p>
      </div>
    ),
  },
  {
    id: "cancelacion",
    title: "7. Cancelación y terminación",
    body: (
      <div className="space-y-4">
        <p className={p}>
          Cualquiera de las partes podrá solicitar la terminación por incumplimiento grave de la otra parte.
        </p>
        <p className={p}>
          Cuando el incumplimiento sea subsanable, deberá otorgarse un plazo de 7 días para corregirlo.
        </p>
        <p className={p}>
          Si el incumplimiento corresponde al cliente y genera un saldo contractual pendiente conforme al acuerdo
          firmado, VisionG podrá exigir dicho saldo en los términos establecidos en el contrato.
        </p>
        <p className={p}>
          Si el incumplimiento corresponde a VisionG, VisionG no podrá exigir un saldo que no haya sido generado
          conforme al acuerdo.
        </p>
      </div>
    ),
  },
  {
    id: "reembolsos",
    title: "8. Reembolsos",
    body: (
      <div className="space-y-4">
        <p className={p}>
          Los servicios de consultoría y acompañamiento son servicios profesionales personalizados y, por su
          naturaleza, no se establece un derecho automático a reembolso simplemente por disconformidad con los
          resultados obtenidos.
        </p>
        <p className={p}>Cualquier solicitud de reembolso será evaluada de acuerdo con:</p>
        <ul className={list}>
          <li>Los términos del servicio contratado.</li>
          <li>El contrato firmado entre las partes.</li>
          <li>El grado de prestación del servicio.</li>
          <li>Las circunstancias particulares del caso.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "solicitudes",
    title: "9. Solicitudes de reembolso",
    body: (
      <div className="space-y-4">
        <p className={p}>
          Las solicitudes deberán realizarse por escrito al canal oficial de contacto indicado en la página.
        </p>
        <p className={p}>
          VisionG responderá las solicitudes de reembolso dentro de un plazo máximo de 5 días hábiles desde su
          recepción.
        </p>
      </div>
    ),
  },
  {
    id: "propiedad",
    title: "10. Propiedad intelectual",
    body: (
      <div className="space-y-4">
        <p className={p}>
          Los materiales, metodologías, documentos, sistemas, frameworks, guiones y recursos proporcionados por
          VisionG podrán estar protegidos por derechos de propiedad intelectual.
        </p>
        <p className={p}>
          El cliente recibe autorización para utilizarlos en el contexto de su propio negocio, pero no podrá
          revender, redistribuir o comercializar las metodologías y materiales de VisionG como propios salvo
          autorización expresa.
        </p>
      </div>
    ),
  },
  {
    id: "responsabilidad",
    title: "11. Limitación de responsabilidad",
    body: (
      <div className="space-y-4">
        <p className={p}>
          VisionG será responsable únicamente por incumplimientos directos y demostrables de las obligaciones
          expresamente asumidas.
        </p>
        <p className={p}>VisionG no garantiza resultados económicos determinados.</p>
      </div>
    ),
  },
  {
    id: "pagos",
    title: "12. Pagos",
    body: (
      <p className={p}>
        Los pagos se procesan mediante los medios de pago que VisionG indique al cliente al momento de la
        contratación, incluyendo Stripe cuando corresponda.
      </p>
    ),
  },
  {
    id: "modificaciones",
    title: "13. Modificaciones",
    body: (
      <p className={p}>
        VisionG podrá actualizar estos Términos y Condiciones para futuras contrataciones. Las condiciones
        aplicables a una contratación serán las vigentes al momento de la compra, sin perjuicio de los contratos
        específicos firmados entre las partes.
      </p>
    ),
  },
  {
    id: "legislacion",
    title: "14. Legislación aplicable",
    body: (
      <p className={p}>
        Para los servicios regulados por el contrato vigente, se mantiene la jurisdicción pactada en Argentina,
        conforme a las condiciones específicas acordadas entre las partes.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "15. Contacto",
    body: (
      <div className={`space-y-1 ${p}`}>
        <p>VisionG LLC</p>
        <p>Nicolás Aliaga Rodríguez</p>
        <p>
          Email: <ContactEmail />
        </p>
        <p>
          Instagram:{" "}
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 underline-offset-4 hover:underline"
          >
            {site.instagram}
          </a>
        </p>
      </div>
    ),
  },
];
