import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LiquidBackground } from "@/components/LiquidBackground";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { GlassCard } from "@/components/GlassCard";
import { CTASection } from "@/components/sections/CTASection";
import { Heart, Music, Clock, Users, Sparkles, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const timeline = [
  { time: "18h00", title: "Accueil des invités", description: "Musique d'ambiance lounge et jazzy" },
  { time: "19h00", title: "Cocktail & Vin d'honneur", description: "Playlist élégante et festive" },
  { time: "20h00", title: "Repas", description: "Musique de fond adaptée aux échanges" },
  { time: "22h00", title: "Ouverture de bal", description: "Votre chanson, votre moment" },
  { time: "22h30", title: "Soirée dansante", description: "Montée en puissance jusqu'au bout de la nuit" },
];

const features = [
  "Rencontre préalable pour définir vos goûts",
  "Playlist personnalisée selon vos envies",
  "Matériel Pioneer professionnel",
  "Micro pour les discours et animations",
  "Jeux de lumières inclus",
  "Coordination avec les prestataires",
];

const packages = [
  {
    name: "Essentiel",
    description: "L'animation DJ pour votre soirée",
    features: ["5h d'animation", "Système son premium", "Éclairage LED", "1 RDV préparatoire"],
  },
  {
    name: "Premium",
    description: "La formule complète",
    popular: true,
    features: ["7h d'animation", "Son + Lumières pro", "Machine à fumée", "2 RDV préparatoires", "Playlist personnalisée", "Animation cocktail"],
  },
  {
    name: "Prestige",
    description: "L'excellence sans compromis",
    features: ["Animation complète", "Matériel haut de gamme", "Décoration lumineuse", "RDV illimités", "DJ + Saxophoniste", "Photobooth inclus"],
  },
];

const Mariage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <LiquidBackground variant="hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent z-[1]" />
          
          <div className="container mx-auto px-4 relative z-10 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">DJ Mariage</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Une ambiance unique pour votre{" "}
                <span className="text-gradient-purple">jour J</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                De la cérémonie jusqu'au bout de la nuit, je crée une atmosphère sur-mesure 
                qui reflète votre histoire et fait danser tous vos invités.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <LiquidButton size="lg">
                    Devis gratuit
                  </LiquidButton>
                </Link>
                <a href="tel:0631277029">
                  <LiquidButton variant="outline" size="lg">
                    06 31 27 70 29
                  </LiquidButton>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Mon approche pour{" "}
                  <span className="text-gradient-purple">votre mariage</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Chaque mariage est unique et mérite une attention particulière. 
                  Mon rôle est de comprendre vos goûts musicaux, l'ambiance souhaitée 
                  et le profil de vos invités pour créer une playlist parfaitement adaptée.
                </p>
                <p className="text-muted-foreground mb-8">
                  Je prends en compte les moments clés de votre soirée : entrée des mariés, 
                  première danse, animations, jusqu'au bouquet final. Chaque instant est 
                  accompagné par la bonne musique au bon moment.
                </p>
                
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=750&fit=crop"
                    alt="Mariage - Danse des mariés"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-muted/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Déroulé type d'une{" "}
                <span className="text-gradient-purple">soirée de mariage</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Chaque moment est pensé pour créer une progression naturelle vers une ambiance festive.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="w-20 shrink-0 text-right">
                    <span className="text-primary font-display font-bold">{item.time}</span>
                  </div>
                  <div className="relative pb-8 last:pb-0">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary" />
                    <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-border last:hidden" />
                    <div className="pl-8">
                      <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Formules{" "}
                <span className="text-gradient-purple">mariage</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Des formules adaptées à chaque budget. Devis personnalisé sur demande.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className={`h-full ${pkg.popular ? "ring-2 ring-primary" : ""}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                          Populaire
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="font-display text-xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-muted-foreground text-sm">{pkg.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="block">
                      <LiquidButton 
                        variant={pkg.popular ? "primary" : "outline"} 
                        className="w-full"
                      >
                        Demander un devis
                      </LiquidButton>
                    </Link>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Mariage;
