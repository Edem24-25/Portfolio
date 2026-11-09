export const themes = [
  {
    // Thème Menthe : aligné sur la couleur d'accent de l'intro (#33FFD6).
    id: "menthe",
    name: "Menthe",
    colors: {
      300: "#9dfbea",
      400: "#5ff2dc",
      500: "#33ffd6",
      600: "#0a8c76",
      700: "#077060",
    },
    onAccent: { light: "#ffffff", dark: "#05322b" },
    onPrimary: { light: "#05322b", dark: "#05322b" },
  },
  {
    id: "blue",
    name: "Bleu",
    colors: {
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
    },
    onAccent: { light: "#ffffff", dark: "#ffffff" },
    onPrimary: { light: "#ffffff", dark: "#ffffff" },
  },
  {
    id: "green",
    name: "Vert",
    colors: {
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
    },
    onAccent: { light: "#ffffff", dark: "#ffffff" },
    onPrimary: { light: "#ffffff", dark: "#ffffff" },
  },
  {
    id: "red",
    name: "Rouge",
    colors: {
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
    },
    onAccent: { light: "#ffffff", dark: "#ffffff" },
    onPrimary: { light: "#ffffff", dark: "#ffffff" },
  },
  {
    id: "purple",
    name: "Violet",
    colors: {
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
    },
    onAccent: { light: "#ffffff", dark: "#ffffff" },
    onPrimary: { light: "#ffffff", dark: "#ffffff" },
  },
  {
    id: "orange",
    name: "Orange",
    colors: {
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
    },
    onAccent: { light: "#ffffff", dark: "#ffffff" },
    onPrimary: { light: "#ffffff", dark: "#ffffff" },
  },
];

export const DEFAULT_COLOR_THEME = "menthe";

/**
 * Couleur d'accent active (telle qu'exposée dans --electric).
 */
export const getActiveAccent = () => {
  if (typeof document === "undefined") return "#33FFD6";
  return getComputedStyle(document.documentElement).getPropertyValue("--electric").trim();
};

/**
 * Applique une couleur d'accent au document.
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

  root.setAttribute("data-color-theme", theme.id);
  return theme.id;
};

/**
 * Identifiant de la couleur de thème actuellement active.
 */
export const getCurrentColorThemeId = () => {
  if (typeof document === "undefined") return DEFAULT_COLOR_THEME;
  return document.documentElement.getAttribute("data-color-theme") || DEFAULT_COLOR_THEME;
};

/**
 * Récupère un thème aléatoire différent de l'actuel.
 */
export const getRandomTheme = (excludeId) => {
  const current =
    excludeId ||
    (typeof document !== "undefined"
      ? document.documentElement.getAttribute("data-color-theme")
      : null);
  const candidates = current ? themes.filter((t) => t.id !== current) : themes;
  const randomIndex = Math.floor(Math.random() * candidates.length);
  return candidates[randomIndex] || themes[0];
};

/**
 * Applique un thème aléatoire à la plateforme.
 */
export const applyRandomTheme = (excludeId) => {
  const next = getRandomTheme(excludeId);
  return applyTheme(next.id);
};

// Initialisation d'une couleur aléatoire dès le chargement du module
applyRandomTheme();

export default function ThemeSelector() {
  return null;
}
