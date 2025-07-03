import "../00-Button/Button.css";
import "../00-Helper/Helper.css";

type Props = {
  text: string;
  target?: string;
  goTo: string;
  className?: string;
};

export default function Button({ goTo, target, text, className = '' }: Props) {
  return (
    <button className={`buttonType01 ${className}`.trim()} type="button">
      <a href={goTo} target={target} rel={target === '_blank' ? 'noopener noreferrer' : ''}>
        {text}
      </a>
    </button>
  );
}
