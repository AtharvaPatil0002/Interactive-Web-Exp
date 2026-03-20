import { motion } from "framer-motion";
import { BlobFace } from "./BlobFace";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-6 text-center">
        
        {/* Main Animated Blob */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
          className="relative mb-12 group cursor-pointer"
        >
          <motion.div
            animate={{
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "50% 50% 60% 40% / 40% 60% 50% 50%",
                "40% 60% 70% 30% / 40% 50% 60% 50%"
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary via-[#C084FC] to-accent shadow-2xl shadow-primary/40 group-hover:scale-105 transition-transform duration-300"
          >
            {/* Glossy highlight effect */}
            <div className="absolute top-8 left-8 w-24 h-12 bg-white/30 rounded-full blur-md rotate-[-30deg]" />
            <div className="absolute bottom-8 right-12 w-16 h-8 bg-black/10 rounded-full blur-md" />
            
            <BlobFace />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/50 border border-primary/20 backdrop-blur-sm text-primary font-semibold text-sm uppercase tracking-wider">
            Pokémon #132
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary/60 mb-6 drop-shadow-sm">
            Meet the Master of Disguise.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            It can freely recombine its own cellular structure to transform into other life-forms. Discover the magic of Ditto.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
