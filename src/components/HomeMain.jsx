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
        <div className="about-me__image">
          <img
            className="profile-image"
            src="./images/my-picture.jpg"
            alt="Vera's profile picture"
          />
        </div>
        <section className="about-me__text">
          <h2 className="subtitle">
            I am a self-taught junior web developer, passionate about technology
            and web design.
          </h2>
          <p>
            I took courses on freeCodeCamp and followed countless online courses
            and tutorials.
          </p>
        </section>
        <section className="skills">
          <h2 className="subtitle">Skills</h2>
          <ol className="skills-list">
            <li>
              <FontAwesomeIcon icon={faHtml5} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3} />
            </li>
            <li>
              <FontAwesomeIcon icon={faJs} />
            </li>
            <li>
              <FontAwesomeIcon icon={faSass} />
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGit} />
            </li>
          </ol>
        </section>
      </section>
      <Form />
    </HomeMainStyled>
  );
}

export default HomeMain;
