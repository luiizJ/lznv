"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X } from "lucide-react";
import { useTerminal } from "@/app/hooks/useTerminal";

export const TerminalOverlay = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { input, setInput, history, executeCommand } = useTerminal(onClose);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-500 flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="w-full max-w-4xl bg-zinc-950 border border-blue-500/30 rounded-3xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-900/50">
              <div className="flex items-center gap-2 text-blue-500 font-mono text-xs uppercase font-bold">
                <TerminalIcon size={14} /> lz_nv_v11.term
              </div>
              <button
                onClick={onClose}
                className="text-zinc-500 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6 h-96 overflow-y-auto font-mono text-sm space-y-2 text-zinc-400">
              {history.map((line, i) => (
                <div
                  key={i}
                  className={line.startsWith(">") ? "text-blue-400" : ""}
                >
                  {line}
                </div>
              ))}
              <div className="flex gap-2">
                <span className="text-blue-500 font-bold">{">"}</span>
                <input
                  autoFocus
                  className="bg-transparent outline-none w-full text-white"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && executeCommand()}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
