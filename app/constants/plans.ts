// src/constants/plans.ts

export interface Plan {
  name: string;
  price: string;
  items: string[];
  popular?: boolean;
  suffix?: string;
}

export const PLANS: Plan[] = [
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
