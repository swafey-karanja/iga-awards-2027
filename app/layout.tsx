import type { Metadata, Viewport } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import Providers from "@/components/layout/Providers";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

// PLACEHOLDER: replace with the real domain
const SITE_URL = "https://awards.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "iGA Awards 2027", // PLACEHOLDER
  description: "PLACEHOLDER: awards side event of the iGaming Afrika Summit 2027.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "iGA Awards 2027", // PLACEHOLDER
    description: "PLACEHOLDER: awards side event of the iGaming Afrika Summit 2027.",
    url: "/",
    siteName: "iGA Awards 2027",
    images: ["/images/placeholders/og.jpg"], // PLACEHOLDER 1200x630
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body>
      <Providers>{children}</Providers>
      </body>
      </html>
  );
}