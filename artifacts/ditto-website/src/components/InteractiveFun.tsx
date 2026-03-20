import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function InteractiveFun() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const [isPoke, setIsPoke] = useState(false);

  // Calculate local coordinates relative to the blob center
  const getBlobOffset = () => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Max movement radius
    const limit = 40; 
    
    let dx = mousePosition.x - centerX;
    let dy = mousePosition.y - centerY;
    
    // Normalize distance
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance > 0) {
      // Scale down movement based on distance, creating a parallax pulling effect
      const pull = Math.min(distance * 0.1, limit);
      dx = (dx / distance) * pull;
      dy = (dy / distance) * pull;
    }

    return { x: dx, y: dy };
  };

  const offset = getBlobOffset();
  
  // Spring animations for smooth trailing
  const springX = useSpring(offset.x, { stiffness: 100, damping: 10 });
  const springY = useSpring(offset.y, { stiffness: 100, damping: 10 });

  // Eye movement is slightly more intense than body movement
  const eyeX = useTransform(springX, (v) => v * 1.5);
  const eyeY = useTransform(springY, (v) => v * 1.5);

  return (
    <section id="play" className="py-32 px-6 relative z-10 overflow-hidden min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Play Time</h2>
        <p className="text-xl text-muted-foreground">Move your mouse to interact. Click to poke!</p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-2xl aspect-square flex items-center justify-center rounded-full border border-dashed border-border/30"
        onMouseDown={() => setIsPoke(true)}
        onMouseUp={() => setIsPoke(false)}
        onMouseLeave={() => setIsPoke(false)}
      >
        <motion.div
          animate={isPoke ? { scale: 0.9, rotate: [0, -5, 5, -5, 0] } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="relative cursor-pointer z-10"
        >
          {/* The Interactive Blob */}
          <motion.div
            style={{ x: springX, y: springY }}
            animate={{
              borderRadius: isPoke 
                ? "50% 50% 50% 50% / 50% 50% 50% 50%" 
                : "40% 60% 70% 30% / 40% 50% 60% 50%"
            }}
            className={`w-64 h-64 shadow-2xl transition-colors duration-300 bg-gradient-to-tr ${isPoke ? 'from-accent to-pink-400' : 'from-primary to-purple-400'}`}
          >
            {/* Gloss */}
            <div className="absolute top-4 left-8 w-24 h-12 bg-white/20 rounded-full blur-md rotate-[-20deg]" />
            
            {/* Eyes & Mouth mapped to mouse */}
            <motion.div 
              style={{ x: eyeX, y: eyeY }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-32 h-16 flex justify-between items-center px-4">
                {isPoke ? (
                  <>
                    <div className="w-5 h-2 bg-black rounded-full rotate-45" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-4 w-4 h-4 bg-black rounded-full" />
                    <div className="w-5 h-2 bg-black rounded-full -rotate-45" />
                  </>
                ) : (
                  <>
                    <div className="w-4 h-4 bg-black rounded-full" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-4">
                      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 5 5 Q 20 20 35 5" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none" />
                      </svg>
                    </div>
                    <div className="w-4 h-4 bg-black rounded-full" />
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Shadow underneath */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/40 rounded-[100%] blur-md -z-10" />
        </motion.div>

        {/* Particles burst on poke */}
        {isPoke && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                animate={{ 
                  scale: [0, 1.5, 0], 
                  x: (Math.random() - 0.5) * 300, 
                  y: (Math.random() - 0.5) * 300,
                  opacity: 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent rounded-full"
                style={{ originX: 0.5, originY: 0.5 }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
