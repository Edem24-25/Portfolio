import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import ExperienceEducation from "../components/ExperienceEducation";
import TechStack from "../components/TechStack";
import CtaBanner from "../components/CtaBanner";

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pt-16 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--electric)]">À propos</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mt-2">Parcours & compétences</h1>
      </section>
      <About />
      <TechStack />
      <Skills />
      <ExperienceEducation />
      <CtaBanner />
    </>
  );
}
