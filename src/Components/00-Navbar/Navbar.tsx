import { Link, useLocation } from 'react-router-dom';
import "../00-Helper/Helper.css";
import Logo from "../../assets/Logo.png";

type Props = {}

export default function Navbar({}: Props) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Main navigation">
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="Logo" width={45} />
            </Link>
            <Link className="navbar-brand" to="/">Juan Maldini</Link>
          </div>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/curriculum') ? 'active' : ''}`} 
                to="/curriculum"
              >
                Curriculum
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/projects') ? 'active' : ''}`} 
                to="#"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                to="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
      <div className="text-dark text-center m-0 p-0">
        <small>Website Under Construction</small>
      </div>
    </>
  );
}