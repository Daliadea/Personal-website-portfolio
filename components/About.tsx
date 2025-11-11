"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  Code2, 
  Rocket, 
  Github, 
  BookOpen 
} from "lucide-react";
import { Globe } from "@/components/ui/magic-globe";
import { AnimatedGrid } from "@/components/ui/magic-grid";
import { SparklesPreview } from "@/components/ui/aceternity-sparkles";

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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <BentoGrid className="max-w-6xl mx-auto">
            <BentoGridItem
              title="Who I Am"
              description={
                <div className="space-y-2">
                  <p>
                    I&apos;m a passionate computing student and software developer with a keen
                    interest in creating beautiful, functional, and user-friendly web
                    applications.
                  </p>
                  <p>
                    My journey in software development started with a
                    curiosity about how things work on the web, and has evolved into a
                    deep passion for building digital experiences that make a difference.
                  </p>
                </div>
              }
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-primary to-red-700 items-center justify-center">
                  <Rocket className="h-12 w-12 text-primary-foreground" />
                </div>
              }
              className="md:col-span-2"
            />

            <BentoGridItem
              title="Core Skills"
              description={
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">React</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Next.js</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">TypeScript</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Node.js</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">TailwindCSS</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">Python</span>
                  </div>
                </div>
              }
              header={<AnimatedGrid />}
              className="md:col-span-1"
            />

            <BentoGridItem
              title="Open Source Contributor"
              description="I believe in giving back to the community. I actively contribute to open-source projects and maintain several repositories on GitHub. Check out my work and feel free to collaborate!"
              header={<Globe />}
              icon={
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-xs underline mt-2 inline-block"
                >
                  Visit my GitHub →
                </a>
              }
              className="md:col-span-1"
            />

            <div className="md:col-span-2">
              <SparklesPreview>
                <BentoGridItem
                  title="Continuous Learner"
                  description={
                    <div className="space-y-2">
                      <p>
                        When I&apos;m not coding, you can find me learning about the latest web
                        development trends, exploring new technologies, or working on side
                        projects that challenge my skills.
                      </p>
                      <p className="text-muted-foreground text-xs mt-2">
                        Currently learning: AI/ML, Web3, and Advanced System Design
                      </p>
                    </div>
                  }
                  header={
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-transparent items-center justify-center">
                      <BookOpen className="h-12 w-12 text-primary" />
                    </div>
                  }
                  className="bg-transparent border-none"
                />
              </SparklesPreview>
            </div>
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
