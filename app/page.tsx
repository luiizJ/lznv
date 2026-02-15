"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/sections/Navbar";
import { TerminalOverlay } from "./components/modules/TerminalOverlay";
import Hero from "./components/sections/HeroArea";
import Footer from "./components/sections/Footer";
import dynamic from "next/dynamic";

// Importação Dinâmica (Lazy Loading)
const Services = dynamic(
  () => import("./components/sections/Services").then((mod) => mod.Services),
  {
    ssr: true, // Gera o HTML no servidor, mas hidrata depois
  }
);
const Portfolio = dynamic(() =>
  import("./components/sections/Portfolio").then((mod) => mod.Portfolio)
);
const Pricing = dynamic(() =>
  import("./components/sections/Pricing").then((mod) => mod.Pricing)
);
const ContactCTA = dynamic(() =>
  import("./components/sections/ContactCTA").then((mod) => mod.ContactCTA)
);

export const dynamicConfig = "force-static";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  // Hook para atalho de teclado
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsTerminalOpen((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-100 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden scroll-smooth">
      {/* Background Global */}
      <div
        className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <Navbar onTerminalOpen={() => setIsTerminalOpen(true)} />

      <TerminalOverlay
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <main className="relative z-10">
        <Hero onTerminalOpen={() => setIsTerminalOpen(true)} />
        <Services />
        <Pricing />
        <Portfolio />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
