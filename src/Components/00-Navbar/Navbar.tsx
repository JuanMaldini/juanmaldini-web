import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../00-Helper/Helper.css";
import Logo from "../../../public/assets/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const navItems = [
    { path: '/', label: 'About Me' },
    { path: '/curriculum', label: 'Curriculum' },
    { path: '/projects', label: 'Projects' },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo" onClick={() => handleNavClick('/')}>
            <img src={Logo} alt="Logo" className="logo" />
            <span className="logo-text">Juan Maldini</span>
          </div>

          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => (
              <div 
                key={item.path}
                className={`nav-item ${isActive(item.path)}`}
                onClick={() => handleNavClick(item.path)}
              >
                <span className="nav-link">{item.label}</span>
                <div className="nav-indicator"></div>
              </div>
            ))}
          </div>

          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;