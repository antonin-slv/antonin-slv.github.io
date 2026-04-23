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
  games: [
    {
      name: "A Wee tank in the woods",
      slug: "a-wee-tank",
      short_desc: "Mon premier jeu ! Jeu de tank arcade en forêt réalisé avec Unreal Engine 5.",
      description:
        `Des bûcherons abattent les arbres de la forêt. Le petit tank que vous ête en tant que joueur, tente de les arrêter,
        mais non sans résistance. C'est le premier jeu que j'ai réalisé avec Unreal Engine après deux prototypes : un casse brique et un bomberman.
     `,
      imageSrc: "AWeeTank.png",
      link: "https://antonin-slv.itch.io/a-wee-tank",
      skills: ["UE5", "C++", "Perforce"],

      youtubeId: "Ijm4fshrnnU",
      bannerSrc: "AWeeTank.png",
      contributions : [
        "Conception et développement du gameplay principal, déplacement, visée",
        "Aide aux autres membres de l'équipe : gestion des collisions des arbres, optimisation de l'IA...",
        "Création de vfx et recherche de sons pour le tank"
      ]
    },
    {
      name: "Project Teapot",
      slug: "project-teapot",
      short_desc: "Puzzle game innovant alternant entre 2D et 3D avec mode multijoueur.",
      description:
        `Jeu où le joueur doit alterner entre la 3D et la 2D pour résoudre des énigmes.
        Petite touche d'originalité : le monde 3D est projeté sur le plan du joueur 2D.
        Le tout fonctionne également en réseau.`,
      link: "https://blova.itch.io/teapot-game",
      imageSrc: "teapot.png",
      skills: ["UE5", "C++", "Perforce"],

      youtubeId: "zNYiPei6QR4",
      bannerSrc: "teapot.png",
      contributions : [
        "Création du système d'animation du personnage en 2D, et des animations 2D en elles mêmes",
        "Travail collaboratif sur les divers systèmes de gameplay",
        "Remplissage des niveaux avec des assets"
      ]
    },
    {
      name: "Juste le boat (IA)",
      slug: "juste-le-boat",
      short_desc: "Jeu de pirates (ArrGH !) où le joueur joue contre des RL-agents.",
      imageSrc: "the_boat.gif",
      description:
        `Un projet Godot où nous avons implémenté la librairie godot-rl-agents
        afin d'entraîner une IA à contrôler un bateau dans un environnement 2D.
        Elle sert d'adversaire dans un jeu où le joueur doit capturer toutes les îles pour gagner la partie.
        `,
      link: "https://github.com/OtchiTan/juste-le-boat-en-faite",
      skills: ["Godot", "Python", "PyTorch"],

      youtubeId: "3t4aVoIdeTM",
      bannerSrc: "the_boat.gif",

      contributions : [
        "Implémentation et customisation de la librairie godot-rl-agents pour Godot",
        "Définition des informations d'état et des récompenses pour l'agent IA",
        "Entraînement de l'agent et ajustement des hyperparamètres pour améliorer ses performances"
      ],
    },
    {
      name: "Le nectar des étoiles",
      slug: "nectar-des-etoiles",
      short_desc: "Jeu narratif dans une station spatiale vainqueur de la WonderJam d'hiver 2026.",
      description:
        `Jeu créé en 48 heures durant la WonderJam d'hiver 2026, où il a obtenu la première place face à 13 autres équipes.
        Le nectar des étoiles est un jeu narratif où vous incarnez un employé de la station spatiale Oasis où est créée la fameuse boisson.
        Évidemment, tout ne se passera pas comme prévu.`,
      link: "https://blova.itch.io/nectar-des-etoiles",
      imageSrc: "nectar_des_etoiles.png",
      skills: ["UE5", "C++", "Perforce"],

      bannerSrc: "nectar_des_etoiles.png",
      contributions : [
        "Conception et développement du système de déplacement en 0G",
        "Focus sur les feedbacks (le son) pour rendre le déplacement fluide et agréable",
        "Échange de quelques heures de sommeil contre beaucoup de fun pendant la jam"
      ],
      gallery: [
        "nectar_des_etoiles.png",
      ],
    },
    {
      name: "MineScam",
      slug: "minescam",
      short_desc:"Un jeu de Game Jam où vous minez des ressources, fabriquez des objets non-contrefaits et les vendez",
      description : `Créé en 48 heures durant la WonderJam d\'hiver 2025, MineScam est un jeu où vous minez des ressources pour fabriquer des objets
Mais vous pouvez truquer leur qualité en les peignant avec le matériau demandé par le client.
Nous avons obtenu une mention honorable pour ce jeu, et nous nous sommes beaucoup amusés à le faire !
      `,
       link: "https://alexandre-h.itch.io/minescam",
      imageSrc: "minescam.png",
      bannerSrc: "minescam.png",
      skills: ["UE5", "C++", "Perforce", "blender"],
      contributions : [
        "Brainstorming et conception du gameplay avec l'équipe",
        "Création et modifications d'assets 3D avec blender",
        "A aidé les autres membres avec du peer programming sur divers aspects du projet",
      ]
    },
    {
      name: "TGC - F1 2023",
      slug: "tgc-f1",
      short_desc: "Jeu de F1 en 2D avec éditeur de circuit, réalisé en C++ avec SFML pour linux",
      description: `Créé dans le cadre d'un cours de programmation, ce jeu de course de F1 vous met au volant d'une voiture de Formule 1 sur un circuit sinueux. Il possède également un éditeur de circuit pour créer vos propres pistes. Ne tourne que sous linux.`,
      link: "https://github.com/antonin-slv/TGC-F1",
      imageSrc: "tgc_f1.png",
      bannerSrc: "tgc_f1.png",
      skills: ["C/C++", "SFML", "git"],
      contributions : [
        "Conception du jeu de course, avec la physique, les contrôles et l'intégration de SFML",
        "Création de l'éditeur de circuit, permettant aux joueurs de concevoir leurs propres pistes",
      ]
    },
  ],
  projects: [
    {
      name: "Handmade Hero & Rasterisation",
      slug: "handmade-hero",
      short_desc: "Visualiseur 3D minimaliste développé en C pour explorer les bases du rendu.",
      description: `J'ai suivis le début du tutoriel 'Handmade Hero' (épisodes 1 à 14) de Casey Muratori.
      Ensuite je me suis laissé distraire pour créer un visualiseur 3D minimaliste, uniquement en C et avec l'API Windows.
      Ce projet m'a permis d'explorer les fondements du rendu 3D, et du développement sur windows.`,
      link: "https://github.com/antonin-slv/handmade",
      imageSrc: "handmade.png",
      skills: ["C", "Windows API"], 
      bannerSrc: "handmade.png",

        contributions : [
        "Implémentation d'un rasterizer logiciel from scratch, incluant le remplissage de triangles et le depth buffering",
        "Gestion de l'input utilisateur et de la fenêtre avec l'API Windows",
        "Approfondissement de mes connaissances en graphismes 3D et en programmation bas niveau"
      ]
    },
    {
      name: "Automates Cellulaire",
      slug: "automate-cellulaire",
      short_desc: "Simulation de divers automates cellulaires comme le jeux de la vie ou des feux de forêt.",
      description: "",
      bannerSrc: "Menu.png",
      about: 
        ` Réalisé en java dans le cadre d'un cours de APO (Algorithmique et Programmation Orientée Objet),
        ce projet fait vivre divers algorithmes d'automates cellulaires comme le célèbre jeu de la vie ou des feux de forêt.
        Le tout est paramétrable, la taille de la grille et les voisinages pouvant être modifiés à la volée.
        `,
      
      contributions: [
        "Conception de l'architecture logicielle (Séparation claire entre le moteur logique et le rendu visuel).",
        "Conception de moteurs de règles (comme la somme ou la moyenne)", 
      ],
      
      // youtubeId: "TON_ID_YOUTUBE", // Décommente si tu as une vidéo !
      gallery: [
        "jdlv_gof.gif",
        "forest.gif",
        "cross_avg.gif",
      ],
      
      link: "https://github.com/antonin-slv/AutomateCellulaire",
    imageSrc: "cover.png",
    skills: ["Java", "Algorithmie", "gradle"]
  },
  {
    name: "Processeur",
    slug: "proc",
    short_desc: "Conception d'un processeur simple sur Logisim avec un langage d'assemblage personnalisé.",
    description: `Dans le cadre d'un cours d'architecture des ordinateurs, nous avons conçu un processeur simple sur Logisim.
    Nous avons également créé un langage d'assemblage personnalisé pour programmer ce processeur.
    Ce projet m'a permis de comprendre les bases du fonctionnement d'un processeur et de l'architecture des ordinateurs.`,
    link: "https://github.com/Blova-TB/Processeur-Logisim",
    imageSrc: "architecture.png",
    bannerSrc: "stack.png",
    skills: ["Logisim", "Architecture des ordinateurs", "Assembleur"],

    contributions : [
      "Conception de l'architecture du processeur, incluant les unités de contrôle, les registres et l'ALU",
      "Développement du langage d'assemblage personnalisé",
      
    ]
  }
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