import { motion } from "framer-motion";

const STATS = [
  { name: "HP", value: 48, max: 255, color: "bg-green-500" },
  { name: "Attack", value: 48, max: 255, color: "bg-red-500" },
  { name: "Defense", value: 48, max: 255, color: "bg-orange-500" },
  { name: "Sp. Atk", value: 48, max: 255, color: "bg-blue-500" },
  { name: "Sp. Def", value: 48, max: 255, color: "bg-indigo-500" },
  { name: "Speed", value: 48, max: 255, color: "bg-pink-500" },
];

export function StatsSection() {
  return (
    <section id="stats" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-2xl relative overflow-hidden">
        
        {/* Decorative background blob */}
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col md:flex-row gap-12 relative z-10">
          <div className="w-full md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
              Base Stats
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-8"
            >
              Perfectly balanced, as all things should be. Until it transforms, of course.
            </motion.p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
              <span className="text-sm font-bold text-muted-foreground">Total</span>
              <span className="text-xl font-black text-primary">288</span>
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-5">
            {STATS.map((stat, i) => {
              const percentage = (stat.value / stat.max) * 100;
              return (
                <div key={stat.name} className="flex items-center gap-4">
                  <div className="w-24 text-sm font-bold text-muted-foreground shrink-0 uppercase tracking-wider">
                    {stat.name}
                  </div>
                  <div className="w-10 text-right font-mono font-bold text-foreground shrink-0">
                    {stat.value}
                  </div>
                  <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className={`h-full ${stat.color} rounded-full`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
