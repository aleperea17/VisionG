import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { sendLead, type LeadPayload } from "@/lib/sendLead";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Recibimos demasiadas solicitudes. Intenta de nuevo en unos minutos." },
      { status: 429 },
    );
  }

  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "No pudimos leer la solicitud." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Revisa los campos del formulario." }, { status: 400 });
  }

  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const lead: LeadPayload = {
    name: parsed.data.name,
    email: parsed.data.email,
    business: parsed.data.business,
    instagram: parsed.data.instagram,
    businessType: parsed.data.businessType,
    challenge: parsed.data.challenge,
    goals: parsed.data.goals,
    revenue: parsed.data.revenue,
    source: parsed.data.source,
  };

  try {
    await sendLead(lead);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "No pudimos enviar tu solicitud. Intenta de nuevo en unos minutos." },
      { status: 500 },
    );
  }
}
