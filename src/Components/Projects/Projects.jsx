import { useState } from "react";
import { PROJECTS } from "../../Projects";
import ProjectBtn from './ProjectsBtn.jsx'

export default function Projects() {
    const [projectSel, setProjectSel] = useState();

    function selectHandler(selected) {
    setProjectSel(selected);
    }

    let allContent = ""

    if ( projectSel === "ALLPROJECTS") {
    allContent = (
        <section className="projects">
        <div className="AllProjects">
        <div className="invCalc project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].invCalc.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].invCalc.title}</h2>
            <p>{PROJECTS[projectSel].invCalc.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].invCalc.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].invCalc.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="ticTacToe project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].ticTacToe.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].ticTacToe.title}</h2>
            <p>{PROJECTS[projectSel].ticTacToe.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].ticTacToe.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].ticTacToe.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="novashouse project ">
            <div className="lefts">
            <img src={PROJECTS[projectSel].novashouse.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].novashouse.title}</h2>
            <p>{PROJECTS[projectSel].novashouse.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].novashouse.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].novashouse.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="dashboard project ">
            <div className="lefts">
            <img src={PROJECTS[projectSel].dashboard.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].dashboard.title}</h2>
            <p>{PROJECTS[projectSel].dashboard.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].dashboard.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].dashboard.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="crudsystem project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].crudsystem.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].crudsystem.title}</h2>
            <p>{PROJECTS[projectSel].crudsystem.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].crudsystem.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].crudsystem.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="stopwatch project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].stopwatch.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].stopwatch.title}</h2>
            <p>{PROJECTS[projectSel].stopwatch.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].stopwatch.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].stopwatch.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="agecalc project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].agecalc.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].agecalc.title}</h2>
            <p>{PROJECTS[projectSel].agecalc.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].agecalc.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].agecalc.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="todolist project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].todolist.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].todolist.title}</h2>
            <p>{PROJECTS[projectSel].todolist.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].todolist.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].todolist.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="littlelemon project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].littlelemon.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].littlelemon.title}</h2>
            <p>{PROJECTS[projectSel].littlelemon.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].littlelemon.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].littlelemon.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="unitconvertor project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].unitconvertor.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].unitconvertor.title}</h2>
            <p>{PROJECTS[projectSel].unitconvertor.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].unitconvertor.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].unitconvertor.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="temp3 project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].temp3.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].temp3.title}</h2>
            <p>{PROJECTS[projectSel].temp3.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].temp3.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].temp3.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="temp2 project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].temp2.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].temp2.title}</h2>
            <p>{PROJECTS[projectSel].temp2.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].temp2.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].temp2.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="temp1 project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].temp1.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].temp1.title}</h2>
            <p>{PROJECTS[projectSel].temp1.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].temp1.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].temp1.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="alpharomio project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].alpharomio.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].alpharomio.title}</h2>
            <p>{PROJECTS[projectSel].alpharomio.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].alpharomio.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].alpharomio.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="portfolio project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].portfolio.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].portfolio.title}</h2>
            <p>{PROJECTS[projectSel].portfolio.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].portfolio.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].portfolio.demo}>
                Demo Link
            </a>
            </div>
        </div>
        </div>
    </section>
    )
    } else if ( projectSel === "REACTJS" ) {
    allContent = (
        <section className="projects">
        <div className="AllProjects">
        <div className="invCalc project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].invCalc.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].invCalc.title}</h2>
            <p>{PROJECTS[projectSel].invCalc.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].invCalc.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].invCalc.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="ticTacToe project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].ticTacToe.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].ticTacToe.title}</h2>
            <p>{PROJECTS[projectSel].ticTacToe.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].ticTacToe.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].ticTacToe.demo}>
                Demo Link
            </a>
            </div>
        </div>
        <div className="portfolio project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].portfolio.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].portfolio.title}</h2>
            <p>{PROJECTS[projectSel].portfolio.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].portfolio.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].portfolio.demo}>
                Demo Link
            </a>
            </div>
        </div>
        </div>
    </section>  
    )
    } else if ( projectSel === "CSS" ) {
    allContent = (
        <section className="projects">
        <div className="AllProjects">
        <div className="alpharomio project">
            <div className="lefts">
            <img src={PROJECTS[projectSel].alpharomio.image} alt="" />
            </div>
            <div className="text">
            <h2>{PROJECTS[projectSel].alpharomio.title}</h2>
            <p>{PROJECTS[projectSel].alpharomio.description}</p>
            <a target="_blank" href={PROJECTS[projectSel].alpharomio.git}>
                GitHub Link
            </a>
            <a target="_blank" href={PROJECTS[projectSel].alpharomio.demo}>
                Demo Link
            </a>
            </div>
        </div>
        </div>
    </section>  
    )
    } else if ( projectSel === "HTMLCSSJS" ) {
    allContent = (
        <section className="projects">
        <div className="AllProjects">
            <div className="dashboard project">
            <div className="lefts">
                <img src={PROJECTS[projectSel].dashboard.image} alt="" />
            </div>
            <div className="text">
                <h2>{PROJECTS[projectSel].dashboard.title}</h2>
                <p>{PROJECTS[projectSel].dashboard.description}</p>
                <a target="_blank" href={PROJECTS[projectSel].dashboard.git}>
                GitHub Link
                </a>
                <a target="_blank" href={PROJECTS[projectSel].dashboard.demo}>
                Demo Link
                </a>
            </div>
            </div>
            <div className="crudsystem project">
            <div className="lefts">
                <img src={PROJECTS[projectSel].crudsystem.image} alt="" />
            </div>
            <div className="text">
                <h2>{PROJECTS[projectSel].crudsystem.title}</h2>
                <p>{PROJECTS[projectSel].crudsystem.description}</p>
                <a target="_blank" href={PROJECTS[projectSel].crudsystem.git}>
                GitHub Link
                </a>
                <a target="_blank" href={PROJECTS[projectSel].crudsystem.demo}>
                Demo Link
                </a>
            </div>
            </div>
            <div className="todolist project">
            <div className="lefts">
                <img src={PROJECTS[projectSel].todolist.image} alt="" />
            </div>
            <div className="text">
                <h2>{PROJECTS[projectSel].todolist.title}</h2>
                <p>{PROJECTS[projectSel].todolist.description}</p>
                <a target="_blank" href={PROJECTS[projectSel].todolist.git}>
                GitHub Link
                </a>
                <a target="_blank" href={PROJECTS[projectSel].todolist.demo}>
                Demo Link
                </a>
            </div>
            </div>
            <div className="stopwatch project">
            <div className="lefts">
                <img src={PROJECTS[projectSel].stopwatch.image} alt="" />
            </div>
            <div className="text">
                <h2>{PROJECTS[projectSel].stopwatch.title}</h2>
                <p>{PROJECTS[projectSel].stopwatch.description}</p>
                <a target="_blank" href={PROJECTS[projectSel].stopwatch.git}>
                GitHub Link
                </a>
                <a target="_blank" href={PROJECTS[projectSel].stopwatch.demo}>
                Demo Link
                </a>
            </div>
            </div>
            <div className="agecalc project">
            <div className="lefts">
                <img src={PROJECTS[projectSel].agecalc.image} alt="" />
            </div>
            <div className="text">
                <h2>{PROJECTS[projectSel].agecalc.title}</h2>
                <p>{PROJECTS[projectSel].agecalc.description}</p>
                <a target="_blank" href={PROJECTS[projectSel].agecalc.git}>
                GitHub Link
                </a>
                <a target="_blank" href={PROJECTS[projectSel].agecalc.demo}>
                Demo Link
                </a>
            </div>
            </div>
            <div className="unitconvertor project">
            <div className="lefts">
                <img src={PROJECTS[projectSel].unitconvertor.image} alt="" />
            </div>
            <div className="text">
                <h2>{PROJECTS[projectSel].unitconvertor.title}</h2>
                <p>{PROJECTS[projectSel].unitconvertor.description}</p>
                <a target="_blank" href={PROJECTS[projectSel].unitconvertor.git}>
                GitHub Link
                </a>
                <a target="_blank" href={PROJECTS[projectSel].unitconvertor.demo}>
                Demo Link
                </a>
            </div>
            </div>
        </div>
    </section>  
    )
    } else if ( projectSel === "HTMLCSS" ) {
    allContent = (
        <section className="projects">
        <div className="AllProjects">
            <div className="novashouse project">
            <div className="lefts">
                <img src={PROJECTS[projectSel].novashouse.image} alt="" />
            </div>
            <div className="text">
                <h2>{PROJECTS[projectSel].novashouse.title}</h2>
                <p>{PROJECTS[projectSel].novashouse.description}</p>
                <a target="_blank" href={PROJECTS[projectSel].novashouse.git}>
                GitHub Link
                </a>
                <a target="_blank" href={PROJECTS[projectSel].novashouse.demo}>
                Demo Link
                </a>
            </div>
            </div>
            <div className="littlelemon project">
            <div className="lefts">
                <img src={PROJECTS[projectSel].littlelemon.image} alt="" />
            </div>
            <div className="text">
                <h2>{PROJECTS[projectSel].littlelemon.title}</h2>
                <p>{PROJECTS[projectSel].littlelemon.description}</p>
                <a target="_blank" href={PROJECTS[projectSel].littlelemon.git}>
                GitHub Link
                </a>
                <a target="_blank" href={PROJECTS[projectSel].littlelemon.demo}>
                Demo Link
                </a>
            </div>
            </div>
            <div className="temp3 project">
            <div className="lefts">
                <img src={PROJECTS[projectSel].temp3.image} alt="" />
            </div>
            <div className="text">
                <h2>{PROJECTS[projectSel].temp3.title}</h2>
                <p>{PROJECTS[projectSel].temp3.description}</p>
                <a target="_blank" href={PROJECTS[projectSel].temp3.git}>
                GitHub Link
                </a>
                <a target="_blank" href={PROJECTS[projectSel].temp3.demo}>
                Demo Link
                </a>
            </div>
            </div>
            <div className="temp2 project">
            <div className="lefts">
                <img src={PROJECTS[projectSel].temp2.image} alt="" />
            </div>
            <div className="text">
                <h2>{PROJECTS[projectSel].temp2.title}</h2>
                <p>{PROJECTS[projectSel].temp2.description}</p>
                <a target="_blank" href={PROJECTS[projectSel].temp2.git}>
                GitHub Link
                </a>
                <a target="_blank" href={PROJECTS[projectSel].temp2.demo}>
                Demo Link
                </a>
            </div>
            </div>
            <div className="temp1 project">
            <div className="lefts">
                <img src={PROJECTS[projectSel].temp1.image} alt="" />
            </div>
            <div className="text">
                <h2>{PROJECTS[projectSel].temp1.title}</h2>
                <p>{PROJECTS[projectSel].temp1.description}</p>
                <a target="_blank" href={PROJECTS[projectSel].temp1.git}>
                GitHub Link
                </a>
                <a target="_blank" href={PROJECTS[projectSel].temp1.demo}>
                Demo Link
                </a>
            </div>
            </div>
        </div>
    </section>  
    )
    } else {
    allContent = (
        <section className="projects" >
                <p>Which Projects List Do you Wanna Explore ?</p>
        </section>
    )
    }
    
    return (
        <>
        <div id="projectSection" className="ProjectsHeaderDe" ></div>
        <h1  className="ProjectsHeader" >Projects</h1>
        <div className="buttons">
            <ProjectBtn
            onSelect={() => selectHandler("ALLPROJECTS")}
            isSelected={projectSel === "ALLPROJECTS"}
            >
            All Projects
            </ProjectBtn>
            <ProjectBtn
            onSelect={() => selectHandler("REACTJS")}
            isSelected={projectSel === "REACTJS"}
            >
            React JS 
            </ProjectBtn>
            <ProjectBtn
            onSelect={() => selectHandler("HTMLCSSJS")}
            isSelected={projectSel === "HTMLCSSJS"}
            >
            HTML & CSS & JS
            </ProjectBtn>
            <ProjectBtn
            onSelect={() => selectHandler("HTMLCSS")}
            isSelected={projectSel === "HTMLCSS"}
            >
            HTML & CSS
            </ProjectBtn>
            <ProjectBtn
            onSelect={() => selectHandler("CSS")}
            isSelected={projectSel === "CSS"}
            >
            CSS
            </ProjectBtn>
        </div>
        {allContent}        
    </>
    )
}