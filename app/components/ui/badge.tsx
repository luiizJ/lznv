import React from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[9px] md:text-[11px] font-black tracking-[0.2em] uppercase"
  >
    <Activity size={12} className="animate-pulse" /> {children}
  </motion.div>
);
