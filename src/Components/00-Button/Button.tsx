import "../00-Button/Button.css";
import "../00-Helper/Helper.css";

type Props = {
  text: string;
  target?: string;
  goTo: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({ goTo, target, text, className = '', onClick }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a 
      href={goTo} 
      target={target} 
      rel={target === '_blank' ? 'noopener noreferrer' : ''} 
      className={`buttonType01 ${className}`.trim()}
      onClick={handleClick}
    >
      {text}
    </a>
  );
}
