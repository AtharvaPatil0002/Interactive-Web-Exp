import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 bg-card/30 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="font-display font-bold text-lg text-primary-foreground tracking-tight">
            Ditto<span className="text-primary">.exp</span>
          </span>
        </div>

        <div className="text-sm font-medium text-muted-foreground flex items-center gap-4">
          <span>Pokémon #132</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Generation I</span>
        </div>

        <div className="text-sm text-muted-foreground/60">
          Built with React & Framer Motion
        </div>
      </div>
    </footer>
  );
}
