import { useState } from 'react';
import "./Projects.css";
import ProjectCard, { VideoProvider } from "../Projects/ProjectCard";
import "../Projects/ProjectCard.css";
import { Project } from "../../types/project";
import Onedrive from '../PortfolioBar/Onedrive';
import { projectMediaData } from '../../data/projectMediaData';

type Props = {};

function Projects({}: Props) {
  // Obtener todas las categorías únicas
  const categories = ['all', ...Array.from(new Set(projectMediaData.map(item => item.category)))];
  const [activeTab, setActiveTab] = useState<string>('all');

  // Mapeo de los datos estáticos a objetos Project
  const allProjects: Project[] = projectMediaData.map((item, idx): Project => {
    const fileName = item.path.split('/').pop() || '';
    const nameWithoutExt = fileName.replace(/\.[^/.]+$/, '');
    const ext = item.path.split('.').pop()?.toLowerCase() || '';
    const isVideo = ['mp4', 'webm', 'mov'].includes(ext);
    const isImage = ['jpg', 'jpeg', 'png', 'gif'].includes(ext);
    return {
      id: `${item.category}-${nameWithoutExt}-${idx}`,
      title: nameWithoutExt
        .replace(/[-_]/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b\w/g, (l: string) => l.toUpperCase())
        .trim(),
      description: `Proyecto de ${item.category}`,
      tags: [item.category],
      type: isVideo ? 'video' : 'image',
      image: isImage ? item.path : '',
      video: isVideo ? item.path : '',
      category: item.category,
      date: '',
      link: '',
    };
  });

  // Filtrar y ordenar proyectos
  const filteredProjects = activeTab === 'all'
    ? allProjects
    : allProjects.filter((p: Project) => p.category === activeTab);
  const sortedProjects = filteredProjects.sort((a: Project, b: Project) => a.title.localeCompare(b.title));

  return (
    <VideoProvider>
      <div className="curriculum-container">
        <div className="curriculum-header">
          <ul className="nolist">
            <li><h2>My Projects</h2></li>
            <li><small>Website under development.</small></li>
          </ul>  
          
        </div>
        <div className="tabs">
          {categories.map((category: string) => {
            const displayName = category === 'all'
              ? 'All'
              : category.replace(/[-_]/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
            return (
              <button
                key={category}
                className={`tab ${activeTab === category ? 'active' : ''}`}
                onClick={() => setActiveTab(category)}
              >
                {displayName}
              </button>
            );
          })}
        </div>
        <div className="tab-content">
          <div className="projects-section">
            {sortedProjects.length > 0 ? (
              <div className="projects-grid">
                {sortedProjects.map((project: Project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="no-projects">
                No projects found in the "{activeTab}" category.
                <p>Make sure the {activeTab} category contains items in projectMediaData.ts.</p>
              </div>
            )}
          </div>
        </div>
        <div className="additional-resources">
          <Onedrive />
        </div>
      </div>
    </VideoProvider>
  );
}

export default Projects;
