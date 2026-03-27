import type { Metadata } from "next";
import "./globals.css";

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
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "D'ATALYA GURME | Premium Zeytinyağı ve Doğal Bakım",
    description:
      "Premium zeytinyağı, zeytin ve doğal bakım ürünlerinde sade, güçlü ve zarif bir deneyim.",
    url: "https://example.com",
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
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}