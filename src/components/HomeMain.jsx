import { HomeMainStyled } from "../styles/HomeMain.styled";
import Form from "../components/Form.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faSass,
  faReact,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

function HomeMain() {
  return (
    <HomeMainStyled>
      <section className="about-me">
        <h1 className="title">Hi, I am Vera and I love to code...</h1>
        <section className="about-me__text">
          <h2 className="about_me-subtitle">
            I am a self-taught junior web developer, passionate about technology
            and web design.
          </h2>
          <div className="text-container">
            <div className="about-me__image">
              <img
                className="profile-image"
                src="./images/my-picture.jpg"
                alt="Vera's profile picture"
              />
            </div>
            <p>
              I took courses on freeCodeCamp and followed countless online
              courses and tutorials.
            </p>
          </div>
        </section>
        <section className="skills">
          <h3 className="skills-subtitle">Skills</h3>
          <ol className="skills-list">
            <li>
              <FontAwesomeIcon icon={faHtml5} className="icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3} className="icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faJs} className="icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faSass} className="icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} className="icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faGit} className="icon" />
            </li>
          </ol>
        </section>
      </section>
      <Form />
    </HomeMainStyled>
  );
}

export default HomeMain;
