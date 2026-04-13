export const siteConfig = {
  name: "Antonin Sylvestre",
  title: "Soon to be Expert In VideoGame Development ;)",
  description: "Portfolio of Antonin Sylvestre",
  accentColor: "#1d4ed8",
  social: {
    email: "antonin.sylvestre@orange.fr",
    linkedin: "https://linkedin.com/in/antonin-slv/",
    github: "https://github.com/antonin-slv",
  },
  aboutMe:"After 5 years of studies of in the IT field, I am looking for new challenges for the final stage of my academic journey.",
  skills: ["C/C++", "Unreal Engine", "Python", "JAVA", "SQL", "HTML/CSS/JS"],
  projects: [
    {
      name: "A Wee tank in the woods",
      description:
        "Lumberjacks are cutting down trees in the forest. The little tank you are (as the player) will try to stop them, but not without resistance. This was the first game I made with Unreal Engine.",
      link: "https://antonin-slv.itch.io/a-wee-tank",
      skills: ["UE5", "C++", "Perforce"],
    },
    {
      name: "Project Teapot - no link yet",
      description:
        "A Game where the player can go back and forth between 3D and 2D, and where the world is projected into the 2D plane as well. All of this over the network.",
      link: "",
      skills: ["UE5", "C++", "Perforce"],
    },
    {
      name: "Juste le boat - AI reinforcement learning",
      description:
        "A Godot Project where we implemented the godot-rl-agent librairy and trained AI to control a boat in a 2D environment",
      link: "https://github.com/OtchiTan/juste-le-boat-en-faite",
      skills: ["Godot", "Python", "PyTorch"]
    },
    {
      name: "Le nectar des étoiles - Game Jam",
      description:
        "A game created in 48 hours that won the 2026 winter WonderJam agains 13 other teams. It's a narrative game where you play an Oasis space station employee. Your job is to operate the station to produce the precious liquid, but not everything will go as planned.",
      link: "https://blova.itch.io/nectar-des-etoiles",
      skills: ["UE5", "C++", "Perforce"]
    },
    {
      name: "The random Project",
      description: "At a point, I had free time and followed the beginning of the \"handmade Hero\" tutorial up to episode 14 and got side tracked. I builed a very minimalistic half working 3D visualisation from nothing except c and windows API. I'm not sure I should include this here, but it was quite interesting to do",
      link: "https://github.com/antonin-slv/handmade",
      skills: ["C", "Windows API"], 
    },
  ],
  experience: [
    {
      company: "Atos Lyon",
      title: "Fullstack Developpement - Internship",
      dateRange: "Sep 2024 - Jan 2025",
      bullets: [
        "Contributed to the developpement of MySI², the Information System of the Enedis IT department",
        "Worked on a team using scrum, gaining experience in agile development methodologies",
        "Used the Angular TypeScript framework and java springboot, adding my brick to the codebase", 
      ],
    },
  ],
  education: [
    {
      school: "UCBL & Polytech Lyon",
      degree: "Peip A - Computer Science focus",
      dateRange: "2021 - 2023",
      achievements: [
        "Standard Integrated Engeneering \"Classe prépa\" program, with a focus on computer science",
        "Learned PHP, C, python, the basics of web development, and the fundamentals of computer science",
        "Extensive Mathematic courses, as well as physics, electronics, and various engineering courses were included "
      ],
    },
    {
      school: "Polytech Lyon",
      degree: "IT Engineering degree",
      dateRange: "2023 - 2026",
      achievements: [
        "Learned the fundamentals of computer science, with a focus on software development and project management",
        "Worked on several projects, including multiple web applications, a compiler, and the creation of a processor",
        "Gained experience in python, java, c++, SQL, and various web technologies (HTML, CSS, JavaScript ...)",
      ],
    },
    {
      school: "UQAC - Université Du Québec à Chicoutimi",
      degree: "IT master's degree - VideoGame Development",
      dateRange: "2025 - 2026",
      achievements: [
        "Learned a solid basis for video game developpement, in particular with Unreal Engine and Godot",
        "Made a total of arround  how to make a game without creating a performance bomb, add networking elements to it and use industry tools as Perforce to do so as a team",
        "Won the 2026 winter WonderJam with an Unreal Game and a wonderfull team against 13 other teams",
        
      ],
    },
  ],
};
