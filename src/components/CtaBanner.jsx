import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function CtaBanner() {
  const { personalInfo } = portfolioData;
  const whatsappNumber = (personalInfo.phone || "").replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour Ulrich, j'ai un projet à discuter.")}`;

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl rounded-[32px] p-10 md:p-14 text-center relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-[var(--on-primary)] shadow-2xl">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-[60px]" />
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Votre idée mérite d'exister.<br />Parlons-en.
        </h2>
        <p className="text-[var(--on-primary)]/80 max-w-xl mx-auto mb-8">
          Premier échange gratuit et sans engagement. Transformons ensemble votre vision en réalité.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--on-primary)] text-[var(--primary-500)] font-bold hover:scale-[1.02] transition">
            Démarrer mon projet <ArrowRight size={18} />
          </Link>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[var(--on-primary)]/40 font-semibold hover:bg-[var(--on-primary)]/10 transition">
            <MessageCircle size={18} /> Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
