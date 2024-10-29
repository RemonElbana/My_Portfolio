import "./App.css";
import Lottie  from "lottie-react";
import rocketAnimation from './assets/rocket5.json' ;
import starAnimation from './assets/stars.json'
import Header from "./Components/Header/Header.jsx";
import Content from "./Components/Content/Content.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Education from "./Components/Education/Education.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Skills from "./Components/Skills/Skills.jsx";

function App() {
  return (
    <>
      <div id="homeSection" className="ProjectsHeaderDe" ></div>
      <Header />
      <Lottie animationData={rocketAnimation} className="rocket"  />      
      <Lottie animationData={starAnimation} className="star" />
      <Content />
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}


export default App;
