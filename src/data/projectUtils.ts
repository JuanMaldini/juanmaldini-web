import { Project } from './types';

const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.webm'];

export const getAllProjects = async (): Promise<Project[]> => {
  try {
    return [];
  } catch (error) {
    console.error('Error al cargar proyectos:', error);
    return [];
  }
};

export const getProjectCategories = async (): Promise<string[]> => {
  try {
    return [];
  } catch (error) {
    console.error('Error al cargar categorías:', error);
    return [];
  }
};

export const filterProjectsByCategory = (
  projects: Project[], 
  category: string
): Project[] => {
  if (!category || category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const processProjectFile = (filePath: string): Omit<Project, 'id'> | null => {
  const parts = filePath.split(/[\\/]/);
  if (parts.length < 2) return null;
  
  const fileName = parts.pop() || '';
  const category = parts.pop() || '';
  
  
  const extension = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();
  if (!SUPPORTED_EXTENSIONS.includes(extension)) return null;
    
  const type = ['.mp4', '.webm'].includes(extension) ? 'video' : 'image';
  
  return {
    media: [{
      url: `/assets/projects/${category}/${fileName}`,
      type,
    }],
    type,
    category,
  };
};
