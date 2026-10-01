import type { ReactNode } from "react";
import { site } from "@/content/site";

export type RichSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export const privacyUpdated = "30 de septiembre de 2026";

const p = "text-base leading-[1.7] text-ivory/85";
const list = "list-disc space-y-2 pl-5 text-ivory/85";

function ContactEmail() {
  return (
    <a href={`mailto:${site.email}`} className="text-gold-400 underline-offset-4 hover:underline">
      {site.email}
    </a>
  );
}

export const privacySections: RichSection[] = [
  {
    id: "quienes-somos",
    title: "1. Quiénes somos",
    body: (
      <div className="space-y-4">
        <p className={p}>
          VisionG LLC («VisionG», «nosotros») es una empresa de consultoría y servicios de marketing y ventas para
          negocios digitales. Esta política explica qué datos personales recolectamos a través de este sitio, con qué
          finalidad los usamos, con quién los compartimos y qué derechos tienes sobre ellos.
        </p>
        <p className={p}>
          Puedes contactarnos por cualquier cuestión vinculada a tus datos personales escribiendo a <ContactEmail />.
        </p>
      </div>
    ),
  },
  {
    id: "datos",
    title: "2. Qué datos recolectamos",
    body: (
      <div className="space-y-4">
        <p className={p}>
          <strong>Datos que nos das voluntariamente:</strong> nombre, correo electrónico, nombre de tu negocio,
          Instagram o sitio web, tipo de negocio, facturación mensual aproximada y la información sobre tu negocio que
          nos compartas en el formulario de contacto, por correo o en una reunión.
        </p>
        <p className={p}>
          <strong>Datos técnicos de navegación:</strong> dirección IP, tipo de dispositivo, navegador y páginas
          visitadas, que pueden ser registrados por nuestro proveedor de alojamiento para el funcionamiento y la
          seguridad del sitio.
        </p>
        <p className={p}>
          No solicitamos ni queremos recibir datos sensibles ni datos de menores de 18 años. Si nos los envías
          igualmente, los eliminamos.
        </p>
      </div>
    ),
  },
  {
    id: "finalidad",
    title: "3. Para qué los usamos",
    body: (
      <div className="space-y-4">
        <ul className={list}>
          <li>Responder tus consultas y coordinar una conversación inicial.</li>
          <li>Evaluar si nuestros servicios son adecuados para tu negocio.</li>
          <li>Preparar diagnósticos y propuestas comerciales.</li>
          <li>Prestar y administrar los servicios de consultoría contratados.</li>
          <li>Enviarte comunicaciones sobre nuestros servicios, si nos diste tu consentimiento.</li>
          <li>Cumplir con obligaciones legales, fiscales y contables.</li>
        </ul>
        <p className={p}>
          No vendemos, alquilamos ni cedemos tus datos personales a terceros con fines publicitarios.
        </p>
      </div>
    ),
  },
  {
    id: "base-legal",
    title: "4. Base legal del tratamiento",
    body: (
      <p className={p}>
        Tratamos tus datos con tu consentimiento, que prestas al enviarnos tu información; para ejecutar el contrato o
        los pasos previos que solicitas; y para cumplir obligaciones legales. Puedes retirar tu consentimiento en
        cualquier momento, sin que eso afecte la licitud del tratamiento anterior.
      </p>
    ),
  },
  {
    id: "compartimos",
    title: "5. Con quién los compartimos",
    body: (
      <div className="space-y-4">
        <p className={p}>
          Compartimos datos únicamente con proveedores que nos permiten operar, y solo en la medida necesaria:
        </p>
        <ul className={list}>
          <li>
            <strong>Vercel</strong>: alojamiento del sitio.
          </li>
          <li>
            <strong>Web3Forms</strong>: envío por correo electrónico de los datos del formulario de contacto.
          </li>
          <li>
            <strong>Stripe</strong>: procesamiento de pagos, cuando corresponda.
          </li>
        </ul>
        <p className={p}>
          Estos proveedores pueden almacenar información en servidores ubicados en otros países; en esos casos
          exigimos que apliquen estándares de protección adecuados. También podemos compartir información cuando una
          autoridad competente lo requiera por ley.
        </p>
      </div>
    ),
  },
  {
    id: "cookies",
    title: "6. Cookies",
    body: (
      <p className={p}>
        Este sitio no utiliza cookies publicitarias ni de seguimiento. Nuestro proveedor de alojamiento puede utilizar
        cookies técnicas necesarias para el funcionamiento y la seguridad del sitio. Puedes bloquearlas o eliminarlas
        desde la configuración de tu navegador.
      </p>
    ),
  },
  {
    id: "conservacion",
    title: "7. Cuánto tiempo los conservamos",
    body: (
      <p className={p}>
        Conservamos los datos de contacto mientras exista una relación comercial o un interés legítimo en mantenerla y,
        luego, durante los plazos que exijan las normas fiscales y comerciales aplicables. Cumplidos esos plazos, los
        eliminamos o los anonimizamos.
      </p>
    ),
  },
  {
    id: "seguridad",
    title: "8. Seguridad",
    body: (
      <p className={p}>
        Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra accesos no autorizados,
        pérdida o alteración, incluyendo conexiones cifradas y accesos restringidos a las herramientas que utilizamos.
        Ningún sistema es infalible, por lo que no podemos garantizar seguridad absoluta.
      </p>
    ),
  },
  {
    id: "derechos",
    title: "9. Tus derechos",
    body: (
      <p className={p}>
        Tienes derecho a acceder, rectificar, actualizar y suprimir tus datos personales, y a oponerte a su tratamiento
        o solicitar su portabilidad. Para ejercerlos, escríbenos a <ContactEmail /> indicando tu solicitud.
        Responderemos dentro de los plazos legales aplicables.
      </p>
    ),
  },
  {
    id: "enlaces",
    title: "10. Enlaces a sitios de terceros",
    body: (
      <p className={p}>
        Este sitio enlaza a plataformas de terceros, como Instagram. Una vez que sales de nuestro sitio, tus datos
        pasan a regirse por las políticas de privacidad de esas plataformas, sobre las que no tenemos control.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "11. Cambios en esta política",
    body: (
      <p className={p}>
        Podemos actualizar esta política para reflejar cambios en nuestros servicios o en la normativa aplicable.
        Publicaremos la versión vigente en esta misma página, con su fecha de última actualización.
      </p>
    ),
  },
];
