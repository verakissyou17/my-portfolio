import { Link } from "react-router-dom";
import { FooterStyled } from "../styles/Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Footer({isHome}) {
    const date = new Date("2026-03-03");
    const year = date.getFullYear();
  return (
    <FooterStyled>
      <nav className="footer-nav">
        <Link
          to="http://wa.me/754430834"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
        <Link
          to="https://github.com/Verakissyou17"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          to="https://www.linkedin.com/in/verakissyou17/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </nav>
      <div>@Copyright{year}.<br></br>Made with love by <Link id={isHome ? "home" : "projects" } to={"https://github.com/verakissyou17"} target="_blank">Vera💞</Link></div>
    </FooterStyled>
  );
}

export default Footer;
