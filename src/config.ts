
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

interface Project {
  name: string;
  description: string;
  link?: string;
  skills?: string[];
  imageSrc?: string;  
}

// L'interface principale
export interface SiteConfig {
  language: string;
  name: string;
  title: string;
  description: string;
  accentColor: string;
  aboutMe: string;
  skills: string[];
  social?: Social;
  projects: Project[];
  experience?: Experience[];
  education?: Education[];
}

// Interface pour les Props d'Astro
export interface Props {
  siteConfig: SiteConfig;
}