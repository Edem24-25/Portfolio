import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { getActiveAccent } from "./ThemeSelector";

/* ================================================================
   PRELODER / INTRO — CONFIGURATION CENTRALISÉE
   Tout ce qui est réglable (marque, textes, images, couleurs,
   largeurs, timings) se trouve dans INTRO_CONFIG.
   Les timings sont en SECONDES.
   ================================================================ */

const TILE = 420; // largeur d'une "photo" dans le motif défilant

/**
 * Image placeholder (SVG inline → aucune dépendance réseau).
 * Remplacez les entrées de `photos` par vos vraies images :
 *   photos: ["/intro/photo-1.jpg", "/intro/photo-2.jpg", "/intro/photo-3.jpg"]
 */
function placeholderPhoto(label, from, to, blob) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${from}"/>
        <stop offset="1" stop-color="${to}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="800" fill="url(#bg)"/>
    <circle cx="310" cy="170" r="130" fill="${blob}" opacity="0.4"/>
    <path d="M0 640 L400 470 L400 800 L0 800 Z" fill="#0b0b10" opacity="0.5"/>
    <text x="200" y="430" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="58" font-weight="800" fill="#ffffff">${label}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const INTRO_CONFIG = {
  /* --- Variables à personnaliser --- */
  monogram: "WU", // monogramme de la marque
  slogan: "CLARTÉ · DESIGN · RÉSULTATS MESURABLES", // slogan en bas de l'écran d'accueil
  // Repli seulement : le fond suit automatiquement la couleur active du
  // sélecteur de palette (--electric), appliquée par getActiveAccent().
  accent: "#33FFD6",
  monogramWidthDesktop: 150, // largeur du monogramme en phase 3 (px)
  monogramWidthMobile: 96,
  zoomScale: 30, // échelle du zoom traversant (phase 4)
  photoTileWidth: TILE,
  photos: [
    placeholderPhoto("IMAGE 1", "#33FFD6", "#0d3b33", "#ffffff"),
    placeholderPhoto("IMAGE 2", "#c88a5a", "#4a2c1a", "#33FFD6"),
    placeholderPhoto("IMAGE 3", "#1b1b22", "#3a3a4a", "#33FFD6"),
  ],
  storageKey: "wolodev-intro-seen", // intro jouée une seule fois par session

  /* --- Timings (secondes) --- */
  timings: {
    // Version complète (première visite de la session) — ~2,6 s
    full: {
      phase2At: 0.8, // fin de l'écran d'accueil → shimmer
      shimmerAt: 0.85,
      shimmerDuration: 0.35, // balayage du reflet métallique
      shineOutAt: 1.08,
      phase3At: 1.2, // lettres remplies d'images + agrandissement
      growDuration: 0.4,
      photoFadeInAt: 1.25,
      photoFadeDuration: 0.2,
      scrollDuration: 1.0, // défilement des photos dans les lettres
      phase4At: 1.6, // zoom traversant
      zoomDuration: 1.0,
      photoFadeOutAt: 1.75, // les lettres deviennent des fenêtres sur le site
      photoFadeOutDuration: 0.3,
      accentFadeAt: 2.2, // le calque accent disparaît complètement
      accentFadeDuration: 0.4,
      end: 2.6,
    },
    // Version courte (déjà vu pendant la session) — ~1,25 s
    short: {
      metalAt: 0.12,
      growAt: 0.18,
      growDuration: 0.28,
      photosAt: 0.42,
      zoomAt: 0.55,
      zoomDuration: 0.7,
      photoFadeOutAt: 0.68,
      photoFadeOutDuration: 0.22,
      accentFadeAt: 0.95,
      accentFadeDuration: 0.3,
      end: 1.25,
    },
    // prefers-reduced-motion : simple fondu à la place du zoom — ~1,1 s
    reduced: {
      fadeOutAt: 0.6,
      fadeOutDuration: 0.5,
      end: 1.1,
    },
  },
};

/**
 * Intro d'ouverture (preloader) jouée au chargement de l'app.
 * Le site est monté derrière (z-index inférieur) et apparaît à
 * travers les lettres pendant le zoom traversant (phase 4).
 */
export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef(null);
  const accentRef = useRef(null);
  const sloganRef = useRef(null);
  const holeRef = useRef(null);
  const blackRef = useRef(null);
  const metalRef = useRef(null);
  const shineRef = useRef(null);
  const photoRef = useRef(null);
  const shineGradRef = useRef(null);
  const photoPatternRef = useRef(null);

  useEffect(() => {
    const C = INTRO_CONFIG;
    let cancelled = false;
    let timeline = null;

    // --- Blocage du scroll pendant l'intro ---
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const finish = () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      try {
        sessionStorage.setItem(C.storageKey, "1");
      } catch (e) {
        /* stockage indisponible */
      }
      setVisible(false);
    };

    const prepare = () => {
      if (cancelled) return;

      // Le fond de l'intro suit la couleur d'accent active (sélecteur de
      // palette × clair/sombre) : les deux ne peuvent plus diverger.
      accentRef.current.setAttribute("fill", getActiveAccent() || C.accent);

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let seen = false;
      try {
        seen = sessionStorage.getItem(C.storageKey) === "1";
      } catch (e) {
        /* stockage indisponible */
      }

      const isMobile = window.innerWidth < 768;

      // Slogan collé en bas de l'écran
      sloganRef.current.setAttribute(
        "y",
        String(window.innerHeight - (isMobile ? 14 : 18))
      );

      // Les 5 monogrammes (visibles + celui du masque) partagent
      // exactement la même géométrie → les lettres restent couvertes.
      const monoEls = [
        blackRef.current,
        metalRef.current,
        shineRef.current,
        photoRef.current,
        holeRef.current,
      ];
      const bbox = blackRef.current.getBBox();
      const targetW = isMobile ? C.monogramWidthMobile : C.monogramWidthDesktop;
      const scale3 = bbox.width > 0 ? targetW / bbox.width : 2.5;

      // --- Centrage strict du monogramme ---
      // 1) L'ancre "middle" centre la chasse, mais l'ink italique n'est
      //    pas symétrique : on décale d'autant pour centrer l'écrit.
      // 2) On fige le centre de transformation (svgOrigin) au centre
      //    exact des lettres : le croissance et le zoom ×30 se font
      //    droit sur le spectateur, sans dérive latérale.
      const inkCx = bbox.x + bbox.width / 2;
      const inkCy = bbox.y + bbox.height / 2;
      const dx = window.innerWidth / 2 - inkCx;
      if (dx !== 0) {
        monoEls.forEach((el) =>
          el.setAttribute("x", String(window.innerWidth / 2 + dx))
        );
      }
      const svgOrigin = `${inkCx + dx} ${inkCy}`;

      const F = C.timings.full;
      const S = C.timings.short;
      const R = C.timings.reduced;

      /* ---------- prefers-reduced-motion : simple fondu ---------- */
      if (reduced) {
        timeline = gsap.timeline({ onComplete: finish });
        timeline.fromTo(
          sloganRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" },
          0.05
        );
        timeline.to(
          rootRef.current,
          { opacity: 0, duration: R.fadeOutDuration, ease: "power1.inOut" },
          R.fadeOutAt
        );
        return;
      }

      /* ---------- Version courte (déjà vu cette session) ---------- */
      if (seen) {
        timeline = gsap.timeline({
          onComplete: finish,
          defaults: { ease: "expo.inOut" },
        });
        timeline.fromTo(
          sloganRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.15, ease: "power1.out" },
          0
        );
        timeline.to(sloganRef.current, { opacity: 0, duration: 0.2, ease: "power1.in" }, 0.35);
        timeline.to(blackRef.current, { opacity: 0, duration: 0.15 }, S.metalAt);
        timeline.to(metalRef.current, { opacity: 1, duration: 0.15 }, S.metalAt);
        timeline.to(monoEls, { scale: scale3, svgOrigin, duration: S.growDuration, ease: "power3.inOut" }, S.growAt);
        timeline.to(metalRef.current, { opacity: 0, duration: 0.14, ease: "power1.inOut" }, S.photosAt);
        timeline.to(photoRef.current, { opacity: 1, duration: 0.14, ease: "power1.inOut" }, S.photosAt);
        timeline.fromTo(
          photoPatternRef.current,
          { attr: { x: 0 } },
          { attr: { x: -TILE }, duration: 0.55, ease: "power1.out" },
          S.photosAt
        );
        timeline.to(monoEls, { scale: C.zoomScale, svgOrigin, duration: S.zoomDuration }, S.zoomAt);
        timeline.to(
          photoRef.current,
          { opacity: 0, duration: S.photoFadeOutDuration, ease: "power2.in" },
          S.photoFadeOutAt
        );
        timeline.to(
          accentRef.current,
          { opacity: 0, duration: S.accentFadeDuration, ease: "power2.inOut" },
          S.accentFadeAt
        );
        return;
      }

      /* ---------- Version complète ---------- */
      timeline = gsap.timeline({
        onComplete: finish,
        defaults: { ease: "power3.inOut" },
      });

      /* PHASE 1 — Écran d'accueil (0 → 0,8 s) :
         fond accent plein écran, monogramme noir, slogan en bas. */
      timeline.fromTo(
        sloganRef.current,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        0
      );

      /* PHASE 2 — Shimmer (0,8 → 1,2 s) :
         le slogan s'efface, le monogramme devient métallique
         (cuivre / chrome) et un reflet traverse les lettres. */
      timeline.to(sloganRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" }, F.phase2At);
      timeline.to(blackRef.current, { opacity: 0, duration: 0.25, ease: "power1.inOut" }, F.shimmerAt);
      timeline.to(metalRef.current, { opacity: 1, duration: 0.25, ease: "power1.inOut" }, F.shimmerAt);
      timeline.set(shineRef.current, { opacity: 1 }, F.shimmerAt);
      timeline.fromTo(
        shineGradRef.current,
        { attr: { x1: -1, x2: -0.4 } },
        { attr: { x1: 1, x2: 1.6 }, duration: F.shimmerDuration, ease: "expo.inOut" },
        F.shimmerAt
      );
      timeline.to(shineRef.current, { opacity: 0, duration: 0.12, ease: "power1.out" }, F.shineOutAt);

      /* PHASE 3 — Lettres remplies d'images (1,2 → 1,6 s) :
         le monogramme grossit et des photos défilent dans les lettres. */
      timeline.to(monoEls, { scale: scale3, svgOrigin, duration: F.growDuration, ease: "power3.inOut" }, F.phase3At);
      timeline.to(metalRef.current, { opacity: 0, duration: F.photoFadeDuration, ease: "power1.inOut" }, F.photoFadeInAt);
      timeline.to(photoRef.current, { opacity: 1, duration: F.photoFadeDuration, ease: "power1.inOut" }, F.photoFadeInAt);
      timeline.fromTo(
        photoPatternRef.current,
        { attr: { x: 0 } },
        { attr: { x: -2 * TILE }, duration: F.scrollDuration, ease: "power1.inOut" },
        F.phase3At
      );

      /* PHASE 4 — Zoom traversant (1,6 → 2,6 s) :
         le monogramme scale ×30, le calque accent a une découpe en
         forme des lettres (masque SVG) → le site apparaît à travers
         les lettres, puis le calque accent disparaît complètement. */
      timeline.to(monoEls, { scale: C.zoomScale, svgOrigin, duration: F.zoomDuration, ease: "expo.inOut" }, F.phase4At);
      timeline.to(
        photoRef.current,
        { opacity: 0, duration: F.photoFadeOutDuration, ease: "power2.in" },
        F.photoFadeOutAt
      );
      timeline.to(
        accentRef.current,
        { opacity: 0, duration: F.accentFadeDuration, ease: "power2.inOut" },
        F.accentFadeAt
      );
    };

    // On attend le chargement des polices pour mesurer le monogramme
    // (avec un garde-fou de 600 ms si les polices tardent).
    const fontsReady =
      document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([
      fontsReady,
      new Promise((resolve) => setTimeout(resolve, 600)),
    ]).then(prepare);

    return () => {
      cancelled = true;
      if (timeline) timeline.kill();
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, []);

  if (!visible) return null;

  const C = INTRO_CONFIG;
  // Fond = couleur d'accent active au moment du rendu (repli : config).
  const accent = getActiveAccent() || C.accent;
  // Tous les monogrammes partagent cette géométrie exacte :
  const mono = {
    x: "50%",
    y: "50%",
    textAnchor: "middle",
    dominantBaseline: "central",
  };
  const patternW = TILE * 3;

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 z-[1000]"
      style={{ touchAction: "none" }}
    >
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Découpe en forme du monogramme : le calque accent est
              visible partout SAUF dans les lettres (trou / fenêtre). */}
          <mask id="intro-hole-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" />
            <text ref={holeRef} {...mono} className="intro-mono" fill="#000000">
              {C.monogram}
            </text>
          </mask>

          {/* Dégradé métallique (reflets cuivre / chrome) */}
          <linearGradient id="intro-metal-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4a2c1a" />
            <stop offset="0.15" stopColor="#b4713f" />
            <stop offset="0.3" stopColor="#e9b48c" />
            <stop offset="0.45" stopColor="#ffffff" />
            <stop offset="0.58" stopColor="#c7c9cc" />
            <stop offset="0.72" stopColor="#f2e4d8" />
            <stop offset="0.86" stopColor="#9c6239" />
            <stop offset="1" stopColor="#3d2416" />
          </linearGradient>

          {/* Bandeau lumineux qui traverse les lettres (x1/x2 animés) */}
          <linearGradient id="intro-shine-grad" ref={shineGradRef} x1="-1" y1="0" x2="-0.4" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Fond blanc cassé + photos qui défilent dans les lettres */}
          <pattern
            ref={photoPatternRef}
            id="intro-photo-pattern"
            patternUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={patternW}
            height="100%"
          >
            <rect x={0} y={0} width={patternW} height="100%" fill="#f1eee6" />
            {C.photos.map((src, i) => (
              <image
                key={i}
                href={src}
                x={i * TILE + TILE * 0.06}
                y={0}
                width={TILE * 0.88}
                height="100%"
                preserveAspectRatio="xMidYMid slice"
              />
            ))}
          </pattern>
        </defs>

        {/* Calque couleur d'accent, découpé par les lettres */}
        <rect
          ref={accentRef}
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={accent}
          mask="url(#intro-hole-mask)"
        />

        {/* Monogramme — phases 1→4 (superpositions fonduses entre elles) */}
        <text ref={blackRef} {...mono} className="intro-mono" fill="#000000">
          {C.monogram}
        </text>
        <text ref={metalRef} {...mono} className="intro-mono" fill="url(#intro-metal-grad)" opacity={0}>
          {C.monogram}
        </text>
        <text ref={shineRef} {...mono} className="intro-mono" fill="url(#intro-shine-grad)" opacity={0}>
          {C.monogram}
        </text>
        <text ref={photoRef} {...mono} className="intro-mono" fill="url(#intro-photo-pattern)" opacity={0}>
          {C.monogram}
        </text>

        {/* Slogan en bas, centré */}
        <text
          ref={sloganRef}
          x="50%"
          y="96%"
          textAnchor="middle"
          fill="#000000"
          fontSize={10}
          fontWeight={700}
          letterSpacing="2.5"
        >
          {C.slogan}
        </text>
      </svg>
    </div>
  );
}
