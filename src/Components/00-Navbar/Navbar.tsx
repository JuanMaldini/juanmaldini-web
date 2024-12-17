import "../00-Helper/Helper.css";
import Logo from "../../assets/Logo.png";

type Props = {}

export default function Navbar({}: Props) {
  return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark " aria-label="Third navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={Logo} alt="Logo image" width={45}/></a>
      <a className="navbar-brand" href="#">Juan Maldini</a>

      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarsExample03">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">About Me</a></li>
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Curriculum</a></li>
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Projects</a></li>
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Contact</a></li>
        </ul>
      </div>

    </div>
  </nav>
  )
}