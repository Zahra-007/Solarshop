import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["italic", "normal"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Solarshop | Premium Solar Systems & Energy Storage",
  description:
    "Own your energy and love your bill. Solarshop designs, installs, and maintains tier-one residential and commercial solar systems and battery storage with a 25-year warranty.",
  keywords: [
    "solar panels",
    "solar installation",
    "residential solar",
    "commercial solar",
    "battery storage",
    "solar savings calculator",
    "Solarshop",
  ],
  authors: [{ name: "Solarshop" }],
  openGraph: {
    title: "Solarshop | Own Your Energy, Love Your Bill",
    description:
      "Premium solar systems and smart battery storage built for lifelong performance. 25-year warranty and tier-one certified installation.",
    url: "https://solarshop.example.com",
    siteName: "Solarshop",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Solarshop Rooftop Solar Installation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solarshop | Own Your Energy, Love Your Bill",
    description:
      "Premium solar systems and smart battery storage built for lifelong performance.",
    images: [
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${fraunces.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-ivory text-ink font-sans selection:bg-goldtint selection:text-forest">
        {children}
      </body>
    </html>
  );
}
