import { HeaderStyled } from "../styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <HeaderStyled className="header">
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className="navbar">
        <ul className="nav-list closed">
          <li>
            <Link to={isHome ? "/contact" : "/home"}>
              {isHome ? "Contact" : "Home"}
            </Link>
          </li>
          <li>
            <Link to={isHome ? "/projects" : "#projects"}>Projects</Link>
          </li>
        </ul>
      </nav>

      <div className="toggle-btn dark-mode">
        <FontAwesomeIcon icon={faSun} />
        <FontAwesomeIcon icon={faMoon} />
        <span className="ball"></span>
      </div>
    </HeaderStyled>
  );
}

export default Header;
