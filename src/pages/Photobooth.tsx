import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LiquidBackground } from "@/components/LiquidBackground";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { GlassCard } from "@/components/GlassCard";
import { CTASection } from "@/components/sections/CTASection";
import { Camera, Printer, Share2, Palette, BookOpen, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Printer, title: "Impressions illimitées", description: "Photos imprimées instantanément pour tous vos invités" },
  { icon: Palette, title: "Personnalisation", description: "Template aux couleurs de votre événement" },
  { icon: Sparkles, title: "Accessoires fournis", description: "Large choix de props pour des photos fun" },
  { icon: Share2, title: "Partage digital", description: "Envoi par email et réseaux sociaux" },
  { icon: BookOpen, title: "Album invités", description: "Livre d'or photo en souvenir" },
  { icon: Camera, title: "Qualité pro", description: "Appareil et éclairage professionnels" },
];

const Photobooth = () => {
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
                <Camera className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Photobooth Premium</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Des souvenirs{" "}
                <span className="text-gradient-purple">instantanés</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Offrez à vos invités des moments de fun et des souvenirs photos à emporter. 
                Notre photobooth premium s'intègre parfaitement à votre événement.
              </p>
              
              <Link to="/contact">
                <LiquidButton size="lg">
                  Réserver le photobooth
                </LiquidButton>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Le photobooth{" "}
                <span className="text-gradient-purple">T.S Event</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Une expérience photo complète et personnalisée pour votre événement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="h-full text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-24 bg-muted/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Exemples de{" "}
                <span className="text-gradient-purple">photos</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${i === 1 ? "1527529482837-4698179dc6ce" : i === 2 ? "1519741497674-611481863552" : i === 3 ? "1511795409834-ef04bbd61622" : "1470225620780-dba8ba36b745"}?w=300&h=300&fit=crop`}
                    alt={`Photobooth exemple ${i}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
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

export default Photobooth;
