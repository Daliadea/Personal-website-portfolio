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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1C15]/20 via-transparent to-[#0F1C15]/20 pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-16 lg:gap-20 items-center">
          {/* Left Side - Text and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-left"
          >
            {/* Animated Signature */}
            <AnimatedSignature />
            
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground font-serif leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A Computing Student
              <br />
              <span className="text-white/90">& Software Developer.</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A Computing Student & Software Developer passionate about building
              interactive web experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MagneticButton className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="default"
                  onClick={() => scrollToSection("projects")}
                  className="w-full text-base"
                >
                  View My Work
                </Button>
              </MagneticButton>
              <MagneticButton className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="w-full text-base"
                >
                  Contact Me
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Live Discord Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6"
            >
              <LiveStatus />
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end relative"
          >
            {/* Decorative glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl scale-150 opacity-30" />
            
            {/* Image container with glassmorphism card */}
            <motion.div
              className="relative border-2 border-white/20 p-3 rounded-3xl shadow-2xl shadow-green-900/50"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="/profile.jpg"
                alt="Aiken Lim Wenen"
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] rounded-2xl object-cover hover:scale-105 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              {/* Decorative corner accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-3xl blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

