# VisionG LLC — pendiente

Landing institucional de consultoría. Contacto, foto, términos, privacidad y reembolsos ya están cargados.

## Único pendiente

- [ ] Cargar la `WEB3FORMS_ACCESS_KEY` real en Vercel.

Sin esa clave, el formulario no envía el email del lead. `LEAD_WEBHOOK_URL` queda sin definir: no hay CRM ni webhook. Los leads llegan solo por email vía Web3Forms.

En local, copia `.env.example` a `.env.local` y corre `npm run dev`.
