import React from "react";
import { Check } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/Button";
import { CONFIG } from "@/app/constants/config";

// --- Types & Data ---

interface Plan {
  name: string;
  price: string;
  items: string[];
  popular?: boolean;
  suffix?: string;
}

const PLANS: Plan[] = [
  {
    name: "Landing Page",
    price: "890",
    suffix: "",
    items: [
      "Design de Alta Conversão",
      "Performance Elite (Load < 1s)",
      "Otimização SEO Técnica",
      "Botão WhatsApp & Analytics",
    ],
    popular: false,
  },
  {
    name: "SaaS & MVP",
    price: "3.5",
    suffix: "k",
    items: [
      "App Fullstack (Next.js)",
      "Dashboard Administrativo",
      "Autenticação & Banco de Dados",
      "Gateway de Pagamento (Stripe)",
      "Infraestrutura Escalável",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    items: [
      "Consultoria de Arquitetura",
      "Refatoração & Clean Code",
      "APIs & Integrações Complexas",
      "Manutenção Mensal",
      "Suporte Prioritário",
    ],
    popular: false,
  },
];

export const Pricing: React.FC = () => {
  const handleSelectPlan = (planName: string) => {
    const message = `Olá Luiz! Gostaria de iniciar o protocolo para o plano *${planName}*.`;
    window.open(
      `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="pricing"
      className="py-32 px-6 bg-zinc-950/40 border-y border-white/5 relative overflow-hidden"
    >
      {/* Background Glow Opcional para dar profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge>Tabela de Investimento</Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mt-6 italic uppercase">
            Preços<span className="text-blue-500">_</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((p, i) => (
            <div
              key={i}
              className={`relative p-px rounded-[2.5rem] transition-all duration-500 hover:scale-[1.02] ${
                p.popular
                  ? "bg-linear-to-b from-blue-500 via-violet-600 to-blue-500 shadow-2xl shadow-blue-500/20"
                  : "bg-zinc-800/50 border border-white/5 hover:border-white/10"
              }`}
            >
              <div className="bg-zinc-950 rounded-[2.4rem] p-8 md:p-10 h-full flex flex-col relative overflow-hidden">
                {/* Header do Card */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-2">
                      {p.name}
                    </h4>
                    <div className="text-5xl font-black text-white italic tracking-tighter">
                      {p.price !== "Custom" && (
                        <span className="text-2xl not-italic mr-1 text-zinc-600 font-medium">
                          R$
                        </span>
                      )}
                      {p.price}
                      {p.price !== "Custom" && p.suffix && (
                        <span className="text-3xl text-zinc-600 font-medium ml-1">
                          {p.suffix}
                        </span>
                      )}
                    </div>
                  </div>
                  {p.popular && (
                    <div className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase italic shadow-lg shadow-blue-600/50">
                      Hot
                    </div>
                  )}
                </div>

                {/* Lista de Features */}
                <div className="space-y-4 mb-12 grow">
                  {p.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-zinc-400 text-sm font-medium"
                    >
                      <div className="min-w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <Check
                          size={10}
                          className="text-blue-500"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Ação */}
                <Button
                  onClick={() => handleSelectPlan(p.name)}
                  variant={p.popular ? "primary" : "outline"}
                  className="w-full text-xs md:text-sm"
                >
                  Selecionar {p.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
