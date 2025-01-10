import "./App.css";
import AboutMe from "./components/sections/AboutMe/AboutMe";
import Resume from "./components/sections/Resume/Resume";
import Skills from "./components/sections/Skills/Skills";

function App() {
  return (
    <div className="w-screen overflow-x-hidden max-w-screen  h-screen">
      <Resume />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
