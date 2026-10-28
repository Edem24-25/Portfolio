export const portfolioData = {
  personalInfo: {
    firstName: "Ulrich Josué Edem",
    lastName: "WOLO",
    fullName: "WOLO Ulrich Josué Edem",
    title: "Développeur Informatique",
    subtitles: [
      "Développeur Informatique",
      "Développeur Full-Stack"
    ],
    status: "Étudiant en Informatique",
    email: "ulrichjosueedemwolo@gmail.com",
    phone: "+2290148210301",
    phoneDisplay: "+229 01 48 21 03 01",
    location: "Porto-Novo, Bénin",
    github: "https://github.com/Edem24-25",
    linkedin: "https://www.linkedin.com/in/ulrich-josué-edem-wolo-b0721a3b2",
    bio: "Étudiant passionné en informatique, spécialisé dans l'architecture et le développement d'applications full-stack. Je conçois des solutions performantes, évolutives et adaptées à vos besoins."
  },
  stats: [
    { value: "3+", label: "Années de formation" },
    { value: "3+", label: "Projets réalisés" },
    { value: "8+", label: "Technologies maîtrisées" },
    { value: "100%", label: "Motivation" }
  ],
  technologies: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", desc: "Structure sémantique" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", desc: "Design responsive" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", desc: "Interactivité" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", desc: "UI rapide" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", desc: "Backend robuste" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", desc: "Bases relationnelles" },
    { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", desc: "Versioning", darkInvert: true },
    { name: "UML / Agile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", desc: "Modélisation & gestion" }
  ],
  services: [
    {
      id: 1,
      title: "Site vitrine",
      category: "Site vitrine",
      description: "Site professionnel rapide et optimisé SEO pour présenter votre activité et convertir vos visiteurs.",
      points: ["Design sur-mesure responsive", "Optimisation SEO de base", "Formulaire de contact"],
      price: "Sur devis"
    },
    {
      id: 2,
      title: "Application web sur-mesure",
      category: "Application web",
      description: "PharmGuard, EduConnect : gestion, tableau de bord, authentification, rôles utilisateurs avec PHP/MySQL.",
      points: ["Modélisation UML + BDD MySQL", "Back-office admin complet", "Authentification sécurisée"],
      price: "Sur devis"
    },
    {
      id: 3,
      title: "E-Commerce artisanal",
      category: "E-commerce",
      description: "Boutique en ligne avec catalogue, panier persistant et suivi commandes, comme Artisanat e-Shop.",
      points: ["Catalogue + recherche / filtre", "Panier + commandes", "Back-office produits"],
      price: "Sur devis"
    },
    {
      id: 4,
      title: "Landing page",
      category: "Landing page",
      description: "Page de conversion ciblée pour un produit, un événement ou une campagne.",
      points: ["Copywriting orienté conversion", "Chargement ultra-rapide", "CTA WhatsApp / contact"],
      price: "Sur devis"
    },
    {
      id: 5,
      title: "Maintenance & optimisation",
      category: "Maintenance",
      description: "Corrections, sécurisation, optimisation performances et sauvegardes.",
      points: ["Audit + corrections", "Optimisation BDD", "Mises à jour"],
      price: "Sur devis"
    },
    {
      id: 6,
      title: "Formation & accompagnement",
      category: "Formation",
      description: "Prise en main de votre site, bonnes pratiques, documentation simple.",
      points: ["Session 1:1 en visio", "Documentation PDF", "Support 7 jours"],
      price: "Sur devis"
    }
  ],
  skills: {
    frontend: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Bootstrap", level: 85 }
    ],
    backend: [
      { name: "PHP", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "UML", level: 80 }
    ],
    tools: [
      { name: "Git & GitHub", level: 75 },
      { name: "Génie Logiciel", level: 75 },
      { name: "Gestion de Projet Agile", level: 70 }
    ]
  },
  experiences: [
    {
      id: 1,
      role: "Développeur Web (Projet Académique)",
      company: "ESCAE Bénin",
      period: "2024 (En cours)",
      description: "Développement d'applications web dans le cadre de la formation en Systèmes Informatiques et Logiciels.",
      points: [
        "Analyse des besoins et modélisation UML de bases de données relationnelles.",
        "Conception d'interfaces utilisateur réactives avec HTML5, CSS3 et Bootstrap.",
        "Implémentation de logiques métiers backend sécurisées avec PHP et MySQL.",
        "Travail collaboratif avec Git et GitHub pour la gestion des versions."
      ]
    },
    {
      id: 2,
      role: "Participant Hackathon Web",
      company: "Tech Innovation Bénin",
      period: "2023",
      description: "Participation à un hackathon de 48h pour créer une solution numérique innovante.",
      points: [
        "Développement d'un prototype d'application web en équipe restreinte.",
        "Utilisation de HTML, CSS et JavaScript pour concevoir une interface intuitive.",
        "Présentation du projet devant un jury de professionnels de la tech."
      ]
    },
    {
      id: 3,
      role: "Stage d'Immersion (IT)",
      company: "Agence Digitale Locale",
      period: "2022 (2 mois)",
      description: "Découverte du monde professionnel du développement et de la gestion de projets web.",
      points: [
        "Observation des processus de développement et des rituels agiles.",
        "Participation à l'intégration de maquettes graphiques en HTML/CSS.",
        "Initiation aux bonnes pratiques de codage et d'optimisation SEO de base."
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Licence Professionnelle – Systèmes Informatiques et Logiciels",
      school: "ESCAE Bénin",
      period: "2024 – Présent",
      description: "Formation professionnelle en développement web, génie logiciel et gestion de projet.",
      points: [
        "Développement web : PHP, JavaScript, MySQL.",
        "Bases de données relationnelles et modélisation UML.",
        "Génie logiciel et méthodes de développement agile.",
        "Gestion de projet Agile (Scrum, planification, livraison).",
        "Développement d'applications métier complètes."
      ]
    },
    {
      id: 2,
      degree: "Baccalauréat Scientifique (Série D)",
      school: "COLLEGE D'ENSEIGEMENT GENERAL D'APPLICATION",
      period: "2024",
      description: "Diplôme de fin d'études secondaires avec spécialisation en sciences.",
      points: [
        "Spécialisation en Mathématiques, Physique et Sciences de la Vie et de la Terre.",
        "Développement d'un esprit analytique et de la rigueur scientifique.",
        "Bases solides pour la poursuite d'études supérieures en informatique."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "SikaFlow",
      category: "Application Web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      shortDescription: "Plateforme automatisée de gestion des remboursements de prêts et des abonnements (Bénin / Afrique de l'Ouest).",
      longDescription: "SikaFlow (HODD GLOBAL) est une plateforme de gestion des remboursements de prêts et des abonnements récurrents, construite sur un squelette Laravel 11 conforme au cahier des charges : prêts, échéanciers, paiements manuels et automatiques, créanciers et moyens de paiement Mobile Money MTN / Moov.",
      features: [
        "Gestion des prêts, échéanciers et paiements manuels + automatiques",
        "Gestion des abonnements récurrents aux services",
        "Moyens de paiement : Mobile Money MTN / Moov, comptes bancaires",
        "Gestion des créanciers et rôle administrateur",
        "Authentification par nom, téléphone et mot de passe"
      ],
      tech: ["Laravel 11", "PHP", "Blade", "MySQL", "JavaScript", "CSS3"],
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: 2,
      title: "SmartResto",
      category: "Application de Gestion",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
      shortDescription: "Application complète de gestion de restaurant : salle, commandes, cuisine et encaissement.",
      longDescription: "SmartResto est une application de gestion de restaurant en PHP/MySQL : site vitrine public, authentification avec rôles (Gérant, Serveur, Cuisinier, Caissier), tableau de bord KPIs, plan de salle interactif, prise de commande, écran cuisine (KDS) et facturation multi-moyens dont Mobile Money.",
      features: [
        "Site vitrine public (accueil, menu, contact)",
        "Rôles Gérant, Serveur, Cuisinier, Caissier",
        "Tableau de bord KPIs : CA du jour, tickets, stocks",
        "Plan de salle interactif et écran cuisine (KDS)",
        "Facturation : espèces, Mobile Money MTN / Moov / Celtiis"
      ],
      tech: ["PHP", "MySQL", "JavaScript", "CSS3", "HTML5"],
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: 3,
      title: "DanXomè",
      category: "Application Web",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600",
      shortDescription: "Plateforme immersive dédiée au patrimoine, à l'art et au tourisme du Bénin.",
      longDescription: "DanXomè valorise le patrimoine culturel du Bénin : royaumes historiques, musées, visites virtuelles 360°, galerie d'artisans, événements culturels et gastronomie locale, avec une architecture applicative complète et documentée.",
      features: [
        "Royaumes historiques, musées et visites virtuelles 360°",
        "Galerie d'artisans et événements culturels",
        "Section gastronomie locale",
        "Architecture de projet documentée et environnements configurables"
      ],
      tech: ["TypeScript", "JavaScript", "PLpgSQL", "CSS3"],
      githubUrl: "",
      demoUrl: "https://danxome-zsde.vercel.app/"
    },
    {
      id: 4,
      title: "Gestion Boutique en Ligne",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600",
      shortDescription: "Système complet de gestion logistique pour boutique en ligne.",
      longDescription: "Système de gestion logistique pour boutique en ligne en HTML5, CSS3 et Bootstrap 5 : tableau de bord avec métriques et graphiques, gestion des commandes avec filtres, gestion de l'inventaire et suivi des stocks faibles.",
      features: [
        "Tableau de bord : métriques, commandes récentes, graphiques de ventes",
        "Gestion des commandes : filtres, création, édition, suppression",
        "Gestion de l'inventaire : stocks, catégories, alertes de stock faible",
        "Interface responsive avec Bootstrap 5"
      ],
      tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
      githubUrl: "",
      demoUrl: "https://edem24-25.github.io/Gestion-de-boutique-en-ligne/"
    },
    {
      id: 5,
      title: "Projet Essai Plateforme",
      category: "Projet Académique",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600",
      shortDescription: "Projet académique d'expérimentation d'une plateforme web.",
      longDescription: "Projet académique réalisé dans le cadre de la formation : expérimentation des bases du développement web, structuration des pages et mise en pratique HTML.",
      features: [
        "Structure de pages HTML",
        "Mise en pratique des fondamentaux du web",
        "Travail réalisé dans un cadre académique"
      ],
      tech: ["HTML5"],
      githubUrl: "",
      demoUrl: "https://edem24-25.github.io/Projet-Boostrap/"
    }
  ]
};
