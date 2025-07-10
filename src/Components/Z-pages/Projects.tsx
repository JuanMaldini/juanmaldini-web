import { useState } from 'react';
import "./Projects.css";
import ProjectCard, { VideoProvider } from "../Projects/ProjectCard";
import ProjectImageCard from "../Projects/ProjectImageCard";
import ProjectVideoCard from "../Projects/ProjectVideoCard";
import "../Projects/ProjectCard.css";
import { Project } from "../../types/project";
import Onedrive from '../PortfolioBar/Onedrive';
import { projectMediaData } from '../../data/projectMediaData';

type Props = {};

function Projects({}: Props) {
  // Obtener todas las categorías únicas
  const categories = ['all', ...Array.from(new Set(projectMediaData.map(item => item.category)))];
  const [activeTab, setActiveTab] = useState<string>('all');

  // Cada item de projectMediaData será un Project individual
  const allProjects: Project[] = projectMediaData.map((item, idx) => {
  const ext = item.path.split('.').pop()?.toLowerCase() || '';
  const type = ['mp4', 'webm', 'mov'].includes(ext) ? 'video' : 'image';
  // Nombre del archivo sin carpeta ni extensión
  const fileName = item.path.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'Untitled';
  return {
    id: `${(item.category || 'project').replace(/\s+/g, '_').toLowerCase()}_${idx}`,
    title: fileName,
    description: item.category ? `Proyecto de ${item.category}` : '',
    tags: item.category ? [item.category] : [],
    type,
    category: item.category || '',
    media: [{
      url: item.path,
      type,
      title: fileName
    }],
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
          <div>
            <h2>My Projects</h2>
            <small>Website under development.</small>
          </div>
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
                {sortedProjects.map((project: Project) => {
                  if (project.type === 'image') {
                    return <ProjectImageCard key={project.id} project={project} />;
                  }
                  if (project.type === 'video') {
                    return <ProjectVideoCard key={project.id} project={project} />;
                  }
                  return null;
                })}
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
