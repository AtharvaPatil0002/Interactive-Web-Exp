import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Chat App",
    description: "Intelligent conversational AI powered by modern LLMs with real-time responses and context awareness.",
    tags: ["React", "AI", "WebSocket"],
    gradient: "from-blue-900 via-indigo-900 to-black",
    pattern: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 40%)"
  },
  {
    title: "3D Portfolio Website",
    description: "Immersive portfolio experience with Three.js, featuring stunning 3D models and smooth animations.",
    tags: ["Three.js", "React", "GSAP"],
    gradient: "from-zinc-900 via-yellow-900/40 to-black",
    pattern: "linear-gradient(45deg, rgba(250,204,21,0.05) 25%, transparent 25%, transparent 50%, rgba(250,204,21,0.05) 50%, rgba(250,204,21,0.05) 75%, transparent 75%, transparent)"
  },
  {
    title: "E-commerce UI",
    description: "Modern e-commerce platform with sleek design, smooth checkout flow, and responsive layout.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    gradient: "from-neutral-800 to-neutral-950",
    pattern: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 30%)"
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting application with beautiful UI and accurate meteorological data.",
    tags: ["React", "API", "CSS"],
    gradient: "from-cyan-900/60 via-blue-900/40 to-black",
    pattern: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 justify-center md:justify-start"
        >
          <span className="text-primary text-3xl">✦</span>
          <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:border-primary/30 transition-all duration-500"
            >
              {/* Image Placeholder Area */}
              <div 
                className={`h-64 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}
              >
                <div className="absolute inset-0" style={{ backgroundImage: project.pattern, backgroundSize: '20px 20px' }} />
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <a href="#" className="w-14 h-14 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 transform scale-75 group-hover:scale-100 ease-out">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-14 h-14 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 transform scale-75 group-hover:scale-100 ease-out delay-75">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full border border-primary/40 text-primary text-xs font-medium bg-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
