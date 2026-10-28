import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import CtaBanner from "../components/CtaBanner";
import { portfolioData } from "../data/portfolioData";

export default function Home() {
  const { services } = portfolioData;

  return (
    <>
      <Hero />

      {/* Mission */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--text-muted)]">Mission</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mt-3 leading-tight">
            Transformer vos idées en solutions digitales<br className="hidden md:block" /> qui convertissent
          </h2>
          <p className="text-[var(--text-muted)] mt-3">Clarté. Design. Résultats mesurables.</p>
        </div>
      </section>

      {/* Services aperçu */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--electric)]">Expertise</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mt-2">Mes services</h2>
              <p className="text-[var(--text-muted)] mt-2">Des solutions adaptées à chaque besoin et à chaque budget.</p>
            </div>
            <Link to="/services" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[var(--electric)] hover:underline">
              Voir tous mes services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((s) => (
              <div key={s.id} className="glass-effect rounded-3xl p-7 flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--electric)] bg-[var(--electric-glow)] px-3 py-1 rounded-full w-fit mb-4">{s.category}</span>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-grow">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--electric)]">Voir tous mes services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <TechStack />

      {/* Projets aperçu (réutilise grille complète, limitée visuellement) */}
      <Projects preview />

      <CtaBanner />
    </>
  );
}
