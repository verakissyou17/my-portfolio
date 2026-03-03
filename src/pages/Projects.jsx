import Header from "../components/Header";
import ProjectsMain from "../components/ProjectsMain";
import Footer from "../components/Footer";

function Projects({isHome, scrollTo}) {
  return (
    <>
      <title>Projects</title>
      <Header scrollTo={scrollTo} />
      <ProjectsMain />
      <Footer isHome={isHome} />
    </>
  );
}

export default Projects;
