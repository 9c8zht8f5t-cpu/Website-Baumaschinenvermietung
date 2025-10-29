// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/seo";
import { Montserrat } from "next/font/google";
import KundenDialog from "@/components/KundenDialog";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const viewport = { width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  title: `${SITE.name} – Baumaschinen mieten`,
  description: "Minibagger, Radlader & mehr – transparent, fair & regional.",
  metadataBase: new URL("https://" + SITE.domain),
  openGraph: {
    title: `${SITE.name} – Baumaschinen mieten`,
    type: "website",
    url: "https://" + SITE.domain,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body
        className={`${montserrat.className} min-h-screen bg-gray-50 text-gray-900`}
      >
        <Header />

        <main className="container py-8">{children}</main>

        <footer className="text-center text-sm text-gray-600 py-6 border-t">
          <div className="space-x-4">
            <a
              href="/impressum"
              className="hover:text-green-600 transition-colors"
            >
              Impressum
            </a>
            <span>|</span>
            <a
              href="/datenschutz"
              className="hover:text-green-600 transition-colors"
            >
              Datenschutz
            </a>
          </div>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Mietservice Digitalsanierung
          </p>
        </footer>

        {/* Strukturierte Daten (Schema.org) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: SITE.name,
              telephone: SITE.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bochower Dorfstraße 65",
                addressLocality: "Groß Kreutz (Havel)",
                postalCode: "14550",
                addressCountry: "DE",
              },
            }),
          }}
        />

        {/* Modale & Consent */}
        <KundenDialog />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
