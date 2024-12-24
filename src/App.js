import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ProjectsExp from "./components/ProjectsExp";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="">
      <Home />
      <AboutMe />
      <Skills />
      <ProjectsExp />
      <ContactMe />
    </div>
  );
}

export default App;
