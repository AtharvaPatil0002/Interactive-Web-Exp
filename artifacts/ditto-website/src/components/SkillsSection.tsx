import { motion } from "framer-motion";
import { Terminal, Wrench } from "lucide-react";

const frontendSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "React", level: 88 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 90 },
];

const toolsSkills = [
  { name: "Git", level: 87 },
  { name: "Figma", level: 82 },
  { name: "Three.js", level: 78 },
  { name: "GSAP", level: 80 },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span className="text-foreground">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
        </motion.div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 justify-center md:justify-start"
        >
          <span className="text-primary text-3xl">✦</span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground">Skills & Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Frontend Skills Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Terminal className="text-primary w-6 h-6" />
              <h3 className="font-heading text-2xl font-bold text-primary">Frontend Skills</h3>
            </div>
            
            <div className="space-y-8">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>

          {/* Tools Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="text-primary w-6 h-6" />
              <h3 className="font-heading text-2xl font-bold text-primary">Tools</h3>
            </div>
            
            <div className="space-y-8">
              {toolsSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
