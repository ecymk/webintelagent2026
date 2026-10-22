import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dawn.webintelagent.com"),
  title: "Dawn Maley — C-Suite Executive Operations & Fractional OBM",
  description:
    "Senior C-Suite Executive Operations Partner and Fractional Online Business Manager (OBM) across entertainment, gaming, and tech. Proven Calendar Defense, Inbox Triage Architecture, and Studio Logistics at Sony Interactive Entertainment, Crunchyroll, and Trailer Park Group.",
  alternates: {
    canonical: "https://dawn.webintelagent.com",
  },
  openGraph: {
    title: "Dawn Maley — C-Suite Executive Operations & Fractional OBM",
    description:
      "Protect Your Creative Vision. Reclaim Your Calendar. Fractional OBM & Full-Time C-Suite Executive Operations across Entertainment, Gaming & Tech.",
    url: "https://dawn.webintelagent.com",
    siteName: "Dawn Maley Executive Operations",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Dawn Maley",
    "Amanda Dawn Maley",
    "Fractional Executive Assistant",
    "Online Business Manager",
    "C-Suite Executive Operations Partner",
    "Calendar Defense",
    "Sony Interactive Entertainment",
    "Crunchyroll",
    "Trailer Park Group",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] antialiased selection:bg-amber-400/20 selection:text-amber-300">
        {children}
      </body>
    </html>
  );
}
