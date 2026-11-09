export const BLUE_THEME = {
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
};

export const themes = [BLUE_THEME];
export const DEFAULT_COLOR_THEME = "blue";

/**
 * Couleur d'accent active (telle qu'exposée dans --electric).
 */
export const getActiveAccent = () => {
  if (typeof document === "undefined") return "#3b82f6";
  return getComputedStyle(document.documentElement).getPropertyValue("--electric").trim() || "#3b82f6";
};

/**
 * Applique la couleur d'accent bleue au document selon le mode clair/sombre.
 */
export const applyTheme = () => {
  const root = document.documentElement;

  root.style.setProperty("--primary-300", BLUE_THEME.colors[300]);
  root.style.setProperty("--primary-400", BLUE_THEME.colors[400]);
  root.style.setProperty("--primary-500", BLUE_THEME.colors[500]);
  root.style.setProperty("--primary-600", BLUE_THEME.colors[600]);
  root.style.setProperty("--primary-700", BLUE_THEME.colors[700]);

  const isLight = root.getAttribute("data-theme") === "light";
  const activeColor = isLight ? BLUE_THEME.colors[600] : BLUE_THEME.colors[500];
  root.style.setProperty("--electric", activeColor);
  root.style.setProperty("--electric-glow", `${activeColor}40`);
  root.style.setProperty("--on-accent", isLight ? BLUE_THEME.onAccent.light : BLUE_THEME.onAccent.dark);
  root.style.setProperty("--on-primary", isLight ? BLUE_THEME.onPrimary.light : BLUE_THEME.onPrimary.dark);

  root.setAttribute("data-color-theme", "blue");
  try {
    localStorage.setItem("portfolio-color", "blue");
  } catch (e) {}
  return "blue";
};

export const getCurrentColorThemeId = () => "blue";
export const getRandomTheme = () => BLUE_THEME;
export const applyRandomTheme = () => applyTheme();

// Applique le thème bleu dès l'évaluation du module
applyTheme();

export default function ThemeSelector() {
  return null;
}
