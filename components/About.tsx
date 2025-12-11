"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  Code2, 
  Rocket, 
  Github, 
  BookOpen,
  UserCircle
} from "lucide-react";
import { Globe } from "@/components/ui/magic-globe";
import { AnimatedGrid } from "@/components/ui/magic-grid";
import { SparklesPreview } from "@/components/ui/aceternity-sparkles";
import { TiltCard } from "@/components/ui/tilt-card";

export default function About() {
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
            <TiltCard className="md:col-span-2">
              <BentoGridItem
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
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-700/20 items-center justify-center">
                    <UserCircle className="w-16 h-16 text-blue-400" />
                  </div>
                }
                className="md:col-span-2"
              />
            </TiltCard>

            <TiltCard className="md:col-span-1">
              <BentoGridItem
                title="Core Skills"
                description={
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-[#0F1C15]/60 text-foreground rounded text-xs font-medium border border-white/10">React</span>
                      <span className="px-2 py-1 bg-[#0F1C15]/60 text-foreground rounded text-xs font-medium border border-white/10">Next.js</span>
                      <span className="px-2 py-1 bg-[#0F1C15]/60 text-foreground rounded text-xs font-medium border border-white/10">TypeScript</span>
                      <span className="px-2 py-1 bg-[#0F1C15]/60 text-foreground rounded text-xs font-medium border border-white/10">Node.js</span>
                      <span className="px-2 py-1 bg-[#0F1C15]/60 text-foreground rounded text-xs font-medium border border-white/10">TailwindCSS</span>
                      <span className="px-2 py-1 bg-[#0F1C15]/60 text-foreground rounded text-xs font-medium border border-white/10">Python</span>
                      <span className="px-2 py-1 bg-[#0F1C15]/60 text-foreground rounded text-xs font-medium border border-white/10">Java</span>
                      <span className="px-2 py-1 bg-[#0F1C15]/60 text-foreground rounded text-xs font-medium border border-white/10">Django</span>
                      <span className="px-2 py-1 bg-[#0F1C15]/60 text-foreground rounded text-xs font-medium border border-white/10">Unity</span>
                      <span className="px-2 py-1 bg-[#0F1C15]/60 text-foreground rounded text-xs font-medium border border-white/10">C#</span>
                    </div>
                  </div>
                }
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-green-900/20 to-green-700/20 items-center justify-center">
                    <Code2 className="w-16 h-16 text-green-400" />
                  </div>
                }
                className="md:col-span-1"
              />
            </TiltCard>

            <TiltCard className="md:col-span-1">
              <BentoGridItem
                title="Open Source Contributor"
                description="I believe in giving back to the community. I actively contribute to open-source projects and maintain several repositories on GitHub. Check out my work and feel free to collaborate!"
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-purple-900/20 to-purple-700/20 items-center justify-center">
                    <Github className="w-16 h-16 text-purple-400" />
                  </div>
                }
                icon={
                  <a 
                    href="https://github.com/Daliadea" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-muted-foreground text-xs underline mt-2 inline-block"
                  >
                    Visit my GitHub →
                  </a>
                }
                className="md:col-span-1"
              />
            </TiltCard>

            <TiltCard className="md:col-span-2">
              <BentoGridItem
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
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-yellow-900/20 to-yellow-700/20 items-center justify-center">
                    <BookOpen className="w-16 h-16 text-yellow-400" />
                  </div>
                }
                className="md:col-span-2"
              />
            </TiltCard>
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
