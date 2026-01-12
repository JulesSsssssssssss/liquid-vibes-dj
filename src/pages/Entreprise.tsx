import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LiquidBackground } from "@/components/LiquidBackground";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { GlassCard } from "@/components/GlassCard";
import { CTASection } from "@/components/sections/CTASection";
import { Building2, Users, Briefcase, PartyPopper, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const eventTypes = [
  {
    icon: PartyPopper,
    title: "Soirées d'entreprise",
    description: "Fêtes de fin d'année, anniversaires d'entreprise, inaugurations.",
  },
  {
    icon: Users,
    title: "Séminaires & Team Building",
    description: "Animation musicale pour renforcer la cohésion d'équipe.",
  },
  {
    icon: Briefcase,
    title: "Lancements produits",
    description: "Créer une ambiance qui sublime votre événement corporate.",
  },
  {
    icon: Award,
    title: "Afterworks",
    description: "Sessions DJ pour des moments de détente entre collègues.",
  },
];

const advantages = [
  "Discrétion et professionnalisme",
  "Matériel compact et haut de gamme",
  "Adaptation au dress code de l'événement",
  "Coordination avec vos équipes",
  "Facturation simplifiée",
  "Devis clair et transparent",
];

const Entreprise = () => {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <Building2 className="w-4 h-4 text-secondary" />
                <span className="text-sm text-secondary font-medium">DJ Entreprise</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Animation DJ pour vos{" "}
                <span className="text-gradient-electric">événements pro</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Des animations musicales professionnelles et adaptées à votre image de marque. 
                Séminaires, lancements, afterworks : je m'adapte à tous vos événements corporate.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <LiquidButton size="lg">
                    Demander un devis
                  </LiquidButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Types d'<span className="text-gradient-purple">événements</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Une expertise adaptée à chaque format d'événement professionnel.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {eventTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <type.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-1">{type.title}</h3>
                      <p className="text-muted-foreground text-sm">{type.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-24 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Pourquoi choisir{" "}
                  <span className="text-gradient-purple">T.S Event</span> ?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fort de mon expérience en événementiel corporate, je comprends les enjeux 
                  de vos événements professionnels et m'adapte à vos exigences.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {advantages.map((advantage) => (
                    <div key={advantage} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=450&fit=crop"
                    alt="Événement d'entreprise"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Entreprise;
