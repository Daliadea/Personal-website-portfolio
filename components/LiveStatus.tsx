"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Gamepad2, Code2, Music, Activity, Zap } from "lucide-react";

// DISCORD USER ID
const DISCORD_ID = "191398299398307840";

interface SpotifyData {
  song: string;
  artist: string;
  album_art_url: string;
}

interface Activity {
  name: string;
  type: number;
  state?: string;
  details?: string;
}

interface LanyardData {
  listening_to_spotify: boolean;
  spotify?: SpotifyData;
  activities: Activity[];
  discord_status: "online" | "idle" | "dnd" | "offline";
}

export default function LiveStatus() {
  const [lanyardData, setLanyardData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanyard = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const data = await response.json();
        if (data.success) {
          setLanyardData(data.data);
        }
      } catch (error) {
        console.error("Lanyard Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLanyard();
    // Poll every 10 seconds to keep status fresh
    const interval = setInterval(fetchLanyard, 10000);
    return () => clearInterval(interval);
  }, []);

  // --- LOGIC TO DETERMINE WHAT TO SHOW ---
  const getStatus = () => {
    if (loading)
      return {
        verb: "Connecting...",
        text: "Please wait",
        color: "bg-slate-400",
        icon: <Activity className="w-4 h-4 animate-spin" />,
      };

    // Fallback for initial load failure or if user is completely hidden
    if (!lanyardData)
      return {
        verb: "Currently",
        text: "Offline",
        color: "bg-slate-400",
        icon: <Moon className="w-4 h-4" />,
      };

    // 1. Check for Spotify
    if (lanyardData.listening_to_spotify && lanyardData.spotify) {
      return {
        type: "spotify",
        verb: "Listening to",
        text: lanyardData.spotify.song,
        subtext: `by ${lanyardData.spotify.artist}`,
        color: "bg-green-500",
        textColor: "text-green-600",
        icon: <Music className="w-4 h-4" />,
        image: lanyardData.spotify.album_art_url,
      };
    }

    // 2. Check for Activities (Games, VS Code)
    const activity = lanyardData.activities.find((act) => act.type === 0); // Type 0 is "Playing"

    if (activity) {
      return {
        type: "game",
        verb: "Playing",
        text: activity.name,
        subtext: activity.state || activity.details || "In Game",
        color: "bg-purple-500",
        textColor: "text-purple-600",
        icon: <Gamepad2 className="w-4 h-4" />,
      };
    }

    // 3. Check for VS Code specifically
    const vscode = lanyardData.activities.find((act) => act.name === "Visual Studio Code");
    if (vscode) {
      return {
        type: "code",
        verb: "Coding",
        text: "Visual Studio Code",
        subtext: vscode.details || "Building something cool",
        color: "bg-blue-500",
        textColor: "text-blue-600",
        icon: <Code2 className="w-4 h-4" />,
      };
    }

    // 4. Default Online/Offline State
    switch (lanyardData.discord_status) {
      case "online":
        return {
          verb: "Currently",
          text: "Online",
          color: "bg-green-500",
          icon: <div className="w-3 h-3 bg-green-500 rounded-full" />,
        };
      case "idle":
        return {
          verb: "Currently",
          text: "Idle / AFK",
          color: "bg-yellow-500",
          icon: <Moon className="w-4 h-4" />,
        };
      case "dnd":
        return {
          verb: "Do Not Disturb",
          text: "Busy",
          color: "bg-red-500",
          icon: <Moon className="w-4 h-4" />,
        };
      case "offline":
      default:
        // Smart Offline Logic: Check time in Singapore
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Singapore",
          hour: "numeric",
          hour12: false,
        };
        const sgHour = parseInt(new Intl.DateTimeFormat("en-US", options).format(now));

        // If between midnight and 7 AM, assume sleeping
        if (sgHour >= 0 && sgHour < 7) {
          return {
            verb: "Currently",
            text: "Sleeping",
            subtext: "Dreaming of code",
            color: "bg-slate-500",
            icon: <Moon className="w-4 h-4" />,
          };
        }
        // Otherwise just offline
        return {
          verb: "Currently",
          text: "Offline",
          subtext: "Touching grass",
          color: "bg-slate-400",
          icon: <Moon className="w-4 h-4" />,
        };
    }
  };

  const status = getStatus();

  return (
    <div className="relative group">
      {/* TOOLTIP: Pops up on Hover */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
        <div className="bg-slate-800 text-white text-xs rounded-md py-1.5 px-3 shadow-xl flex items-center gap-2">
          <Zap className="w-3 h-3 text-yellow-400 fill-current" />
          Powered by Discord API
          <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </div>

      {/* STATUS BADGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 text-sm font-medium bg-white/5 backdrop-blur-lg p-2 pr-4 pl-2 rounded-full border border-white/10 shadow-lg transition-all hover:shadow-xl hover:bg-white/10 hover:border-white/20 cursor-help"
      >
        {/* Spotify Album Art or Status Dot */}
        <div className="relative flex-shrink-0">
          {status.type === "spotify" && status.image ? (
            <motion.img
              src={status.image}
              alt="Album Art"
              className="w-10 h-10 rounded-full border-2 border-white/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 relative">
              {status.type !== "spotify" && (
                <span className="absolute top-0 right-0 flex h-3 w-3">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.color}`}
                  ></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${status.color}`}></span>
                </span>
              )}
              <span className="text-white/70">{status.icon}</span>
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-left mr-2 leading-tight">
          {/* Verb (Listening to / Playing) */}
          <span className="text-[10px] uppercase tracking-wider font-bold text-white/40 mb-0.5">
            {status.verb}
          </span>

          {/* Main Content (Song / Game) */}
          <span className="text-white font-bold truncate max-w-[150px] md:max-w-[200px]">
            {status.text}
          </span>

          {/* Subtext (Artist / Details) */}
          {status.subtext && (
            <span className="text-xs text-white/60 truncate max-w-[150px] md:max-w-[200px]">
              {status.subtext}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}

