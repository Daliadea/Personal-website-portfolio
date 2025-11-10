"use client";

import { motion } from "framer-motion";
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
import { Code2, Database, Cloud, Layers, Zap, Globe2 } from "lucide-react";

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
    techStack: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL", "TailwindCSS"]
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
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "React DnD", "Express"]
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
    techStack: ["React", "D3.js", "OpenWeather API", "Chart.js", "Node.js", "Redis"]
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
    techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Twitter API", "Chart.js"]
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">My Work</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience in web development.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <Dialog>
                  <Card 
                    className="h-full flex flex-col bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DialogTrigger asChild>
                      <div className="cursor-pointer flex-grow">
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="w-full h-48 bg-zinc-800 rounded-md overflow-hidden">
                            <img
                              src={`https://placehold.co/600x400/27272a/3b82f6?text=${encodeURIComponent(project.title)}`}
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
                              className="flex items-center gap-1 px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300"
                            >
                              <Icon className="h-3 w-3" />
                              <span>{tech}</span>
                            </div>
                          );
                        })}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2 w-full">
                        <Button
                          variant="default"
                          className="flex-1"
                          onClick={() => window.open(project.demoUrl, "_blank")}
                        >
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open(project.repoUrl, "_blank")}
                        >
                          GitHub
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>

                  <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    </DialogHeader>
                    
                    <div className="w-full h-64 bg-zinc-800 rounded-md my-4 flex items-center justify-center">
                      <span className="text-zinc-600">Project Screenshot</span>
                    </div>

                    <DialogDescription className="text-zinc-300 space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">The Problem</h4>
                        <p className="text-zinc-400 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">My Solution</h4>
                        <p className="text-zinc-400 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </DialogDescription>

                    <DialogFooter className="gap-2 sm:gap-0">
                      <Button
                        variant="default"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => window.open(project.repoUrl, "_blank")}
                      >
                        GitHub
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
