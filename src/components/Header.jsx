import { HeaderStyled } from "../styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";

function Header({isHome, scrollTo}) {
    const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };

  const toggleNavbar = () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    hamburger.classList.toggle("closed");
    navbar.classList.toggle("hidden");
  }

  console.log(isHome);

  return (
    <HeaderStyled className="header">
      <div className="hamburger" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className="navbar hidden">
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

      <div className="toggle-btn" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faSun} className="icon-sun" />
        <FontAwesomeIcon icon={faMoon} className="icon-moon" />
        <span className="ball"></span>
      </div>
    </HeaderStyled>
  );
}

export default Header;
