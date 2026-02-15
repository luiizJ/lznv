import { SERVICES } from "@/app/constants/services";
import React from "react";
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

    {/* Bento Grid Layout Dinâmico */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {SERVICES.map((service, index) => (
        <BentoCard
          key={index}
          className={service.className}
          icon={service.icon}
          title={service.title}
          description={service.description}
          tags={service.tags}
          delay={service.delay}
        />
      ))}
    </div>
  </section>
);
