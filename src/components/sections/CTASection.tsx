import { motion } from "framer-motion";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { LiquidBackground } from "@/components/LiquidBackground";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <LiquidBackground variant="section" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Prêt à créer une{" "}
            <span className="text-gradient-gold">soirée inoubliable</span> ?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Contactez-moi pour discuter de votre projet. Devis gratuit et personnalisé.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <LiquidButton size="lg">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </LiquidButton>
            </Link>
            <a href="tel:0631277029">
              <LiquidButton variant="outline" size="lg">
                <Phone className="w-5 h-5" />
                06 31 27 70 29
              </LiquidButton>
            </a>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {["DJ depuis 2010", "Matériel Pioneer", "Nantes & Pays de la Loire"].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full bg-muted/30 text-muted-foreground text-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { CTASection };
