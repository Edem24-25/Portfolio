import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

// Footer 3 colonnes + filigrane géant, structure inspirée de la capture (code original).
export default function Footer() {
  const { personalInfo } = portfolioData;

  return (
    <footer className="relative overflow-hidden bg-[var(--bg-app)] mt-10">
      <div className="mx-auto max-w-6xl px-6 pt-16 grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr_1fr] gap-12">
        {/* Colonne marque */}
        <div>
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-[var(--text-primary)]">
            WOLO<span className="text-[var(--electric)]">Dev</span>
          </Link>
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--text-muted)] max-w-sm font-light">
            Transformer vos idées en solutions digitales (sites, applications) qui convertissent.
            Votre partenaire pour une présence en ligne qui vous démarque.
          </p>
          <div className="flex gap-3 mt-7">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook / GitHub"
              className="w-11 h-11 rounded-full bg-black/[0.04] dark:bg-white/5 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href={`https://wa.me/${(personalInfo.phone || "").replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram / WhatsApp"
              className="w-11 h-11 rounded-full bg-black/[0.04] dark:bg-white/5 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full bg-black/[0.04] dark:bg-white/5 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Colonne navigation */}
        <nav className="flex flex-col gap-4 text-[16px] font-light">
          <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors">Accueil</Link>
          <Link to="/services" className="text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors">Services</Link>
          <Link to="/portfolio" className="text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors">Portfolio</Link>
          <Link to="/blog" className="text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors">Blog</Link>
          <Link to="/a-propos" className="text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors">À propos</Link>
          <Link to="/contact" className="text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors">Contact</Link>
        </nav>

        {/* Colonne contact */}
        <div className="flex flex-col gap-6">
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 group">
            <span className="w-11 h-11 rounded-full bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
              <Phone size={18} />
            </span>
            <span className="text-[16px] font-light text-[var(--text-secondary)] group-hover:text-[var(--electric)] transition-colors">
              {personalInfo.phoneDisplay}
            </span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
            <span className="w-11 h-11 rounded-full bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
              <Mail size={18} />
            </span>
            <span className="text-[16px] font-light text-[var(--text-secondary)] group-hover:text-[var(--electric)] transition-colors break-all">
              {personalInfo.email}
            </span>
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
            <span className="w-11 h-11 rounded-full bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
              <ExternalLink size={18} />
            </span>
            <span className="text-[16px] font-light text-[var(--text-secondary)] group-hover:text-[var(--electric)] transition-colors">
              Mon profil GitHub
            </span>
          </a>
        </div>
      </div>

      {/* Filigrane géant */}
      <div
        aria-hidden
        className="select-none pointer-events-none text-center font-extrabold tracking-tight leading-none mt-10 -mb-6 md:-mb-12 text-[24vw] md:text-[11rem] text-[var(--electric)] opacity-[0.12]"
        style={{ maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)" }}
      >
        WOLODev
      </div>

      {/* Barre basse */}
      <div className="relative border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[15px] font-light text-[var(--text-muted)]">
          <span>
            © {new Date().getFullYear()} <span className="font-bold text-[var(--electric)]">WOLODev</span> — Tous droits réservés.
          </span>
          <div className="flex items-center gap-8">
            <span className="hover:text-[var(--electric)] transition-colors cursor-pointer">Mentions légales</span>
            <span className="hover:text-[var(--electric)] transition-colors cursor-pointer">Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
