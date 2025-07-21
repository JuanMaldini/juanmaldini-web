export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}
export interface Course {
  degree: string;
  field?: string;
  period: string;
  description?: string;
}
export interface Education {
  titulo: string;
  subtitulo: string;
  datos: string[];
  institution?: string;
  degree?: string;
  field?: string;
  period?: string;
  description?: string;
  courses?: Course[];
}
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Native';
export interface Skill {
  skill: string;
  level: SkillLevel;
}
export interface ResumeData {
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}
export type Project = {
  id: string;
  type: 'image' | 'video'; // Tipo basado en el medio principal
  category: string;
  media: {
    url: string;
    type: 'image' | 'video';
  }[];
};
export type ProjectCategory = {
  id: string;
  name: string;
  };