import "./App.css";
import AboutMe from "./components/sections/AboutMe/AboutMe";
import Resume from "./components/sections/Resume/Resume";

function App() {
  return (
    <div className="w-screen overflow-x-hidden max-w-screen  h-screen">
      <Resume />
      <AboutMe />
    </div>
  );
}

export default App;
