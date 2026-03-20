import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Robot } from "./Robot";
import { useEffect, useRef } from "react";

function AnimatedButtonBg() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const el = ref.current?.closest("section");
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
      <motion.div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          width: 300,
          height: 300,
          x: useSpring(useTransform(mouseX, (v) => v - 150), { damping: 30, stiffness: 200 }),
          y: useSpring(useTransform(mouseY, (v) => v - 150), { damping: 30, stiffness: 200 }),
          background: "radial-gradient(circle, rgba(250,204,21,0.6), transparent 70%)",
        }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background animated particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-1">
            <motion.h1
              className="font-heading text-6xl md:text-8xl font-black text-primary leading-none tracking-tight"
              animate={{ textShadow: ["0 0 20px rgba(250,204,21,0.2)", "0 0 40px rgba(250,204,21,0.5)", "0 0 20px rgba(250,204,21,0.2)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ATHARVA
            </motion.h1>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-primary/90 leading-none tracking-tight">
              PATIL
            </h2>
          </div>

          <h3 className="text-xl md:text-2xl font-light text-primary/80 tracking-widest uppercase">
            Developer <span className="text-foreground/30">|</span> Creative{" "}
            <span className="text-foreground/30">|</span> Innovator
          </h3>

          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Building beautiful and interactive web experiences with modern technologies.
          </p>

          {/* Buttons with animated glow background */}
          <div className="relative flex flex-wrap gap-4 mt-4 p-4 -m-4">
            <AnimatedButtonBg />
            <motion.a
              href="#projects"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_35px_rgba(250,204,21,0.6)] transition-shadow duration-300 overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-8 py-4 bg-transparent border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all duration-300"
            >
              Download CV
            </motion.a>
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/60 hover:text-primary transition-colors"
      >
        <div className="w-10 h-10 border-2 border-current rounded-full flex items-center justify-center animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.a>
    </section>
  );
}
