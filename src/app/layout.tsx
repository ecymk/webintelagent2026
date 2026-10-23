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
  title:
    "Amanda Dawn Maley — Chief of Staff, Online Business Manager & Senior EA",
  description:
    "Executive Operations Partner, Chief of Staff, and Fractional Online Business Manager (OBM) with 10+ years across Sony Interactive Entertainment (PlayStation), Sony Pictures Entertainment, Crunchyroll, MALKA Media, and Trailer Park Group.",
  alternates: {
    canonical: "https://dawn.webintelagent.com",
  },
  openGraph: {
    title:
      "Amanda Dawn Maley — Chief of Staff, Online Business Manager & Senior EA",
    description:
      "Protect Your Creative Vision. Reclaim Your Calendar. Fractional OBM, Chief of Staff & C-Suite Executive Operations across Entertainment, Gaming & Tech.",
    url: "https://dawn.webintelagent.com",
    siteName: "Dawn Maley Executive Operations",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Dawn Maley",
    "Amanda Dawn Maley",
    "Chief of Staff",
    "Online Business Manager",
    "Senior Executive Assistant",
    "C-Suite Executive Operations Partner",
    "Oracle ERP Purchase Orders",
    "Sony Interactive Entertainment",
    "Sony Pictures Entertainment",
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
