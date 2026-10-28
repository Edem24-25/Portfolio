import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import CtaBanner from "../components/CtaBanner";

export default function Blog() {
  return (
    <>
      <section className="px-6 pt-16 pb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--electric)]">Blog</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mt-2">Derniers articles</h1>
        <p className="text-[var(--text-muted)] mt-3">Ressources, tutoriels et conseils pour propulser votre business digital.</p>
      </section>
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl glass-effect rounded-3xl p-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--electric)]/10 text-[var(--electric)]">
            <FontAwesomeIcon icon={faPenNib} size="2x" />
          </div>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">Restez à l'écoute !</h2>
          <p className="text-[var(--text-muted)] mt-2 text-sm">Les premiers articles seront publiés très prochainement.</p>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
