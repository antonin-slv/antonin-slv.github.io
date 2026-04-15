import type { SiteConfig } from "./config.ts";

export const enSiteConfig : SiteConfig = {
  language: "en",
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
  projects: [
    {
      name: "A Wee tank in the woods",
      description:
        `Lumberjacks are cutting down the forest. As a little tank, you try to stop them, 
        but not without resistance. This is the first complete game I made with Unreal Engine, 
        building upon the knowledge built with previous prototypes (a brick breaker and a bomberman).`,
      link: "https://antonin-slv.itch.io/a-wee-tank",
      imageSrc: "/images/AWeeTank.png",
      skills: ["UE5", "C++", "Perforce"],
    },
    {
      name: "Project Teapot - In progress",
      description:
        `A puzzle game where the player must alternate between 3D and 2D. 
        The twist: the 3D world is projected onto the 2D player's  plane. 
        The entire game is fully functional over the network.`,
      link: "",
      imageSrc: "/images/teapot.png",
      skills: ["UE5", "C++", "Perforce"],
    },
    {
      name: "Juste le boat - RL learning (IA)",
      description:
        `A Godot project where we implemented the godot-rl-agents library 
        to train an AI to control a boat in a 2D environment. It serves as an opponent 
        in a game where the player must capture all the islands to win.`,

      link: "https://github.com/OtchiTan/juste-le-boat-en-faite",
      imageSrc: "/images/the_boat.gif",
      skills: ["Godot", "Python", "PyTorch"]
    },
    {
      name: "Le nectar des étoiles - Game Jam",
      description:
        `Created in 48 hours during the 2026 Winter WonderJam, taking first place against 13 other teams. 
        It's a narrative game where you play an employee of the Oasis space station, 
        where the famous drink is produced. Naturally, things don't go as planned. nb : Oasis is a French energy drink brand.`,
      link: "https://blova.itch.io/nectar-des-etoiles",
      imageSrc: "/images/nectar_des_etoiles.png",
      skills: ["UE5", "C++", "Perforce"]
    },
    {
      name: "Handmade Hero & Rasterization",
      description: `I followed the beginning of Casey Muratori's 'Handmade Hero' series (episodes 1-14), 
      then pivoted to build a minimalistic 3D visualizer from scratch using only C and the Windows API. 
      This project allowed me to explore the fundamentals of 3D rendering and low-level Windows development.`,
      link: "https://github.com/antonin-slv/handmade",
      imageSrc: "/images/handmade.png",
      skills: ["C", "Windows API"], 
    },
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