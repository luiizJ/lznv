"use client";
import React from "react";
import { motion } from "framer-motion";
import { Construction, Loader2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/Button";
import { CONFIG } from "@/app/constants/config";

export const Portfolio: React.FC = () => {
  const whatsappLink = `https://wa.me/${
    CONFIG.whatsappNumber
  }?text=${encodeURIComponent(
    "Olá! Vi que o portfólio está sendo atualizado, mas gostaria de ver alguns exemplos do seu trabalho."
  )}`;

  return (
    <section id="portfolio" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="relative rounded-[3rem] border border-white/5 bg-zinc-950/30 overflow-hidden p-12 md:p-24 text-center">
        {/* Background Glow (Efeito de "Obra em Andamento" Digital) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] bg-blue-600/5 blur-[100px] pointer-events-none" />

        {/* Pattern de fundo sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Badge Animado */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-8 bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
              <Loader2 className="animate-spin mr-2 h-3 w-3" /> Compilando
              Projetos...
            </Badge>
          </motion.div>

          {/* Título Principal */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter italic uppercase leading-none"
          >
            Work in <br className="md:hidden" />{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-500">
              Progress.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl max-w-2xl font-light italic mb-12"
          >
            Estamos selecionando e documentando nossos melhores cases de alta
            performance. Em breve, você verá aqui soluções que definem o padrão
            do mercado.
          </motion.p>

          {/* Ícone Decorativo Central */}
          <div className="mb-12 relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            <Construction
              size={64}
              className="text-zinc-700 relative z-10"
              strokeWidth={1}
            />
          </div>

          {/* CTA Alternativo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest mb-4">
              Não quer esperar?
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-white/10 hover:bg-white/5"
              >
                Solicitar PDF de Apresentação
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
