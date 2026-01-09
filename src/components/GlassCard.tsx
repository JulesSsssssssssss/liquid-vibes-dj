import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        "glass-card p-6 relative group",
        hover && "liquid-border cursor-pointer",
        className
      )}
    >
      {/* Liquid glow effect on hover */}
      {hover && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-secondary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
      )}
      {children}
    </motion.div>
  );
};

export { GlassCard };
