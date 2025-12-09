'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // 1. Instant Mouse Position (The Diamond Pointer)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Smooth Spring Position (The Ring Follower)
  const springConfig = { damping: 25, stiffness: 150 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Global Cursor Hide
    const style = document.createElement('style');
    style.innerHTML = '* { cursor: none !important; }';
    document.head.appendChild(style);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* The Instant Diamond Pointer */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
          x: mouseX, 
          y: mouseY, 
          translateX: '-50%', 
          translateY: '-50%',
          rotate: 45 // Diamond shape
        }}
        animate={{
          scale: isHovering ? 0.8 : 1, // Subtle shrink on hover
        }}
      />
      
      {/* The Fluid Ring Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.3 : 0.6,
          borderWidth: isHovering ? '1px' : '1.5px',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
