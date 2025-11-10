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

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and user authentication.",
    imageUrl: "/projects/ecommerce.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
    imageUrl: "/projects/taskmanager.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/taskmanager",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts.",
    imageUrl: "/projects/weather.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/weather",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics platform for tracking social media metrics, engagement rates, and audience insights across multiple platforms.",
    imageUrl: "/projects/analytics.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/username/analytics",
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">My Work</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="h-full flex flex-col bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="w-full h-48 bg-zinc-800 rounded-md flex items-center justify-center">
                    <span className="text-zinc-600 text-sm">
                      Project Screenshot
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
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
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

