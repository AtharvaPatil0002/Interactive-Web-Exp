import { motion } from "framer-motion";
import { User, Code } from "lucide-react";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
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
          
          {/* Left Column - Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center text-center gap-6 shadow-xl hover:border-primary/30 transition-colors duration-500 group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500 shadow-[0_0_30px_rgba(250,204,21,0.1)]">
                <User className="w-16 h-16 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-2xl font-bold text-primary">Atharva Patil</h3>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary/90">
                  <Code className="w-4 h-4" />
                  <span>Full Stack Developer</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content & Stats */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am Atharva Patil, a passionate developer who loves building beautiful and interactive web experiences. I specialize in modern web technologies and creative UI animations.
              </p>
              <p>
                With expertise in React, Next.js, and cutting-edge frontend frameworks, I transform ideas into stunning digital experiences that captivate users and deliver exceptional performance.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "20+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-card/80 hover:-translate-y-2 transition-all duration-300 shadow-lg"
                >
                  <span className="font-heading text-4xl font-bold text-primary mb-2 drop-shadow-[0_0_8px_rgba(250,204,21,0.3)]">{stat.number}</span>
                  <span className="text-sm font-medium text-foreground/80">{stat.label}</span>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
