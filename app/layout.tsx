import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://zonalimpia.com.do";

export const metadata: Metadata = {
  title: {
    default: "Zona Limpia",
    template: "%s - Zona Limpia",
  },
  description: "Higienizando espacios!",
  robots: "index, follow",
  authors: [
    {
      name: "Elihan Domingo Tejada Hilario",
      url: "https://elihan-th.netlify.app/",
    },
  ],
  openGraph: {
    title: "Zona Limpia",
    description: "Higienizaci\u00f3n industrial profesional en Rep\u00fablica Dominicana. M\u00e1s de 8 a\u00f1os de experiencia.",
    url: siteUrl,
    siteName: "Zona Limpia",
    locale: "es_DO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
