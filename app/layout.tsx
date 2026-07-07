import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CRJ Construcciones | Obras Civiles y Remodelaciones en Neiva, Huila",
  description:
    "Empresa contratista familiar especializada en obras civiles, impermeabilización, acabados, ingeniería eléctrica y estructuras en Neiva, Huila. Calidad garantizada y cumplimiento.",
  keywords: [
    "construcciones Neiva",
    "obras civiles Huila",
    "remodelaciones Neiva",
    "impermeabilización Huila",
    "CRJ Construcciones",
  ],
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#111214",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${oswald.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
