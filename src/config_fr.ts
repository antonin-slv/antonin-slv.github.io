
import type { SiteConfig } from "./config.ts";

export const frSiteConfig : SiteConfig = {
  language: "fr",
  IAM: "Je suis",
  greeting : "Bonjour ! 👋",
  name: "Antonin Sylvestre",
  title: "Programmeur Généraliste (C++ / Unreal) & ingénieur informatique",
  description: "Portfolio d'Antonin Sylvestre",
  accentColor: "#1d4ed8",
  social: {
    email: "antonin.sylvestre@orange.fr",
    linkedin: "https://linkedin.com/in/antonin-slv/",
    github: "https://github.com/antonin-slv",
  },
  aboutMe: `
  Durant l'année 2025/2026, je me suis spécialisé dans le développement de jeux vidéo.
  Après avoir vu les fondamentaux, j'ai rapidement approfondi les problématiques réseau et l'optimisation des performances
  et mis mes compétences à l'épreuve lors de deux Game Jams. Après 5 ans d'études en ingénierie informatique,
  je recherche aujourd'hui la denière brique pour concrétiser la transition vers ma carrière professionnelle. Un stage de fin d'étude.`,
  skills: ["C/C++", "Unreal Engine", "Python", "JAVA", "SQL", "HTML/CSS/JS"],
  projects: [
    {
      name: "A Wee tank in the woods",
      description:
        `Des bûcherons abattent les arbres de la forêt. Le petit tank que vous ête en tant que joueur, tente de les arrêter,
        mais non sans résistance. C'est le premier jeu que j'ai réalisé avec Unreal Engine après deux prototypes : un casse brique et un bomberman.
     `,
      imageSrc: "/images/AWeeTank.png",
      link: "https://antonin-slv.itch.io/a-wee-tank",
      skills: ["UE5", "C++", "Perforce"],
    },
    {
      name: "Project Teapot - En cours",
      description:
        `Jeu où le joueur doit alterner entre la 3D et la 2D pour résoudre des énigmes.
        Petite touche d'originalité : le monde 3D est projeté sur le plan du joueur 2D.
        Le tout fonctionne également en réseau.`,
      link: "",
      imageSrc: "/images/teapot.png",
      skills: ["UE5", "C++", "Perforce"],
    },
    {
      name: "Juste le boat - RL learning (IA)",
      imageSrc: "/images/the_boat.gif",
      description:
        `Un projet Godot où nous avons implémenté la librairie godot-rl-agents
        pour entraîner une IA à contrôler un bateau dans un environnement 2D.
        Elle sert d'adversaire dans un jeu où le joueur doit capturer toutes les îles pour gagner la partie.
        `,
      link: "https://github.com/OtchiTan/juste-le-boat-en-faite",
      skills: ["Godot", "Python", "PyTorch"]
    },
    {
      name: "Le nectar des étoiles - Game Jam",
      description:
        `Jeu créé en 48 heures durant la WonderJam d'hiver 2026, où il a obtenu la première place face à 13 autres équipes.
        C'est un jeu narratif où vous incarnez un employé de la station spatiale Oasis, où est créée la fameuse boisson.
        Évidemment, tout ne se passera pas comme prévu.`,
      link: "https://blova.itch.io/nectar-des-etoiles",
      imageSrc: "/images/nectar_des_etoiles.png",
      skills: ["UE5", "C++", "Perforce"]
    },
    {
      name: "Handmade Hero & Rasterisation",
      description: `J'ai suivis le début du tutoriel 'Handmade Hero' (épisodes 1 à 14) de Casey Muratori.
      Ensuite je me suis laissé distraire pour créer un visualiseur 3D minimaliste, uniquement en C et avec l'API Windows.
      Ce projet m'a permis d'explorer les fondements du rendu 3D, et du développement sur windows.`,
      link: "https://github.com/antonin-slv/handmade",
      imageSrc: "/images/handmade.png",
      skills: ["C", "Windows API"], 
    },
  ],
  experience: [
    {
      company: "Atos Lyon",
      title: "Développement Fullstack - Stage",
      dateRange: "Sept 2024 - Jan 2025",
      bullets: [
        "Contribution au développement de MySI², le système d'information du service  informatique d'Enedis.",
        "Travail en équipe au sein d'une organisation Scrum, acquisition d'expérience dans les méthodologies agiles.",
        "Utilisation du framework Angular (TypeScript) et de Java Spring Boot pour enrichir la base de code.", 
      ],
    },
  ],
  education: [
    {
      school: "UCBL & Polytech Lyon",
      degree: "Peip A - Parcours Informatique",
      dateRange: "2021 - 2023",
      achievements: [
        "Cycle préparatoire intégré aux écoles d'ingénieurs, avec une spécialisation en informatique.",
        "Apprentissage du PHP, C, Python, des bases du développement web et des fondamentaux de l'informatique.",
        "Formation approfondie en mathématiques, physique, électronique et divers domaines de l'ingénierie."
      ],
    },
    {
      school: "Polytech Lyon",
      degree: "Diplôme d'Ingénieur en Informatique",
      dateRange: "2023 - 2026",
      achievements: [
        "Accent sur les principes de développement logiciel (POO, SOLID, designs patterns...) ",
        "Grande diversité de sujets : algorithmie, maths, cryptographie, théorie des graphes, optimisation, gestion de projets... ",
        "Réalisation de plusieurs projets, incluant des applications web, un compilateur, la conception d'un processeur, et divers projets en Java.",
        "Bonnes compétences en Java, C++, Python, SQL et des technologies web (HTML, CSS, JavaScript...).",
      ],
    },
    {
      school: "UQAC - Université Du Québec à Chicoutimi",
      degree: "Maîtrise en Informatique - Spécialisation Jeux Vidéo",
      dateRange: "2025 - 2026",
      achievements: [
        "Acquisition de bases solides en développement de jeux vidéo, en particulier sur Unreal Engine mais également Godot",
        "Utilisation d'outils de travail collaboratif comme Perforce ou Git",
        "Ouverture sur d'autres champs avec des cours d'optimisation et de parallélisation",
        "2 Participations aux WonderJam (Game Jam), avec une première place et une mention honorable",
        `Hackathon CONFORMiT x UQAC (48h): Création d'une application Next.js pour la sécurité hospitalière basé sur 
        l'analyse de rapports d'incidents augmenté par un agent conversationnel`
      ],
    },
  ],
};