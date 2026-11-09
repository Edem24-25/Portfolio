import React from "react";
import { Link } from "react-router-dom";
import { Lock, ArrowLeft, Database, Eye, ShieldCheck, Cookie, UserCheck, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Confidentialite() {
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
            Données personnelles
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mt-2">
            Politique de Confidentialité
          </h1>
          <p className="text-[var(--text-muted)] mt-3 text-base">
            Votre vie privée est une priorité. Découvrez comment sont traitées et protégées vos données personnelles.
          </p>
        </div>

        {/* Contenu */}
        <div className="space-y-8">
          {/* 1. Responsable du traitement */}
          <section className="glass-effect rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
                <UserCheck size={20} />
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                1. Responsable du traitement des données
              </h2>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                Le responsable du traitement des données personnelles collectées via le site est :
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong className="text-[var(--text-primary)] font-medium">{personalInfo.fullName}</strong></li>
                <li>Email : <a href={`mailto:${personalInfo.email}`} className="text-[var(--electric)] hover:underline">{personalInfo.email}</a></li>
                <li>Téléphone : <a href={`tel:${personalInfo.phone}`} className="text-[var(--electric)] hover:underline">{personalInfo.phoneDisplay}</a></li>
                <li>Localisation : {personalInfo.location}</li>
              </ul>
            </div>
          </section>

          {/* 2. Données collectées */}
          <section className="glass-effect rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
                <Database size={20} />
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                2. Données collectées et méthodes de collecte
              </h2>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                Les données susceptibles d'être recueillies sur ce site le sont principalement lorsque vous utilisez le formulaire de contact :
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li><strong className="text-[var(--text-primary)] font-medium">Nom et prénom :</strong> pour personnaliser les échanges.</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Adresse courriel :</strong> pour vous apporter une réponse à votre demande.</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Numéro de téléphone (optionnel) :</strong> pour des échanges directs si vous le souhaitez.</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Contenu du message :</strong> détail de votre projet, demande de devis ou question.</li>
              </ul>
            </div>
          </section>

          {/* 3. Finalité */}
          <section className="glass-effect rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
                <Eye size={20} />
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                3. Finalité du traitement
              </h2>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                Les informations recueillies sont utilisées exclusivement dans les cadres suivants :
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>Répondre aux messages et demandes de devis transmis via le formulaire de contact.</li>
                <li>Établir un échange professionnel préliminaire à une collaboration ou une prestation.</li>
                <li>Assurer le suivi de la relation client ou partenaire.</li>
              </ul>
              <p className="pt-2">
                Aucune donnée n'est vendue, louée, cédée ou échangée avec des tiers à des fins commerciales ou publicitaires.
              </p>
            </div>
          </section>

          {/* 4. Durée de conservation */}
          <section className="glass-effect rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
                <Lock size={20} />
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                4. Durée de conservation et sécurité
              </h2>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                Les données relatives aux messages de contact sont conservées pendant une durée maximale de 24 mois après le dernier échange, sauf obligation légale ou commerciale contraire (facturation, suivi contractuel).
              </p>
              <p>
                Ce site utilise le protocole de chiffrement SSL/TLS (HTTPS) pour garantir que l'ensemble des données échangées entre votre terminal et le serveur reste strictement confidentiel.
              </p>
            </div>
          </section>

          {/* 5. Cookies & LocalStorage */}
          <section className="glass-effect rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
                <Cookie size={20} />
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                5. Cookies et stockage local (LocalStorage)
              </h2>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                Ce site est conçu de manière sobre et respectueuse de la vie privée :
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li><strong className="text-[var(--text-primary)] font-medium">Aucun cookie traceur tiers :</strong> aucun cookie de pistage publicitaire ou de profilage n'est déposé.</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Préférences locales :</strong> le stockage local (<code className="px-1.5 py-0.5 rounded bg-[var(--border-color)]/30 text-xs">localStorage</code> / <code className="px-1.5 py-0.5 rounded bg-[var(--border-color)]/30 text-xs">sessionStorage</code>) est utilisé uniquement pour mémoriser votre choix de thème (mode sombre ou clair) et éviter de répéter l'animation d'ouverture durant votre session.</li>
              </ul>
            </div>
          </section>

          {/* 6. Vos droits */}
          <section className="glass-effect rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-[var(--electric)]/10 text-[var(--electric)] flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </span>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                6. Vos droits sur vos données
              </h2>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                Conformément aux réglementations relatives à la protection des données personnelles (notamment le RGPD et les lois applicables), vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li><strong className="text-[var(--text-primary)] font-medium">Droit d'accès et d'information :</strong> connaître les données détenues vous concernant.</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Droit de rectification :</strong> demander la correction de données inexactes.</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Droit à l'effacement :</strong> demander la suppression définitive de vos données personnelles.</li>
                <li><strong className="text-[var(--text-primary)] font-medium">Droit d'opposition :</strong> vous opposer à tout moment au traitement de vos données.</li>
              </ul>
              <p className="pt-2">
                Pour exercer ces droits, vous pouvez me contacter simplement par courriel à l'adresse suivante :{" "}
                <a href={`mailto:${personalInfo.email}`} className="text-[var(--electric)] font-medium hover:underline">
                  {personalInfo.email}
                </a>.
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
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
