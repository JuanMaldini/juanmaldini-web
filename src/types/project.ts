export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;          // Imagen principal/miniatura
  video?: string;         // URL opcional para el video principal
  additionalMedia?: {     // Medios adicionales (imágenes o videos)
    type: 'image' | 'video';
    url: string;
  }[];
  tags: string[];
  type: 'image' | 'video'; // Tipo basado en el medio principal
  category: string;
  date?: string;
  link?: string;
};

export type ProjectCategory = {
  id: string;
  name: string;
  description?: string;
};
