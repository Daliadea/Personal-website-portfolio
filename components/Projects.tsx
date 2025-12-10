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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and user authentication.",
    imageUrl: "/projects/ecommerce.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/ecommerce",
    problem: "Small businesses struggle with expensive, complex e-commerce platforms that require technical expertise to set up and maintain. Many existing solutions lack real-time inventory tracking, leading to overselling and customer dissatisfaction.",
    solution: "Built a streamlined e-commerce platform using Next.js and Stripe for payments. Implemented real-time inventory management with WebSockets to prevent overselling. Created an intuitive admin dashboard that allows business owners to manage products, orders, and inventory without technical knowledge.",
    techStack: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL", "TailwindCSS"],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
    imageUrl: "/projects/taskmanager.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/taskmanager",
    problem: "Remote teams need better tools to coordinate work and track project progress. Existing solutions are either too complex (like Jira) or too simple (like basic to-do lists), lacking the balance between power and usability.",
    solution: "Developed a collaborative task management application with an intuitive drag-and-drop interface using React DnD. Integrated real-time updates via Socket.io so team members see changes instantly. Implemented role-based permissions and project workspaces for better organization.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "React DnD", "Express"],
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.",
    imageUrl: "/projects/weather.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/weather",
    problem: "Weather apps typically show basic forecasts but lack comprehensive historical data visualization and personalized severe weather alerts based on user preferences and location.",
    solution: "Created an interactive weather dashboard that aggregates data from multiple weather APIs. Built custom data visualization charts using D3.js to display historical trends. Implemented geolocation-based alerts with customizable notification preferences for different weather events.",
    techStack: ["React", "D3.js", "OpenWeather API", "Chart.js", "Node.js", "Redis"],
    category: "Frontend"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics platform for tracking social media metrics, engagement rates, and audience insights across multiple platforms.",
    imageUrl: "/projects/analytics.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/analytics",
    problem: "Content creators and businesses struggle to track performance across multiple social media platforms, requiring them to log into each platform separately and manually compile data for analysis.",
    solution: "Built a unified analytics dashboard that aggregates data from Twitter, Instagram, and LinkedIn APIs. Implemented automated daily reports and trend analysis using machine learning to identify optimal posting times. Created customizable widgets for monitoring key metrics in real-time.",
    techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Twitter API", "Chart.js"],
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Crypto Trading Dashboard",
    description:
      "Real-time cryptocurrency trading platform with live price charts, portfolio tracking, and automated trading strategies.",
    imageUrl: "/projects/crypto.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/crypto",
    problem: "Crypto traders need to monitor multiple exchanges and coins simultaneously, but most platforms lack sophisticated charting tools and automated trading capabilities for retail investors.",
    solution: "Developed a comprehensive trading dashboard with real-time WebSocket connections to major exchanges. Implemented advanced charting with TradingView integration and built a backtesting engine for automated trading strategies. Added portfolio analytics and tax reporting features.",
    techStack: ["React", "TypeScript", "WebSockets", "Chart.js", "Node.js", "Redis"],
    category: "Frontend"
  },
  {
    id: 6,
    title: "AI Image Generator",
    description:
      "AI-powered image generation platform using Stable Diffusion with custom training capabilities and style transfer.",
    imageUrl: "/projects/ai-image.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/ai-image",
    problem: "Artists and designers want to leverage AI for creative work but find existing tools limiting in customization and lacking fine-grained control over the generation process.",
    solution: "Built an AI image generation platform with custom model training using Stable Diffusion. Implemented advanced prompt engineering tools, style transfer capabilities, and batch processing. Created a community gallery where users can share and remix prompts.",
    techStack: ["Python", "FastAPI", "PyTorch", "React", "PostgreSQL", "Redis"],
    category: "Backend"
  },
  {
    id: 7,
    title: "Video Streaming Platform",
    description:
      "Netflix-style streaming service with adaptive bitrate streaming, content recommendations, and offline downloads.",
    imageUrl: "/projects/streaming.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/streaming",
    problem: "Content creators need affordable streaming infrastructure that scales with their audience, but building video platforms requires complex CDN setup and encoding pipelines.",
    solution: "Created a full-stack streaming platform using HLS for adaptive streaming. Implemented video transcoding pipeline with FFmpeg, CDN integration for global delivery, and ML-based content recommendations. Added user profiles, watch history, and offline viewing support.",
    techStack: ["Next.js", "Node.js", "FFmpeg", "MongoDB", "Redis", "AWS S3"],
    category: "Full Stack"
  },
  {
    id: 8,
    title: "Fitness Tracking App",
    description:
      "Mobile-first fitness application with workout plans, progress tracking, nutrition logging, and social challenges.",
    imageUrl: "/projects/fitness.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/fitness",
    problem: "Fitness enthusiasts struggle to maintain consistent workout routines and track progress across multiple metrics like strength, cardio, and nutrition in a single unified platform.",
    solution: "Developed a comprehensive fitness tracking app with customizable workout plans and automatic progress tracking. Integrated nutrition database API for meal logging and implemented social features for challenges and accountability. Added data visualization for long-term trend analysis.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "TailwindCSS"],
    category: "Frontend"
  },
  {
    id: 9,
    title: "API Gateway Service",
    description:
      "High-performance API gateway with rate limiting, authentication, caching, and request transformation.",
    imageUrl: "/projects/api-gateway.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/api-gateway",
    problem: "Microservices architectures need a centralized gateway to handle authentication, rate limiting, and request routing, but existing solutions are either expensive or difficult to configure.",
    solution: "Built a scalable API gateway using Node.js and Redis for caching and rate limiting. Implemented JWT authentication, request/response transformation, and intelligent routing. Added monitoring dashboard with real-time metrics and alerting capabilities.",
    techStack: ["Node.js", "TypeScript", "Redis", "MongoDB", "Express", "Prometheus"],
    category: "Backend"
  },
  {
    id: 10,
    title: "Restaurant Reservation System",
    description:
      "Complete restaurant management platform with table reservations, waitlist management, and customer analytics.",
    imageUrl: "/projects/restaurant.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/restaurant",
    problem: "Restaurants lose revenue from no-shows and inefficient table management. Phone-based reservation systems are error-prone and don't integrate with customer data.",
    solution: "Created an end-to-end reservation platform with real-time table availability and automated SMS confirmations. Implemented waitlist management with estimated wait times and customer preference tracking. Added analytics dashboard for optimizing table turnover and reducing no-shows.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Twilio", "Stripe"],
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

const categories = ["All", "Full Stack", "Frontend", "Backend"];

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
                <Dialog>
                  <TiltCard>
                    <BackgroundGradient
                      className="rounded-[--radius] bg-card p-0.5"
                      containerClassName="w-full h-full"
                    >
                      <Card 
                        className="h-full flex flex-col bg-[#0a120d]/60 backdrop-blur-md border border-[#ffffff]/10 hover:border-[#ffffff]/20 transition-all duration-300 shadow-2xl group"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                      <DialogTrigger asChild>
                        <div className="cursor-pointer flex-grow">
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
                      </DialogTrigger>
                      <CardFooter className="flex-col gap-4 items-start">
                        <div className="flex flex-wrap gap-2 w-full">
                          {project.techStack.slice(0, 3).map((tech, index) => {
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
                          {project.techStack.length > 3 && (
                            <span className="px-2 py-1 bg-white/5 text-white/80 border border-white/10 rounded text-xs">
                              +{project.techStack.length - 3} more
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2 w-full">
                          <Button
                            variant="outline"
                            className="flex-1 border-white/20 text-[#f2f0e4] hover:bg-white/5"
                            onClick={() => window.open(project.demoUrl, "_blank")}
                          >
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 border-white/20 text-[#f2f0e4] hover:bg-white/5"
                            onClick={() => window.open(project.repoUrl, "_blank")}
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
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/20 text-[#f2f0e4] hover:bg-white/5"
                        onClick={() => window.open(project.repoUrl, "_blank")}
                      >
                        GitHub
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
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
