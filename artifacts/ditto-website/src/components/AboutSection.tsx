import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { User, Code } from "lucide-react";
import { useRef } from "react";

function GlowCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(250,204,21,0.08), transparent 80%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative bg-card border border-border rounded-2xl overflow-hidden group ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{ background }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(250,204,21,0.15), transparent 80%)`,
          filter: "blur(1px)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(250,204,21,0.12), transparent 80%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4, borderColor: "rgba(250,204,21,0.5)" }}
      transition={{ duration: 0.2 }}
      className="relative bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden cursor-default group"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />
      {/* Animated ring decoration */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500"
        animate={{ boxShadow: ["0 0 0px rgba(250,204,21,0)", "0 0 20px rgba(250,204,21,0.1)", "0 0 0px rgba(250,204,21,0)"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10">
        <motion.span
          className="font-heading text-4xl font-bold text-primary block mb-1"
          animate={{ textShadow: ["0 0 8px rgba(250,204,21,0.3)", "0 0 20px rgba(250,204,21,0.6)", "0 0 8px rgba(250,204,21,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {number}
        </motion.span>
        <span className="text-sm font-medium text-foreground/80">{label}</span>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16 justify-center md:justify-start"
        >
          <span className="text-primary text-3xl">✦</span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <GlowCard className="p-8 flex flex-col items-center text-center gap-6 shadow-xl">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500">
                <User className="w-16 h-16 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-2xl font-bold text-primary">Atharva Patil</h3>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary/90">
                  <Code className="w-4 h-4" />
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am Atharva Patil, a passionate developer who loves building beautiful and interactive web experiences.
                I specialize in modern web technologies and creative UI animations.
              </p>
              <p>
                With expertise in React, Next.js, and cutting-edge frontend frameworks, I transform ideas into stunning
                digital experiences that captivate users and deliver exceptional performance.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <StatCard number="3+" label="Years Experience" />
              <StatCard number="20+" label="Projects Completed" />
              <StatCard number="100%" label="Client Satisfaction" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
