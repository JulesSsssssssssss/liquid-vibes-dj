import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Headphones, Sparkles, Gauge } from "lucide-react";

const philosophyItems = [
  {
    icon: Headphones,
    title: "Écoute",
    description: "Comprendre vos envies pour créer une ambiance qui vous ressemble",
  },
  {
    icon: Sparkles,
    title: "Créativité",
    description: "Une sélection musicale pensée dans le détail pour chaque moment",
  },
  {
    icon: Gauge,
    title: "Maîtrise",
    description: "Une technique fiable et une gestion fluide du jour J",
  },
];

const PhilosophySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Ma <span className="text-gradient-purple">Philosophie</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chaque événement est unique. Mon approche s'adapte à vos envies pour créer des moments mémorables.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full text-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                {/* Title */}
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                {/* Description */}
                <p className="text-muted-foreground">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { PhilosophySection };
