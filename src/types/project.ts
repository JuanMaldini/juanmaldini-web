export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string; // URL opcional para videos
  tags: string[];
  type: 'image' | 'video';
  category: string;
  date?: string;
  link?: string;
};

export type ProjectCategory = {
  id: string;
  name: string;
  description?: string;
};
