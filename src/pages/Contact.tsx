import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LiquidBackground } from "@/components/LiquidBackground";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { GlassCard } from "@/components/GlassCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

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
                Parlons de votre{" "}
                <span className="text-gradient-gold">projet</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Une question ? Un projet d'événement ? Contactez-moi pour un devis personnalisé et gratuit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <GlassCard hover={false} className="p-8">
                  <h2 className="font-display text-2xl font-bold mb-6">
                    Demande de devis
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input
                          id="firstName"
                          placeholder="Votre prénom"
                          required
                          className="bg-muted/50 border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input
                          id="lastName"
                          placeholder="Votre nom"
                          required
                          className="bg-muted/50 border-border"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          required
                          className="bg-muted/50 border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="06 XX XX XX XX"
                          className="bg-muted/50 border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventType">Type d'événement</Label>
                      <Select>
                        <SelectTrigger className="bg-muted/50 border-border">
                          <SelectValue placeholder="Sélectionner un type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mariage">Mariage</SelectItem>
                          <SelectItem value="entreprise">Soirée d'entreprise</SelectItem>
                          <SelectItem value="anniversaire">Anniversaire</SelectItem>
                          <SelectItem value="prive">Soirée privée</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date souhaitée</Label>
                        <Input
                          id="date"
                          type="date"
                          className="bg-muted/50 border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Lieu</Label>
                        <Input
                          id="location"
                          placeholder="Ville ou lieu"
                          className="bg-muted/50 border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Votre message</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre projet, vos envies musicales..."
                        rows={5}
                        required
                        className="bg-muted/50 border-border resize-none"
                      />
                    </div>

                    <LiquidButton 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                    </LiquidButton>
                  </form>
                </GlassCard>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-8"
              >
                {/* Photo & Name */}
                <div className="text-center lg:text-left">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto lg:mx-0 mb-4 border-2 border-primary/20">
                    <img
                      src="https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=200&h=200&fit=crop"
                      alt="Thomas Querrien - DJ T.S Event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold">Thomas Querrien</h3>
                  <p className="text-muted-foreground">DJ Professionnel</p>
                </div>

                {/* Contact Info */}
                <GlassCard hover={false} className="p-6">
                  <h4 className="font-display font-semibold mb-4">Coordonnées</h4>
                  <div className="space-y-4">
                    <a href="tel:0631277029" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span>06 31 27 70 29</span>
                    </a>
                    <a href="mailto:t.s.event@outlook.fr" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span>t.s.event@outlook.fr</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <span>Nantes & Pays de la Loire</span>
                    </div>
                  </div>
                </GlassCard>

                {/* Response Time */}
                <GlassCard hover={false} className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold">Réponse rapide</p>
                      <p className="text-sm text-muted-foreground">Sous 24 à 48h maximum</p>
                    </div>
                  </div>
                </GlassCard>

                {/* Social */}
                <div>
                  <h4 className="font-display font-semibold mb-4">Suivez-moi</h4>
                  <div className="flex gap-3">
                    {[
                      { icon: Instagram, href: "#", label: "Instagram" },
                      { icon: Facebook, href: "#", label: "Facebook" },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.05 }}
                        className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* SIRET */}
                <p className="text-sm text-muted-foreground">
                  SIRET : 79228549600040
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
