import React from "react";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pt-16 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--electric)]">Contact</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mt-2">Démarrer mon projet</h1>
        <p className="text-[var(--text-muted)] mt-3">Premier échange gratuit et sans engagement.</p>
      </section>
      <Contact />
    </>
  );
}
