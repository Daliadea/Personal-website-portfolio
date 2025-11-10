"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;

    let rotation = 0;

    const drawGlobe = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw globe circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw latitude lines
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        const offset = (i * radius) / 3;
        const latRadius = Math.sqrt(radius * radius - offset * offset);
        ctx.ellipse(
          centerX,
          centerY + offset,
          latRadius,
          latRadius / 3,
          0,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = "rgba(59, 130, 246, 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw longitude lines
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 + rotation;
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          radius * Math.abs(Math.cos(angle)),
          radius,
          Math.PI / 2,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = "rgba(59, 130, 246, 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw connection points
      const points = [
        { x: centerX + radius * 0.5, y: centerY - radius * 0.3 },
        { x: centerX - radius * 0.4, y: centerY + radius * 0.4 },
        { x: centerX + radius * 0.3, y: centerY + radius * 0.5 },
        { x: centerX - radius * 0.6, y: centerY - radius * 0.2 },
      ];

      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.8)";
        ctx.fill();

        // Draw pulse effect
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      rotation += 0.005;
      requestAnimationFrame(drawGlobe);
    };

    drawGlobe();
  }, []);

  return (
    <motion.div
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="w-full h-full"
      />
    </motion.div>
  );
}

