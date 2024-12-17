import "../00-Button/Button.css";
import "../00-Helper/Helper.css";

type Props = {
  text: string;
  target?:string;
  goTo: string;
};

export default function Button({ goTo, target, text }: Props) {
  return (
    <button className="buttonType01" type="button">
      <a href={goTo} target={target}>{text}</a>
    </button>
  );
}
