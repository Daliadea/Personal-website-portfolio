"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function SparklesCore({ children }: { children: React.ReactNode }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles: Sparkle[] = [];
    for (let i = 0; i < 30; i++) {
      newSparkles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2,
      });
    }
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="relative w-full h-full">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function SparklesPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-orange-500 to-red-500 rounded-lg overflow-hidden">
      <SparklesCore>{children}</SparklesCore>
    </div>
  );
}

