import { ReactNode } from "react";
import { FaDiscord } from "react-icons/fa";
import { FiGithub, FiGitlab } from "react-icons/fi";
import { SOCIAL } from "@/lib/contact";

const LinkedInIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PortfolioIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const EmailIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

type SocialLink = { href: string; label: string; icon: ReactNode };

const links: SocialLink[] = [
  { href: SOCIAL.discord, label: "Discord", icon: <FaDiscord /> },
  { href: SOCIAL.github, label: "GitHub", icon: <FiGithub /> },
  { href: SOCIAL.gitlab, label: "GitLab", icon: <FiGitlab /> },
  { href: SOCIAL.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: SOCIAL.onedrive, label: "Portfolio", icon: PortfolioIcon },
  { href: SOCIAL.email, label: "Email", icon: EmailIcon },
];

type Props = {
  className?: string;
  /** Icon edge size in px. */
  iconSize?: number;
};

export default function SocialIconsBar({ className = "", iconSize = 22 }: Props) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="group flex h-10 w-10 items-center justify-center rounded-full
                     border border-line bg-chip text-ink/80
                     transition-all duration-200
                     hover:-translate-y-0.5 hover:bg-accent hover:text-on-accent hover:shadow-md
                     focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span
            className="block transition-transform duration-200 group-hover:scale-110 [&>svg]:h-full [&>svg]:w-full"
            style={{ width: iconSize, height: iconSize }}
          >
            {link.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
