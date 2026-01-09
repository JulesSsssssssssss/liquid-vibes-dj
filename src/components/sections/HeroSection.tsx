import { motion } from "framer-motion";
import { LiquidBackground } from "@/components/LiquidBackground";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { ChevronDown, Star, Music, Calendar, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const categories = [
    { icon: Calendar, label: "Mariages", href: "/mariage" },
    { icon: Music, label: "Bars & Clubs", href: "/contact" },
    { icon: Building2, label: "Événements Pro", href: "/entreprise" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <LiquidBackground variant="hero" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm text-primary font-medium">5/5 sur 57 avis Google</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">DJ Professionnel</span>
            <br />
            <span className="text-gradient-gold">Nantes & Pays de la Loire</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 font-light"
          >
            Créateur de vibes & de soirées inoubliables
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link to="/contact">
              <LiquidButton size="lg">
                Réserver ma soirée
              </LiquidButton>
            </Link>
            <Link to="/mariage">
              <LiquidButton variant="outline" size="lg">
                En savoir plus
              </LiquidButton>
            </Link>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {categories.map((cat, index) => (
              <Link
                key={cat.label}
                to={cat.href}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-muted/30 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <cat.icon className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {cat.label}
                </span>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { HeroSection };
