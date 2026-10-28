import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CtaBanner from "../components/CtaBanner";
import { portfolioData } from "../data/portfolioData";

export default function Services() {
  const { services } = portfolioData;
  const categories = ["Tous", ...Array.from(new Set(services.map((s) => s.category)))];
  const [active, setActive] = useState("Tous");
  const [query, setQuery] = useState("");

  const filtered = services.filter((s) => {
    const matchCat = active === "Tous" || s.category === active;
    const matchQ = (s.title + s.description).toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <>
      <section className="px-6 pt-16 pb-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--electric)]">Expertise</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mt-2">Nos Services</h1>
          <p className="text-[var(--text-muted)] mt-3 max-w-2xl">Des prestations professionnelles sur mesure pour vos besoins digitaux, du design au développement.</p>

          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border cursor-pointer transition ${
                  active === c
                    ? "bg-[var(--electric)] text-white border-transparent"
                    : "border-[var(--border-color)] text-[var(--text-secondary)] hover:border-primary-500/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher"
            className="mt-5 w-full max-w-md px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-primary-500"
          />
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s) => (
            <div key={s.id} className="glass-effect rounded-3xl p-7 flex flex-col hover:-translate-y-1 transition-transform">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--electric)] mb-3">{s.category}</span>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{s.description}</p>
              <ul className="text-sm text-[var(--text-secondary)] flex flex-col gap-1.5 mb-5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2"><span className="text-[var(--electric)]"><FontAwesomeIcon icon={faCheck} /></span>{p}</li>
                ))}
              </ul>
              <span className="mt-auto text-sm font-bold text-[var(--text-primary)]">{s.price}</span>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-[var(--text-muted)]">Aucun service trouvé.</p>}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
