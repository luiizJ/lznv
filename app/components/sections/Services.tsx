import React from "react";
import { Layers, Globe, Shield, Code2 } from "lucide-react";
import { BentoCard } from "../ui/BentoCard";

export const Services: React.FC = () => (
  <section id="services" className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
    <div className="mb-16 md:mb-24">
      <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white uppercase mb-4">
        Technical <span className="text-blue-600">Arsenal</span>
      </h2>
      <p className="text-zinc-400 font-mono text-xs uppercase tracking-[0.3em]">
        High-Performance Web Architecture
      </p>
    </div>

    {/* Bento Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Card 1: O "Carro Chefe" - SaaS e Sistemas Complexos */}
      {/* Motivo: Você constrói sistemas (Barbearia, Fast Food). O foco aqui é robustez e stack moderna. */}
      <BentoCard
        className="md:col-span-8"
        icon={Layers}
        title="SaaS & Aplicações Web Robustas"
        description="Desenvolvimento Fullstack focado em escalabilidade real. De dashboards administrativos a sistemas de gestão com pagamentos integrados, usando a arquitetura mais moderna do mercado."
        tags={[
          "Next.js 15",
          "React",
          "NeonDB (PostgreSQL)",
          "Stripe",
          "Drizzle ORM",
        ]}
        delay="0ms"
      />

      {/* Card 2: A "Porta de Entrada" - Landing Pages */}
      {/* Motivo: Você quer vender LPs. O foco é conversão e design (ShadCN/Tailwind). */}
      <BentoCard
        className="md:col-span-4  bg-zinc-900/20"
        icon={Globe}
        title="Performance Extrema"
        description="Otimização obsessiva. Utilizo técnicas de renderização avançada (SSR/SSG) para garantir pontuação máxima no Google (Lighthouse) e fluidez total na navegação."
        tags={[
          "Core Web Vitals",
          "Lighthouse 100",
          "Server Side Rendering",
          "Performance",
        ]}
        delay="200ms"
      />

      {/* Card 3: O Diferencial Técnico - Segurança e Qualidade */}
      {/* Motivo: Substituí a 'criptografia militar' pelo seu estudo de defesa e Zod. Isso mostra profissionalismo técnico. */}
      <BentoCard
        className="md:col-span-4 bg-zinc-900/20"
        icon={Shield}
        title="Segurança & Clean Code"
        description="Códigos blindados. Aplicação de princípios SOLID e validação rigorosa de dados para evitar falhas e garantir a integridade do seu negócio."
        tags={["TypeScript", "Zod", "Auth.js", "SOLID"]}
        delay="300ms"
      />

      {/* Card 4: A Mentalidade - Performance */}
      {/* Motivo: Conecta com seu gosto por Hardware/Gaming. O sistema tem que ser rápido como um jogo competitivo. */}
      <BentoCard
        className="md:col-span-8"
        icon={Code2}
        title="Landing Pages de Alta Conversão"
        description="Páginas projetadas para vender. Design responsivo, carregamento instantâneo e foco total na experiência do usuário para transformar visitantes em clientes."
        tags={["UI/UX Design", "TailwindCSS", "SEO Otimizado"]}
        delay="400ms"
      />
    </div>
  </section>
);
