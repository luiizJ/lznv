import { Command, Zap } from "lucide-react";

interface NavbarProps {
  onTerminalOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onTerminalOpen }) => (
  <nav className="fixed top-0 w-full z-100 p-4 md:p-6">
    <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-2xl border border-white/5 px-6 py-4 rounded-full">
      <div className="flex items-center gap-3">
        <Zap size={22} className="text-blue-600 fill-blue-600" />
        <span className="text-xl md:text-2xl font-black tracking-tighter text-white italic uppercase">
          lznv_
        </span>
      </div>
      <div className="hidden lg:flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
        <a href="#services" className="hover:text-white transition-colors">
          Stack
        </a>
        <a href="#pricing" className="hover:text-white transition-colors">
          Pricing
        </a>
        <a href="#portfolio" className="hover:text-white transition-colors">
          Portfolio
        </a>
      </div>
      <div className="flex items-center gap-4 ">
        <div className=" flex items-center p-3 border gap-2 border-white/10 rounded-full text-zinc-400 hover:text-white transition-all">
          <span>Terminal</span>
          <button onClick={onTerminalOpen} className="">
            <Command size={16} />
          </button>
        </div>

        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
      </div>
    </div>
  </nav>
);

export default Navbar;
