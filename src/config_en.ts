import type { SiteConfig } from "./config.ts";

export const enSiteConfig : SiteConfig = {
  language: "en",
  IAM: "I'm",
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
  After learning the fundamentals, I dove into networking and performance optimization, 
  and put my skills to the test with two 48 hours Game Jams. After 5 years of software engineering studies, 
  I am now looking for the final transition into my professional career: an end-of-study internship.`,
  skills: ["C/C++", "Unreal Engine", "Python", "JAVA", "SQL", "HTML/CSS/JS"],
  
  games: [
    {
      name: "A Wee tank in the woods",
      slug: "a-wee-tank",
      short_desc: "My first complete game! An arcade tank game in the woods made with Unreal Engine 5.",
      description:
        `Lumberjacks are cutting down the forest. As a little tank, you try to stop them, 
        but not without resistance. This is the first complete game I made with Unreal Engine, 
        building upon the knowledge built with previous prototypes (a brick breaker and a bomberman).`,
      link: "https://antonin-slv.itch.io/a-wee-tank",
      imageSrc: "AWeeTank.png",
      skills: ["UE5", "C++", "Perforce"],
      youtubeId: "Ijm4fshrnnU",
      bannerSrc: "AWeeTank.png",
      contributions : [
        "Creation of the main gameplay :  movement and aiming",
        "Helped other team members : tree collision management, AI optimization...",
        "Created VFX and researched sounds for the tank"
      ]
    },
    {
      name: "Project Teapot",
      slug: "project-teapot",
      short_desc: "Innovative puzzle game alternating between 2D and 3D with multiplayer mode.",
      description:
        `A puzzle game where the player must alternate between 3D and 2D. 
        The twist: the 3D world is projected onto the 2D player's  plane. 
        The entire game is fully functional over the network.`,
      link: "https://blova.itch.io/teapot-game",
      imageSrc: "teapot.png",
      skills: ["UE5", "C++", "Perforce"],
      youtubeId: "zNYiPei6QR4",
      bannerSrc: "teapot.png",
      contributions : [
        "Created the 2D character animation system, and the 2D animations themselves",
        "Collaborative work on various gameplay systems",
        "Filled the levels with assets"
      ]
    },
    {
      name: "Juste le boat (AI)",
      slug: "juste-le-boat",
      short_desc: "Game project where we implemented RL agents to control a boat in a 2D environment.",
      description:
        `A Godot project where we implemented the godot-rl-agents library 
        to train an AI to control a boat in a 2D environment. It serves as an opponent 
        in a game where the player must capture all the islands to win.`,

      link: "https://github.com/OtchiTan/juste-le-boat-en-faite",
      imageSrc: "the_boat.gif",
      skills: ["Godot", "Python", "PyTorch"],

      youtubeId: "3t4aVoIdeTM",
      bannerSrc: "the_boat.gif",
      contributions : [
        "Implemented and customized the godot-rl-agents library for Godot",
        "Designed what the AI should see, know and learned, and trained it",
      ]
    },
    {
      name: "Le nectar des étoiles",
      slug: "nectar-des-etoiles",
      short_desc: "Narrative game created in 48h during the Winter WonderJam 2026, taking first place.",
      description:
        `Created in 48 hours during the 2026 Winter WonderJam (the UQAC's GameJam), taking first place against 13 other teams. 
        It's a narrative game where you play an employee of the Oasis space station, 
        where the famous drink is produced. Naturally, things don't go as planned. nb : Oasis is a French energy drink brand.`,
      link: "https://blova.itch.io/nectar-des-etoiles",
      imageSrc: "nectar_des_etoiles.png",
      skills: ["UE5", "C++", "Perforce"],

      bannerSrc: "nectar_des_etoiles.png",
      contributions : [
        "Designed and implemented the 0G movement system",
        "Focused on adding user feedback with SFX",
        "Collectively lost a lot of sleep and had fun during the jam"
      ]
    },
    {
      name: "MineScam",
      slug: "minescam",
      short_desc: "A game Jam game where you mine ressources, craft really honest items and sell them",
      description:
        `Created in 48 hours during the Winter WonderJam 2025, MineScam is a game where you mine ressources to craft items...
        But you can fake the quality of the objects by painting them with the material the client asked.
        We got an honorable mention for this game, and it was a lot of fun to make!`,
       link: "https://alexandre-h.itch.io/minescam",
      imageSrc: "minescam.png",
      bannerSrc: "minescam.png",
      skills: ["UE5", "C++", "Perforce", "blender"],
      contributions : [
        "Brainstormed with the team",
        "Made and modified various 3D assets",
        "Helped everybody with tecnical issues",
        "Had no PC able to run UE5, but it didn't stop me from helping !"
      ]
    },
    {
      name: "TGC - F1 2023",
      slug: "tgc-f1",
      short_desc: "A 2D F1 racing game with a track editor, made in C++ for linux with SFML.",
      description: `Created in the context of a programming course, this racing game puts you behind the wheel of a Formula 1 car on a winding track. It also features a track editor to create your own races.`,
      link: "https://github.com/antonin-slv/TGC-F1",
      imageSrc: "tgc_f1.png",
      bannerSrc: "title.png",
      skills: ["C/C++", "SFML", "git"],
      contributions : [
        "Conception of the game, with physics, controls and SFML integration",
        "Creation of the track editor, allowing players to design their own tracks"
      ],
      gallery : [
        "/tgcf1_editor.mp4",
        "/tgcf1_game.webm"
      ],
    }
  ],
  projects: [
    {
      name: "Handmade Hero & Rasterization",
      slug: "handmade-hero",
      short_desc: "A 3D visualizer built from scratch in C using the Windows API, inspired by Handmade Hero.",
      description: `I followed the beginning of Casey Muratori's 'Handmade Hero' series (episodes 1-14), 
      then pivoted to build a minimalistic 3D visualizer from scratch using only C and the Windows API. 
      This project allowed me to explore the fundamentals of 3D rendering and low-level Windows development.`,
      link: "https://github.com/antonin-slv/handmade",
      imageSrc: "handmade.png",
      skills: ["C", "Windows API"], 

      bannerSrc: "handmade.png",
      contributions : [
        "Implemented a software rasterizer from scratch, including triangle filling and depth buffering",
        "Handled user input and window management using the Windows API",
        "Gained a deeper understanding of 3D graphics fundamentals and low-level programming"
      ]
    },
    {
      name: "Cellular Automaton",
      slug: "automate-cellulaire",
      short_desc: "A flexible cellular automaton simulator in Java, with a modular architecture and javaFX interface.",
      description: `Made in Java within the context of a course about Algorthimics and OOP,,
    this project brings to life various cellular automaton algorithms such as forest fires or the famous Game of Life.
    Everything is configurable, with the grid size and neighborhoods being modifiable on the fly.
    `,
  link: "https://github.com/antonin-slv/AutomateCellulaire",
      imageSrc: "cover.png",
      skills: ["Java", "Algorithmics", "Gradle"],
      bannerSrc: "Menu.png",
      contributions : [
        "Designed the software architecture (Clear separation between the logic engine and the visual rendering).",
        "Implemented rules (like sum or average)",
      ],
      gallery: [
        "jdlv_gof.gif",
        "forest.gif",
        "cross_avg.gif",
      ],
    },
    {
    name: "Processor",
    slug: "proc",
    short_desc: "Design of a simple processor on Logisim with a custom assembly language.",
    description: `In the context of a computer architecture course, we designed a simple processor on Logisim.
    We also created a custom assembly language to program this processor.
    This project allowed me to understand the fundamentals of processor operation and computer architecture.`,
    link: "https://github.com/Blova-TB/Processeur-Logisim",
    imageSrc: "architecture.png",
    bannerSrc: "stack.png",
    skills: ["Logisim", "Computer Architecture", "Assembly Language"],

    contributions : [
      "Designed the processor architecture, including control units, registers, and the ALU",
      "Developed the custom assembly language",
    ]
  }
  ],
  experience: [
    {
      company: "Atos Lyon",
      title: "Fullstack Development - Internship",
      dateRange: "Sep 2024 - Jan 2025",
      bullets: [
        "Contributed to the development of MySI², the Information System of the Enedis IT department.",
        "Worked in a team using Scrum, gaining hands-on experience in agile development methodologies.",
        "Used the Angular TypeScript framework and Java Spring Boot to enrich the codebase.", 
      ],
    },
  ],
  education: [
    {
      school: "UCBL & Polytech Lyon",
      degree: "Peip A - Computer Science focus",
      dateRange: "2021 - 2023",
      achievements: [
        "Standard Integrated Engineering \"Classe prépa\" program, with a specialization in computer science.",
        "Learned PHP, C, Python, the basics of web development, and the fundamentals of computer science.",
        "Extensive training in mathematics, physics, electronics, and various engineering fields."
      ],
    },
    {
      school: "Polytech Lyon",
      degree: "IT Engineering Degree",
      dateRange: "2023 - 2026",
      achievements: [
        "Focus on software engineering principles (OOP, SOLID, design patterns...).",
        "Wide variety of subjects: algorithms, mathematics, cryptography, graph theory, optimization, project management.",
        "Completed several projects, including web applications, a compiler, a processor design, and various Java projects.",
        "Strong proficiency in Java, C++, Python, SQL, and web technologies (HTML, CSS, JavaScript...).",
      ],
    },
    {
      school: "UQAC - Université Du Québec à Chicoutimi",
      degree: "IT Master's Degree - Video Game Development",
      dateRange: "2025 - 2026",
      achievements: [
        "Acquired a solid foundation in video game development, specifically with Unreal Engine and Godot.",
        "Experience with industry-standard collaboration tools like Perforce and Git.",
        "Broadened scope with courses in performance optimization and parallelization.",
        "Participated in 2 WonderJams, securing a 1st place and an honorable mention.",
        "Hackathon CONFORMiT x UQAC (48h): Created a Next.js application for hospital safety, leveraging an AI conversational agent to analyze incident reports."
      ],
    },
  ],
};