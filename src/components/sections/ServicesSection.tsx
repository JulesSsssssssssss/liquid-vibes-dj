import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { Heart, Building, PartyPopper, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Heart,
    title: "DJ Mariage",
    description: "Un accompagnement sur-mesure pour le plus beau jour de votre vie. De la cérémonie jusqu'au bout de la nuit.",
    href: "/mariage",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
  },
  {
    icon: Building,
    title: "DJ Entreprise",
    description: "Soirées corporate, séminaires, lancements de produits. Une animation professionnelle et adaptée.",
    href: "/entreprise",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
  },
  {
    icon: PartyPopper,
    title: "Soirée Privée",
    description: "Anniversaires, fêtes entre amis, célébrations. Je m'adapte à tous vos événements privés.",
    href: "/contact",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/20">
      {/* Subtle liquid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient-gold">Prestations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des animations DJ adaptées à chaque type d'événement, avec un service clé en main.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={service.href} className="block h-full">
                <GlassCard className="h-full overflow-hidden p-0 group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/contact">
            <LiquidButton size="lg">
              Demander un devis gratuit
            </LiquidButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export { ServicesSection };
