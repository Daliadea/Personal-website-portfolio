"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
              <Button
                size="lg"
                variant="default"
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto text-base"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto text-base"
              >
                Contact Me
              </Button>
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
              className="relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://placehold.co/600x600/1a1a1a/ffffff?text=Your+Photo"
                alt="Profile"
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl object-cover border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 backdrop-blur-sm"
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ duration: 0.4 }}
              />
              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl blur-xl -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

