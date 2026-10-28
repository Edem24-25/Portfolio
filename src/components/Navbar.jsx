import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Accueil", end: true },
    { to: "/services", label: "Services" },
    { to: "/blog", label: "Blog" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/ressources", label: "Ressources" },
  ];

  return (
    <div className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6">
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-6xl rounded-full glass-effect shadow-xl shadow-black/5 border border-[var(--border-color)] pl-5 sm:pl-7 pr-2 sm:pr-2.5 py-2 flex items-center justify-between gap-2"
      >
        {/* Logo façon pilule référence : Nom + accent */}
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 shrink-0">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--text-primary)]">
            WOLO<span className="text-[var(--electric)]">Dev</span>
          </span>
        </Link>

        {/* Liens desktop uppercase + soulignement actif */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `relative text-[13px] font-bold uppercase tracking-widest transition-colors pb-1 ${
                  isActive ? "text-[var(--electric)]" : "text-[var(--text-primary)] hover:text-[var(--electric)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[2.5px] rounded-full bg-[var(--electric)]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--electric)] hover:bg-[var(--border-color)]/40 transition-colors cursor-pointer"
            title="Changer de thème"
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <span className="hidden lg:block w-px h-8 bg-[var(--border-color)] mx-2" />

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#1d1a2e] dark:bg-white dark:text-[#1d1a2e] hover:opacity-90 transition shadow-md"
          >
            Me contacter
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--border-color)]/40 cursor-pointer"
            aria-label="Menu"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </motion.header>

      {/* Panneau mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-auto max-w-6xl mt-2 rounded-3xl glass-effect-strong border border-[var(--border-color)] shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl text-sm font-bold uppercase tracking-widest ${
                      isActive ? "text-[var(--electric)] bg-[var(--electric-glow)]" : "text-[var(--text-secondary)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                to="/a-propos"
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)]"
              >
                À propos
              </NavLink>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-3.5 rounded-2xl text-sm font-semibold text-white bg-[#1d1a2e] dark:bg-white dark:text-[#1d1a2e]"
              >
                Me contacter
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
