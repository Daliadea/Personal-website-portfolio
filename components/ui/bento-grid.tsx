"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        "row-span-1 rounded-[calc(var(--radius)-0.25rem)] group/bento hover:shadow-xl transition-[shadow,border,transform] duration-300 shadow-2xl p-4 bg-[#0a120d]/60 backdrop-blur-md border border-[#ffffff]/10 hover:border-[#ffffff]/20 justify-between flex flex-col space-y-4 h-full",
        className
      )}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition-transform duration-200">
        {icon}
        <div className="font-serif font-bold text-foreground mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground text-xs">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

