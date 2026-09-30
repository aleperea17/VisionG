import type { ContactInput } from "@/lib/validation";

export type LeadPayload = Omit<ContactInput, "accept" | "company_website">;

const labels: Record<keyof LeadPayload, string> = {
  name: "Nombre",
  email: "Email",
  business: "Empresa / negocio",
  instagram: "Instagram / sitio web",
  businessType: "Tipo de negocio",
  challenge: "Principal desafío",
  goals: "Qué busca mejorar",
  revenue: "Facturación mensual aproximada",
  source: "Cómo conoció VisionG",
};

export function formatLead(lead: LeadPayload) {
  return (Object.keys(labels) as (keyof LeadPayload)[])
    .map((key) => `${labels[key]}: ${lead[key] || "—"}`)
    .join("\n");
}

async function sendViaWeb3Forms(lead: LeadPayload) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("WEB3FORMS_ACCESS_KEY no está configurada.");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Nueva consulta — ${lead.name}`,
      from_name: "VisionG Landing",
      name: lead.name,
      email: lead.email,
      message: formatLead(lead),
      business: lead.business,
      instagram: lead.instagram || "—",
      business_type: lead.businessType,
      challenge: lead.challenge,
      goals: lead.goals,
      revenue: lead.revenue,
      source: lead.source || "—",
    }),
  });

  const data = (await response.json().catch(() => null)) as { success?: boolean } | null;

  if (!response.ok || !data?.success) {
    throw new Error("Web3Forms rechazó el envío.");
  }
}

async function sendViaResend(lead: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    throw new Error("Resend no está configurado.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM_EMAIL ?? "VisionG <onboarding@resend.dev>",
      to: [to],
      reply_to: lead.email,
      subject: `Nueva consulta — ${lead.name}`,
      text: formatLead(lead),
    }),
  });

  if (!response.ok) {
    throw new Error("Resend rechazó el envío.");
  }
}

async function sendWebhook(lead: LeadPayload) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "visiong-landing",
      submittedAt: new Date().toISOString(),
      ...lead,
    }),
  });

  if (!response.ok) {
    throw new Error("El webhook del lead respondió con error.");
  }
}

export async function sendLead(lead: LeadPayload) {
  const provider = process.env.LEAD_PROVIDER ?? "web3forms";

  if (provider === "resend") {
    await sendViaResend(lead);
  } else {
    await sendViaWeb3Forms(lead);
  }

  try {
    await sendWebhook(lead);
  } catch (error) {
    console.error("LEAD_WEBHOOK_URL falló después de enviar el email.", error);
  }
}
