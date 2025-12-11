"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedGridProps {
  techs?: string[];
}

export function AnimatedGrid({ techs }: AnimatedGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const gridSize = 30;
    const dots: { x: number; y: number; opacity: number; growing: boolean }[] = [];

    // Create dots at grid intersections
    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        dots.push({
          x,
          y,
          opacity: Math.random() * 0.5,
          growing: Math.random() > 0.5,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw grid lines - dark theme
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and animate dots - dark theme
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity * 0.4})`;
        ctx.fill();

        // Animate opacity
        if (dot.growing) {
          dot.opacity += 0.01;
          if (dot.opacity >= 0.8) dot.growing = false;
        } else {
          dot.opacity -= 0.01;
          if (dot.opacity <= 0.1) dot.growing = true;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-[#0F1C15]/40 items-center justify-center relative overflow-hidden border border-white/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="w-full h-full"
      />
    </motion.div>
  );
}

