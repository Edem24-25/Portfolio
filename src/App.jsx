import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import {
  applyRandomTheme,
  applyTheme,
  getCurrentColorThemeId,
} from "./components/ThemeSelector";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import ContactPage from "./pages/ContactPage";
import Ressources from "./pages/Ressources";

function RandomThemeWatcher() {
  const { pathname } = useLocation();
  const isFirstMount = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Évite de ré-appliquer immédiatement lors du tout premier montage (l'intro a déjà sa couleur)
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // À chaque navigation / changement de page, applique un nouveau thème de couleur aléatoire
    applyRandomTheme();
  }, [pathname]);

  return null;
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    } catch (e) {}
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (e) {}

    // Réajuste la couleur aléatoire courante pour le mode clair/sombre (encres et contrastes)
    applyTheme(getCurrentColorThemeId());
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <RandomThemeWatcher />
      <div className="relative min-h-screen flex flex-col">
        <Preloader />
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="pt-[110px] flex-grow transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
