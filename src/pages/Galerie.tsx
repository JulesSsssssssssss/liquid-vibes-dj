import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LiquidBackground } from "@/components/LiquidBackground";
import { GlassCard } from "@/components/GlassCard";
import { Camera, Video, Music, Sparkles } from "lucide-react";
import { useState } from "react";

const Galerie = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tout", icon: Sparkles },
    { id: "mariage", label: "Mariages", icon: Music },
    { id: "entreprise", label: "Événements Entreprise", icon: Music },
    { id: "photobooth", label: "Photobooth", icon: Camera },
    { id: "setup", label: "Installations", icon: Video },
  ];

  const mediaItems = [
    {
      id: 1,
      type: "image",
      category: "mariage",
      url: "https://images.unsplash.com/photo-1519167758481-83f29da8c865?q=80&w=1200",
      title: "Mariage élégant",
      description: "Soirée dansante inoubliable"
    },
    {
      id: 2,
      type: "image",
      category: "entreprise",
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
      title: "Événement corporate",
      description: "Animation professionnelle"
    },
    {
      id: 3,
      type: "image",
      category: "mariage",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200",
      title: "Réception de mariage",
      description: "Ambiance festive garantie"
    },
    {
      id: 4,
      type: "image",
      category: "setup",
      url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200",
      title: "Installation DJ professionnelle",
      description: "Matériel haut de gamme"
    },
    {
      id: 5,
      type: "image",
      category: "photobooth",
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
      title: "Photobooth en action",
      description: "Souvenirs instantanés"
    },
    {
      id: 6,
      type: "image",
      category: "mariage",
      url: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?q=80&w=1200",
      title: "Première danse",
      description: "Moments magiques"
    },
    {
      id: 7,
      type: "image",
      category: "entreprise",
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200",
      title: "Soirée d'entreprise",
      description: "Team building réussi"
    },
    {
      id: 8,
      type: "image",
      category: "setup",
      url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200",
      title: "Setup complet",
      description: "Lumières et son premium"
    },
    {
      id: 9,
      type: "image",
      category: "mariage",
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200",
      title: "Célébration",
      description: "Joie et énergie"
    },
  ];

  const filteredMedia = selectedCategory === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <LiquidBackground />
      <Header />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Galerie Média</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos plus beaux{" "}
              <span className="text-gradient-purple">moments</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos événements, installations et moments inoubliables capturés en images
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card/50 text-muted-foreground hover:bg-card border border-border"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <GlassCard key={item.id} hover className="overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <GlassCard className="max-w-3xl mx-auto p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Votre événement mérite le{" "}
                <span className="text-gradient-purple">meilleur</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Faites partie de notre galerie en organisant votre événement avec T.S Event
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                Réserver maintenant
              </a>
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Galerie;
