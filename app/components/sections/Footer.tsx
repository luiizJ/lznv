import Link from "next/link";

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
      <div>
        <div className="text-3xl font-black tracking-tighter text-white mb-4">
          lznv<span className="text-blue-500">.</span>
        </div>
        <p className="text-zinc-400 text-sm max-w-xs font-medium">
          Construindo as ferramentas que movem o amanhã.
        </p>
      </div>
      <div className="flex flex-col md:items-end gap-6 text-zinc-400">
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
          <Link
            href="https://www.instagram.com/lznv.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </Link>
          <Link
            href="https://github.com/luiizJ"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/luiizj"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </div>
        <div className="text-[10px] font-mono uppercase tracking-tighter">
          Created with <span className="text-blue-600">High-Performance</span>{" "}
          by Lznv
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
