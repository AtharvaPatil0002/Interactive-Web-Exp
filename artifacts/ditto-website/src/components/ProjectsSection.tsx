import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "AI Chat App",
    description: "Intelligent conversational AI powered by modern LLMs with real-time responses and context awareness.",
    tags: ["React", "AI", "WebSocket"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
  {
    title: "3D Portfolio Website",
    description: "Immersive portfolio experience with Three.js, featuring stunning 3D models and smooth animations.",
    tags: ["Three.js", "React", "GSAP"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    title: "E-commerce UI",
    description: "Modern e-commerce platform with sleek design, smooth checkout flow, and responsive layout.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    image: "https://cdn.pixabay.com/photo/2020/01/27/09/54/weather-4795924_1280.jpg",
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting application with beautiful UI and accurate meteorological data.",
    tags: ["React", "API", "CSS"],
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c0b?w=800&q=80",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(250,204,21,0.1)]"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay always */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* Hover overlay with action buttons */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full border-2 border-primary text-primary bg-background/60 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full border-2 border-primary text-primary bg-background/60 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
          >
            <ExternalLink className="w-6 h-6" />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-primary mb-2 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] transition-all duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-medium bg-primary/5 hover:bg-primary/10 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom glow line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

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
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
