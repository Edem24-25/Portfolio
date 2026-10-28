import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personalInfo, stats } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Halo lumineux décoratif */}
      <div className="absolute top-1/2 right-10 w-72 h-72 rounded-full bg-primary-500/5 blur-[80px] -z-10" />

      <div className="container mx-auto max-w-5xl">
        {/* Entête de section */}
        <div className="mb-14 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl tracking-wide font-heading">
            À propos
          </h2>
          <div className="w-12 h-1 bg-[var(--electric)] mt-2 mx-auto lg:mx-0 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Colonne gauche : Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-base md:text-lg text-[var(--text-secondary)] font-body leading-relaxed font-light">
            <p>
              Passionné par le développement logiciel depuis mes débuts dans l'informatique, je me suis
              spécialisé dans la création de solutions web robustes et scalables. Mon expertise
              couvre à la fois l'intégration d'interfaces utilisateur modernes et interactives en
              <strong> Frontend</strong> et la conception d'architectures d'API performantes en
              <strong> Backend</strong>.
            </p>
            <p>
              Je mets un point d'honneur à écrire du code propre, documenté et testé, en suivant les
              meilleures pratiques de l'industrie (Clean Code, architecture en couches, automatisation).
              Originaire du Bénin, je travaille à distance avec des clients et équipes locales et internationales.
            </p>
            <p>
              Toujours à l'écoute des nouvelles tendances technologiques, j'adore relever des défis
              complexes liés à l'algorithmique et à l'optimisation des performances des bases de données.
            </p>
          </div>

          {/* Colonne droite : Statistiques */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl glass-effect text-center flex flex-col justify-center items-center h-36 border border-[var(--border-color)] shadow-sm"
              >
                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent font-body mb-2">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-body text-[var(--text-muted)] font-medium leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
