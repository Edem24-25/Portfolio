import React from "react";
import TechStack from "../components/TechStack";
import CtaBanner from "../components/CtaBanner";

const resources = [
  { title: "Guide : préparer son projet web", desc: "Objectifs, contenus, budget, délais — la checklist avant de contacter un développeur.", tag: "Guide" },
  { title: "Base PHP / MySQL sécurisée", desc: "Requêtes préparées, sessions, rôles utilisateurs : les fondamentaux que j'applique.", tag: "Backend" },
  { title: "Checklist SEO de base", desc: "Titres, meta, vitesse, responsive : ce que j'optimise sur chaque site vitrine.", tag: "SEO" },
];

export default function Ressources() {
  return (
    <>
      <section className="px-6 pt-16 pb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--electric)]">Ressources</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mt-2">
          Ressources <span className="text-[var(--electric)]">utiles</span>
        </h1>
        <p className="text-[var(--text-muted)] mt-3 max-w-2xl mx-auto">
          Guides et repères pour comprendre mes choix techniques et préparer votre projet.
        </p>
      </section>

      <section className="px-6 pb-10">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((r) => (
            <div key={r.title} className="glass-effect rounded-3xl p-7">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--electric)]">{r.tag}</span>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mt-2">{r.title}</h3>
              <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <TechStack />
      <CtaBanner />
    </>
  );
}
