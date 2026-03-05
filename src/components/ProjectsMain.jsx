import { projects } from "../projects.js";
import { ProjectsMainStyled } from "../styles/ProjectsMain.styled";

function ProjectsMain() {
  function rotateElement(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 45;
    const rotateX = (0.5 - y) * 45;

    card.style.setProperty("--rotateX", `${rotateX}deg`);
    card.style.setProperty("--rotateY", `${rotateY}deg`);
  }

  const stopRotation = (e) => {
    const elem = e.currentTarget;

    elem.style.setProperty("--rotateX", "0deg");
    elem.style.setProperty("--rotateY", "0deg");
  };

  return (
    <ProjectsMainStyled>
      <h1 className="title">Projects</h1>
      <div className="container">
        {projects.map((project) => {
          return (
            <article
              key={project.id}
              className="main-article"
              onMouseLeave={stopRotation}
              onMouseMove={rotateElement}
            >
              <div className="box">
                <div className="project-details">
                  <h2 className="article-title">{project.title}</h2>
                  <a
                    href={project.url}
                    className="article-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Project
                  </a>
                </div>
                <img src={project.img} alt={project.name} />
              </div>
              <p>{project.description}</p>
            </article>
          );
        })}
      </div>
    </ProjectsMainStyled>
  );
}

export default ProjectsMain;
