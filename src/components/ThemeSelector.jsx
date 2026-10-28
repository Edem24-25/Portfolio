import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X } from "lucide-react";

const themes = [
  {
    // Thème par défaut : aligné sur la couleur d'accent de l'intro (#33FFD6).
    id: "menthe",
    name: "Menthe",
    colors: {
      300: "#9dfbea",
      400: "#5ff2dc",
      500: "#33ffd6",
      600: "#0a8c76",
      700: "#077060"
    },
    // Encres posées sur les surfaces d'accent, par mode clair/sombre.
    // En clair, --electric = 600 profond → blanc ; en sombre, 500 vif → encre sombre.
    onAccent: { light: "#ffffff", dark: "#05322b" },
    // Les dégradés primary-500→700 contiennent la menthe vive dans les deux
    // modes → encre sombre partout pour rester lisible.
    onPrimary: { light: "#05322b", dark: "#05322b" }
  },
  {
    id: "blue",
    name: "Bleu",
    colors: {
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8"
    },
    onAccent: { light: "#ffffff", dark: "#ffffff" },
    onPrimary: { light: "#ffffff", dark: "#ffffff" }
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
    },
    onAccent: { light: "#ffffff", dark: "#ffffff" },
    onPrimary: { light: "#ffffff", dark: "#ffffff" }
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
    },
    onAccent: { light: "#ffffff", dark: "#ffffff" },
    onPrimary: { light: "#ffffff", dark: "#ffffff" }
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
    },
    onAccent: { light: "#ffffff", dark: "#ffffff" },
    onPrimary: { light: "#ffffff", dark: "#ffffff" }
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
    },
    onAccent: { light: "#ffffff", dark: "#ffffff" },
    onPrimary: { light: "#ffffff", dark: "#ffffff" }
  }
];

export const DEFAULT_COLOR_THEME = "menthe";

/**
 * Couleur d'accent active (couleur du sélecteur × mode clair/sombre),
 * telle qu'exposée dans --electric. Chaîne vide si indisponible.
 */
export const getActiveAccent = () =>
  getComputedStyle(document.documentElement).getPropertyValue("--electric").trim();

/**
 * Applique une couleur d'accent au :root selon le mode clair/sombre actif.
 * Exposée pour qu'App.jsx puisse la rappeler au basculement de thème
 * (l'accent et les encres dépendent du couple couleur × clair/sombre).
 */
export const applyTheme = (themeId) => {
  const theme = themes.find((t) => t.id === themeId) || themes[0];

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
  root.style.setProperty("--on-accent", isLight ? theme.onAccent.light : theme.onAccent.dark);
  root.style.setProperty("--on-primary", isLight ? theme.onPrimary.light : theme.onPrimary.dark);

  localStorage.setItem("portfolio-color", theme.id);
  return theme.id;
};

// Applique la couleur enregistrée dès l'évaluation du module (avant le
// premier rendu) pour éviter un flash de la couleur par défaut.
applyTheme(localStorage.getItem("portfolio-color") || DEFAULT_COLOR_THEME);

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(
    () => localStorage.getItem("portfolio-color") || DEFAULT_COLOR_THEME
  );

  const handleApply = (themeId) => {
    setActiveTheme(applyTheme(themeId));
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
                onClick={() => handleApply(theme.id)}
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
        className="w-14 h-14 rounded-full bg-[var(--electric)] text-[var(--on-accent)] shadow-lg flex items-center justify-center cursor-pointer border border-white/20 transition-colors duration-300"
      >
        {isOpen ? <X size={24} /> : <Palette size={24} />}
      </motion.button>
    </div>
  );
}
