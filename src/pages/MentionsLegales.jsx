import React from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, FileText, Server, Scale, Globe } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function MentionsLegales() {
  const { personalInfo } = portfolioData;

  return (
    <div className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-4xl">
        {/* Fil d'Ariane / Retour */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--electric)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>

        {/* En-tête */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--electric)]">
            Cadre juridique
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mt-2">
            Mentions Légales
          </h1>
          <p className="text-[var(--text-muted)] mt-3 text-base">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
          </p>
        </div>

        {/* Contenu */}
        <div className="space-y-8">
          {/* Section 1 : Éditeur du site */}
          <section className="glass-effect rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
                <FileText size={20} />
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                1. Éditeur du site
              </h2>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                Le présent site internet accessible à l'adresse{" "}
                <strong className="text-[var(--text-primary)] font-semibold">WOLODev</strong> est édité par :
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li><strong className="text-[var(--text-primary)] font-medium">Nom complet :</strong> {personalInfo.fullName}</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Statut :</strong> {personalInfo.status} & Développeur Full-Stack indépendant</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Localisation :</strong> {personalInfo.location}</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Courriel :</strong> <a href={`mailto:${personalInfo.email}`} className="text-[var(--electric)] hover:underline">{personalInfo.email}</a></li>
                <li><strong className="text-[var(--text-primary)] font-medium">Téléphone :</strong> <a href={`tel:${personalInfo.phone}`} className="text-[var(--electric)] hover:underline">{personalInfo.phoneDisplay}</a></li>
              </ul>
              <p className="pt-2">
                Directeur de la publication et responsable de rédaction : <strong className="text-[var(--text-primary)] font-medium">{personalInfo.fullName}</strong>.
              </p>
            </div>
          </section>

          {/* Section 2 : Hébergement */}
          <section className="glass-effect rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
                <Server size={20} />
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                2. Hébergement du site
              </h2>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                Le site est hébergé sur une infrastructure cloud moderne garantissant disponibilité et sécurité :
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li><strong className="text-[var(--text-primary)] font-medium">Fournisseur :</strong> Plateforme d'hébergement cloud (Vercel Inc. / Netlify / GitHub Pages)</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Site officiel :</strong> <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-[var(--electric)] hover:underline">vercel.com</a></li>
              </ul>
            </div>
          </section>

          {/* Section 3 : Propriété intellectuelle */}
          <section className="glass-effect rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
                <Shield size={20} />
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                3. Propriété intellectuelle & droits d'auteur
              </h2>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                L'ensemble des éléments constituant ce site internet (textes, graphismes, code source, logos, maquettes, animations, icônes) est la propriété exclusive de <strong className="text-[var(--text-primary)] font-medium">{personalInfo.fullName}</strong>, sauf mention expresse contraire ou contenus appartenant à des tiers (marques citées, logos de technologies).
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation ou publication, même partielle, de ces éléments est strictement interdite sans autorisation écrite préalable de l'auteur, conformément aux dispositions du Code de la Propriété Intellectuelle.
              </p>
            </div>
          </section>

          {/* Section 4 : Liens hypertextes et responsabilité */}
          <section className="glass-effect rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
                <Globe size={20} />
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                4. Liens hypertextes & limitation de responsabilité
              </h2>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                Le site peut contenir des liens vers des sites tiers (GitHub, LinkedIn, sites de projets clients ou de démonstration). {personalInfo.fullName} n'exerce aucun contrôle sur le contenu de ces sites externes et décline toute responsabilité quant à leur contenu ou pratiques.
              </p>
              <p>
                L'éditeur met tout en œuvre pour fournir des informations exactes et à jour, mais ne saurait être tenu responsable d'éventuelles omissions, inexactitudes ou indisponibilités temporaires du service.
              </p>
            </div>
          </section>

          {/* Section 5 : Droit applicable */}
          <section className="glass-effect rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
                <Scale size={20} />
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                5. Droit applicable
              </h2>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                Les présentes mentions légales sont régies par le droit en vigueur. En cas de différend ou de litige, une solution amiable sera systématiquement recherchée avant toute action judiciaire.
              </p>
            </div>
          </section>
        </div>

        {/* Contact rapide */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[var(--electric)] hover:opacity-95 shadow-lg transition-transform hover:scale-105"
          >
            Une question ? Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
