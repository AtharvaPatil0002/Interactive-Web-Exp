import { useState } from "react";
import { motion } from "framer-motion";
import { BlobFace } from "./BlobFace";

const FORMS = [
  { id: 'pikachu', name: 'Electric Mouse', color: 'from-[#FDE047] to-[#EAB308]', radius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
  { id: 'bulbasaur', name: 'Seed', color: 'from-[#86EFAC] to-[#22C55E]', radius: '50% 50% 30% 70% / 50% 50% 70% 30%' },
  { id: 'charmander', name: 'Plant', color: 'from-[#6EE7B7] to-[#16A34A]', radius: '60% 40% 40% 60% / 50% 50% 50% 50%' },
  { id: 'squirtle', name: 'Tiny Turtle', color: 'from-[#93C5FD] to-[#3B82F6]', radius: '70% 30% 50% 50% / 60% 60% 40% 40%' },
  { id: 'jigglypuff', name: 'Balloon', color: 'from-[#F9A8D4] to-[#EC4899]', radius: '50% 50% 50% 50% / 50% 50% 50% 50%' },
  { id: 'gengar', name: 'Balloon', color: 'from-[#C084FC] to-[#7E22CE]', radius: '40% 60% 30% 70% / 30% 60% 40% 70%' },
];

export function TransformSection() {
  const [activeForm, setActiveForm] = useState<typeof FORMS[0] | null>(null);

  return (
    <section id="transform" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Transformations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Hover over a form to see Ditto adapt. Notice the eyes never change!
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Target Display */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Pedestal */}
              <div className="absolute bottom-0 w-64 h-8 bg-primary/10 rounded-[100%] blur-md" />
              
              <motion.div
                layout
                animate={activeForm ? {
                  borderRadius: activeForm.radius,
                  scale: 1.1,
                } : {
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                  scale: 1,
                }}
                transition={{ type: "spring", damping: 15, stiffness: 100 }}
                className={`w-64 h-64 shadow-2xl relative transition-colors duration-500 bg-gradient-to-br ${activeForm ? activeForm.color : 'from-primary to-accent'}`}
              >
                <BlobFace isSmiling={!activeForm} />
                
                {/* Gloss */}
                <div className="absolute top-6 left-6 w-20 h-10 bg-white/20 rounded-full blur-sm rotate-[-20deg]" />
              </motion.div>
            </div>
          </div>

          {/* Form Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {FORMS.map((form, i) => (
              <motion.div
                key={form.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onHoverStart={() => setActiveForm(form)}
                onHoverEnd={() => setActiveForm(null)}
                className={`
                  p-6 rounded-3xl cursor-pointer border-2 transition-all duration-300
                  ${activeForm?.id === form.id 
                    ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20 scale-105' 
                    : 'border-border/50 bg-card hover:border-primary/50 hover:bg-secondary/30'}
                `}
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${form.color} opacity-80`} />
                <h3 className="text-center font-bold text-sm">{form.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
