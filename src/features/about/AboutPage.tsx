import ProfileCard from "./ProfileCard";
import IntroCard from "./IntroCard";
import TechStack from "./TechStack";
import PortfolioButton from "@/components/PortfolioButton";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <ProfileCard />
        <IntroCard />
      </div>

      <div className="mt-8">
        <TechStack />
      </div>

      <PortfolioButton />
    </div>
  );
}
