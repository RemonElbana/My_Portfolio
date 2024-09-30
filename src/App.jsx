import "./App.css";
// import React from "react";
import { PROJECTS } from "./Projects.js";
import { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import Content from "./Components/Content/Content.jsx";
import ProjectBtn from "./Components/Projects/ProjectsBtn.jsx";
import Contact from "./Components/Contact/Contact.jsx";

function App() {
  const [projectSel, setProjectSel] = useState("dashboard");

  function selectHandler(selected) {
    setProjectSel(selected);
  }

  const iscontent = "Please Select a Project"

  return (
    <>
      <Header />
      <Content />
      <h1 id="projectSection" className="ProjectsHeader" >Projects</h1>
      <div className="buttons">
        <ProjectBtn
          onSelect={() => selectHandler("dashboard")}
          isSelected={projectSel === "dashboard"}
        >
          DashBoard
        </ProjectBtn>
        <ProjectBtn
          onSelect={() => selectHandler("crudsystem")}
          isSelected={projectSel === "crudsystem"}
        >
          CRUD 
        </ProjectBtn>
        <ProjectBtn
          onSelect={() => selectHandler("stopwatch")}
          isSelected={projectSel === "stopwatch"}
        >
          StopWatch
        </ProjectBtn>
        <ProjectBtn
          onSelect={() => selectHandler("agecalc")}
          isSelected={projectSel === "agecalc"}
        >
          Age Calculator
        </ProjectBtn>
      </div>
      {projectSel ?       <section className="projects">
        <div className="lefts">
          <img src={PROJECTS[projectSel].image} alt="" />
        </div>
        <div className="text">
          <h2>{PROJECTS[projectSel].title}</h2>
          <p>{PROJECTS[projectSel].description}</p>
          <a target="_blank" href={PROJECTS[projectSel].git}>
            GitHub Link
          </a>
          <a target="_blank" href={PROJECTS[projectSel].demo}>
            Demo Link
          </a>
        </div>
      </section>
    : <section className="projects"> {iscontent} </section>
      }
      <Contact/>
    </>
  );
}

export default App;
