import Button from "./Button";
import { PORTFOLIO_URL } from "@/lib/contact";

export default function PortfolioButton() {
  return (
    <div className="flex w-full justify-center py-6">
      <Button goTo={PORTFOLIO_URL} target="_blank" text="Ver Portafolio" />
    </div>
  );
}
