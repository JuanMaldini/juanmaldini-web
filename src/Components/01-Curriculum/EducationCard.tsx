import { Education } from '../../types';
import './Curriculum.css';

type EducationCardProps = {
  education: Education;
};

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <article className="education-card">
      <h3 className="education-title">{education.titulo}</h3>
      <h4 className="education-subtitle">{education.subtitulo}</h4>
      <div className="education-details">
        {education.datos.map((dato, index) => (
          <div key={index} className="education-detail">{dato}</div>
        ))}
      </div>
      
      {/* Mantenemos compatibilidad con el formato antiguo por si acaso */}
      {!education.titulo && education.institution && (
        <h3 className="education-institution">{education.institution}</h3>
      )}
      {!education.subtitulo && education.degree && (
        <div className="education-degree">{education.degree}</div>
      )}
      {education.field && (
        <div className="education-field">{education.field}</div>
      )}
      {education.period && (
        <div className="education-period">{education.period}</div>
      )}
      {education.description && (
        <p className="education-description">{education.description}</p>
      )}
    </article>
  );
}
