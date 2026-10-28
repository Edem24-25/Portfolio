import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X } from "lucide-react";

const themes = [
  {
    id: "blue",
    name: "Bleu",
    colors: {
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8"
    }
  },
  {
    id: "green",
    name: "Vert",
    colors: {
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d"
    }
  },
  {
    id: "red",
    name: "Rouge",
    colors: {
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c"
    }
  },
  {
    id: "purple",
    name: "Violet",
    colors: {
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce"
    }
  },
  {
    id: "orange",
    name: "Orange",
    colors: {
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c"
    }
  }
];

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("blue");

  useEffect(() => {
    const savedThemeId = localStorage.getItem("portfolio-color") || "blue";
    applyTheme(savedThemeId);
  }, []);

  const applyTheme = (themeId) => {
    const theme = themes.find((t) => t.id === themeId) || themes[0];
    
    // Appliquer les couleurs au :root
    const root = document.documentElement;
    root.style.setProperty("--primary-300", theme.colors[300]);
    root.style.setProperty("--primary-400", theme.colors[400]);
    root.style.setProperty("--primary-500", theme.colors[500]);
    root.style.setProperty("--primary-600", theme.colors[600]);
    root.style.setProperty("--primary-700", theme.colors[700]);
    
    const isLight = root.getAttribute("data-theme") === "light";
    const activeColor = isLight ? theme.colors[600] : theme.colors[500];
    root.style.setProperty("--electric", activeColor);
    root.style.setProperty("--electric-glow", `${activeColor}40`);

    setActiveTheme(theme.id);
    localStorage.setItem("portfolio-color", theme.id);
  };

  return (
    <div className="fixed bottom-20 right-5 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 mb-2 p-3 rounded-2xl glass-effect-strong flex flex-col gap-2 shadow-2xl border border-[var(--border-color)]"
          >
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => applyTheme(theme.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${
                  activeTheme === theme.id ? "ring-2 ring-white ring-offset-2 ring-offset-black/50" : ""
                }`}
                style={{ backgroundColor: theme.colors[500] }}
                title={theme.name}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[var(--electric)] text-white shadow-lg flex items-center justify-center cursor-pointer border border-white/20 transition-colors duration-300"
      >
        {isOpen ? <X size={24} /> : <Palette size={24} />}
      </motion.button>
    </div>
  );
}
