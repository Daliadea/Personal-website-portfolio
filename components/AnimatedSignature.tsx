"use client";

import { motion } from "framer-motion";

export default function AnimatedSignature() {
  // SVG path data for "Aiken Lim Wenen" in handwriting style
  // Each letter/section will be animated sequentially from left to right
  
  // "Aiken" - First name
  const aikenPath = "M15,45 Q20,25 25,35 L30,55 M25,40 L35,40 M40,55 L40,35 Q45,55 50,35 M55,55 Q55,35 65,35 Q65,55 70,45 M75,50 Q75,35 80,35 Q85,35 85,45 L85,55";
  
  // "Lim" - Middle name
  const limPath = "M105,55 L105,35 M105,55 L115,55 M125,55 L125,35 Q130,55 135,35 M140,55 L140,35 Q145,55 150,35";
  
  // "Wenen" - Last name
  const wenenPath = "M170,55 L175,35 L180,55 L185,35 L190,55 M200,50 Q200,35 205,35 Q210,35 210,45 L210,55 M220,35 Q220,55 230,55 Q230,35 235,45 M245,50 Q245,35 250,35 Q255,35 255,45 L255,55 M265,35 Q265,55 275,55 Q275,35 280,45";

  // Animation variants with sequential timing
  const createPathVariants = (delay: number) => ({
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 1.2,
          ease: "easeInOut",
          delay,
        },
        opacity: {
          duration: 0.1,
          delay,
        },
      },
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-4"
    >
      <svg
        width="300"
        height="70"
        viewBox="0 0 300 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[250px] sm:max-w-[300px] h-auto"
      >
        {/* Aiken - animates first */}
        <motion.path
          d={aikenPath}
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={createPathVariants(0)}
          initial="hidden"
          animate="visible"
        />
        
        {/* Lim - animates second */}
        <motion.path
          d={limPath}
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={createPathVariants(1.2)}
          initial="hidden"
          animate="visible"
        />
        
        {/* Wenen - animates third */}
        <motion.path
          d={wenenPath}
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={createPathVariants(2.4)}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </motion.div>
  );
}

