import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LiquidButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const LiquidButton = ({ 
  className, 
  variant = "primary", 
  size = "md", 
  children,
  onClick,
  disabled,
  type = "button"
}: LiquidButtonProps) => {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsla(43,74%,53%,0.4)]",
    secondary: "bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30",
    outline: "bg-transparent border border-primary/50 text-primary hover:bg-primary/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative font-display font-semibold rounded-xl overflow-hidden transition-all duration-500",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export { LiquidButton };
