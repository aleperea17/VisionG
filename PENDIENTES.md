# VisionG LLC — estado y pendientes

Landing institucional de consultoría de marketing y ventas. Estética negro y dorado. Sin precios, sin checkout y sin botón de compra. El único llamado a la acción es **Solicitar una consulta**.

El build de producción (`npm run build`) terminó bien. En el navegador se revisaron el hero, el menú móvil, la validación del formulario, términos, la página de gracias y que a 375 px no haya scroll horizontal.

## Cómo verla en local

Requisito: Node.js 20 o superior.

```powershell
Copy-Item .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

El formulario no envía emails hasta que `WEB3FORMS_ACCESS_KEY` tenga una clave real de [Web3Forms](https://web3forms.com). Sin esa variable, la API responde con error y el formulario lo muestra en la página.

## Deploy en Vercel (plan Hobby)

Nombre de proyecto sugerido: `visiong`, para que la URL quede `https://visiong.vercel.app` (o la variante libre más cercana).

1. Sube el repositorio a GitHub.
2. En Vercel, Import Project.
3. Carga las variables de entorno. En el primer deploy se puede usar un valor temporal en `NEXT_PUBLIC_SITE_URL`.
4. Deploy.
5. Copia la URL final de `*.vercel.app`, actualiza `NEXT_PUBLIC_SITE_URL` y vuelve a desplegar.

No hace falta dominio propio, base de datos ni servicios de pago. El límite de envíos del formulario es en memoria (5 cada 10 minutos por IP).

Cuando exista un dominio propio, cambia `NEXT_PUBLIC_SITE_URL` y, si se quiere dejar Web3Forms, usa `LEAD_PROVIDER=resend` con `RESEND_API_KEY` y `CONTACT_TO_EMAIL`. El formulario no se toca: la lógica está en `lib/sendLead.ts`.

## Variables de entorno

| Variable | Obligatoria | Uso |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sí, en producción | URL canónica, Open Graph, sitemap y robots. En local: `http://localhost:3000`. |
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

## Placeholders y TODO antes de publicar

Hay que completarlos antes de publicar, sobre todo para la revisión de Stripe.

- [ ] **Términos.** Pegar el texto oficial de «Términos y Condiciones — VisionG LLC» en `content/terms.ts`. Hoy cada sección dice `[PENDIENTE: pegar el texto oficial de esta sección desde el documento «Términos y Condiciones — VisionG LLC».]`. Comentario en código: `// TODO: pegar aquí el texto completo de "Términos y Condiciones — VisionG LLC"`.
- [ ] **Privacidad.** Revisar con un asesor legal. Archivo: `content/privacy.tsx`. Comentario: `// TODO: revisar con asesor legal`.
- [ ] **Reembolsos.** Alinear el texto con los contratos reales. Archivo: `content/refunds.tsx`. Comentario: `// TODO: alinear con los contratos reales`.
- [ ] **`[FECHA]`** en términos (`content/terms.ts`), privacidad (`content/privacy.tsx`) y reembolsos (`content/refunds.tsx`). Es la línea «Última actualización».
- [ ] **`[X días hábiles]`** en la sección «Plazos de respuesta» de `content/refunds.tsx`.
- [ ] **Proveedores** en la sección 5 de `content/privacy.tsx`:
  - `[PROVEEDOR DE HOSTING — ej. Vercel]`
  - `[PROVEEDOR DE EMAIL — ej. Web3Forms]`
  - `[HERRAMIENTA CRM — ej. n8n / Make]`
  - `[PROCESADOR DE PAGOS — ej. Stripe]`
- [ ] **Cifras de casos** en `content/cases.ts`. Comentario: `// TODO: confirmar respaldo de cada cifra antes de publicar`. Si no hay respaldo, pasar `showMetric` a `false` (la card queda solo con nombre y descripción). Hoy las tres están en `true`:
  - Caso 01 — Jerson: `US$150K generados en 30 días`
  - Caso 02 — Natalia: `US$10K en 75 días`
  - Caso 03 — Bastian: `US$10K → US$25K → US$35K`
- [ ] **`[EMAIL DE CONTACTO — ej. visiongllc@gmail.com]`** en `content/site.ts`. Mientras tenga corchetes, el footer lo muestra como texto y no como enlace `mailto`.
- [ ] **`[@visiong]`** y `instagramUrl` (hoy `https://instagram.com/`) en `content/site.ts`.
- [ ] **`[+XX XXX XXX XXXX]`** en `content/site.ts`. Si se deja `whatsapp` en `""`, WhatsApp no se muestra.
- [ ] **Foto de Nicolás Aliaga.** Guardar el archivo en `public/nicolas-aliaga.jpg` y poner `founder.hasPhoto` en `true` dentro de `content/site.ts`. Mientras tanto se ve un marco geométrico. Comentario en `components/ui/Portrait.tsx`: `// TODO: reemplazar este bloque por /nicolas-aliaga.jpg cuando exista la foto profesional`.
- [ ] **`WEB3FORMS_ACCESS_KEY`** en Vercel, y `NEXT_PUBLIC_SITE_URL` con la URL final del deploy.
