import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
    <Header isHome={isHome} scrollTo={scrollTo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={<Projects />}
        />
      </Routes>
      <Footer isHome={isHome} />
    </>
  );
}

export default App;
