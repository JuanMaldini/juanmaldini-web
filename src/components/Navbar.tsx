import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { ASSETS } from "@/lib/techStack";

const navItems = [
  { path: "/", label: "About Me" },
  { path: "/curriculum", label: "Curriculum" },
  { path: "/projects", label: "Projects" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative px-1 py-1 text-sm font-medium transition-colors",
      "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:transition-all",
      isActive
        ? "text-ink after:bg-accent"
        : "text-muted hover:text-ink after:bg-transparent",
    ].join(" ");

  const go = (path: string) => {
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-bg2/80 backdrop-blur-md shadow-sm"
          : "border-transparent bg-bg2/40 backdrop-blur-sm",
      ].join(" ")}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => go("/")}
          className="flex items-center gap-2.5"
          aria-label="Go to home"
        >
          <img src={ASSETS.logo} alt="" className="h-8 w-8" />
          <span className="text-base font-semibold text-ink">Juan Maldini</span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} end className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line
                       bg-chip text-base transition-colors hover:bg-accent-soft
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span aria-hidden="true">{theme === "dark" ? "☀️" : "🌙"}</span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md
                       border border-line bg-chip md:hidden"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-ink transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-ink transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-ink transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-line bg-bg2/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col px-4 py-2 sm:px-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => go(item.path)}
                className="py-3 text-left text-sm font-medium text-muted hover:text-ink"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
