import { useEffect, useState } from 'react';
import "./Curriculum.css";
import SkillCard from "../SkillCard/SkillCard";
import Onedrive from "../PortfolioBar/Onedrive";
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import { ResumeData } from '../../types';
import resumeData from '../../data/resumeData';

type Props = {};

export default function Curriculum({}: Props) {
  const [data, setData] = useState<ResumeData | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills'>('experience');

  useEffect(() => {
    // En un caso real, aquí harías una llamada a una API
    setData(resumeData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="curriculum-container">
      <div className="curriculum-header">
        <h2>My Resume</h2>
        <a 
          href="/path/to/your/cv.pdf" 
          download 
          className="download-cv-button"
        >
          Download CV
        </a>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
        <button 
          className={`tab ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button 
          className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'experience' && (
          <div className="experience-section">
            <h3>Professional Experience</h3>
            <div className="experience-list">
              {data.experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="education-section">
            <h3>Education & Certifications</h3>
            <div className="education-list">
              {data.education.map((edu) => (
                <EducationCard key={edu.id} education={edu} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {data.skills.map((skill) => (
                <SkillCard 
                  key={skill.id} 
                  skill={skill.name} 
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="additional-resources">
        <Onedrive />
      </div>
    </div>
  );
}
