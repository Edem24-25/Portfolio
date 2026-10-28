import React from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Cpu } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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

  const categories = [
    { id: "frontend", title: "Frontend Development", icon: Monitor, list: skills.frontend, color: "from-primary-500 to-primary-400" },
    { id: "backend", title: "Backend & Bases de données", icon: Server, list: skills.backend, color: "from-primary-600 to-primary-700" },
    { id: "tools", title: "Outils & Environnement", icon: Cpu, list: skills.tools, color: "from-primary-400 via-primary-500 to-primary-600" },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-primary-600/5 blur-[120px] -z-10" />

      <div className="container mx-auto max-w-5xl">
        {/* Entête de section */}
        <div className="mb-14 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl tracking-wide font-heading">
            Compétences
          </h2>
          <div className="w-12 h-1 bg-[var(--electric)] mt-2 mx-auto lg:mx-0 rounded-full" />
        </div>

        {/* Grille de catégories de compétences */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                className="p-6 md:p-8 rounded-3xl glass-effect border border-[var(--border-color)] shadow-sm flex flex-col h-full"
              >
                {/* Icône & Titre de catégorie */}
                <div className="flex items-center gap-3.5 mb-8">
                  <div className="w-11 h-11 rounded-2xl bg-primary-500/10 flex items-center justify-center text-[var(--electric)]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-bold font-body text-[var(--text-primary)]">
                    {cat.title}
                  </h3>
                </div>

                {/* Liste des compétences */}
                <div className="flex flex-col gap-5 flex-grow">
                  {cat.list.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-sm font-body">
                        <span className="font-semibold text-[var(--text-secondary)]">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-[var(--text-muted)]">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Barre de niveau animée */}
                      <div className="h-2 w-full rounded-full bg-[var(--border-color)] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
