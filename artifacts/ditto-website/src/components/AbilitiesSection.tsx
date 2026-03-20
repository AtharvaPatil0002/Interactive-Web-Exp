import { motion } from "framer-motion";
import { Sparkles, Replace, Palette } from "lucide-react";

const ABILITIES = [
  {
    icon: Replace,
    title: "Transform",
    description: "Copies the opponent's stats, form, and attacks perfectly.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    icon: Sparkles,
    title: "Limber",
    description: "Its flexible body protects it from paralysis. Always ready to move.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20"
  },
  {
    icon: Palette,
    title: "Imposter",
    description: "Transforms into the opponent immediately upon entering battle.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  }
];

export function AbilitiesSection() {
  return (
    <section id="abilities" className="py-32 px-6 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Unique Abilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            More than just a pink blob.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABILITIES.map((ability, i) => (
            <motion.div
              key={ability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl bg-card border ${ability.border} shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Background gradient flare */}
              <div className={`absolute -right-20 -top-20 w-48 h-48 rounded-full ${ability.bg} blur-3xl group-hover:scale-150 transition-transform duration-700`} />
              
              <div className={`w-14 h-14 rounded-2xl ${ability.bg} flex items-center justify-center mb-6 border ${ability.border} relative z-10`}>
                <ability.icon className={`w-7 h-7 ${ability.color}`} />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-3 relative z-10">{ability.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {ability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
