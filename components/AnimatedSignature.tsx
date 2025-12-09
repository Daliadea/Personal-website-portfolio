"use client";

import { motion } from "framer-motion";

export default function AnimatedSignature() {
  const name = "Aiken Lim Wenen";
  const letters = name.split("");

  // Animation variants for each letter
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.08, // Each letter appears 0.08s after the previous one
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mb-4 overflow-hidden"
    >
      <div className="flex flex-wrap" style={{ fontFamily: "'Dancing Script', cursive" }}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold"
            style={{ 
              display: 'inline-block',
              minWidth: letter === ' ' ? '0.5rem' : 'auto',
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
      
      {/* Import Dancing Script font */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');
      `}</style>
    </motion.div>
  );
}

