"use client";

import { motion } from "framer-motion";
import { BentoGrid } from "@/components/ui/bento-grid";
import { 
  Code2, 
  Github, 
  BookOpen,
  UserCircle
} from "lucide-react";

// Minimal card component - no transitions, no effects
const AboutCard = ({
  title,
  description,
  icon: Icon,
  iconColor,
  gradientFrom,
  gradientTo,
  className,
  children,
}: {
  title: string;
  description: React.ReactNode;
  icon: React.ElementType;
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`row-span-1 rounded-lg shadow-2xl p-4 bg-[#0a120d]/60 backdrop-blur-md border border-[#ffffff]/10 flex flex-col space-y-4 h-full ${className}`}
    >
      {/* Header with icon - no transitions */}
      <div 
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg items-center justify-center"
        style={{
          background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <Icon 
          className="w-16 h-16" 
          style={{ 
            color: iconColor,
            fill: iconColor,
            stroke: iconColor,
          }} 
        />
      </div>

      {/* Content */}
      <div>
        <div className="font-serif font-bold text-foreground mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground text-xs">
          {description}
        </div>
        {children}
      </div>
    </div>
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground font-serif">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <BentoGrid className="max-w-6xl mx-auto">
            {/* Who I Am Card */}
            <AboutCard
              title="Who I Am"
              description={
                <div className="space-y-2">
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
              iconColor="#60a5fa"
              gradientFrom="rgba(30, 58, 138, 0.2)"
              gradientTo="rgba(29, 78, 216, 0.2)"
              className="md:col-span-2"
            />

            {/* Core Skills Card */}
            <AboutCard
              title="Core Skills"
              description={null}
              icon={Code2}
              iconColor="#4ade80"
              gradientFrom="rgba(20, 83, 45, 0.2)"
              gradientTo="rgba(21, 128, 61, 0.2)"
              className="md:col-span-1"
            >
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-[#0F1C15]/60 text-foreground rounded text-xs font-medium border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AboutCard>

            {/* Open Source Card */}
            <AboutCard
              title="Open Source Contributor"
              description="I believe in giving back to the community. I actively contribute to open-source projects and maintain several repositories on GitHub. Check out my work and feel free to collaborate!"
              icon={Github}
              iconColor="#c084fc"
              gradientFrom="rgba(88, 28, 135, 0.2)"
              gradientTo="rgba(126, 34, 206, 0.2)"
              className="md:col-span-1"
            >
              <a 
                href="https://github.com/Daliadea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground text-xs underline mt-2 inline-block"
              >
                Visit my GitHub →
              </a>
            </AboutCard>

            {/* Continuous Learner Card */}
            <AboutCard
              title="Continuous Learner"
              description={
                <div className="space-y-2">
                  <p>
                    When I&apos;m not coding, you can find me learning about the latest 
                    development trends, exploring new technologies, or working on side 
                    projects that challenge my skills.
                  </p>
                  <p className="text-muted-foreground text-xs mt-2">
                    Currently learning: AI/ML, Web3, and Advanced System Design
                  </p>
                </div>
              }
              icon={BookOpen}
              iconColor="#facc15"
              gradientFrom="rgba(113, 63, 18, 0.2)"
              gradientTo="rgba(161, 98, 7, 0.2)"
              className="md:col-span-2"
            />
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
