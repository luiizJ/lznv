import { useState } from "react";
import { CONFIG } from "../constants/config";

export const useTerminal = (onClose: () => void) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "LZNV OS [Quantum_V11] Inicializado.",
    "Novo Hardware detectado. Otimização de GPU.",
    "Digite 'help' para ver os protocolos.",
  ]);

  const executeCommand = () => {
    const cmd = input.toLowerCase().trim();
    let response = `Erro: Comando '${cmd}' não reconhecido.`;

    const commands: Record<string, () => string | void> = {
      help: () => "Comandos: status, services, pricing, contact, clear, exit",
      status: () => "Sistemas 100% operacionais. Latência: 4ms.",
      services: () => "SaaS, Landing Pages, Cloud Infra.",
      pricing: () => "Starter => (250$), Pro => (3k), Enterprise => (Custom).",
      clear: () => {
        setHistory([]);
        return "";
      },
      cls: () => {
        setHistory([]);
        return "";
      },
      exit: () => onClose(),
      contact: () => {
        window.open(
          `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
            CONFIG.whatsappMsg
          )}`
        );
        return "Protocolo de comunicação aberto.";
      },
    };

    if (commands[cmd]) {
      const res = commands[cmd]();
      if (res) setHistory((prev) => [...prev, `> ${input}`, res]);
    } else {
      setHistory((prev) => [...prev, `> ${input}`, response]);
    }
    setInput("");
  };

  return { input, setInput, history, executeCommand };
};
