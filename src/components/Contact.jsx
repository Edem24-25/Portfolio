import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation de l'envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });

      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary-600/5 blur-[120px] -z-10" />

      <div className="container mx-auto max-w-5xl">
        {/* Entête de section */}
        <div className="mb-14 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl tracking-wide font-heading">
            Me contacter
          </h2>
          <div className="w-12 h-1 bg-[var(--electric)] mt-2 mx-auto lg:mx-0 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Colonne gauche : Informations de contact */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold font-body text-[var(--text-primary)] mb-2">
                Travaillons ensemble
              </h3>
              <p className="text-sm md:text-base font-body font-light text-[var(--text-muted)] leading-relaxed">
                Une idée de projet ? Un besoin en développement web ou mobile ? 
                N'hésitez pas à me contacter via le formulaire ou directement par téléphone. 
                Je serai ravi de discuter de vos besoins et de concevoir la solution idéale.
              </p>
            </div>

            {/* Liste d'infos */}
            <div className="flex flex-col gap-5">
              {/* Téléphone */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-primary-500/10 border border-primary-500/10 flex items-center justify-center text-[var(--electric)] shrink-0">
                  <Phone size={18} />
                </div>
                <div className="font-body">
                  <span className="text-xs text-[var(--text-muted)] block">Téléphone</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm md:text-base font-semibold text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors duration-200"
                  >
                    {personalInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-primary-500/10 border border-primary-500/10 flex items-center justify-center text-[var(--electric)] shrink-0">
                  <Mail size={18} />
                </div>
                <div className="font-body">
                  <span className="text-xs text-[var(--text-muted)] block">Email</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm md:text-base font-semibold text-[var(--text-secondary)] hover:text-[var(--electric)] transition-colors duration-200 break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Adresse */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-primary-500/10 border border-primary-500/10 flex items-center justify-center text-[var(--electric)] shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="font-body">
                  <span className="text-xs text-[var(--text-muted)] block">Localisation</span>
                  <span className="text-sm md:text-base font-semibold text-[var(--text-secondary)]">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Footer de contact / Droits */}
            <div className="text-xs font-body text-[var(--text-muted)] font-light mt-6 lg:mt-0">
              © {new Date().getFullYear()} {personalInfo.fullName}. Tous droits réservés.
            </div>
          </div>

          {/* Colonne droite : Formulaire de contact */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl glass-effect border border-[var(--border-color)] shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Champ Nom */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-[var(--text-secondary)] font-body">
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nom Complet"
                    className="px-4 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)]/50 focus:border-primary-500 focus:outline-none text-sm font-body text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors duration-200"
                  />
                </div>

                {/* Champ Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-[var(--text-secondary)] font-body">
                    Votre Adresse Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="adresse@exemple.com"
                    className="px-4 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)]/50 focus:border-primary-500 focus:outline-none text-sm font-body text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors duration-200"
                  />
                </div>

                {/* Champ Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-[var(--text-secondary)] font-body">
                    Votre Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Bonjour Jeanpaul, j'aimerais échanger avec vous sur..."
                    className="px-4 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-app)]/50 focus:border-primary-500 focus:outline-none text-sm font-body text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Bouton d'envoi et états */}
                <div className="relative">
                  <AnimatePresence>
                    {isSent && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 text-sm font-body font-semibold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 rounded-xl mb-4"
                      >
                        <CheckCircle2 size={16} />
                        Message envoyé avec succès ! Je reviens vers vous rapidement.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-body font-semibold text-sm transition-all duration-300 text-white bg-gradient-to-r from-primary-500 to-primary-700 hover:shadow-lg hover:shadow-primary-600/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
