export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  type: 'image' | 'video'; // Tipo basado en el medio principal
  category: string;
  media: {
    url: string;
    type: 'image' | 'video';
    title: string;
  }[];
  date?: string;
  link?: string;
};

export type ProjectCategory = {
  id: string;
  name: string;
  description?: string;
};
