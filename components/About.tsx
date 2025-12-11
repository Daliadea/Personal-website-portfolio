"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  Code2, 
  Github, 
  BookOpen,
  UserCircle,
  Server,
  Database,
  Terminal,
  Cpu,
  Globe,
  FileCode2,
  Gamepad2,
  Palette
} from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";

const SKILLS = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: FileCode2 },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Terminal },
  { name: "Django", icon: Database },
  { name: "Unity", icon: Gamepad2 },
  { name: "TailwindCSS", icon: Palette },
  { name: "Java", icon: Cpu },
  { name: "C#", icon: Code2 },
];

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
                title={<span className="font-serif">Who I Am</span>}
                description={
                  <div className="space-y-2">
                    <p className="leading-relaxed text-slate-300">
                      I&apos;m a passionate computing student and software developer with diverse experience 
                      across full-stack development, game development, and AI-powered applications.
                    </p>
                    <p className="leading-relaxed text-slate-300">
                      My journey in software development started with a curiosity about how systems work, 
                      and has evolved into building everything from healthcare automation tools to 
                      AI-enhanced e-commerce platforms and immersive game experiences.
                    </p>
                  </div>
                }
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
                    <UserCircle className="w-16 h-16 text-emerald-400 relative z-10" />
                  </div>
                }
                className="md:col-span-2"
              />
            </TiltCard>

            <TiltCard className="md:col-span-1">
              <BentoGridItem
                title={<span className="font-serif">Core Skills</span>}
                description={
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {SKILLS.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors"
                          >
                            <IconComponent className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-medium text-white/80">{skill.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                }
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
                    <Code2 className="w-16 h-16 text-emerald-400 relative z-10" />
                  </div>
                }
                className="md:col-span-1"
              />
            </TiltCard>

            <TiltCard className="md:col-span-1">
              <BentoGridItem
                title={<span className="font-serif">Open Source Contributor</span>}
                description={
                  <p className="leading-relaxed text-slate-300">
                    I believe in giving back to the community. I actively contribute to open-source projects and maintain several repositories on GitHub. Check out my work and feel free to collaborate!
                  </p>
                }
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
                    <Github className="w-16 h-16 text-emerald-400 relative z-10" />
                  </div>
                }
                icon={
                  <a 
                    href="https://github.com/Daliadea" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 text-xs underline mt-2 inline-block transition-colors"
                  >
                    Visit my GitHub →
                  </a>
                }
                className="md:col-span-1"
              />
            </TiltCard>

            <TiltCard className="md:col-span-2">
              <BentoGridItem
                title={<span className="font-serif">Continuous Learner</span>}
                description={
                  <div className="space-y-2">
                    <p className="leading-relaxed text-slate-300">
                      When I&apos;m not coding, you can find me learning about the latest 
                      development trends, exploring new technologies, or working on side 
                      projects that challenge my skills.
                    </p>
                    <p className="text-slate-400 text-xs mt-2">
                      Currently learning: AI/ML, Web3, and Advanced System Design
                    </p>
                  </div>
                }
                header={
                  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-emerald-500/10 to-emerald-400/5 items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
                    <BookOpen className="w-16 h-16 text-emerald-400 relative z-10" />
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
