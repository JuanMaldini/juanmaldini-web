export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  titulo: string;
  subtitulo: string;
  datos: string[];
}

export type SkillLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Expert"
  | "Native";

export interface Skill {
  skill: string;
  level: SkillLevel;
}

export interface ResumeData {
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}

export type MediaType = "image" | "video";

export type Project = {
  id: string;
  type: MediaType;
  category: string;
  media: { url: string; type: MediaType }[];
};
