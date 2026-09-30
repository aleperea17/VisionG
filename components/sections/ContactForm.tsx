"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, type FieldError as RhfError } from "react-hook-form";
import { businessTypes, contactSchema, revenueRanges, sources, type ContactInput } from "@/lib/validation";

const controlClass =
  "w-full rounded-xl border border-white/10 bg-black-950 px-4 py-3 text-base text-ivory outline-none transition placeholder:text-muted-dark focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30 aria-[invalid=true]:border-[#e3a3a3]";

function FieldMessage({ error }: { error?: RhfError }) {
  if (!error?.message) return null;
  return <p className="mt-2 text-sm text-[#e3a3a3]">{error.message}</p>;
}

function Label({ htmlFor, children, required = false }: { htmlFor: string; children: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm text-ivory">
      {children}
      {required ? (
        <span className="text-gold-500" aria-hidden="true">
          {" "}
          *
        </span>
      ) : null}
    </label>
  );
}

export function ContactForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      business: "",
      instagram: "",
      challenge: "",
      goals: "",
      source: "",
      accept: false,
      company_website: "",
    },
  });

  const revenue = watch("revenue");

  const onSubmit = async (values: ContactInput) => {
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!response.ok || !data?.ok) {
        setServerError(data?.error ?? "No pudimos enviar tu solicitud. Intenta de nuevo.");
        return;
      }

      router.push("/gracias");
    } catch {
      setServerError("No pudimos enviar tu solicitud. Revisa tu conexión e intenta de nuevo.");
    }
  };

  return (
    <section id="contacto" className="scroll-mt-24 bg-black-950 py-24 md:py-32">
      <div className="mx-auto w-full max-w-3xl px-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">CONTACTO</p>
        <h2 className="mt-4 font-serif text-[clamp(2rem,3.5vw,3rem)] font-semibold text-ivory">Solicitar una consulta</h2>
        <p className="mt-4 text-sm text-muted">Los campos marcados con * son obligatorios.</p>

        <form
          className="relative mt-10 rounded-2xl border border-white/5 bg-black-800 p-5 md:p-8"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="company_website">Company website</label>
            <input id="company_website" type="text" tabIndex={-1} autoComplete="off" {...register("company_website")} />
          </div>

          <div className="grid gap-5">
            <div>
              <Label htmlFor="name" required>
                Nombre
              </Label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                className={controlClass}
                aria-invalid={Boolean(errors.name)}
                {...register("name")}
              />
              <FieldMessage error={errors.name} />
            </div>

            <div>
              <Label htmlFor="email" required>
                Email
              </Label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={controlClass}
                aria-invalid={Boolean(errors.email)}
                {...register("email")}
              />
              <FieldMessage error={errors.email} />
            </div>

            <div>
              <Label htmlFor="business" required>
                Empresa / negocio
              </Label>
              <input
                id="business"
                type="text"
                autoComplete="organization"
                className={controlClass}
                aria-invalid={Boolean(errors.business)}
                {...register("business")}
              />
              <FieldMessage error={errors.business} />
            </div>

            <div>
              <Label htmlFor="instagram">Instagram / sitio web</Label>
              <input
                id="instagram"
                type="text"
                autoComplete="url"
                className={controlClass}
                aria-invalid={Boolean(errors.instagram)}
                {...register("instagram")}
              />
              <FieldMessage error={errors.instagram} />
            </div>

            <div>
              <Label htmlFor="businessType" required>
                ¿Qué tipo de negocio tienes?
              </Label>
              <div className="relative">
                <select
                  id="businessType"
                  className={`${controlClass} appearance-none pr-10`}
                  aria-invalid={Boolean(errors.businessType)}
                  defaultValue=""
                  {...register("businessType")}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
              </div>
              <FieldMessage error={errors.businessType} />
            </div>

            <div>
              <Label htmlFor="challenge" required>
                ¿Cuál es tu principal desafío actualmente?
              </Label>
              <textarea
                id="challenge"
                rows={4}
                className={controlClass}
                aria-invalid={Boolean(errors.challenge)}
                {...register("challenge")}
              />
              <FieldMessage error={errors.challenge} />
            </div>

            <div>
              <Label htmlFor="goals" required>
                ¿Qué estás buscando mejorar?
              </Label>
              <textarea id="goals" rows={4} className={controlClass} aria-invalid={Boolean(errors.goals)} {...register("goals")} />
              <FieldMessage error={errors.goals} />
            </div>

            <fieldset>
              <legend className="mb-3 text-sm text-ivory">
                Facturación mensual aproximada
                <span className="text-gold-500" aria-hidden="true">
                  {" "}
                  *
                </span>
              </legend>
              <div className="grid gap-2">
                {revenueRanges.map((range) => (
                  <label
                    key={range}
                    className={`cursor-pointer rounded-xl border px-4 py-3 text-sm transition focus-within:ring-2 focus-within:ring-gold-500/40 ${
                      revenue === range
                        ? "border-gold-500 bg-gold-500/10 text-ivory"
                        : "border-white/10 text-muted hover:border-gold-500/30"
                    }`}
                  >
                    <input type="radio" value={range} className="sr-only" {...register("revenue")} />
                    {range}
                  </label>
                ))}
              </div>
              <FieldMessage error={errors.revenue} />
            </fieldset>

            <div>
              <Label htmlFor="source">¿Cómo conociste VisionG?</Label>
              <div className="relative">
                <select
                  id="source"
                  className={`${controlClass} appearance-none pr-10`}
                  defaultValue=""
                  {...register("source")}
                >
                  <option value="">Selecciona una opción</option>
                  {sources.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
              </div>
              <FieldMessage error={errors.source} />
            </div>

            <div>
              <label className="flex items-start gap-3 text-sm leading-relaxed text-ivory/85">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 accent-[#C9A24A]"
                  aria-invalid={Boolean(errors.accept)}
                  {...register("accept")}
                />
                <span>
                  Al enviar este formulario aceptas nuestra{" "}
                  <Link href="/privacidad" className="text-gold-400 underline underline-offset-4">
                    Política de Privacidad
                  </Link>{" "}
                  y{" "}
                  <Link href="/terminos" className="text-gold-400 underline underline-offset-4">
                    Términos y Condiciones
                  </Link>
                  .
                </span>
              </label>
              <FieldMessage error={errors.accept} />
            </div>
          </div>

          {serverError ? (
            <p role="alert" className="mt-6 text-sm text-[#e3a3a3]">
              {serverError}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="gold-bg mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-black-950 shadow-gold transition hover:brightness-110 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
            {isSubmitting ? "Enviando…" : "Enviar solicitud"}
          </button>
        </form>
      </div>
    </section>
  );
}
