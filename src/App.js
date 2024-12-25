import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ProjectsExp from "./components/ProjectsExp";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="hide-scrollbar h-screen overflow-y-auto">
      <Home />
      <AboutMe />
      <Skills />
      <ProjectsExp />
      <ContactMe />
    </div>
  );
}

export default App;
