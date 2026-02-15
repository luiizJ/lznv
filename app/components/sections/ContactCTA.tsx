import React from "react";
import { MessageCircle } from "lucide-react";
import { CONFIG } from "@/app/constants/config";
import { Button } from "../ui/Button";

export const ContactCTA: React.FC = () => {
  const whatsappLink = `https://wa.me/${
    CONFIG.whatsappNumber
  }?text=${encodeURIComponent(CONFIG.whatsappMsg)}`;

  return (
    <section className="py-24 md:py-40 px-6 relative z-10">
      <div className="max-w-5xl mx-auto relative group">
        {/* Camada 1: Animated Glow Border */}
        <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-violet-600 to-fuchsia-600 rounded-[2.5rem] md:rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />

        {/* Camada 2: O Card Principal */}
        <div className="relative bg-[#020202] border border-white/5 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 overflow-hidden text-center">
          {/* Camada 3: Abstract Background SVG */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0 100 C 20 0, 50 0, 100 100"
                stroke="white"
                strokeWidth="0.1"
                fill="none"
              />
              <path
                d="M0 80 C 30 20, 70 20, 100 80"
                stroke="white"
                strokeWidth="0.1"
                fill="none"
              />
            </svg>
          </div>

          {/* Camada 4: Conteúdo */}
          <div className="relative z-10">
            {/* Título Responsivo */}
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter italic leading-none">
              PRONTO PARA O <br className="md:hidden" />
              <span className="text-blue-500">PRÓXIMO NÍVEL?</span>
            </h2>

            <p className="text-zinc-500 text-base md:text-xl max-w-xl mx-auto mb-10 md:mb-14 leading-relaxed italic">
              Aceleramos sua entrada no mercado com tecnologia de ponta. Sem
              intermediários, sem perda de tempo.
            </p>

            <div className="flex flex-col items-center gap-8">
              {/* Botão Responsivo: Menor no mobile, Gigante no Desktop */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="whatsapp"
                  className="w-full sm:w-auto h-auto py-5 px-8 md:h-24 md:px-16 rounded-3xl md:rounded-[2rem] text-lg md:text-2xl shadow-2xl flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
                  <span>ME CHAMAR NO WHATSAPP</span>
                </Button>
              </a>

              {/* Status Responsivo: Coluna no mobile, Linha no desktop */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-zinc-400 font-mono text-[10px] md:text-sm uppercase tracking-widest md:tracking-[0.4em]">
                <span>Status:</span>
                <span className="text-red-600 animate-pulse font-bold text-center">
                  Últimas Vagas para este mês
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
