"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Code2, Database, Cloud, Layers, Zap, Globe2, ChevronDown } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";

const techIcons: Record<string, any> = {
  "Next.js": Code2,
  "React": Code2,
  "TypeScript": Code2,
  "Node.js": Layers,
  "Python": Code2,
  "PostgreSQL": Database,
  "MongoDB": Database,
  "Prisma": Database,
  "Redis": Database,
  "Express": Layers,
  "FastAPI": Layers,
  "Stripe": Cloud,
  "Socket.io": Zap,
  "TailwindCSS": Layers,
  "D3.js": Globe2,
  "Chart.js": Globe2,
  "React DnD": Code2,
  "OpenWeather API": Cloud,
  "Twitter API": Cloud,
};

const projects = [
  {
    id: 1,
    title: "Discrete Event Simulator",
    description:
      "A Java-based discrete event simulation that models a service shop with multiple servers handling customer arrivals, queuing, and service completion using a priority queue-based event system.",
    imageUrl: "/projects/discrete-event-simulator.jpg",
    demoUrl: "https://github.com/Daliadea/Discrete-Event-Simulator",
    repoUrl: "https://github.com/Daliadea/Discrete-Event-Simulator",
    problem: "Understanding and optimizing complex queuing systems in real-world scenarios like bank teller lines, restaurant service operations, and customer support centers is challenging. Traditional analytical methods often fail to capture the dynamic nature of customer arrivals, server availability, and queue management, making it difficult to predict system performance and identify bottlenecks.",
    solution: "Developed an event-driven simulation engine using Java that accurately models service environments with configurable parameters. Implemented a priority queue system for efficient event scheduling, multiple server management with individual queue capacities, and comprehensive statistics tracking. The simulator uses functional programming principles with Java Streams and Suppliers for flexible configuration, providing detailed event logs and performance metrics including average waiting times and service rates.",
    techStack: ["Java", "Data Structures", "Object-Oriented Design", "Functional Programming", "Priority Queues", "Stream API"],
    category: "Backend"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const categories = ["All", "Full Stack", "Frontend", "Backend"];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [showAllTech, setShowAllTech] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleExpandTech = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setShowAllTech(true);
  };

  const handleCollapseTech = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setShowAllTech(false);
  };

  const handleButtonClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    handleLinkClick(url);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <TiltCard>
        <BackgroundGradient
          className="rounded-[--radius] bg-card p-0.5"
          containerClassName="w-full h-full"
        >
          <Card 
            className="h-full flex flex-col bg-[#0a120d]/60 backdrop-blur-md border border-[#ffffff]/10 hover:border-[#ffffff]/20 transition-all duration-300 shadow-2xl group"
          >
            <div 
              className="flex-grow cursor-pointer"
              onClick={() => setDialogOpen(true)}
            >
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-[#f2f0e4]">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-muted rounded-md overflow-hidden">
                  <img
                    src={`https://placehold.co/600x400/0F1C15/ffffff?text=${encodeURIComponent(project.title)}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </div>
            <CardFooter 
              className="flex-col gap-4 items-start relative z-50 pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
              }}
            >
              <div 
                className="flex flex-wrap gap-2 w-full pointer-events-auto" 
                onClick={(e) => {
                  e.stopPropagation();
                  e.nativeEvent.stopImmediatePropagation();
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.nativeEvent.stopImmediatePropagation();
                }}
              >
                {(showAllTech ? project.techStack : project.techStack.slice(0, 3)).map((tech, index) => {
                  const Icon = techIcons[tech] || Code2;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-1 px-2 py-1 bg-white/5 text-white/80 border border-white/10 rounded text-xs"
                    >
                      <Icon className="h-3 w-3" />
                      <span>{tech}</span>
                    </div>
                  );
                })}
                {project.techStack.length > 3 && !showAllTech && (
                  <button
                    type="button"
                    onClick={handleExpandTech}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      e.nativeEvent.stopImmediatePropagation();
                    }}
                    className="px-2 py-1 bg-white/5 text-white/80 border border-white/10 rounded text-xs hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer relative z-[100] pointer-events-auto"
                  >
                    +{project.techStack.length - 3} more
                  </button>
                )}
                {showAllTech && project.techStack.length > 3 && (
                  <button
                    type="button"
                    onClick={handleCollapseTech}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      e.nativeEvent.stopImmediatePropagation();
                    }}
                    className="px-2 py-1 bg-white/5 text-white/80 border border-white/10 rounded text-xs hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer relative z-[100] pointer-events-auto"
                  >
                    Show less
                  </button>
                )}
              </div>
              <div 
                className="flex gap-2 w-full relative z-[100] pointer-events-auto" 
                onClick={(e) => {
                  e.stopPropagation();
                  e.nativeEvent.stopImmediatePropagation();
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.nativeEvent.stopImmediatePropagation();
                }}
              >
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-white/20 text-[#f2f0e4] hover:bg-white/5 relative z-[100] pointer-events-auto"
                  onClick={(e) => handleButtonClick(e, project.demoUrl || project.repoUrl)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                  }}
                >
                  View Project
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-white/20 text-[#f2f0e4] hover:bg-white/5 relative z-[100] pointer-events-auto"
                  onClick={(e) => handleButtonClick(e, project.repoUrl)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                  }}
                >
                  GitHub
                </Button>
              </div>
            </CardFooter>
          </Card>
        </BackgroundGradient>
      </TiltCard>

      <DialogContent className="bg-[#0a120d]/60 backdrop-blur-md border border-[#ffffff]/10 hover:border-[#ffffff]/20 transition-all duration-300 shadow-2xl text-foreground max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#f2f0e4]">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="w-full h-64 bg-muted rounded-md my-4 flex items-center justify-center">
          <span className="text-muted-foreground">Project Screenshot</span>
        </div>

        <DialogDescription className="text-foreground space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">The Problem</h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">My Solution</h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/5 text-white/80 border border-white/10 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DialogDescription>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="outline"
            className="border-white/20 text-[#f2f0e4] hover:bg-white/5"
            onClick={() => window.open(project.repoUrl, "_blank")}
          >
            View on GitHub
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Slice projects based on visible count
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(4);
  }, [selectedCategory]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground font-serif">My Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience in web development.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs uppercase tracking-widest transition-all duration-300 px-4 py-2 rounded-sm ${
                  selectedCategory === category
                    ? "text-white bg-white/10 border border-white/20"
                    : "text-white/40 hover:text-white border border-transparent hover:border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {visibleCount < filteredProjects.length && (
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={handleLoadMore}
                className="group flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 hover:text-white transition-all duration-300"
              >
                <span>Load More Projects</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                </motion.div>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
