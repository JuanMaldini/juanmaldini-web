import { Project } from '../types/project';
import { EXCLUDED_FOLDERS, getProjectTitle } from '../config/projects.config';

/**
 * Tipos de archivos soportados
 */
const SUPPORTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.webm'];

/**
 * Obtiene la lista de proyectos desde el sistema de archivos
 */
export const getAllProjects = async (): Promise<Project[]> => {
  try {
    // Esta función será implementada para leer el sistema de archivos real
    // Por ahora, devolvemos un array vacío
    return [];
  } catch (error) {
    console.error('Error al cargar proyectos:', error);
    return [];
  }
};

/**
 * Obtiene las categorías de proyectos disponibles
 */
export const getProjectCategories = async (): Promise<string[]> => {
  try {
    // En una implementación real, esto leería los directorios
    // Por ahora, devolvemos un array vacío
    return [];
  } catch (error) {
    console.error('Error al cargar categorías:', error);
    return [];
  }
};

/**
 * Filtra y formatea los proyectos según la categoría seleccionada
 */
export const filterProjectsByCategory = (
  projects: Project[], 
  category: string
): Project[] => {
  if (!category || category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

/**
 * Procesa los nombres de archivo para generar metadatos del proyecto
 */
export const processProjectFile = (filePath: string): Omit<Project, 'id'> | null => {
  const parts = filePath.split(/[\\/]/);
  if (parts.length < 2) return null;
  
  const fileName = parts.pop() || '';
  const category = parts.pop() || '';
  
  // Saltar archivos en carpetas excluidas
  if ((EXCLUDED_FOLDERS as readonly string[]).includes(category)) return null;
  
  // Extraer extensión
  const extension = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();
  if (!SUPPORTED_EXTENSIONS.includes(extension)) return null;
  
  // Generar ID único basado en la ruta
  const id = filePath.replace(/[^\w]/g, '-').toLowerCase();
  
  // Generar título a partir del nombre del archivo (sin extensión)
  const baseName = fileName.replace(/\.[^/.]+$/, '');
  const title = getProjectTitle(baseName);
  
  // Determinar el tipo de medio
  const type = ['.mp4', '.webm'].includes(extension) ? 'video' : 'image';
  
  return {
    title,
    description: '', // Se puede extraer de un archivo de metadatos
    media: [{
      url: `/assets/projects/${category}/${fileName}`,
      type,
      title
    }],
    tags: [],
    type,
    category,
    date: new Date().toISOString().split('T')[0],
    link: `#${id}`
  };
};
