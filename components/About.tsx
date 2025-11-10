"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-zinc-300 text-lg leading-relaxed"
        >
          <p>
            I&apos;m a passionate computing student and software developer with a keen
            interest in creating beautiful, functional, and user-friendly web
            applications. My journey in software development started with a
            curiosity about how things work on the web, and has evolved into a
            deep passion for building digital experiences.
          </p>

          <p>
            Throughout my studies and personal projects, I&apos;ve gained extensive
            experience with modern web technologies including React, Next.js,
            TypeScript, and various backend frameworks. I love exploring new
            technologies and finding innovative ways to solve complex problems.
          </p>

          <p>
            When I&apos;m not coding, you can find me contributing to open-source
            projects, learning about the latest web development trends, or
            working on side projects that challenge my skills and creativity. I
            believe in continuous learning and always strive to improve my craft.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

