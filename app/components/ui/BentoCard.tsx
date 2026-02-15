import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  className?: string;
  delay?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  icon: Icon,
  title,
  description,
  tags = [],
  className = "",
  delay = "0ms",
}) => {
  const delaySec = parseFloat(delay) / 1000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delaySec, ease: "easeOut" }}
      className={cn(
        "group relative bg-zinc-950/50 border border-white/5 p-8 md:p-10 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full overflow-hidden",
        className
      )}
    >
      {/* --- BACKGROUND DECORATOR (A Mágica acontece aqui) --- */}
      <div className="absolute -right-6 -top-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none select-none">
        <Icon size={200} strokeWidth={0.5} className="text-white" />
      </div>

      {/* Icon Area (Pequeno) */}
      <div className="relative z-10 mb-6 p-4 w-fit bg-blue-600/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-900/20">
        <Icon size={28} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 grow">
        <h3 className="text-2xl font-bold mb-3 tracking-tight text-white group-hover:text-blue-200 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8">
          {description}
        </p>
      </div>

      {/* Tags Footer */}
      <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
        {tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-zinc-900/80 rounded-full text-[10px] font-mono text-zinc-400 uppercase tracking-wider border border-white/5 group-hover:border-blue-500/20 transition-colors backdrop-blur-sm"
          >
            #{t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
