import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeSelector from "./components/ThemeSelector";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import ContactPage from "./pages/ContactPage";
import Ressources from "./pages/Ressources";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) return savedTheme;
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    document.body.style.backgroundColor = "";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col">
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
        <ThemeSelector />
      </div>
    </BrowserRouter>
  );
}
