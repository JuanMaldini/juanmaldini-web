import { useState, useEffect } from 'react';
import "./Projects.css";
import ProjectCard from "../Projects/ProjectCard";
import "../Projects/ProjectCard.css"; // Importamos los estilos de las tarjetas
import { Project } from "../../types/project";

type Props = {};


// Función para listar archivos en una carpeta
const listFilesInFolder = async (folderName: string): Promise<string[]> => {
  try {
    console.log(`Buscando archivos en la carpeta: ${folderName}`);
    
    // Lista de extensiones de archivo permitidas
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.webm'];
    
    // En desarrollo, intentar con import.meta.glob primero
    if (import.meta.env.DEV) {
      try {
        console.log('Buscando archivos con import.meta.glob...');
        const modules = import.meta.glob('../../../public/assets/**/*.{jpg,jpeg,png,gif,mp4,webm}');
        
        const files = Object.keys(modules)
          .filter(key => key.includes(`/assets/${folderName}/`))
          .map(key => {
            const parts = key.split('/');
            const filename = parts[parts.length - 1];
            console.log(`Archivo encontrado: ${filename}`);
            return filename;
          });
        
        if (files.length > 0) {
          console.log(`Archivos encontrados en ${folderName} (vía import.meta.glob):`, files);
          return files;
        }
      } catch (e) {
        console.error('Error al usar import.meta.glob:', e);
      }
    }
    
    // Si estamos en producción o falló el método anterior, intentar con fetch
    try {
      const publicPath = `/assets/${folderName}`;
      console.log(`Buscando archivos en: ${publicPath}`);
      
      const response = await fetch(publicPath);
      if (response.ok) {
        const text = await response.text();
        const parser = new DOMParser();
        const html = parser.parseFromString(text, 'text/html');
        
        const files = Array.from(html.querySelectorAll('a'))
          .map(link => link.getAttribute('href'))
          .filter((href): href is string => {
            if (!href) return false;
            const ext = href.toLowerCase().substring(href.lastIndexOf('.'));
            return !href.endsWith('/') && 
                   !href.includes('?') && 
                   allowedExtensions.includes(ext);
          })
          .map(href => {
            const parts = href.split('/');
            return parts[parts.length - 1];
          });
        
        console.log(`Archivos encontrados en ${folderName} (vía fetch):`, files);
        return files;
      } else {
        console.warn(`No se pudo acceder a ${publicPath}: ${response.status} ${response.statusText}`);
      }
    } catch (e) {
      console.error(`Error al acceder a la carpeta ${folderName}:`, e);
    }
    
    // Si todo falla, usar archivos de ejemplo
    const defaultFiles = ['01.jpg', '02.jpg', '03.jpg'];
    console.warn(`Usando archivos de ejemplo para ${folderName}`);
    return defaultFiles;
    
  } catch (error) {
    console.error(`Error al listar archivos en ${folderName}:`, error);
    return [];
  }
};

// Función para obtener la URL de un recurso
const getAssetUrl = (folder: string, filename: string): string => {
  // Limpiar el nombre de la carpeta y el archivo
  const cleanFolder = folder.replace(/^\/+|\/+$/g, ''); // Eliminar barras al inicio y final
  const cleanFilename = filename.replace(/^\/+|\/+$/g, ''); // Eliminar barras al inicio y final
  
  // Construir la ruta base
  let basePath = '/assets';
  
  // En desarrollo, intentar diferentes formatos de ruta
  if (import.meta.env.DEV) {
    // Intentar con la ruta relativa al directorio público
    const publicPath = `${basePath}/${cleanFolder}/${cleanFilename}`;
    console.log(`Intentando cargar recurso desde: ${publicPath}`);
    return publicPath;
  }
  
  // En producción, usar la ruta base
  const productionPath = `${basePath}/${cleanFolder}/${cleanFilename}`;
  console.log(`Cargando recurso en producción: ${productionPath}`);
  return productionPath;
};

function Projects({}: Props) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>(['all']);
  const [currentFolder, setCurrentFolder] = useState<string>('');
  
  // Lista de carpetas de proyectos (eliminada la función listFolders no utilizada)
  const projectFolders = ['3D_Max', 'Blender', 'Houdini', 'Unreal_Engine'] as const;

  // Efecto para cargar proyectos cuando se monta el componente
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Establecer las categorías
        setCategories(['all', ...projectFolders]);
        
        // Si no hay carpeta actual, usar la primera
        const targetFolder = currentFolder || projectFolders[0];
        if (targetFolder) {
          setCurrentFolder(targetFolder);
          
          // Cargar archivos de la carpeta
          const files = await listFilesInFolder(targetFolder);
          console.log(`Archivos encontrados en ${targetFolder}:`, files);
          
          // Convertir archivos a proyectos
          const projectsData = await Promise.all(
            files.map(async (file) => {
              const extension = file.split('.').pop()?.toLowerCase() || '';
              const isVideo = ['mp4', 'webm'].includes(extension);
              const nameWithoutExt = file.replace(/\.[^/.]+$/, '');
              
              // Construir la URL del recurso con un parámetro de caché
              const cacheBuster = new Date().getTime();
              const filePath = `${getAssetUrl(targetFolder, file)}?v=${cacheBuster}`;
              console.log(`Creando proyecto para archivo: ${filePath}`);
              
              // Generar un título legible a partir del nombre del archivo
              const formattedTitle = nameWithoutExt
                .replace(/[-_]/g, ' ')  // Reemplazar guiones y guiones bajos con espacios
                .replace(/([a-z])([A-Z])/g, '$1 $2')  // Separar palabras en camelCase
                .replace(/\b\w/g, l => l.toUpperCase())  // Capitalizar primera letra de cada palabra
                .trim();
              
              return {
                id: `${targetFolder}-${file}-${cacheBuster}`,  // Incluir timestamp en el ID
                title: formattedTitle,
                description: `Proyecto creado con ${targetFolder.replace('_', ' ')}`,
                tags: [targetFolder],
                type: isVideo ? ('video' as const) : ('image' as const),
                image: isVideo ? '' : filePath,
                video: isVideo ? filePath : undefined,
                category: targetFolder.replace('_', ' '),
                date: new Date().toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })
              } as Project;
            })
          );
          
          setProjects(projectsData);
          console.log('Proyectos cargados:', projectsData);
        }
        
      } catch (err) {
        console.error('Error al cargar proyectos:', err);
        setError('No se pudieron cargar los proyectos. Por favor, intente más tarde.');
      } finally {
        setLoading(false);
      }
    };
    
    loadProjects();
  }, [currentFolder]);
  
  // Filtrar y ordenar proyectos según la pestaña activa
  const filteredProjects = (activeTab === 'all' 
    ? [...projects] 
    : projects.filter(p => 
        p.category.toLowerCase() === activeTab.toLowerCase() || 
        p.category.toLowerCase().replace(' ', '_') === activeTab.toLowerCase()
      )
  ).sort((a, b) => a.title.localeCompare(b.title));

  if (loading) {
    return (
      <div className="curriculum-container">
        <div className="loading">Cargando proyectos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="curriculum-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="curriculum-container" style={{ padding: '2rem' }}>
      <div className="curriculum-header">
        <h2>Mis Proyectos</h2>
      </div>

      <div className="tabs">
        {categories.map((category) => {
          const displayName = category === 'all' 
            ? 'Todos' 
            : category
                .replace(/[-_]/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase());
                
          return (
            <button 
              key={category}
              className={`tab ${activeTab === category ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(category);
                if (category !== 'all') {
                  setCurrentFolder(category);
                }
              }}
            >
              {displayName}
            </button>
          );
        })}
      </div>

      <div className="tab-content">
        {loading ? (
          <div className="loading">Cargando proyectos...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="no-projects">
            No se encontraron proyectos en la categoría "{activeTab}".
            <p>Asegúrate de que la carpeta {activeTab} contenga archivos de imagen o video.</p>
            <p>Ruta buscada: /assets/{activeTab}/</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
