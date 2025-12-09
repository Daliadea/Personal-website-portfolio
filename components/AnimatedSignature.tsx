"use client";

import { motion } from "framer-motion";

export default function AnimatedSignature() {
  // SVG path data for an elegant signature-style "Aiken Lim Wenen"
  // This is a simplified handwriting-style path
  const signaturePath = "M10,60 Q15,20 30,35 T50,60 M50,35 Q60,50 70,35 M75,60 Q80,30 90,50 T110,35 M115,60 L115,30 Q120,35 125,30 M130,60 Q135,30 145,45 T160,35 M165,60 L165,30 M165,45 L180,45 M190,60 Q195,30 205,45 T220,35 M225,35 Q230,50 240,35 T255,50 M260,60 Q265,30 275,45 T290,35 M295,60 Q300,20 310,35 T325,50 M330,60 L330,30 Q335,35 340,30 M345,60 Q350,30 360,45 T375,35";

  // Animation variants for path drawing
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2.5,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.3,
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-4"
    >
      <svg
        width="380"
        height="80"
        viewBox="0 0 380 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[280px] sm:max-w-[350px] h-auto"
      >
        <motion.path
          d={signaturePath}
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </motion.div>
  );
}

