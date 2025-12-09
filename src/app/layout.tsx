import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Custodesk - Capture Knowledge Before It Leaves",
  description: "The AI-powered offboarding platform that captures knowledge before it leaves. Turn every exit into a permanent asset.",
  keywords: ["AI Automation", "Business Scaling", "AI Agency", "Automation Academy", "BenAI"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://benai.co",
    siteName: "BenAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BenAI - AI Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BenAI - AI Automation Agency & Academy",
    description: "Scale your business with AI automation.",
    creator: "@benai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${playfair.variable} ${outfit.variable} antialiased bg-cream-50 text-charcoal-900 font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
