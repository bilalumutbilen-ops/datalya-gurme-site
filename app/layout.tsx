import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D'ATALYA GURME | Premium Zeytinyağı ve Doğal Bakım",
  description:
    "D'ATALYA GURME; premium zeytinyağı, zeytin ve doğal bakım ürünlerinde zarif sunum ve güvenilir kalite sunar.",
  keywords: [
    "zeytinyağı",
    "premium zeytinyağı",
    "natürel sızma",
    "zeytin",
    "doğal sabun",
    "kişisel bakım",
    "D'ATALYA GURME",
  ],
  authors: [{ name: "D'ATALYA GURME" }],
  creator: "D'ATALYA GURME",
  metadataBase: new URL("https://bilalumutbilen-ops-datalya-gurme-si.vercel.app"),
  openGraph: {
    title: "D'ATALYA GURME | Premium Zeytinyağı ve Doğal Bakım",
    description:
      "Premium zeytinyağı, zeytin ve doğal bakım ürünlerinde sade, güçlü ve zarif bir deneyim.",
    url: "https://bilalumutbilen-ops-datalya-gurme-si.vercel.app",
    siteName: "D'ATALYA GURME",
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}