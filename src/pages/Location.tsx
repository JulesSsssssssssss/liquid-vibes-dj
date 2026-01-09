import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LiquidBackground } from "@/components/LiquidBackground";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { GlassCard } from "@/components/GlassCard";
import { Speaker, Disc3, Lightbulb, Wind, Truck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const equipment = [
  {
    icon: Disc3,
    title: "Pack DJ Complet",
    description: "2 platines Pioneer CDJ-2000NXS2 + Table de mixage DJM-900NXS2",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=300&fit=crop",
  },
  {
    icon: Speaker,
    title: "Système Son",
    description: "Enceintes actives QSC K12.2, caissons de basse, micros sans fil",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
  },
  {
    icon: Lightbulb,
    title: "Éclairages",
    description: "Lyres, wash, lasers, barres LED, stroboscopes professionnels",
    image: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=400&h=300&fit=crop",
  },
  {
    icon: Wind,
    title: "Effets spéciaux",
    description: "Machines à fumée, brouillard, confettis, bulles",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
  },
];

const services = [
  {
    icon: Truck,
    title: "Livraison & Installation",
    description: "Je livre, installe et récupère le matériel sur place. Service clé en main disponible.",
  },
  {
    icon: Wrench,
    title: "Assistance technique",
    description: "Formation à l'utilisation et assistance téléphonique pendant votre événement.",
  },
];

const Location = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <LiquidBackground variant="section" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Location de{" "}
                <span className="text-gradient-gold">matériel</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Matériel professionnel Pioneer pour vos événements. Son, lumière, effets : 
                équipez votre soirée comme un pro.
              </p>
              <Link to="/contact">
                <LiquidButton size="lg">
                  Demander un devis
                </LiquidButton>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Equipment Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Notre <span className="text-gradient-gold">catalogue</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Du matériel professionnel entretenu et vérifié avant chaque location.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {equipment.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="overflow-hidden p-0">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="h-full">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/contact">
                <LiquidButton size="lg">
                  Demander un devis location
                </LiquidButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Location;
