import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Instrument_Serif, Inter } from "next/font/google";
import { ContactShell } from "@/components/layout/ContactShell";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { createMetadata, organizationJsonLd } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = organizationJsonLd();
  const analyticsId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

  const isGtm = analyticsId?.startsWith("GTM-");
  const isGa4 = analyticsId?.startsWith("G-");

  return (
    <html
      lang="en"
      id="top"
      className={`${instrumentSerif.variable} ${inter.variable} h-full antialiased`}
    >
      {isGtm && analyticsId ? (
        <GoogleTagManager gtmId={analyticsId} />
      ) : null}
      {isGa4 && analyticsId ? (
        <GoogleAnalytics gaId={analyticsId} />
      ) : null}
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ContactShell>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ContactShell>
        <Analytics />
      </body>
    </html>
  );
}
