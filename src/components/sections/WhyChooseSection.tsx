import { motion } from "framer-motion";
import { Calendar, Settings2, Disc3, Music2 } from "lucide-react";
import heroDjImage from "@/assets/hero-dj.jpg";

const features = [
  {
    icon: Calendar,
    title: "Expérience depuis 2010",
    description: "Plus de 14 ans d'expérience en événementiel, bars et clubs.",
  },
  {
    icon: Settings2,
    title: "Prestation sur-mesure",
    description: "Chaque événement est unique, mon approche aussi.",
  },
  {
    icon: Disc3,
    title: "Matériel Pioneer Premium",
    description: "Équipement professionnel pour une qualité sonore optimale.",
  },
  {
    icon: Music2,
    title: "Mix fluide et festif",
    description: "Des transitions impeccables pour une ambiance continue.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={heroDjImage}
                alt="DJ T.S Event en action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 glass-card p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-display font-bold text-primary-foreground">TS</span>
                  </div>
                  <div>
                    <p className="font-display font-bold">Thomas Querrien</p>
                    <p className="text-sm text-muted-foreground">DJ Professionnel</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Pourquoi <span className="text-gradient-purple">me choisir</span> ?
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10">
              Passionné de musique depuis toujours, je mets mon expertise au service de vos événements. 
              Mon objectif : créer une ambiance unique qui correspond parfaitement à vos attentes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { WhyChooseSection };