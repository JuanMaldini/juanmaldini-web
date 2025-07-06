// Lista de carpetas a excluir
export const EXCLUDED_FOLDERS = ['Icons', 'CV'] as const;

// Tipos para la configuración
type ProjectTexts = {
  pageTitle: string;
  noProjects: string;
  loading: string;
  titleOverrides: Record<string, string>;
  categoryNames: Record<string, string>;
};

// Configuración de textos
const projectTexts: ProjectTexts = {
  pageTitle: 'Mis Proyectos',
  noProjects: 'No se encontraron proyectos en esta categoría',
  loading: 'Cargando proyectos...',
  
  // Mapeo de nombres de archivo a títulos personalizados
  titleOverrides: {
    // Ejemplo: 'nombre-archivo': 'Título personalizado',
  },
  
  // Mapeo de nombres de carpetas a títulos más legibles
  categoryNames: {
    // Ejemplo: 'web': 'Desarrollo Web',
  }
};

// Función para obtener el título de un proyecto
export const getProjectTitle = (fileName: string): string => {
  // Primero verifica si hay un título personalizado
  const customTitle = projectTexts.titleOverrides[fileName];
  if (customTitle) return customTitle;
  
  // Si no, genera un título a partir del nombre del archivo
  return fileName
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Función para obtener el nombre de categoría legible
export const getCategoryName = (category: string): string => {
  return projectTexts.categoryNames[category] || 
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
};
