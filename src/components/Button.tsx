import { Link } from "react-router-dom";

type Props = {
  text: string;
  goTo: string;
  target?: string;
  className?: string;
  download?: string | boolean;
  onClick?: () => void;
};

const BASE =
  "inline-flex items-center justify-center min-w-[120px] px-6 py-2.5 m-2 " +
  "rounded-lg font-semibold text-sm tracking-wide text-center whitespace-nowrap " +
  "bg-accent text-on-accent shadow-sm cursor-pointer " +
  "transition-all duration-200 ease-out " +
  "hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function Button({
  goTo,
  target,
  text,
  className = "",
  download,
  onClick,
}: Props) {
  const classes = `${BASE} ${className}`.trim();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  if (download) {
    return (
      <a
        href={goTo}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        onClick={handleClick}
        download={download}
      >
        {text}
      </a>
    );
  }

  const isInternal =
    !goTo.startsWith("http") &&
    !goTo.startsWith("#") &&
    !goTo.startsWith("mailto:");

  if (isInternal) {
    return (
      <Link to={goTo} className={classes} onClick={onClick}>
        {text}
      </Link>
    );
  }

  return (
    <a
      href={goTo}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={classes}
      onClick={handleClick}
    >
      {text}
    </a>
  );
}
