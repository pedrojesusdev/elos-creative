import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/animations/PageTransition";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Elos Creative — Agência de Social Media & Design",
  description:
    "Conectamos marcas com pessoas através de estratégia digital, design criativo e gestão de social media de alto impacto.",
  keywords: ["social media", "design criativo", "agência digital", "estratégia digital", "branding"],
  authors: [{ name: "Elos Creative" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Elos Creative — Agência de Social Media & Design",
    description: "Conectamos marcas com pessoas através de estratégia digital e design de alto impacto.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-surface-dark text-offwhite font-body antialiased overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
