import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import CtaBanner from "../components/CtaBanner";
import { portfolioData } from "../data/portfolioData";

export default function Portfolio() {
  const { projects } = portfolioData;
  const categories = ["Tous", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("Tous");
  const [query, setQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchCat = active === "Tous" || p.category === active;
    const matchQ = (p.title + p.shortDescription).toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <>
      <section className="px-6 pt-16 pb-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--electric)]">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mt-2">Mes Réalisations</h1>
          <p className="text-[var(--text-muted)] mt-3">Une vitrine claire, filtrable et rapide pour explorer mes projets web.</p>

          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border cursor-pointer transition ${
                  active === c
                    ? "bg-[var(--electric)] text-white border-transparent"
                    : "border-[var(--border-color)] text-[var(--text-secondary)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative mt-5 max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary-500"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -5 }} className="glass-effect rounded-3xl overflow-hidden flex flex-col">
              <div className="p-6 pb-0">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--electric)]">{p.category}</span>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mt-1">{p.title}</h3>
                <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">{p.shortDescription}</p>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-[11px] font-semibold bg-[var(--border-color)]/30 px-2.5 py-1 rounded-md text-[var(--text-secondary)]">{t}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {p.demoUrl ? (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white text-xs font-bold">
                      <ExternalLink size={14} /> Voir le site
                    </a>
                  ) : (
                    <Link to="/contact" className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white text-xs font-bold">
                      <ExternalLink size={14} /> Démo sur demande
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
