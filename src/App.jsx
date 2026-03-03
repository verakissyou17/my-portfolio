import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/home"
        element={<Home isHome={isHome} scrollTo={scrollTo} />}
      />
      <Route
        path="/projects"
        element={<Projects isHome={isHome} scrollTo={scrollTo} />}
      />
    </Routes>
  );
}

export default App;
