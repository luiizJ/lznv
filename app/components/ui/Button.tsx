"use client";
import { memo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "whatsapp";
}

export const Button = memo(
  ({ children, variant = "primary", className, ...props }: ButtonProps) => {
    const variants = {
      primary:
        "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500",
      outline:
        "border border-zinc-800 bg-zinc-950/50 text-zinc-400 hover:border-white hover:text-white",
      whatsapp:
        "bg-[#25D366] text-black font-black hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)]",
    };

    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "px-6 py-4 md:px-10 md:py-6 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs md:text-sm",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
