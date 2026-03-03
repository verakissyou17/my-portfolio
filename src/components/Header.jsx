import { HeaderStyled } from "../styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";

function Header({isHome, scrollTo}) {

  return (
    <HeaderStyled className="header">
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className="navbar">
        <ul className="nav-list">
          <li>
            {isHome ? (
              <a onClick={() => scrollTo("contact")}>Contact</a>
            ) : (
              <Link to="/home">Home</Link>
            )}
          </li>
          <li>
            {isHome ? (
              <Link to="/projects">Projects</Link>
            ) : (
              <a onClick={() => scrollTo("projects")}>Projects</a>
            )}
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
