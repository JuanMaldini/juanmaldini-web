import "../00-Button/Button.css";
import "../00-Helper/Helper.css";
import { Link } from "react-router-dom";

type Props = {
  text: string;
  target?: string;
  goTo: string;
  className?: string;
  download?: string | boolean;
  onClick?: () => void;
};

export default function Button({ goTo, target, text, className = '', download, onClick }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  // Check if it's an internal link (starts with /)
  const isInternalLink = !goTo.startsWith('http') && !goTo.startsWith('#') && !goTo.startsWith('mailto:');
  
  if (isInternalLink) {
    return (
      <Link 
        to={goTo} 
        className={`buttonType01 ${className}`.trim()}
        onClick={onClick}
      >
        {text}
      </Link>
    );
  }

  return (
    <a 
      href={goTo} 
      target={target} 
      rel={target === '_blank' ? 'noopener noreferrer' : ''} 
      className={`buttonType01 ${className}`.trim()}
      onClick={handleClick}
      download={download}
    >
      {text}
    </a>
  );
}
