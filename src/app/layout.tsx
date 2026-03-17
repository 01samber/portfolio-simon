import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Simon E. Azar | Marketing Strategist & Creative Marketer",
  description:
    "Bold Ideas. Cultural Relevance. Marketing That Connects. Simon E. Azar builds campaigns that resonate. Strategy meets creativity.",
  keywords: [
    "marketing strategist",
    "creative marketer",
    "brand strategy",
    "campaign building",
    "Simon Azar",
    "Lebanon",
  ],
  authors: [{ name: "Simon E. Azar", url: "https://simonazar.com" }],
  openGraph: {
    title: "Simon E. Azar | Marketing Strategist & Creative Marketer",
    description:
      "Bold Ideas. Cultural Relevance. Marketing That Connects. Building campaigns that resonate.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon E. Azar | Marketing Strategist & Creative Marketer",
    description: "Bold Ideas. Cultural Relevance. Marketing That Connects.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  themeColor: "#2A2826",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <base href="/portfolio-simon/" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased text-zinc-100">
        {children}
      </body>
    </html>
  );
}
