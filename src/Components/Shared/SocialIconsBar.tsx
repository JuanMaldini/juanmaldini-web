import { Email, Github, LinkedIn, OnedriveLink, Discord } from "../00-Helper/Helper";
import { FaDiscord } from "react-icons/fa";

// SVG Icons with better contrast
const icons = {
  discord: <FaDiscord />,
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.81 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  portfolio: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 3.5a12 12 0 0 0-20.3 9 11.8 11.8 0 0 0 1.3 5.4L0 24l6-1.6a12 12 0 0 0 5.7 1.5h.1a12 12 0 0 0 8.7-20.4zm-3.7 17.8a9.4 9.4 0 0 1-5.3 1.6h-.1a9.6 9.6 0 0 1-4.6-1.2l-3.7 1 1-3.6a9.4 9.4 0 0 1-1.5-5.1 9.7 9.7 0 0 1 16.5-6.9 9.7 9.7 0 0 1-1.1 13.8zm-5.3-7.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.2-.3.2-.5.1-.8-.4-1.6-1.2-2.1-2-.1-.1 0-.3.1-.4.1-.1.2-.1.3-.2h.5c.1 0 .3-.1.4.3.1.3.4 1 .4 1.1.1.1.1.2 0 .3 0 .1-.1.2-.2.3l-.4.2c-.1.1-.3.2-.3.3-.1.1 0 .2 0 .3.1.1.2.3.4.5.2.2.5.5.8.7.4.3.8.5 1.1.7.2.1.4.1.5 0 .1 0 .3-.1.5-.2.2-.2.4-.3.5-.2l.4.2c.4.2.8.4 1.1.5.2.1.3.1.4 0 .1-.1.1-.3.1-.4 0-.2 0-.4-.1-.6-.2-.2-.5-.5-.8-.8z"/>
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
};

type SocialIconsBarProps = {
  className?: string;
  iconSize?: string | number;
  iconColor?: string;
  hoverColor?: string;
};

export default function SocialIconsBar({
  className = '',
  iconSize = '24px',
  iconColor = '#333',
  hoverColor = 'var(--colorYellow)'
}: SocialIconsBarProps) {
  return (
    <div className={`social-icons ${className}`}>
      <a 
        href={Discord}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Discord"
        data-component-name="SocialIcon-Discord"
      >
        {icons.discord}
      </a>
      <a 
        href={Github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon" 
        aria-label="GitHub"
        data-component-name="SocialIcon-GitHub"
      >
        {icons.github}
      </a>
      <a 
        href={LinkedIn} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon" 
        aria-label="LinkedIn"
        data-component-name="SocialIcon-LinkedIn"
      >
        {icons.linkedin}
      </a>
      <a 
        href={OnedriveLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon" 
        aria-label="Portfolio"
        data-component-name="SocialIcon-Portfolio"
      >
        {icons.portfolio}
      </a>
      <a 
        href={Email()} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon" 
        aria-label="Email"
        data-component-name="SocialIcon-Email"
      >
        {icons.email}
      </a>
      <style dangerouslySetInnerHTML={{
        __html: `
        .social-icons {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #f8f9fa;
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
          color: ${iconColor};
          position: relative;
          padding: 0;
          margin: 0;
        }

        .social-icon svg {
          width: ${typeof iconSize === 'number' ? `${iconSize}px` : iconSize};
          height: ${typeof iconSize === 'number' ? `${iconSize}px` : iconSize};
          transition: all 0.3s ease;
          fill: currentColor;
          opacity: 0.9;
          display: block;
        }

        .social-icon:hover {
          background-color: ${hoverColor};
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          color: #000;
        }

        .social-icon:hover svg {
          opacity: 1;
          transform: scale(1.1);
        }
      `
      }} />
    </div>
  );
}
