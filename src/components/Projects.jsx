import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { portfolioData } from "../data/portfolioData";

export default function Projects({ preview = false }) {
  const { projects } = portfolioData;
  const visibleProjects = preview ? projects.slice(0, 3) : projects;
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const modalOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 200, delay: 0.1 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  // Image d'illustration de remplacement sur Unsplash de qualité premium
  const getProjectImage = (id) => {
    switch (id) {
      case 1:
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&h=450&q=80"; // Fintech / Dashboard
      case 2:
        return "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fit=crop&w=800&h=450&q=80"; // Restaurant
      case 3:
        return "https://images.unsplash.com/photo-1488646953014-85cb44e25828?fit=crop&w=800&h=450&q=80"; // Tourisme
      case 4:
        return "https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&h=450&q=80"; // E-commerce
      case 5:
        return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&h=450&q=80"; // Code
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary-600/5 blur-[120px] -z-10" />

      <div className="container mx-auto max-w-5xl">
        {/* Entête de section */}
        <div className="mb-14 flex items-end justify-between gap-4 text-center lg:text-left">
          <div>
            <h2 className="text-5xl md:text-6xl tracking-wide font-heading">
              Mes projets
            </h2>
            <div className="w-12 h-1 bg-[var(--electric)] mt-2 mx-auto lg:mx-0 rounded-full" />
          </div>
          {preview && (
            <Link to="/portfolio" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[var(--electric)] hover:underline shrink-0">
              Tout voir <ArrowRight size={16} />
            </Link>
          )}
        </div>

        {/* Grille des Projets */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col h-full rounded-3xl glass-effect border border-[var(--border-color)] overflow-hidden shadow-sm hover:shadow-xl hover:border-primary-500/20"
            >
              {/* Image d'aperçu du projet */}
              {getProjectImage(project.id) ? (
                <div className="h-48 w-full overflow-hidden relative border-b border-[var(--border-color)] flex-shrink-0">
                  <img
                    src={getProjectImage(project.id)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[95%] dark:brightness-[85%]"
                  />
                  <span className="absolute top-4 left-4 bg-primary-500/90 text-[var(--on-primary)] font-body text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              ) : (
                <div className="pt-6 px-6 pb-0 flex-shrink-0">
                  <span className="bg-primary-500/10 text-[var(--electric)] font-body text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide border border-primary-500/20 inline-block">
                    {project.category}
                  </span>
                </div>
              )}

              {/* Contenu textuel */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-body text-[var(--text-primary)] mb-2 group-hover:text-[var(--electric)] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm font-body font-light text-[var(--text-muted)] mb-5 line-clamp-3 leading-relaxed flex-grow">
                  {project.shortDescription}
                </p>

                {/* Badges de Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-body font-semibold text-[var(--text-secondary)] bg-[var(--border-color)]/30 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] font-body font-semibold text-[var(--text-muted)] bg-[var(--border-color)]/30 px-2 py-1 rounded-md">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Bouton Voir Plus */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--on-accent)] hover:bg-[var(--electric)] hover:border-[var(--electric)] transition-all duration-300 font-body text-xs font-semibold cursor-pointer w-full text-center group/btn"
                >
                  <span>Savoir plus</span>
                  <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pop-up Modale détaillée du projet */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalContentVariants}
              className="max-h-[85vh] w-full max-w-2xl rounded-3xl overflow-y-auto p-6 md:p-8 flex flex-col gap-6 relative shadow-2xl bg-[var(--bg-app)] border border-[var(--border-color)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-primary-500/40 text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors duration-200 cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Image principale */}
              {getProjectImage(selectedProject.id) ? (
                <div className="h-64 w-full rounded-2xl overflow-hidden relative border border-primary-500/10">
                  <img
                    src={getProjectImage(selectedProject.id)}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <div>
                      <span className="text-xs font-bold text-primary-400 uppercase tracking-widest block mb-1">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-extrabold font-body text-white leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pt-6 pb-2">
                  <span className="text-xs font-bold text-[var(--electric)] uppercase tracking-widest block mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold font-body text-[var(--text-primary)] leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              )}

              {/* Description longue */}
              <div className="flex flex-col gap-4 text-sm md:text-base font-body text-[var(--text-secondary)] leading-relaxed">
                <h4 className="font-bold text-[var(--electric)] uppercase tracking-wider text-xs">
                  Description du projet
                </h4>
                <p>{selectedProject.longDescription}</p>
              </div>

              {/* Fonctionnalités clés */}
              <div className="flex flex-col gap-3 text-sm font-body text-[var(--text-secondary)]">
                <h4 className="font-bold text-[var(--electric)] uppercase tracking-wider text-xs">
                  Fonctionnalités clés
                </h4>
                <ul className="flex flex-col gap-2">
                  {selectedProject.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1"><FontAwesomeIcon icon={faCheck} /></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Technique */}
              <div className="flex flex-col gap-2.5">
                <h4 className="font-bold text-[var(--electric)] uppercase tracking-wider text-xs">
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-body font-semibold text-primary-300 bg-primary-500/10 border border-primary-500/20 px-3 py-1.5 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full h-[1px] bg-[var(--border-color)] my-1" />

              {/* Bouton unique : voir le site déployé */}
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-end">
                {selectedProject.demoUrl ? (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 text-[var(--on-primary)] font-body text-sm font-semibold transition-colors duration-200 cursor-pointer text-center"
                  >
                    <ExternalLink size={16} />
                    Voir le site
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800 text-[var(--on-primary)] font-body text-sm font-semibold transition-colors duration-200 cursor-pointer text-center"
                  >
                    <ExternalLink size={16} />
                    Démo sur demande
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
