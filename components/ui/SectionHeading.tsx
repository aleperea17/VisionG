import type { ReactNode } from "react";

export function SectionHeading({
  label,
  title,
  children,
  align = "left",
}: {
  label: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">{label}</p>
      <h2 className="mt-4 font-serif text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-tight text-ivory">
        {title}
      </h2>
      {children ? <div className="mt-6 space-y-4 text-base leading-[1.7] text-ivory/85 md:text-lg">{children}</div> : null}
    </div>
  );
}
