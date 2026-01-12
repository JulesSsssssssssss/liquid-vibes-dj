import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LiquidBackground } from "@/components/LiquidBackground";
import { GlassCard } from "@/components/GlassCard";
import { MapPin, Phone, Mail, Music, Calendar, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocalPageProps {
  city: string;
  region: string;
  postalCodes?: string[];
  description: string;
  landmarks?: string[];
}

const LocalPage = ({ city, region, postalCodes, description, landmarks }: LocalPageProps) => {
  const services = [
    {
      title: "DJ Mariage",
      description: `Animation DJ professionnelle pour votre mariage à ${city}`,
      icon: Music,
    },
    {
      title: "Événements Entreprise",
      description: `Soirées d'entreprise et séminaires dans la région de ${city}`,
      icon: Calendar,
    },
    {
      title: "Photobooth",
      description: `Location de photobooth premium à ${city} et alentours`,
      icon: Award,
    },
  ];

  const testimonials = [
    {
      name: "Marie & Thomas",
      location: city,
      text: `Un grand merci à T.S Event pour avoir animé notre mariage à ${city}. Soirée inoubliable !`,
      rating: 5,
    },
    {
      name: "Société TechCorp",
      location: city,
      text: `Animation professionnelle pour notre séminaire. Nous recommandons vivement leurs services sur ${city}.`,
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <LiquidBackground />
      <Header />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">{region}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DJ Professionnel à{" "}
              <span className="text-gradient-purple">{city}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {description}
            </p>
            {postalCodes && (
              <p className="text-sm text-muted-foreground">
                Zones desservies : {postalCodes.join(", ")}
              </p>
            )}
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nos services à <span className="text-gradient-purple">{city}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <GlassCard key={index} hover className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </GlassCard>
                );
              })}
            </div>
          </div>

          {/* Local Info */}
          {landmarks && landmarks.length > 0 && (
            <div className="mb-20">
              <GlassCard className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Zones d'intervention à {city}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {landmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{landmark}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          )}

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Avis clients à <span className="text-gradient-purple">{city}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <GlassCard key={index} className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* CTA */}
          <GlassCard className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d'un DJ à {city} ?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Contactez T.S Event dès maintenant pour une animation musicale professionnelle 
              à {city} et dans toute la région {region}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  <Mail className="w-4 h-4 mr-2" />
                  Demander un devis
                </Button>
              </a>
              <a href="tel:0631277029">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  06 31 27 70 29
                </Button>
              </a>
            </div>
          </GlassCard>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocalPage;
