// Tipos para la experiencia laboral
export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

// Tipos para la educación
export interface Course {
  degree: string;
  field?: string;
  period: string;
  description?: string;
}

export interface Education {
  id?: string;  // Haciendo el id opcional
  institution: string;
  // Para compatibilidad hacia atrás
  degree?: string;
  field?: string;
  period?: string;
  description?: string;
  // Nueva propiedad para múltiples cursos
  courses?: Course[];
}

// Niveles de habilidad
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Native';

// Tipos para las habilidades
export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  category: 'language' | '3d' | 'engine' | 'render' | 'programming' | '2d' | 'tools' | 'cad' | 'web' | 'soft' | 'os' | 'other';
}

// Tipos para los datos del currículum
export interface ResumeData {
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}
