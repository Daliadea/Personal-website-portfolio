'use client';

import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';

export function CursorSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  
  // Use spring physics for smooth spotlight movement
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Primary spotlight with smooth gradient */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
        style={{
          background: `radial-gradient(
            650px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(76, 175, 80, 0.12), 
            rgba(76, 175, 80, 0.04) 40%,
            transparent 70%
          )`,
        }}
      />
      
      {/* Secondary glow effect for depth */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-50"
        style={{
          background: `radial-gradient(
            400px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(139, 233, 253, 0.08), 
            transparent 60%
          )`,
        }}
      />
      
      {/* Subtle ambient glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 opacity-30"
        style={{
          background: `radial-gradient(
            900px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(76, 175, 80, 0.03), 
            transparent 80%
          )`,
        }}
      />
    </>
  );
}

