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
import { Code2, Database, Cloud, Layers, Zap, Globe2, ChevronDown, Github, ExternalLink, FileText } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";

// Helper function to parse date strings and extract end date for sorting
const parseDate = (dateString: string): Date => {
  // Handle "Present" dates - sort them to the top (use future date)
  if (dateString.includes("Present")) {
    return new Date(9999, 11, 31); // Far future date to sort to top
  }
  
  // Extract the end date from formats like "Feb 2024 - Jun 2024" or "Jun 2024"
  const parts = dateString.split('-').map(part => part.trim());
  const endDate = parts.length > 1 ? parts[1] : parts[0];
  
  // Parse month and year
  const [month, year] = endDate.split(' ');
  const monthMap: Record<string, number> = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  
  return new Date(parseInt(year), monthMap[month] || 0);
};

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
  "Framer Motion": Zap,
  "Discord API": Cloud,
  "Lucide Icons": Globe2,
  "D3.js": Globe2,
  "Chart.js": Globe2,
  "React DnD": Code2,
  "OpenWeather API": Cloud,
  "Twitter API": Cloud,
  "Unity": Layers,
  "C#": Code2,
  "ShaderLab": Layers,
  "HLSL": Code2,
  "NavMesh": Layers,
  "AI Systems": Zap,
  "Game Development": Layers,
  "3D Graphics": Globe2,
  "Telegram API": Cloud,
  "Workflow Automation": Zap,
};

const projects = [
  {
    id: 1,
    title: "Discrete Event Simulator",
    description:
      "A Java-based discrete event simulation that models a service shop with multiple servers handling customer arrivals, queuing, and service completion using a priority queue-based event system.",
    imageUrl: "/projects/discrete-event-simulator.jpg",
    imageCaption: "Console output showing real-time event logs with timestamps, customer flow through the queue system, and final performance statistics (average wait times, throughput metrics)",
    demoUrl: "https://github.com/Daliadea/Discrete-Event-Simulator",
    repoUrl: "https://github.com/Daliadea/Discrete-Event-Simulator",
    date: "Feb 2024 - Jun 2024",
    problem: "Understanding and optimizing complex queuing systems in real-world scenarios like bank teller lines, restaurant service operations, and customer support centers is challenging. Traditional analytical methods often fail to capture the dynamic nature of customer arrivals, server availability, and queue management, making it difficult to predict system performance and identify bottlenecks.",
    solution: "Developed an event-driven simulation engine using Java that accurately models service environments with configurable parameters. Implemented a priority queue system for efficient event scheduling, multiple server management with individual queue capacities, and comprehensive statistics tracking. The simulator uses functional programming principles with Java Streams and Suppliers for flexible configuration, providing detailed event logs and performance metrics including average waiting times and service rates.",
    techStack: ["Java", "Data Structures", "Object-Oriented Design", "Functional Programming", "Priority Queues", "Stream API"],
    category: "Backend"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern, interactive portfolio website built with Next.js 14 featuring smooth animations, custom UI components, and a responsive design to showcase my projects and skills.",
    imageUrl: "/projects/portfolio-website.jpg",
    imageCaption: "Interactive portfolio interface showcasing smooth animations, glassmorphic design elements, and responsive layout across different sections",
    demoUrl: "https://personal-website-portfolio-sandy.vercel.app/",
    repoUrl: "https://github.com/Daliadea/Personal-website-portfolio",
    date: "Dec 2025",
    problem: "Creating a personal portfolio that stands out in a sea of generic templates while maintaining professional aesthetics and optimal performance is challenging. Many portfolios lack personality, have poor mobile experiences, or sacrifice performance for visual effects. Finding the right balance between creativity and usability while showcasing technical skills effectively requires careful design and implementation.",
    solution: "Built a fully custom portfolio website using Next.js 14 with App Router for optimal performance and SEO. Implemented a variety of custom UI components including animated signature, tilt cards, magnetic buttons, and particle effects using Framer Motion for smooth, performant animations. Created a glassmorphic design system with TailwindCSS for modern aesthetics while maintaining accessibility. Integrated custom cursor effects, spotlight animations, and interactive elements that enhance user engagement without compromising load times. Added real-time live activity status using Discord API to display current online presence and activities, providing visitors with dynamic, up-to-date information. The site features a responsive grid layout, dynamic project filtering, and optimized images for fast loading across all devices.",
    techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Discord API", "Lucide Icons"],
    category: "Frontend"
  },
  {
    id: 3,
    title: "Metamorphosis",
    description:
      "A Kafka-inspired horror game where you play as an office worker slowly mutating into a monstrous insect over five days. Navigate social stealth mechanics, manage suspicion levels, and complete daily tasks while desperately hiding your grotesque transformation from family and coworkers.",
    imageUrl: "/projects/metamorphosis-game.png",
    imageCaption: "Image of the house Gregory stays in, a hand-designed 3D level featuring rustic wooden interiors, atmospheric lighting with chandeliers and table lamps, and detailed environmental design",
    demoUrl: "https://drive.google.com/drive/folders/1XcHM_xRltvaZQDkb4Nkm7-KjdL8WYlDQ",
    repoUrl: "https://github.com/Daliadea/Metamorphosis-game",
    date: "May 2024 - Jul 2024",
    problem: "Traditional horror games focus on escaping monsters, but creating a game where the player becomes the monster requires a fundamentally different approach. The challenge lies in shifting horror from external threats to internal transformation—capturing the psychological anxiety of alienation and the physical horror of losing control over one's own body in a social setting. This requires sophisticated AI systems that make NPCs feel like real observers, a dynamic suspicion system that responds to player actions, and visual transformation mechanics that convey gradual bodily decay while maintaining gameplay clarity.",
    solution: "Developed Metamorphosis, a Unity-based horror game inspired by Kafka's novella that subverts traditional horror tropes. Implemented a sophisticated social stealth system with a dynamic Suspicion Meter that tracks NPC awareness, requiring players to avoid well-lit areas and hide mutations (like scratching chitin skin) when being observed. Created intelligent AI systems using Field-of-View (FOV) detection, head-tracking, and NavMesh-based random wandering behaviors that make NPCs unpredictable and realistic observers. Built time-based office minigames (answering phones, typing emails, cleaning) that become increasingly difficult as the player's body mutates. Utilized custom ShaderLab and HLSL shaders to create visual transformation effects that show the gradual metamorphosis over five in-game days. Implemented C# scripts for game logic, state management, and AI behavior trees. The game successfully captures the unique horror of becoming the monster rather than fleeing from it, focusing on the anxiety of social alienation and physical transformation.",
    techStack: ["Unity", "C#", "ShaderLab", "HLSL", "NavMesh", "AI Systems", "Game Development", "3D Graphics"],
    category: "Game Development"
  },
  {
    id: 4,
    title: "NUH Radiology Chatbot",
    description:
      "Developed a chatbot prototype for the Department of Diagnostic Radiology to streamline workflow processes. Received official commendation for technical expertise and innovation.",
    imageUrl: "/projects/nuh-radiology-chatbot.jpg",
    imageCaption: "Chatbot interface for NUH Radiology Department workflow automation",
    demoUrl: "#",
    repoUrl: "",
    pdfUrl: "/assets/NUH_Letter.pdf",
    date: "Feb 2025 - Present",
    problem: "Healthcare departments face significant challenges in managing workflow processes efficiently, especially in diagnostic radiology where timely communication and task management are critical. Manual processes can lead to delays, miscommunication, and increased administrative burden on staff. There is a need for automated solutions that can streamline workflows while maintaining accuracy and compliance with healthcare standards.",
    solution: "Developed a chatbot prototype for the Department of Diagnostic Radiology at NUH to automate and streamline workflow processes. Built using Python with Telegram API integration to create an intuitive interface for staff interactions. Implemented workflow automation features that reduce manual tasks and improve response times. The solution received official commendation for technical expertise and innovation, demonstrating the ability to create practical, impactful solutions for healthcare environments. The chatbot successfully addresses real-world workflow challenges while maintaining the reliability and security standards required in medical settings.",
    techStack: ["Python", "Telegram API", "Workflow Automation"],
    category: "Full Stack"
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

const categories = ["All", "Full Stack", "Frontend", "Backend", "Game Development"];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [showAllTech, setShowAllTech] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleTechToggle = () => {
    setShowAllTech(!showAllTech);
  };

  const handleViewProject = () => {
    window.open(project.demoUrl || project.repoUrl, "_blank");
  };

  const handleViewGitHub = () => {
    if (project.repoUrl) {
      window.open(project.repoUrl, "_blank");
    }
  };

  const handleViewPDF = () => {
    window.open(project.pdfUrl, "_blank");
  };

  return (
    <>
      <TiltCard>
        <Card className="h-full flex flex-col bg-[#0a120d]/60 backdrop-blur-md border border-[#ffffff]/10 hover:border-[#ffffff]/20 transition-all duration-300 shadow-2xl relative">
          {/* Date in top right - Absolute positioning relative to card */}
          <div className="absolute top-6 right-6 text-xs text-white/40 font-mono z-10 pointer-events-none">
            {project.date}
          </div>
          
          {/* Card Header - Clickable to open dialog */}
          <div 
            className="cursor-pointer"
            onClick={() => setDialogOpen(true)}
          >
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-[#f2f0e4] pr-32">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-48 bg-muted rounded-md overflow-hidden">
                <img
                  src={`https://placehold.co/600x400/0F1C15/ffffff?text=${encodeURIComponent(project.title)}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </CardContent>
          </div>

          {/* Card Footer - NOT clickable for dialog */}
          <CardFooter className="flex-col gap-4 items-start mt-auto">
            {/* Tech Stack */}
            <motion.div 
              layout
              className="flex flex-wrap gap-2 w-full"
            >
              <AnimatePresence mode="popLayout">
                {(showAllTech ? project.techStack : project.techStack.slice(0, 3)).map((tech, index) => {
                  const Icon = techIcons[tech] || Code2;
                  return (
                    <motion.div
                      key={tech}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      className="flex items-center gap-1 px-2 py-1 bg-white/5 text-white/80 border border-white/10 rounded text-xs"
                    >
                      <Icon className="h-3 w-3" />
                      <span>{tech}</span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              {project.techStack.length > 3 && (
                <motion.button
                  layout
                  onClick={handleTechToggle}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2 py-1 bg-white/5 text-white/80 border border-white/10 rounded text-xs hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                >
                  {showAllTech ? 'Show less' : `+${project.techStack.length - 3} more`}
                </motion.button>
              )}
            </motion.div>

            {/* Action Buttons - Bottom Right */}
            <div className="flex gap-2 w-full justify-end">
              {project.pdfUrl ? (
                <motion.button
                  onClick={handleViewPDF}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/5 text-white/80 border border-white/10 rounded hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label="View PDF"
                >
                  <FileText className="h-4 w-4" />
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleViewGitHub}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/5 text-white/80 border border-white/10 rounded hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label="View on GitHub"
                >
                  <Github className="h-4 w-4" />
                </motion.button>
              )}
              <motion.button
                onClick={handleViewProject}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/5 text-white/80 border border-white/10 rounded hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="Live Demo"
              >
                <ExternalLink className="h-4 w-4" />
              </motion.button>
            </div>
          </CardFooter>
        </Card>
      </TiltCard>

      {/* Dialog for project details */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-[#0a120d]/60 backdrop-blur-md border border-[#ffffff]/10 hover:border-[#ffffff]/20 transition-all duration-300 shadow-2xl text-foreground max-w-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-[#f2f0e4]">{project.title}</DialogTitle>
          </DialogHeader>
          
          <div className="w-full h-64 bg-muted rounded-md my-4 overflow-hidden">
            <img
              src={project.imageUrl || `https://placehold.co/800x400/0F1C15/ffffff?text=${encodeURIComponent(project.title)}`}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-contain bg-[#0a120d]"
            />
          </div>

          {project.imageCaption && (
            <div className="text-center mb-4">
              <p className="text-xs text-muted-foreground italic">
                {project.imageCaption}
              </p>
            </div>
          )}

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
            {project.pdfUrl ? (
              <Button
                variant="outline"
                className="border-white/20 text-[#f2f0e4] hover:bg-white/5"
                onClick={handleViewPDF}
              >
                View PDF
              </Button>
            ) : (
              <Button
                variant="outline"
                className="border-white/20 text-[#f2f0e4] hover:bg-white/5"
                onClick={handleViewGitHub}
              >
                View on GitHub
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  // Filter and sort projects based on selected category (newest first)
  const filteredProjects = (selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory))
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
    });

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
