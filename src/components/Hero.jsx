import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MessageCircle, Star } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { portfolioData } from "../data/portfolioData";

// Hero : image en arrière-plan plein cadre avec voiles adaptés aux écrits.
// Contenus originaux adaptés au profil WOLO. Code original.
export default function Hero() {
  const { personalInfo } = portfolioData;
  const whatsappNumber = (personalInfo.phone || "").replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Bonjour Ulrich, j'ai un projet à discuter."
  )}`;

  const stats = [
    { label: "Projets", value: "3+", dot: "bg-green-400" },
    { label: "Expérience", value: "3+ ans", dot: "bg-[var(--electric)]" },
  ];

  const socials = [
    { href: whatsappLink, icon: MessageCircle, label: "WhatsApp" },
    { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", active: true },
    { href: personalInfo.github, icon: Github, label: "GitHub" },
  ];

  return (
    <section id="home" className="mx-auto w-full max-w-[1240px] px-4 md:px-6">
      {/* ---------- Mobile : image + titre superposé + nom géant ---------- */}
      <div className="md:hidden px-1 pb-8 pt-2">
        <div className="relative overflow-hidden rounded-[28px] border border-[var(--border-color)]">
          <img src="/profile.png" alt={personalInfo.fullName} className="h-[420px] w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute left-5 top-5">
            <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow">
              Créateur De
              <br />
              Solutions <span className="text-[var(--electric)]">Web</span>
            </h1>
          </div>
          <Link
            to="/contact"
            className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[var(--text-primary)] shadow-lg"
          >
            Discutons de votre projet <ArrowRight size={16} />
          </Link>
        </div>
        <p aria-hidden className="mt-3 select-none whitespace-nowrap text-center text-[10vw] font-extrabold leading-none tracking-tight text-[var(--text-primary)] opacity-10">
          WOLO ULRICH
        </p>
      </div>

      {/* ---------- Desktop : image en arrière-plan adaptée à la div ---------- */}
      <div className="relative hidden overflow-hidden rounded-[40px] border border-[var(--border-color)] md:block">
        {/* Fond image plein cadre */}
        <img
          src="/profile.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
        {/* Voiles pour adapter les écrits au fond */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-app)] via-[var(--bg-app)]/88 to-[var(--bg-app)]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-app)]/70 via-transparent to-[var(--bg-app)]/30" />
        <div className="absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[var(--electric)]/10 blur-[120px]" />

        <div className="relative z-10 grid min-h-[640px] grid-cols-[1.1fr_0.9fr] items-center gap-10 p-10 lg:p-14">
          {/* Colonne gauche : textes */}
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block w-fit rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[var(--text-secondary)]"
            >
              {personalInfo.status}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-5xl font-extrabold leading-[1.05] text-[var(--text-primary)] lg:text-6xl"
            >
              Créateur
              <br />
              De Solutions
              <br />
              <span className="text-[var(--electric)]">Web</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--text-primary)] px-8 py-4 font-bold text-[var(--bg-app)] transition-all hover:bg-[var(--electric)] hover:text-[var(--on-accent)] shadow-lg"
              >
                Discutons de votre projet
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="mt-10 flex gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-effect min-w-[140px] rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                      {s.label}
                    </span>
                    <span className={`h-2 w-2 animate-pulse rounded-full ${s.dot}`} />
                  </div>
                  <div className="mt-1 text-3xl font-black text-[var(--text-primary)]">{s.value}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Colonne droite : mission + carte dispo */}
          <div className="flex flex-col gap-8">
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[var(--electric)]">
                <span className="text-[9px]"><FontAwesomeIcon icon={faCircle} /></span> Mission :
              </div>
              <h2 className="mt-3 text-xl font-bold leading-snug text-[var(--text-primary)] lg:text-2xl">
                Transformer vos idées en applications web qui convertissent
              </h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                Clarté. Design.
                <br />
                Résultats mesurables.
              </p>
            </motion.div>

            {/* <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-app)]/90 p-5 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--electric)]/10 text-xs font-black text-[var(--electric)]">
                    WU
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">Disponible</div>
                    <div className="text-[11px] text-[var(--text-muted)]">{personalInfo.location}</div>
                  </div>
                </div>
                <p className="mt-3 text-[13px] italic leading-relaxed text-[var(--text-secondary)]">
                  « Code propre, suivi clair et livraison soignée pour chaque projet. »
                </p>
                <div className="mt-3 flex gap-0.5 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div> */}

            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border shadow backdrop-blur transition-colors ${
                    s.active
                      ? "border-[var(--electric)] bg-[var(--electric)] text-[var(--on-accent)]"
                      : "border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:bg-[var(--electric)] hover:text-[var(--on-accent)]"
                  }`}
                >
                  <s.icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Réseaux mobile */}
      <div className="flex justify-center gap-3 pb-12 md:hidden">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className={`flex h-11 w-11 items-center justify-center rounded-full border shadow ${
              s.active
                ? "border-[var(--electric)] bg-[var(--electric)] text-[var(--on-accent)]"
                : "border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)]"
            }`}
          >
            <s.icon size={19} />
          </a>
        ))}
      </div>
    </section>
  );
}
