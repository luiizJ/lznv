// src/constants/services.ts
import { Layers, Globe, Shield, Code2, LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  className: string; // Para controlar o tamanho (col-span-4 ou 8)
  delay: string; // Para a animação
}

export const SERVICES: Service[] = [
  {
    icon: Layers,
    title: "SaaS & Aplicações Web Robustas",
    description:
      "Desenvolvimento Fullstack focado em escalabilidade real. De dashboards administrativos a sistemas de gestão com pagamentos integrados.",
    tags: ["Next.js 15", "React", "NeonDB", "Stripe", "Drizzle ORM"],
    className: "md:col-span-8",
    delay: "0ms",
  },
  {
    icon: Globe,
    title: "Performance Extrema",
    description:
      "Otimização obsessiva. Técnicas avançadas (SSR/SSG) para garantir pontuação máxima no Google e fluidez total.",
    tags: ["Core Web Vitals", "Lighthouse 100", "SSR", "Edge Network"],
    className: "md:col-span-4 bg-zinc-900/20",
    delay: "200ms",
  },
  {
    icon: Shield,
    title: "Segurança & Clean Code",
    description:
      "Códigos blindados. Aplicação de princípios SOLID e validação rigorosa de dados para evitar falhas e garantir integridade.",
    tags: ["TypeScript", "Zod", "Auth.js", "SOLID"],
    className: "md:col-span-4 bg-zinc-900/20",
    delay: "300ms",
  },
  {
    icon: Code2,
    title: "Landing Pages de Alta Conversão",
    description:
      "Páginas projetadas para vender. Design responsivo, carregamento instantâneo e foco total na experiência do usuário.",
    tags: ["UI/UX Design", "TailwindCSS", "SEO Otimizado"],
    className: "md:col-span-8",
    delay: "400ms",
  },
];
