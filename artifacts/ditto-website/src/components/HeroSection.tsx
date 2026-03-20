import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Robot } from "./Robot";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping opacity-20" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-ping opacity-20" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-6xl md:text-8xl font-black text-primary leading-none tracking-tight drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">
              ATHARVA
            </h1>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-primary/90 leading-none tracking-tight">
              PATIL
            </h2>
          </div>
          
          <h3 className="text-xl md:text-2xl font-light text-primary/80 tracking-widest uppercase">
            Developer <span className="text-foreground/30">|</span> Creative <span className="text-foreground/30">|</span> Innovator
          </h3>
          
          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Building beautiful and interactive web experiences with modern technologies. Transforming ideas into digital reality.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Content - Robot */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center"
        >
          <Robot />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/60 hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-10 h-10 border-2 border-current rounded-full flex items-center justify-center animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.a>
    </section>
  );
}
