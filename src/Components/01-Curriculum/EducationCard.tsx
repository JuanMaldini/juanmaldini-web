import { Education } from '../../types';
import './Curriculum.css';

type EducationCardProps = {
  education: Education;
};

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <article className="education-card">
      <div className="card-header">
        {education.titulo && (
          <h3 className="education-title">{education.titulo}</h3>
        )}
        {education.subtitulo && (
          <h4 className="education-subtitle">{education.subtitulo}</h4>
        )}
        
        {/* Mantenemos compatibilidad con el formato antiguo */}
        {!education.titulo && education.institution && (
          <h3 className="education-title">{education.institution}</h3>
        )}
      </div>
      
      <div className="education-details">
        {education.datos?.map((dato, index) => (
          <div key={index} className="education-detail">{dato}</div>
        ))}
        
        {!education.subtitulo && education.degree && (
          <div className="education-detail">{education.degree}</div>
        )}
        
        {education.field && (
          <div className="education-detail">{education.field}</div>
        )}
        
        {education.period && (
          <div className="education-detail">{education.period}</div>
        )}
      </div>
      
      {education.description && (
        <p className="education-description">{education.description}</p>
      )}
    </article>
  );
}
