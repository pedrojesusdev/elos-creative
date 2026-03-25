"use client";

import { motion } from "framer-motion";

interface GlowOrbProps {
  color?: "purple" | "cyan";
  size?: number;
  className?: string;
  animate?: boolean;
  opacity?: number;
}

export function GlowOrb({ color = "purple", size = 400, className = "", animate = true, opacity = 0.15 }: GlowOrbProps) {
  const colorMap = {
    purple: `rgba(160,32,240,${opacity})`,
    cyan: `rgba(0,255,255,${opacity})`,
  };

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(ellipse at center, ${colorMap[color]} 0%, transparent 70%)`,
        transform: "translate(-50%, -50%)",
      }}
      animate={animate ? {
        scale: [1, 1.1, 1],
        opacity: [opacity * 0.7, opacity, opacity * 0.7],
      } : {}}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
