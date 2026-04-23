
// Définition des sous-parties pour plus de clarté
interface Experience {
  title: string;
  company: string;
  dateRange: string;
  bullets: string[];
}

interface Education {
  degree: string;
  school: string;
  dateRange: string;
  achievements: string[];
}

interface Social {
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  short_desc: string;
  link?: string;
  skills?: string[];
  imageSrc?: string;

  // --- Champs spécifiques pour la page Projet ---
  bannerSrc?: string;
  about?: string;
  contributions?: string[];
  youtubeId?: string;
  gallery?: string[];
}

// L'interface principale
export interface SiteConfig {
  IAM: string;
  greeting: string;
  language: string;
  name: string;
  title: string;
  description: string;
  accentColor: string;
  aboutMe: string;
  skills: string[];
  social: Social;
  projects: Project[];
  games?: Project[]; // Optionnel, pour différencier les jeux des autres projets
  experience: Experience[];
  education: Education[];
}

// Interface pour les Props d'Astro
export interface Props {
  siteConfig: SiteConfig;
}