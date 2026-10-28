import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

// Arbre radial animé en continu : dessin d'entrée + flux + pulsations + vague séquentielle.
// Code original inspiré de la structure de la capture, sans copie d'asset.
export default function TechStack() {
  const { technologies } = portfolioData;
  const nodes = technologies.slice(0, 7);

  const W = 1000;
  const H = 360;
  const cx = W / 2;
  const cy = 70;
  const nodeY = 300;
  const xs = nodes.map((_, i) => 60 + (i * (W - 120)) / Math.max(nodes.length - 1, 1));

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % nodes.length), 1600);
    return () => clearInterval(id);
  }, [paused, nodes.length]);

  const branchPath = (x) => `M ${cx} ${cy + 42} C ${cx} 180, ${x} 190, ${x} ${nodeY - 34}`;

  const handleImgError = (e, name) => {
    const initial = (name || "?").trim().charAt(0).toUpperCase();
    e.currentTarget.src =
      "data:image/svg+xml," +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="68" height="68"><rect width="68" height="68" rx="34" fill="#f1f5f9"/><text x="34" y="44" font-size="28" font-weight="bold" text-anchor="middle" fill="#475569">${initial}</text></svg>`
      );
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <style>{`
        @keyframes branch-flow { to { stroke-dashoffset: -28; } }
        .branch-flow-active {
          stroke-dasharray: 5 9;
          animation: branch-flow 1s linear infinite;
        }
        @keyframes holder-ring {
          0% { transform: scale(1); opacity: 0.45; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        .holder-ring {
          animation: holder-ring 1.8s ease-out infinite;
        }
      `}</style>

      <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full bg-primary-600/5 blur-[120px] -z-10" />
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold tracking-tight text-[var(--text-primary)]">
            Les technologies que <span className="text-[var(--electric)]">j'utilise</span>
          </h2>
          <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto text-base md:text-lg font-light">
            Je maîtrise un ensemble d'outils modernes pour répondre à tous types de projets
          </p>
        </div>

        {/* Desktop : arbre animé */}
        <div className="hidden md:block relative">
          <div className="relative" style={{ height: H + 70 }}>
            <svg viewBox={`0 0 ${W} ${H + 20}`} className="absolute inset-0 w-full h-full" fill="none">
              <defs>
                <linearGradient id="branchGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--electric)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--electric)" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              <motion.line
                x1={cx}
                y1={cy + 40}
                x2={cx}
                y2={cy + 62}
                stroke="var(--electric)"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              />
              <circle cx={cx} cy={cy + 64} r="4" fill="var(--electric)" />

              {xs.map((x, i) => {
                const isActive = i === active;
                return (
                  <g key={i} opacity={isActive ? 1 : 0.6}>
                    <path d={branchPath(x)} stroke="var(--border-color)" strokeWidth="2" />
                    <motion.path
                      d={branchPath(x)}
                      stroke={isActive ? "var(--electric)" : "url(#branchGrad)"}
                      strokeWidth={isActive ? 3.5 : 2.5}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: isActive ? 1 : 0.62 }}
                      animate={{ pathLength: isActive ? 1 : 0.62 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    />
                    {/* flux animé uniquement sur la branche du membre actif */}
                    {isActive && (
                      <path d={branchPath(x)} stroke="var(--electric)" strokeWidth="2" strokeLinecap="round" opacity="0.55" className="branch-flow-active" />
                    )}
                    {/* pastille voyageuse uniquement vers le membre actif */}
                    {isActive && (
                      <circle r={5.5} fill="var(--electric)" opacity="0.95">
                        <animateMotion dur="1.6s" repeatCount="indefinite" path={branchPath(x)} />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Nœud central statique après entrée */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="absolute left-1/2 -translate-x-1/2 z-10"
              style={{ top: cy - 42 }}
            >
              <div className="w-[84px] h-[84px] rounded-full bg-[var(--electric)] text-white flex items-center justify-center shadow-xl shadow-primary-600/25">
                <Layers size={34} strokeWidth={2} />
              </div>
            </motion.div>

            {/* Membres : pastilles centrées sur leurs branches, logos statiques, intitulé au survol */}
            {nodes.map((tech, i) => {
              const leftPct = (xs[i] / W) * 100;
              const isActive = i === active;
              return (
                <div
                  key={tech.name}
                  className="absolute z-10 -translate-x-1/2 group"
                  style={{ left: `${leftPct}%`, top: nodeY - 34 }}
                  onMouseEnter={() => { setActive(i); setPaused(true); }}
                  onMouseLeave={() => setPaused(false)}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Intitulé : visible au survol ou sur membre actif */}
                    <span
                      className={`absolute -top-10 whitespace-nowrap text-[11px] font-bold px-3 py-1.5 rounded-full border shadow-md transition-all duration-200 pointer-events-none ${
                        isActive
                          ? "opacity-100 translate-y-0 text-white bg-[var(--electric)] border-transparent"
                          : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 text-[var(--text-secondary)] bg-[var(--bg-card)] border-[var(--border-color)]"
                      }`}
                    >
                      {tech.name}
                    </span>
                    <div className="relative">
                      {/* anneau animé uniquement sur le membre actif */}
                      {isActive && (
                        <span className="holder-ring absolute inset-0 rounded-full bg-[var(--electric)]" />
                      )}
                      <div
                        className={`relative w-[68px] h-[68px] rounded-full bg-white dark:bg-[var(--bg-card)] flex items-center justify-center p-3 cursor-pointer transition-all duration-200 group-hover:scale-110 ${
                          isActive
                            ? "border-2 border-[var(--electric)] shadow-xl shadow-primary-600/25 scale-110"
                            : "border border-[var(--border-color)] shadow-md"
                        }`}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          onError={(e) => handleImgError(e, tech.name)}
                          className={`w-full h-full object-contain ${tech.darkInvert ? "dark:invert" : ""}`}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile : grille */}
        <div className="md:hidden grid grid-cols-3 gap-4 mt-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-effect rounded-2xl p-4 flex flex-col items-center text-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-[var(--border-color)] flex items-center justify-center p-2">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  onError={(e) => handleImgError(e, tech.name)}
                  className={`w-full h-full object-contain ${tech.darkInvert ? "dark:invert" : ""}`}
                  loading="lazy"
                />
              </div>
              <span className="text-[11px] font-bold text-[var(--text-secondary)]">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
