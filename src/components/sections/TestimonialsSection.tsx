import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Marie & Pierre",
    event: "Mariage - Nantes",
    text: "Thomas a su créer une ambiance incroyable pour notre mariage. Du cocktail à la fin de soirée, la musique était parfaite. Tous nos invités ont adoré !",
    rating: 5,
  },
  {
    name: "Sophie L.",
    event: "Anniversaire 40 ans",
    text: "Une soirée mémorable grâce à T.S Event ! Thomas s'est adapté à tous les styles et à toutes les générations. Professionnel et très sympathique.",
    rating: 5,
  },
  {
    name: "Entreprise TechCorp",
    event: "Soirée d'entreprise",
    text: "Animation parfaite pour notre soirée annuelle. Matériel de qualité, son irréprochable et une ambiance qui a su fédérer toutes les équipes.",
    rating: 5,
  },
  {
    name: "Julie & Maxime",
    event: "Mariage - La Baule",
    text: "Nous avions beaucoup d'attentes pour notre mariage et Thomas les a toutes dépassées. Sa playlist était exactement ce que nous voulions !",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden bg-muted/10">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm text-primary font-medium">5/5 sur 57 avis Google</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Ce qu'ils <span className="text-gradient-gold">disent de moi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La satisfaction de mes clients est ma priorité. Découvrez leurs témoignages.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full" hover={false}>
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.event}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Trustindex Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50">
            <span className="text-xs text-muted-foreground">Certifié par</span>
            <span className="font-semibold text-foreground">Trustindex</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { TestimonialsSection };
