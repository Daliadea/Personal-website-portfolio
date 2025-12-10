"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Gamepad2, Code2, Music, Activity } from "lucide-react";

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

  // Determine what to show
  const getStatus = () => {
    if (loading)
      return {
        text: "Connecting...",
        color: "bg-slate-400",
        icon: <Activity className="w-4 h-4 animate-spin" />,
      };
    if (!lanyardData)
      return {
        text: "Offline",
        color: "bg-slate-400",
        icon: <Moon className="w-4 h-4" />,
      };

    // 1. Check for Spotify
    if (lanyardData.listening_to_spotify && lanyardData.spotify) {
      return {
        type: "spotify",
        text: `${lanyardData.spotify.song}`,
        subtext: `by ${lanyardData.spotify.artist}`,
        color: "bg-green-500",
        textColor: "text-green-600",
        icon: <Music className="w-4 h-4" />,
        image: lanyardData.spotify.album_art_url,
      };
    }

    // 2. Check for Activities (Games)
    const activity = lanyardData.activities.find((act) => act.type === 0); // Type 0 is "Playing"

    if (activity) {
      return {
        type: "game",
        text: `Playing ${activity.name}`,
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
        text: "Coding",
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
          text: "Online",
          color: "bg-green-500",
          icon: <div className="w-3 h-3 bg-green-500 rounded-full" />,
        };
      case "idle":
        return {
          text: "Idle / AFK",
          color: "bg-yellow-500",
          icon: <Moon className="w-4 h-4" />,
        };
      case "dnd":
        return {
          text: "Do Not Disturb",
          color: "bg-red-500",
          icon: <Moon className="w-4 h-4" />,
        };
      default:
        return {
          text: "Offline",
          color: "bg-slate-400",
          icon: <Moon className="w-4 h-4" />,
        };
    }
  };

  const status = getStatus();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center gap-3 text-sm font-medium bg-white/5 backdrop-blur-lg p-2 pr-4 pl-2 rounded-full border border-white/10 shadow-lg transition-all hover:shadow-xl hover:bg-white/10"
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
      <div className="flex flex-col text-left">
        <span className="text-white font-bold truncate max-w-[180px] md:max-w-[220px] text-sm">
          {status.text}
        </span>
        {status.subtext ? (
          <span className="text-xs text-white/60 truncate max-w-[180px] md:max-w-[220px]">
            {status.subtext}
          </span>
        ) : (
          <span className="text-xs text-white/40">Current Status</span>
        )}
      </div>
    </motion.div>
  );
}

