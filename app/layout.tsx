import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Fontes Padrão da Vercel (Excelente legibilidade)
import "./globals.css";

// --- FONT OPTIMIZATION STRATEGY ---
// Carregamos as fontes como "Variable Fonts" para reduzir requests e garantir performance máxima.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- SEO & METADATA CONFIGURATION ---
export const metadata: Metadata = {
  title: {
    template: "%s | Luiz Janampa",
    default: "Luiz Janampa | Soluções Digital ",
  },
  description:
    "Desenvolvedor Full-Stack focado em arquiteturas escaláveis, Next.js e React. Transformo Ideias em interfaces de alta conversão.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "SaaS",
    "Front-end Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Luiz Janampa" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seu-portfolio.com",
    title: "Luiz Janampa | Software Engineer",
    description: "Especialista em criar soluções web de alta performance.",
    siteName: "LZNV",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// --- ROOT LAYOUT COMPONENT ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020202] text-zinc-100 selection:bg-blue-600 selection:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
