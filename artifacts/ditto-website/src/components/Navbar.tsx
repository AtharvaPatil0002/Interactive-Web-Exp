import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-background/60 border-b border-border/50"
    >
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => scrollTo("hero")}
      >
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <span className="font-display font-bold text-xl text-primary-foreground tracking-tight">
          Ditto<span className="text-primary">.exp</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Transform", id: "transform" },
          { label: "Abilities", id: "abilities" },
          { label: "Stats", id: "stats" },
          { label: "Play", id: "play" }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            {item.label}
          </button>
        ))}
      </div>

      <button 
        onClick={() => scrollTo("play")}
        className="px-6 py-2 rounded-full font-bold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
      >
        Catch
      </button>
    </motion.nav>
  );
}
