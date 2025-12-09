"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LiveStatus() {
  const [time, setTime] = useState<string>("");
  const [status, setStatus] = useState<{
    text: string;
    emoji: string;
    color: string;
  }>({
    text: "Online",
    emoji: "🟢",
    color: "bg-green-500",
  });

  useEffect(() => {
    const updateTimeAndStatus = () => {
      // Get Singapore time (UTC+8)
      const singaporeTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Singapore" })
      );
      
      const hours = singaporeTime.getHours();
      const timeString = singaporeTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Singapore",
      });
      
      setTime(timeString);

      // Determine status based on time
      if (hours >= 9 && hours < 18) {
        setStatus({
          text: "Online / Coding",
          emoji: "🟢",
          color: "bg-green-500",
        });
      } else if (hours >= 18 && hours < 24) {
        setStatus({
          text: "Gaming / Music",
          emoji: "🟣",
          color: "bg-purple-500",
        });
      } else {
        setStatus({
          text: "Sleeping",
          emoji: "🌙",
          color: "bg-blue-400",
        });
      }
    };

    // Update immediately
    updateTimeAndStatus();

    // Update every minute
    const interval = setInterval(updateTimeAndStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <motion.div
        className={`w-2 h-2 rounded-full ${status.color}`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span>
        {status.emoji} {status.text}
      </span>
      <span className="text-muted-foreground/60">•</span>
      <span>{time || "Loading..."} SGT</span>
    </div>
  );
}

