"use client";

import React from "react";
import { motion } from "framer-motion";
import { BentoGrid } from "@/components/ui/bento-grid";
import { 
  Code2, 
  Github, 
  BookOpen,
  UserCircle,
  ArrowRight
} from "lucide-react";

// Card component with Linear-style design
const AboutCard = ({
  title,
  description,
  icon: Icon,
  themeColor,
  className,
  children,
}: {
  title: string;
  description: React.ReactNode;
  icon: React.ElementType;
  themeColor: {
    border: string;
    shadow: string;
    glow: string;
  };
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={`group relative rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:shadow-lg ${className}`}
      style={{
        boxShadow: `0 0 0 0 ${themeColor.shadow}`,
      }}
      whileHover={{
        boxShadow: `0 10px 40px -10px ${themeColor.shadow}`,
        borderColor: themeColor.border,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon with blurred orb */}
      <div className="relative flex items-center justify-center mb-6 min-h-[6rem]">
        {/* Blurred orb background */}
        <div
          className={`absolute w-32 h-32 rounded-full blur-3xl opacity-20 ${themeColor.glow}`}
        />
        <Icon className="relative w-16 h-16 z-10" style={{ color: themeColor.border }} />
      </div>

      {/* Title */}
      <h3 className="font-serif font-bold text-foreground text-xl mb-3 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <div className="text-gray-300 leading-relaxed text-sm mb-4">
          {description}
        </div>
      )}

      {/* Additional content (for skills, links, etc.) */}
      {children}
    </motion.div>
  );
};

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "TailwindCSS",
    "Python",
    "Java",
    "Django",
    "Unity",
    "C#",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground font-serif tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-4">
            {/* Who I Am - 2 columns */}
            <AboutCard
              title="Who I Am"
              description={
                <div className="space-y-3">
                  <p>
                    I&apos;m a passionate computing student and software developer with diverse experience 
                    across full-stack development, game development, and AI-powered applications.
                  </p>
                  <p>
                    My journey in software development started with a curiosity about how systems work, 
                    and has evolved into building everything from healthcare automation tools to 
                    AI-enhanced e-commerce platforms and immersive game experiences.
                  </p>
                </div>
              }
              icon={UserCircle}
              themeColor={{
                border: "#3b82f6", // blue-500
                shadow: "rgba(59, 130, 246, 0.3)",
                glow: "bg-blue-500",
              }}
              className="md:col-span-2"
            />

            {/* Core Skills - 1 column */}
            <AboutCard
              title="Core Skills"
              description={null}
              icon={Code2}
              themeColor={{
                border: "#22c55e", // green-500
                shadow: "rgba(34, 197, 94, 0.3)",
                glow: "bg-green-500",
              }}
              className="md:col-span-1"
            >
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/10 border border-white/5 rounded-md text-xs font-medium text-gray-200 hover:bg-white/20 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AboutCard>

            {/* Open Source - 1 column */}
            <AboutCard
              title="Open Source Contributor"
              description="I believe in giving back to the community. I actively contribute to open-source projects and maintain several repositories on GitHub. Check out my work and feel free to collaborate!"
              icon={Github}
              themeColor={{
                border: "#a855f7", // purple-500
                shadow: "rgba(168, 85, 247, 0.3)",
                glow: "bg-purple-500",
              }}
              className="md:col-span-1"
            >
              <a
                href="https://github.com/Daliadea"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group/link"
              >
                Visit my GitHub
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
              </a>
            </AboutCard>

            {/* Continuous Learner - 2 columns */}
            <AboutCard
              title="Continuous Learner"
              description={
                <div className="space-y-3">
                  <p>
                    When I&apos;m not coding, you can find me learning about the latest 
                    development trends, exploring new technologies, or working on side 
                    projects that challenge my skills.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Currently learning: AI/ML, Web3, and Advanced System Design
                  </p>
                </div>
              }
              icon={BookOpen}
              themeColor={{
                border: "#eab308", // yellow-500
                shadow: "rgba(234, 179, 8, 0.3)",
                glow: "bg-yellow-500",
              }}
              className="md:col-span-2"
            />
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
