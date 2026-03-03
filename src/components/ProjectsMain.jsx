import { Link } from "react-router-dom";
import { ProjectsMainStyled } from "../styles/ProjectsMain.styled";

function ProjectsMain() {
  return (
    <ProjectsMainStyled>
      <h1 className="title">Projects</h1>
      <div className="container">
        <article className="main-article">
          <h2 className="article-title">My Player</h2>
          <p>
            My Player is a simple music player web application made with HTML,
            CSS, and JavaScript. It features a playlist, play/pause buttons,
            forward and backward buttons and a small list of my favorite songs.
          </p>
          <Link
            to="https://verakissyou17.github.io/myPlayer/"
            className="article-link"
            target="_blank"
          >
            View Project
          </Link>
        </article>

        <article className="main-article">
          <h2 className="article-title">Random Quote App</h2>
          <p>
            Random Quote App is a simple web application that generates random
            quotes from a predefined list. It features a button to generate a
            new quote and display it on the screen.
          </p>
          <Link
            to="https://verakissyou17.github.io/random-quote-app/"
            className="article-link"
            target="_blank"
          >
            View Project
          </Link>
        </article>

        <article className="main-article">
          <h2 className="article-title">Time Tracking Dashboard</h2>
          <p>
            Time Tracking Dashboard is a small project made on Frontend Mentor
            that allows users to track their time spent on various tasks and
            display a summary of their progress.
          </p>
          <Link
            to="https://verakissyou17.github.io/time-tracking-dashboard-main/"
            className="article-link"
            target="_blank"
          >
            View Project
          </Link>
        </article>
        <article className="main-article">
          <h2 className="article-title">Amazon Project</h2>
          <p>
            Amazon Project is a simple web application that allows users to
            search for products, add them to their cart and checkout. It uses
            the OpenSearch API to fetch product data and track the orders made
            by customers.
          </p>
          <Link
            to="https://verakissyou17.github.io/javascript-amazon-project-main/"
            className="article-link"
            target="_blank"
          >
            View Project
          </Link>
        </article>

        <article className="main-article">
          <h2 className="article-title">Smoking Tracking App</h2>
          <p>
            Smoking Tracking App is a simple web application that allows users
            to track their smoking habits, set goals and view their progress. It
            features a simple interface with a form to add new entries to
            display the data and calculate their savings.
          </p>
          <Link
            to="https://verakissyou17.github.io/smoking-tracking-app/"
            className="article-link"
            target="_blank"
          >
            View Project
          </Link>
        </article>

        <article className="main-article">
          <h2 className="article-title">Mortgage Repayment Calculator</h2>
          <p>
            Mortgage Repayment Calculator is a simple web application that
            allows users to calculate their mortgage repayments based on the
            loan amount, interest rate and loan term. It features a form to
            input the data and display the results.
          </p>
          <Link
            to="https://verakissyou17.github.io/mortgage-repayment-calculator-main/"
            className="article-link"
            target="_blank"
          >
            View Project
          </Link>
        </article>
      </div>
    </ProjectsMainStyled>
  );
}

export default ProjectsMain;
