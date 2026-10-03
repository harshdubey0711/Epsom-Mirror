import type { Metadata } from "next";
import { Poppins, Tenor_Sans } from "next/font/google";
import { BookingProvider } from "@/components/BookingProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PopularSearches } from "@/components/PopularSearches";
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
    title: "Wellness Clinic in Mumbai | Epsom Wellness",
    description:
      "Welcome to Epsom Wellness, a premier wellness and aesthetic clinic in Mumbai. Our advanced wellness & longevity clinic in Mumbai specializes in health optimization, pain management, beauty, and sports recovery. Book your consultation today.",
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
          <PopularSearches />
          <Footer />
          <StickyCta />
        </BookingProvider>
      </body>
    </html>
  );
}
