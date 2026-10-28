import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { portfolioData } from "../data/portfolioData";

export default function ExperienceEducation() {
  const { experiences, education } = portfolioData;
  const [activeTab, setActiveTab] = useState("education"); // "experience" ou "education"

  const listItems = activeTab === "experience" ? experiences : education;

  const tabVariants = {
    inactive: { scale: 0.97, opacity: 0.75 },
    active: { scale: 1, opacity: 1 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-primary-500/5 blur-[100px] -z-10" />

      <div className="container mx-auto max-w-4xl">
        {/* Entête de section */}
        <div className="mb-14 text-center">
          <h2 className="text-5xl md:text-6xl tracking-wide font-heading">
            Parcours professionnel
          </h2>
          <div className="w-12 h-1 bg-[var(--electric)] mt-2 mx-auto rounded-full" />
        </div>

        {/* Boutons d'onglets de bascule */}
        <div className="flex items-center justify-center gap-4 mb-14">
          {/* Onglet Expérience */}
          <motion.button
            onClick={() => setActiveTab("experience")}
            variants={tabVariants}
            animate={activeTab === "experience" ? "active" : "inactive"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-body text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "experience"
                ? "bg-gradient-to-r from-primary-500 to-primary-700 text-[var(--on-primary)] shadow-lg shadow-primary-600/20"
                : "border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-primary-500/30"
            }`}
          >
            <Briefcase size={16} />
            Expérience
          </motion.button>

          {/* Onglet Formation */}
          <motion.button
            onClick={() => setActiveTab("education")}
            variants={tabVariants}
            animate={activeTab === "education" ? "active" : "inactive"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-body text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === "education"
                ? "bg-gradient-to-r from-primary-500 to-primary-700 text-[var(--on-primary)] shadow-lg shadow-primary-600/20"
                : "border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-primary-500/30"
            }`}
          >
            <GraduationCap size={18} />
            Formation
          </motion.button>
        </div>

        {/* Affichage de la Timeline */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-[var(--border-color)] ml-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-12"
            >
              {listItems.length === 0 ? (
                <motion.div
                  variants={itemVariants}
                  className="text-center py-16 text-[var(--text-muted)] font-body"
                >
                  <Briefcase size={40} className="mx-auto mb-4 opacity-30" />
                  <p className="text-base font-light">Aucune expérience professionnelle pour l’instant.</p>
                  <p className="text-sm mt-1 opacity-70">Les projets académiques sont disponibles dans la section <span className="text-[var(--electric)] font-semibold">Projets</span>.</p>
                </motion.div>
              ) : (
                listItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Point indicateur sur la ligne de temps */}
                    <div className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full border-2 border-primary-500 bg-[var(--bg-app)] group-hover:bg-[var(--electric)] transition-colors duration-300 shadow-[0_0_12px_var(--electric-glow)]" />

                    {/* Carte d'information */}
                    <div className="p-6 md:p-8 rounded-3xl glass-effect border border-[var(--border-color)] shadow-sm">
                      {/* Entête de carte */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-bold font-body text-[var(--text-primary)]">
                            {item.role || item.degree}
                          </h3>
                          <p className="text-sm font-semibold text-[var(--electric)] font-body">
                            {item.company || item.school}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[var(--text-muted)] font-body bg-[var(--border-color)]/30 px-3 py-1.5 rounded-full w-fit">
                          <Calendar size={14} />
                          {item.period}
                        </div>
                      </div>

                      {/* Description générale */}
                      <p className="text-sm md:text-base text-[var(--text-secondary)] font-body font-light leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Points clés / Accomplissements */}
                      <ul className="flex flex-col gap-2.5">
                        {item.points.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2.5 text-xs md:text-sm font-body text-[var(--text-muted)] leading-relaxed font-light"
                          >
                            <span className="text-[var(--electric)] font-bold mt-1"><FontAwesomeIcon icon={faCaretRight} /></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
