import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/content/site";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getSiteUrl, isPlaceholder } from "@/lib/site-url";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = getSiteUrl();
const title = "VisionG LLC — Consultoría de marketing y ventas para negocios digitales";
const description =
  "Consultoría estratégica, sistemas de marketing y sistemas de ventas para infoproductores, expertos y negocios digitales.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — VisionG LLC",
  },
  description,
  applicationName: "VisionG LLC",
  openGraph: {
    title,
    description,
    locale: "es_ES",
    type: "website",
    url: siteUrl,
    siteName: "VisionG LLC",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

function organizationJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
    description: site.description,
    founder: {
      "@type": "Person",
      name: site.founder.name,
    },
  };

  if (!isPlaceholder(site.email)) {
    data.email = site.email;
  }

  if (!isPlaceholder(site.instagramHandle)) {
    data.sameAs = [site.instagramUrl];
  }

  return data;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-black-950 font-sans text-ivory antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-black-950 focus:px-4 focus:py-2 focus:text-ivory"
        >
          Saltar al contenido
        </a>
        <div className="noise" aria-hidden="true" />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
