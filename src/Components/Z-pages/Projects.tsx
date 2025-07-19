import { useState } from 'react';
import "./Projects.css";
import ProjectImageCard from "../Projects/ProjectImageCard";
import ProjectVideoCard from "../Projects/ProjectVideoCard";
import "../Projects/ProjectCard.css";
import { Project } from "../../types/project";
import Onedrive from '../PortfolioBar/Onedrive';
import { projectMediaData } from '../../data/projectMediaData';
import { VideoProvider } from '../Projects/ProjectCard';

type Props = {};

function Projects({}: Props) {
  // Obtener todas las categorías únicas
  const categories = ['all', ...Array.from(new Set(projectMediaData.map(item => item.category)))];
  const [activeTab, setActiveTab] = useState<string>('all');

  // Cada item de projectMediaData será un Project individual - SIMPLIFICADO
  const allProjects: Project[] = projectMediaData.map((item, idx) => {
    const isVideo = item.path.includes('.mp4');
    const fileName = item.path.split('/').pop()?.replace('.mp4', '').replace('.jpg', '').replace('.png', '') || 'Untitled';
    
    return {
      id: `project_${idx}`,
      title: fileName,
      description: `Proyecto de ${item.category}`,
      tags: [item.category],
      type: isVideo ? 'video' : 'image',
      category: item.category,
      media: [{
        url: item.path,
        type: isVideo ? 'video' : 'image',
        title: fileName
      }],
      date: '',
      link: '',
    };
  });

  // Filtrado simple y directo
  const filteredProjects = activeTab === 'all'
    ? allProjects
    : allProjects.filter(project => project.category === activeTab);

  return (
    <VideoProvider>
      <div className="curriculum-container">
        <div className="curriculum-header">
          <div>
            <h2>My Projects</h2>
          </div>
        </div>
        <div className="tabs">
          {categories.map((category: string) => {
            // Para categorías que ya tienen formato correcto, no las transformamos
            const displayName = category === 'all' 
              ? 'All' 
              : category; // Usar la categoría tal como está en los datos
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
            {filteredProjects.length > 0 ? (
              <div className="projects-grid">
                {filteredProjects.map((project: Project) => {
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
