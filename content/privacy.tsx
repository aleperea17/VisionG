import type { ReactNode } from "react";
import { site } from "@/content/site";

export type RichSection = {
  id: string;
  title: string;
  body: ReactNode;
};

// TODO: revisar con asesor legal
// TODO: reemplazar [FECHA] por la fecha real de publicación
export const privacyUpdated = "[FECHA]";

const p = "text-base leading-[1.7] text-ivory/85";

export const privacySections: RichSection[] = [
  {
    id: "responsable",
    title: "1. Responsable del tratamiento",
    body: (
      <p className={p}>
        El responsable del tratamiento de los datos personales recogidos a través de este sitio es {site.name}.
        Para consultas sobre tus datos puedes escribir a {site.email}.
      </p>
    ),
  },
  {
    id: "datos",
    title: "2. Qué datos recopilamos",
    body: (
      <div className="space-y-4">
        <p className={p}>
          Recopilamos los datos que nos envías de forma voluntaria mediante el formulario de contacto: nombre,
          email, nombre de la empresa o negocio, Instagram o sitio web si lo indicas, tipo de negocio, descripción
          de tu situación y de lo que buscas mejorar, rango de facturación mensual aproximada y cómo conociste
          VisionG.
        </p>
        <p className={p}>
          El servidor de hosting puede registrar datos técnicos mínimos de la solicitud, como la dirección IP, para
          limitar envíos abusivos del formulario. No pedimos datos de pago en este sitio.
        </p>
      </div>
    ),
  },
  {
    id: "finalidad",
    title: "3. Para qué los utilizamos",
    body: (
      <ul className="list-disc space-y-2 pl-5 text-ivory/85">
        <li>Responder tu solicitud de consulta.</li>
        <li>Evaluar si los servicios son adecuados para tu situación.</li>
        <li>Enviarte una propuesta cuando corresponda.</li>
        <li>
          Enviarte comunicaciones comerciales solo si lo aceptas de forma expresa en un momento posterior. El
          formulario de contacto no implica la suscripción a un boletín.
        </li>
      </ul>
    ),
  },
  {
    id: "almacenamiento",
    title: "4. Cómo los almacenamos y protegemos",
    body: (
      <p className={p}>
        Este sitio no guarda los envíos del formulario en una base de datos propia. La información se transmite por
        una conexión cifrada al proveedor de email configurado y, si está activo, a una herramienta de
        automatización. El acceso queda limitado a quienes gestionan las solicitudes de VisionG. Las claves de esos
        servicios se almacenan como variables de entorno del servidor y no se publican en el sitio.
      </p>
    ),
  },
  {
    id: "proveedores",
    title: "5. Proveedores externos",
    body: (
      <div className="space-y-4">
        <p className={p}>
          Algunos proveedores pueden tratar datos en nuestro nombre para prestar el servicio. La lista debe
          completarse con los proveedores efectivamente contratados:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-ivory/85">
          {/* TODO: reemplazar los placeholders de proveedores */}
          <li>Hosting: [PROVEEDOR DE HOSTING — ej. Vercel]</li>
          <li>Email del formulario: [PROVEEDOR DE EMAIL — ej. Web3Forms]</li>
          <li>CRM o automatización: [HERRAMIENTA CRM — ej. n8n / Make]</li>
          <li>Procesador de pagos: [PROCESADOR DE PAGOS — ej. Stripe]</li>
        </ul>
      </div>
    ),
  },
  {
    id: "cookies",
    title: "6. Cookies",
    body: (
      <p className={p}>
        Esta versión del sitio no utiliza cookies de analítica ni de publicidad. Si más adelante se incorpora una
        herramienta de medición, esta política se actualizará para describirla y, cuando corresponda, solicitar el
        consentimiento.
      </p>
    ),
  },
  {
    id: "comunicaciones",
    title: "7. Comunicaciones comerciales",
    body: (
      <p className={p}>
        Puedes pedir que dejemos de enviarte comunicaciones comerciales en cualquier momento, respondiendo al
        mensaje o escribiendo a {site.email}. Eso no afecta los mensajes necesarios para responder una consulta o
        ejecutar un servicio ya contratado.
      </p>
    ),
  },
  {
    id: "derechos",
    title: "8. Derechos del usuario",
    body: (
      <p className={p}>
        Puedes solicitar acceso, rectificación, eliminación u oposición respecto de los datos que nos hayas
        facilitado. Para ejercer estos derechos, escribe a {site.email} e indica el derecho que quieres ejercer y
        un medio para responderte.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "9. Cómo contactarnos respecto de tus datos",
    body: (
      <p className={p}>
        Las solicitudes relacionadas con privacidad se envían a {site.email}. Responderemos por el mismo medio
        cuando hayamos podido verificar la solicitud.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "10. Cambios a esta política",
    body: (
      <p className={p}>
        Podemos actualizar esta política para reflejar cambios del sitio o de los proveedores. La fecha de la
        última actualización figura al inicio de esta página. El uso del sitio después de una actualización implica
        que la versión publicada es la vigente.
      </p>
    ),
  },
];
