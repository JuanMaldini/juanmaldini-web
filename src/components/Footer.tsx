import SocialIconsBar from "./SocialIconsBar";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto w-full border-t-2 border-line py-6">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="m-0 text-sm text-muted">© {year} Created by Juan Maldini</p>
        <SocialIconsBar iconSize={18} />
      </div>
    </footer>
  );
}
