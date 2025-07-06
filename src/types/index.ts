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
  titulo: string;        // Título principal (ej: nombre de la institución)
  subtitulo: string;     // Subtítulo (ej: título obtenido o área de estudio)
  datos: string[];       // Array de strings con información adicional
  
  // Mantenemos estos campos para compatibilidad hacia atrás
  institution?: string;
  degree?: string;
  field?: string;
  period?: string;
  description?: string;
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
