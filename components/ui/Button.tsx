import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-center text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black-950 disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary: "gold-bg text-black-950 shadow-gold hover:brightness-110",
  secondary: "border border-gold-500 bg-transparent text-gold-400 hover:bg-gold-500/10",
};

type Props = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  disabled,
  onClick,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("#") || href.includes("#")) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
