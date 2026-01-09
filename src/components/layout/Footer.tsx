import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Music2, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Wave Separator */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0V30Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-gradient-gold">T.S</span> EVENT
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              DJ professionnel depuis 2010. Créateur de vibes et de soirées inoubliables à Nantes et en Pays de la Loire.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube, Music2].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Prestations */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Prestations</h4>
            <ul className="space-y-3">
              {[
                { name: "DJ Mariage", href: "/mariage" },
                { name: "DJ Entreprise", href: "/entreprise" },
                { name: "Soirée Privée", href: "/contact" },
                { name: "Location Matériel", href: "/location" },
                { name: "Photobooth", href: "/photobooth" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:0631277029" className="hover:text-primary transition-colors">
                  06 31 27 70 29
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:t.s.event@outlook.fr" className="hover:text-primary transition-colors">
                  t.s.event@outlook.fr
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Nantes & Pays de la Loire</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Informations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Politique de confidentialité
                </Link>
              </li>
              <li className="text-muted-foreground text-sm">
                SIRET : 79228549600040
              </li>
            </ul>
            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                DJ depuis 2010
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                Pioneer Premium
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} T.S Event - Tous droits réservés
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span className="text-primary">★★★★★</span>
            <span>5/5 sur 57 avis Google</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
