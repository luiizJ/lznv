"use client";
import React from "react";
import { motion } from "framer-motion";
import { CONFIG } from "../../constants/config";
import { Badge } from "lucide-react";
import { Button } from "../ui/Button";

interface HeroProps {
  onTerminalOpen: () => void;
}

/**
 * @section Hero
 * @description Ponto de entrada da aplicação.
 * Utiliza Framer Motion para orquestração de entrada (Staggered Animation).
 */
const Hero: React.FC<HeroProps> = ({ onTerminalOpen }) => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
        CONFIG.whatsappMsg
      )}`,
      "_blank"
    );
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center px-6 pt-24 text-center overflow-hidden">
      <div className="max-w-7xl w-full relative z-10">
        {/* Badge de Status do Sistema */}
        <Badge>Quantum Architecture v11.0 Integrated</Badge>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[11rem] font-black tracking-tighter leading-[0.85] text-white italic uppercase mt-12 mb-12"
        >
          Lznv <br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-800 not-italic">
            SYSTEMS.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto text-zinc-500 text-lg md:text-2xl font-light italic leading-relaxed mb-16"
        >
          Desenvolvemos interfaces de alto impacto e sistemas escaláveis que
          transformam visitantes em lucro.{" "}
          <span className="text-white">
            Performance mobile-first para quem não aceita o segundo lugar.{" "}
          </span>{" "}
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={onTerminalOpen}
            variant="primary"
            className="w-full sm:w-auto min-w-[280px]"
          >
            Terminal Prompt (Ctrl+K)
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto min-w-[280px]"
            onClick={handleWhatsApp}
          >
            Iniciar Atendimento
          </Button>
        </div>
      </div>

      {/* Background Decorativo - Gradient Mesh Sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
    </header>
  );
};

export default Hero;
