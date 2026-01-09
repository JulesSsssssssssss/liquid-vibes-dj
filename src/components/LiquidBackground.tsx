import { motion } from "framer-motion";

interface LiquidBackgroundProps {
  variant?: "hero" | "section" | "subtle";
}

const LiquidBackground = ({ variant = "hero" }: LiquidBackgroundProps) => {
  const blobConfigs = {
    hero: [
      { color: "bg-electric", size: "w-[600px] h-[600px]", position: "top-0 right-0", delay: 0 },
      { color: "bg-deep-purple", size: "w-[500px] h-[500px]", position: "bottom-0 left-0", delay: 2 },
      { color: "bg-primary", size: "w-[400px] h-[400px]", position: "top-1/2 left-1/3", delay: 4 },
    ],
    section: [
      { color: "bg-electric", size: "w-[400px] h-[400px]", position: "top-0 right-0", delay: 0 },
      { color: "bg-deep-purple", size: "w-[300px] h-[300px]", position: "bottom-0 left-0", delay: 2 },
    ],
    subtle: [
      { color: "bg-primary", size: "w-[300px] h-[300px]", position: "top-1/4 right-1/4", delay: 0 },
    ],
  };

  const blobs = blobConfigs[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-liquid opacity-80" />
      
      {/* Animated blobs */}
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`blob ${blob.color} ${blob.size} ${blob.position} opacity-20`}
          animate={{
            x: [0, 30, -20, -40, 0],
            y: [0, -50, 20, -30, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 8,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
    </div>
  );
};

export { LiquidBackground };
