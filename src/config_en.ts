import type { SiteConfig } from "./config.ts";

export const enSiteConfig : SiteConfig = {
  language: "en",
  IAM: "I am",
  greeting : "Hello! 👋",
  name: "Antonin Sylvestre",
  title: "Generalist Programmer (C++ / Unreal) & Software Engineer",
  description: "Portfolio of Antonin Sylvestre",
  accentColor: "#1d4ed8",
  social: {
    email: "antonin.sylvestre@orange.fr",
    linkedin: "https://linkedin.com/in/antonin-slv/",
    github: "https://github.com/antonin-slv",
  },
  aboutMe: `
  During the 2025/2026 academic year, I specialized in video game development.
  After learning the fundamentals, I quickly dove into networking issues and performance optimization
  and put my skills to the test during two Game Jams. After 5 years of software engineering studies,
  I am now looking for the final building block to solidify the transition into my professional career: an end-of-study internship.`,
  skills: ["C/C++", "Unreal Engine", "Python", "JAVA", "SQL", "HTML/CSS/JS"],
  games: [
    {
      name: "Particle Remanance",
      slug: "particle-remanence",
      short_desc: "3D platformer game where competences are represented by particles.",
      description:
        `A 3D platformer game where the player's skills are represented by particles.
        The player must navigate through a world where the environment reacts to their abilities, creating a dynamic and immersive experience.
        The game put an emphasis on speedrunning.
        `,
      link: "https://alexandre-h.itch.io/particle-remanence",
      imageSrc: "particule_remanence.png",
      youtubeId: "4NcIJY8S0Iw",
      skills: ["UE5", "C++", "Perforce"],
      bannerSrc: "particule_remanence.png",
      contributions : [
        "Development of the ability system.",
        "Design of the cards and in-game implementation.",
        "Iteration over the particle system to create different effects based on the abilities.",
        "Implementation of a partial recording/play-back system of the player's actions (used for the last part of the trailer)"
      ]

    },
        {
      slug: "mmo",
      bannerSrc: "mmo_architecture.png",
      imageSrc: "mmo_architecture.png",
      name: "MMO Infrastructure",
      short_desc: "Creation of a containerized network architecture for MMOs in RUST",
      description: "Creation of an infrastructure allowing thousands of players to use the same servers.",
      link: "https://github.com/antonin-slv/UQAC_MMO",
      skills: ["Rust", "Docker", "Quic", "Git"],
      contributions : [
        "Conception of a network architecture based on a homemade Pub/Sub model for MMOs and videogames",
        "Implementation of a containerized architecture for the MMO servers using Docker and Docker Compose",
        "Definition of the communication protocol for the MMO network",
        "Implementation of the Dedicated Game Server, the broker, and assistance on the spatial server",
        "Implementation of reliable and unreliable messages through a central broker",
        "Component-based replication system for game entities",
        "Authority transfer for game entities and of the geographic zones of the servers"
      ],
      gallery: [
        "/demo_mmo.mp4",
        "mmo_architecture.png",
        "mmo_docker.png",
        "quadTree.png",
        "mmo_schema.png",
      ],
      
    },
    {
      name: "Project Teapot",
      slug: "project-teapot",
      short_desc: "Innovative puzzle game alternating between 2D and 3D with a multiplayer mode.",
      description:
        `A puzzle game where the player alternates between 3D and 2D, with a dynamic projection of the 3D world onto the player's plane. The title integrates a full network architecture.`,
      link: "https://blova.itch.io/teapot-game",
      imageSrc: "teapot.png",
      skills: ["UE5", "C++", "Perforce"],
      youtubeId: "zNYiPei6QR4",
      bannerSrc: "teapot.png",
      contributions : [
        "Development of the 2D animation system and creation of 2D animation assets.",
        "Level dressing and integration of 3D assets within the Unreal environment.",
        "Collaborative development of synchronized multiplayer gameplay systems."
      ]
    },
    {
      name: "Juste le boat (IA)",
      slug: "juste-le-boat",
      short_desc: "2D pirate game (ArrGH!) with agents trained using Reinforcement Learning.",
      imageSrc: "the_boat.gif",
      description:
        `Implementation of the godot-rl-agents library to train an AI to navigate and fight in 2D. The AI acts as a strategic opponent for island conquest.`,
      link: "https://github.com/OtchiTan/juste-le-boat-en-faite",
      skills: ["Godot", "Python", "PyTorch"],
      youtubeId: "3t4aVoIdeTM",
      bannerSrc: "the_boat.gif",
      contributions : [
        "Implementation and customization of the godot-rl-agents library for the Godot engine.",
        "DefinitionD  of reward functions and state vectors for training.",
        "Optimization of hyperparameters to increase the agent's decision-making performance."
      ],
    },
    {
      name: "Le nectar des étoiles",
      slug: "nectar-des-etoiles",
      short_desc: "Narrative game and winner of the Winter WonderJam 2026.",
      description:
        `Developed in 48 hours during the Winter WonderJam 2026, this title won 1st place among 14 teams.
        Play as an employee of a space station producing the famous soda in a space atmosphere.`,
      link: "https://blova.itch.io/nectar-des-etoiles",
      imageSrc: "nectar_des_etoiles.png",
      skills: ["UE5", "C++", "Perforce"],
      bannerSrc: "nectar_des_etoiles.png",
      contributions : [
        "Technical design and implementation of the zero-gravity (0G) movement system.",
        "Focus on polishing mechanics and integrating audio feedbacks.",
        "Traded sleep hours for fun on the project :D"
      ],      
      gallery: [
        "nectar_des_etoiles.png",
      ],
    },
    {
      name: "MineScam",
      slug: "minescam",
      short_desc:"Crafting game, got an honorable mention during a Game Jam.",
      description : `Created in 48h, MineScam is about mining and crafting objects whose quality can be falsified to trick the client.
      A project focused on humor and crafting mechanics.`,
       link: "https://alexandre-h.itch.io/minescam",
      imageSrc: "minescam.png",
      bannerSrc: "minescam.png",
      skills: ["UE5", "C++", "Perforce", "Blender"],
      contributions : [
        "Management of the Blender to Unreal Engine 5 export pipeline and creation of 3D assets.",
        "Peer-programming and technical debugging on various project systems.",
        "Active participation in brainstorming and initial balancing of game mechanics."
      ]
    },    
    {
      name: "A Wee tank in the woods",
      slug: "a-wee-tank",
      short_desc: "Arcade tank game in a forest made with Unreal Engine 5.",
      description:
        `Lumberjacks are cutting down the forest. The little tank controlled by the player tries to stop them despite growing resistance. First complete project under Unreal Engine exploring the production workflow.`,
      imageSrc: "AWeeTank.png",
      link: "https://antonin-slv.itch.io/a-wee-tank",
      skills: ["UE5", "C++", "Perforce"],
      youtubeId: "Ijm4fshrnnU",
      bannerSrc: "AWeeTank.png",
      contributions : [
        "Design and development of the tank's gameplay, including movement and aiming.",
        "Optimization of lumberjack AI and management of environmental collisions.",
        "Sound Design integration for the tank's feedbacks."
      ]
    },
    {
      name: "TGC - F1 2023",
      slug: "tgc-f1",
      short_desc: "2D racing game with a track editor, developed in C++ (SFML).",
      description: `Formula 1 racing game, including a complete track editor.
      Project initially on Linux, ported and debugged on Windows in 2026.`,
      link: "https://github.com/antonin-slv/TGC-F1",
      imageSrc: "tgc_f1.png",
      bannerSrc: "title.png",
      skills: ["C/C++", "SFML", "Git"],
      contributions : [
        "Development of the physics engine, controls, and SFML integration.",
        "Architecture and creation of the persistent track editor.",
      ],
      gallery : [
        "/tgcf1_editor.mp4",
        "/tgcf1_game.webm"
      ],
    },
      
  ],
  projects: [
    {
      name: "Handmade Hero & Rasterisation",
      slug: "handmade-hero",
      short_desc: "Software 3D visualizer developed in C and C++ to explore rendering basics.",
      description: `Originally created following the 'Handmade Hero' tutorial by Casey Muratori,
      this project involves building a minimalistic 3D rendering engine without external graphics APIs, using only C and the Windows API.`,
      link: "https://github.com/antonin-slv/handmade",
      imageSrc: "handmade.png",
      skills: ["C / C++", "Windows API" ], 
      bannerSrc: "handmade.png",
      contributions : [
        "Implementation of a software rasterizer including triangle filling and depth buffering.",
        "Low-level management of input and windows via the Win32 API.",
        "Deepening of mathematical concepts (matrices, vectors, projections)."
      ]
    },
    {
      name: "Cellular Automaton",
      slug: "automate-cellulaire",
      short_desc: "JavaFX simulator for cellular automata (Game of Life, forest fires).",
      description: ".",
      bannerSrc: "Menu.png",
      about: 
        `Course project (object-oriented algorithmics) allowing the execution of various cellular automata.
        The grid size and neighborhoods are modifiable in real-time to observe changes in systemic behavior.`,
      contributions: [
        "Design of the software architecture (separation of logic engine / visual rendering).",
        "Development of modular rule engines.",
      ],
      gallery: ["jdlv_gof.gif", "forest.gif", "cross_avg.gif"],
      link: "https://github.com/antonin-slv/AutomateCellulaire",
      imageSrc: "cover.png",
      skills: ["Java", "Algorithmics", "Gradle"]
    },
    {
      name: "Processor",
      slug: "proc",
      short_desc: "Design of a processor on Logisim with a dedicated assembler.",
      description: `Complete creation of a functional processor on Logisim accompanied
      by a custom assembly language for program execution.`,
      link: "https://github.com/Blova-TB/Processeur-Logisim",
      imageSrc: "architecture.png",
      bannerSrc: "stack.png",
      skills: ["Logisim", "Architecture", "Assembly"],
      contributions : [
        "Design of the control unit, the ALU, and register management.",
        "Development and specification of the custom assembly language.",
      ]
    },
    {
      name: "Messaging Application",
      slug: "discord-like",
      short_desc: "Messaging platform built on a Jakarta EE 10 architecture and a Angular frontend.",
      description: `Design and development of a social messaging infrastructure. The backend leverages Java 21 and Jakarta EE to orchestrate complex data relationships (servers, channels, private messaging) with PostgreSQL persistence. The user experience is powered by a modular Angular application.`,
      link: "https://github.com/antonin-slv/WS4A_DISCORD",
      imageSrc: "connexion.png",
      bannerSrc: "messages1.png",
      skills: ["Java", "Jakarta EE", "Hibernate", "PostgreSQL", "Angular", "REST API"],
      gallery: ["connexion.png", "messages1.png"],
      contributions: [
        "Engineered a layered backend architecture (DAO/Service/Controller) to ensure strict separation of concerns.",
        "Implemented a custom security layer, handling the transition from Basic Auth to Bearer Token authentication.",
        "Streamlined data interoperability through the rigorous use of DTOs and Jackson Mappers.",
        "Developed a reactive frontend interface managing complex authentication states and dynamic data flows.",
      ]
    }
  ],
  experience: [
    {
      company: "Atos Lyon",
      title: "Fullstack Development Engineer - Internship",
      dateRange: "Sep 2024 - Jan 2025",
      bullets: [
        "Development of reusable Angular (TypeScript) components for Enedis' MySI² information system.",
        "Creation of SQL queries and enrichment of the Java Spring Boot codebase.",
        "Active collaboration in an Agile (Scrum) environment and participation in various ceremonies.", 
      ],
    },
  ],
  education: [
    {
      school: "UCBL & Polytech Lyon",
      degree: "Peip A - Computer Science Track",
      dateRange: "2021 - 2023",
      achievements: [
        "Integrated preparatory cycle for engineering schools.",
        "Computer science fundamentals (Algorithmics, C, Python) and web development.",
        "Advanced scientific training (mathematics, physics, electronics)."
      ],
    },
    {
      school: "Polytech Lyon",
      degree: "IT Engineering Degree",
      dateRange: "2023 - 2026",
      achievements: [
        "Specialization in software engineering (OOP, SOLID, Design Patterns).",
        "Mastery of complex algorithms, optimization, and project management.",
        "Completion of numerous projects (compiler, processor, web applications).",
      ],
    },
    {
      school: "UQAC - Chicoutimi, Canada",
      degree: "IT Master's Degree - Video Game Development",
      dateRange: "2025 - 2026",
      achievements: [
        "Good technical skills in Unreal Engine 5 and Godot.",
        "Mastery of multiplayer network programming and AI.",
        "Advanced courses in performance optimization and parallel computing (OpenMP, OpenCL).",
        "CONFORMiT Hackathon: Development of a conversational LLM agent under Next.js."
      ],
    },
  ],
};