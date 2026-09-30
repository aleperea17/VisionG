# VisionG LLC

Landing institucional de VisionG LLC. Consultoría de marketing y ventas para negocios digitales. Sin checkout y sin precios públicos: el único llamado a la acción es solicitar una consulta.

## Cómo correr en local

Requisitos: Node.js 20 o superior.

```bash
npm install
cp .env.example .env.local
npm run dev
```

En Windows PowerShell, si `cp` no está disponible:

```powershell
Copy-Item .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

El formulario no envía emails hasta que `WEB3FORMS_ACCESS_KEY` tenga una clave real de [Web3Forms](https://web3forms.com). Sin esa variable, la API responde con error y el formulario muestra el mensaje en la página.

## Variables de entorno

| Variable | Obligatoria | Uso |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sí, en producción | URL canónica, Open Graph, sitemap y robots. Ejemplo local: `http://localhost:3000`. |
| `WEB3FORMS_ACCESS_KEY` | Sí, para recibir leads | Clave de Web3Forms. Solo en el servidor. |
| `LEAD_WEBHOOK_URL` | No | Si existe, además del email se hace POST del JSON del lead. |
| `LEAD_PROVIDER` | No | `web3forms` por defecto. Con `resend` usa el adaptador de Resend. |
| `RESEND_API_KEY` | Solo con Resend | Cuando haya dominio propio. |
| `CONTACT_TO_EMAIL` | Solo con Resend | Casilla que recibe los leads. |
| `RESEND_FROM_EMAIL` | No | Remitente verificado en Resend. |

## Dónde editar textos

Todo el contenido vive en `content/`, sin CMS:

- `content/site.ts` — nombre, email, Instagram, WhatsApp, founder
- `content/services.ts` — servicios
- `content/process.ts` — pasos del proceso
- `content/cases.ts` — casos y cifras (`showMetric`)
- `content/faq.ts` — preguntas frecuentes (también alimentan el JSON-LD)
- `content/terms.ts`, `content/privacy.tsx`, `content/refunds.tsx` — páginas legales

## Deploy en Vercel (plan Hobby)

1. Sube el repositorio a GitHub.
2. En Vercel, Import Project. Nombre sugerido: `visiong`, para que la URL quede `https://visiong.vercel.app` (o la variante libre más cercana).
3. Carga las variables de entorno. En el primer deploy puedes usar un valor temporal en `NEXT_PUBLIC_SITE_URL`.
4. Deploy.
5. Copia la URL final de `*.vercel.app`, actualiza `NEXT_PUBLIC_SITE_URL` y vuelve a desplegar.

No hace falta dominio propio, base de datos ni servicios de pago. El límite de envíos del formulario es en memoria (5 cada 10 minutos por IP) y alcanza para el plan gratuito.

Cuando exista un dominio propio, cambia `NEXT_PUBLIC_SITE_URL` y, si quieres dejar Web3Forms, pasa `LEAD_PROVIDER=resend` con `RESEND_API_KEY` y `CONTACT_TO_EMAIL`. El formulario no se toca: la lógica está en `lib/sendLead.ts`.

## TODO pendientes antes de publicar

- [ ] Pegar el texto completo de «Términos y Condiciones — VisionG LLC» en `content/terms.ts`.
- [ ] Revisar la política de privacidad con un asesor legal (`content/privacy.tsx`).
- [ ] Alinear reembolsos y cancelaciones con los contratos reales (`content/refunds.tsx`).
- [ ] Reemplazar `[FECHA]` en términos, privacidad y reembolsos.
- [ ] Reemplazar `[X días hábiles]` en la política de reembolsos.
- [ ] Reemplazar los proveedores externos de la privacidad: hosting, email, CRM y procesador de pagos.
- [ ] Confirmar el respaldo de cada cifra en `content/cases.ts`. Si no hay respaldo, poner `showMetric: false`.
- [ ] Reemplazar `[EMAIL DE CONTACTO — ej. visiongllc@gmail.com]` en `content/site.ts`.
- [ ] Reemplazar `[@visiong]` y `instagramUrl`.
- [ ] Reemplazar `[+XX XXX XXX XXXX]` o dejar `whatsapp` en `""` para ocultarlo.
- [ ] Colocar la foto profesional en `public/nicolas-aliaga.jpg` y pasar `founder.hasPhoto` a `true`.
- [ ] Crear la access key de Web3Forms y cargarla en Vercel.
