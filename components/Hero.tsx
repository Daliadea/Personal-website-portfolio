"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/ui/magnetic-button";
import AnimatedSignature from "@/components/AnimatedSignature";
import LiveStatus from "@/components/LiveStatus";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1C15]/20 via-transparent to-[#0F1C15]/20 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 max-w-5xl w-full px-4"
            style={{ willChange: 'transform, opacity' }}
          >
            {/* Animated Signature - Centered */}
            <motion.div 
              className="flex justify-center mb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <AnimatedSignature />
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground font-serif leading-[1.1] tracking-tight px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ willChange: 'transform, opacity' }}
            >
              A Computing Student
              <br />
              <span className="text-white/90">& Software Developer.</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/80 mx-auto max-w-3xl leading-relaxed px-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ willChange: 'transform, opacity' }}
            >
              Building innovative solutions across full-stack development, 
              game design, and AI-powered systems.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 pt-8 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              style={{ willChange: 'transform, opacity' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MagneticButton className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="default"
                  onClick={() => scrollToSection("projects")}
                  className="w-full sm:w-52 text-base py-6 rounded-lg"
                >
                  View My Work
                </Button>
              </MagneticButton>
              <MagneticButton className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-52 text-base py-6 rounded-lg"
                >
                  Contact Me
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Live Discord Status - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8 flex justify-center"
            >
              <LiveStatus />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

