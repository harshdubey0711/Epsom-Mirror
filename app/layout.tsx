import type { Metadata } from "next";
import { Poppins, Tenor_Sans } from "next/font/google";
import { BookingProvider } from "@/components/BookingProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCta } from "@/components/StickyCta";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tenor",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: "Cryotherapy Mumbai | Premier Wellness Center – Epsom Cryo Spa",
    description:
      "Mumbai's premier cryotherapy & wellness center. Advanced recovery, IV drip therapy, biohacking, luxury spa & aesthetic treatments across Santacruz, Borivali & Andheri.",
    path: "/",
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${tenor.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="salt-texture font-sans">
        <BookingProvider>
          <Header />
          {children}
          <Footer />
          <StickyCta />
        </BookingProvider>
      </body>
    </html>
  );
}
