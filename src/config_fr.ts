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
  je recherche aujourd'hui la dernière brique pour concrétiser la transition vers ma carrière professionnelle : un stage de fin d'étude.`,
  skills: ["C/C++", "Unreal Engine", "Python", "JAVA", "SQL", "HTML/CSS/JS"],
  games: [
    {
      name: "A Wee tank in the woods",
      slug: "a-wee-tank",
      short_desc: "Jeu de tank arcade en forêt réalisé avec Unreal Engine 5.",
      description:
        `Des bûcherons abattent les arbres de la forêt. Le petit tank contrôlé par le joueur tente de les arrêter malgré une résistance croissante. Premier projet complet sous Unreal Engine explorant le workflow de production.`,
      imageSrc: "AWeeTank.png",
      link: "https://antonin-slv.itch.io/a-wee-tank",
      skills: ["UE5", "C++", "Perforce"],
      youtubeId: "Ijm4fshrnnU",
      bannerSrc: "AWeeTank.png",
      contributions : [
        "Conception et développement du gameplay du tank avec les mouvements et la visée)",
        "Optimisation de l'IA des bûcherons et gestion des collisions environnementales.",
        "Intégration du Sound Design pour les feedbacks du tank."
      ]
    },
    {
      name: "Project Teapot",
      slug: "project-teapot",
      short_desc: "Puzzle game innovant alternant entre 2D et 3D avec mode multijoueur.",
      description:
        `Un jeu d'énigmes où le joueur alterne entre 3D et 2D,avec une projection dynamique du monde 3D sur le plan du joueur.Le titre intègre une architecture réseau complète.`,
      link: "https://blova.itch.io/teapot-game",
      imageSrc: "teapot.png",
      skills: ["UE5", "C++", "Perforce"],
      youtubeId: "zNYiPei6QR4",
      bannerSrc: "teapot.png",
      contributions : [
        "Développement du système d'animation 2D et création des assets d'animation 2D.",
        "Level dressing et intégration d'assets 3D au sein de l'environnement Unreal.",
        "Développement collaboratif de systèmes de gameplay multijoueurs synchronisés."
      ]
    },
    {
      name: "Juste le boat (IA)",
      slug: "juste-le-boat",
      short_desc: "Jeu de pirates (ArrGH !) en 2D avec agents entraînés par Reinforcement Learning.",
      imageSrc: "the_boat.gif",
      description:
        `Implémentation de la librairie godot-rl-agents pour entraîner une IA à naviguer et combattre en 2D. L'IA agit comme un adversaire stratégique pour la conquête d'îles.`,
      link: "https://github.com/OtchiTan/juste-le-boat-en-faite",
      skills: ["Godot", "Python", "PyTorch"],
      youtubeId: "3t4aVoIdeTM",
      bannerSrc: "the_boat.gif",
      contributions : [
        "Implémentation et customisation de la librairie godot-rl-agents pour le moteur Godot.",
        "Définition des fonctions de récompense et des vecteurs d'état pour l'entraînement.",
        "Optimisation des hyperparamètres pour accroître les performances décisionnelles de l'agent."
      ],
    },
    {
      name: "Le nectar des étoiles",
      slug: "nectar-des-etoiles",
      short_desc: "Jeu narratif vainqueur de la WonderJam d'hiver 2026.",
      description:
        `Développé en 48 heures durant la WonderJam d'hiver 2026, ce titre a remporté la 1ère place parmi 14 équipes.
        Incarnez un employé d'une station spatiale produisant le fameux soda dans une ambiance spaciale.`,
      link: "https://blova.itch.io/nectar-des-etoiles",
      imageSrc: "nectar_des_etoiles.png",
      skills: ["UE5", "C++", "Perforce"],
      bannerSrc: "nectar_des_etoiles.png",
      contributions : [
        "Conception et implémentation technique du système de déplacement en apesanteur (0G).",
        "Focus sur le polissage des mécaniques et l'intégration des feedbacks audio.",
        "Échange d'heures de sommeil contre du fun pour le projet :D"
      ],      
      gallery: [
        "nectar_des_etoiles.png",
      ],
    },
    {
      name: "MineScam",
      slug: "minescam",
      short_desc:"Jeu de craft récompensé d'une mention honorable lors d'une Game Jam.",
      description : `Réalisé en 48h, MineScam propose de miner et crafter des objets dont la qualité peut être falsifiée pour tromper le client.
      Un projet focalisé sur l'humour et les mécaniques de craft`,
       link: "https://alexandre-h.itch.io/minescam",
      imageSrc: "minescam.png",
      bannerSrc: "minescam.png",
      skills: ["UE5", "C++", "Perforce", "Blender"],
      contributions : [
        "Gestion du pipeline d'export Blender vers Unreal Engine 5 et création d'assets 3D.",
        "Peer-programming et debugging technique sur les divers systèmes du projet.",
        "Participation active au brainstorming et au début d'équilibrage des mécaniques de jeu."
      ]
    },
    {
      name: "TGC - F1 2023",
      slug: "tgc-f1",
      short_desc: "Jeu de course 2D avec éditeur de circuits, développé en C++ (SFML).",
      description: `Jeu de courses de Formule 1, incluant un éditeur de circuits complet.
      Projet initialement sous Linux, porté et débugué sous Windows en 2026.`,
      link: "https://github.com/antonin-slv/TGC-F1",
      imageSrc: "tgc_f1.png",
      bannerSrc: "title.png",
      skills: ["C/C++", "SFML", "Git"],
      gallery : [
        "/tgcf1_editor.mp4",
        "/tgcf1_game.webm"
      ],
      contributions : [
        "Développement du moteur physique, des contrôles et intégration de la SFML.",
        "Architecture et création de l'éditeur de circuit persistant.",
      ]
    },
  ],
  projects: [
    {
      name: "Handmade Hero & Rasterisation",
      slug: "handmade-hero",
      short_desc: "Visualiseur 3D logiciel développé en C pur pour explorer les bases du rendu.",
      description: `Originalement créé dans le cadre du tutoriel 'Handmade Hero'  par Casey Muratori,
      ce projet consiste en la création d'un moteur de rendu 3D minimaliste sans API graphique externe, utilisant uniquement le C et l'API Windows.`,
      link: "https://github.com/antonin-slv/handmade",
      imageSrc: "handmade.png",
      skills: ["C", "Windows API"], 
      bannerSrc: "handmade.png",
      contributions : [
        "Implémentation d'un rasterizer logiciel incluant le remplissage de triangles et le depth buffering.",
        "Gestion bas niveau de l'input et de la fenêtre via l'API Win32.",
        "Approfondissement des concepts mathématiques (matrices, vecteurs, projections)."
      ]
    },
    {
      name: "Automates Cellulaires",
      slug: "automate-cellulaire",
      short_desc: "Simulateur d'automates cellulaires (Jeu de la Vie, feux de forêt) sous JavaFX",
      description: ".",
      bannerSrc: "Menu.png",
      about: 
        `Projet de cours (algorithmique orienté objet) permettant d'exécuter des automates cellulaires variés.
        La taille de la grille et les voisinages sont modifiables en temps réel pour observer les changements de comportement systémique.`,
      contributions: [
        "Conception de l'architecture logicielle (séparation moteur logique / rendu visuel).",
        "Développement de moteurs de règles modulaires.",
      ],
      gallery: ["jdlv_gof.gif", "forest.gif", "cross_avg.gif"],
      link: "https://github.com/antonin-slv/AutomateCellulaire",
      imageSrc: "cover.png",
      skills: ["Java", "Algorithmie", "Gradle"]
    },
    {
      name: "Processeur",
      slug: "proc",
      short_desc: "Conception d'un processeur sur Logisim avec assembleur dédié.",
      description: `Création complète d'un processeur fonctionnel sur Logisim accompagné
      d'un langage d'assemblage personnalisé pour l'exécution de programmes.`,
      link: "https://github.com/Blova-TB/Processeur-Logisim",
      imageSrc: "architecture.png",
      bannerSrc: "stack.png",
      skills: ["Logisim", "Architecture", "Assembleur"],
      contributions : [
        "Conception de l'unité de contrôle, de l'ALU et de la gestion des registres.",
        "Développement et spécification du langage d'assemblage personnalisé.",
      ]
    },
    {
      name: "Application de messagerie",
      slug: "discord-like",
      short_desc: "Plateforme de messagerie basée sur une architecture Jakarta EE 10 et un frontend Angular.",
      description: `Conception d'une infrastructure de messagerie sociale complète. Le backend exploite Java 21 et Jakarta EE pour orchestrer des relations de données complexes (serveurs, salons, messagerie privée) avec une persistance optimisée sous PostgreSQL. L'expérience utilisateur est assurée par une application Angular modulaire.`,
      link: "https://github.com/antonin-slv/WS4A_DISCORD",
      imageSrc: "connexion.png",
      bannerSrc: "messages1.png",
      skills: ["Java 21", "Jakarta EE", "Hibernate", "PostgreSQL", "Angular", "REST API"],
      gallery: ["connexion.png", "messages1.png"],
      contributions: [
        "Architecture du Backend en couches (DAO/Service/Controller) pour une séparation stricte des préoccupations.",
        "Implémentation d'une couche de sécurité sur-mesure (Authentification Basic vers Bearer Token).",
        "Interopérabilité des données via l'utilisation rigoureuse de DTOs et Mappers Jackson.",
        "Développement d'une interface frontend réactive gérant les états d'authentification et les flux de données.",
      ]
    }
  ],
  experience: [
    {
      company: "Atos Lyon",
      title: "Ingénieur Développement Fullstack - Stage",
      dateRange: "Sept 2024 - Jan 2025",
      bullets: [
        "Développement de composants Angular (TypeScript) réutilisables pour le SI MySI² d'Enedis.",
        "Création de requêtes SQL et enrichissement de la base de code Java Spring Boot.",
        "Collaboration active en environnement Agile (Scrum) et participation aux diverses cérémonies.", 
      ],
    },
  ],
  education: [
    {
      school: "UCBL & Polytech Lyon",
      degree: "Peip A - Parcours Informatique",
      dateRange: "2021 - 2023",
      achievements: [
        "Cycle préparatoire intégré aux écoles d'ingénieurs.",
        "Fondamentaux de l'informatique (Algorithmie, C, Python) et développement web.",
        "Formation scientifique avancée (mathématiques, physique, électronique)."
      ],
    },
    {
      school: "Polytech Lyon",
      degree: "Diplôme d'Ingénieur en Informatique",
      dateRange: "2023 - 2026",
      achievements: [
        "Spécialisation en génie logiciel (POO, SOLID, Design Patterns).",
        "Maîtrise de l'algorithmique complexe, de l'optimisation et de la gestion de projets.",
        "Réalisation de nombreux projets (compilateur, processeur, applications web).",
      ],
    },
    {
      school: "UQAC - Chicoutimi, Canada",
      degree: "Maîtrise en Informatique - Spécialisation Jeux Vidéo",
      dateRange: "2025 - 2026",
      achievements: [
        "Bonnes compétences technique sur Unreal Engine 5 et Godot.",
        "Maîtrise de la programmation réseau multijoueur et de l'IA.",
        "Cours avancés en optimisation de performance et calcul parallèle (OpenMP, OpenCL).",
        "Hackathon CONFORMiT : Développement d'un agent LLM conversationnel sous Next.js."
      ],
    },
  ],
};