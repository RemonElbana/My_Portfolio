import './Skills.css'
import reactImg from '../../assets/react.svg'
import boot from '../../assets/boot.svg'
import css3 from '../../assets/css3.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'
import html from '../../assets/html.svg'
import tail from '../../assets/tail.svg'
import ts from '../../assets/ts.svg'
import js from '../../assets/js.svg'

export default function Skills() {
    return (
        <>
        <div id='skillsSection' className="ProjectsHeaderDe" ></div>
        <div id="skills">
            <h1>Skills</h1>
            <article id='skillsArt'>
                <img src={html} alt="" />
                <img src={css3} alt="" />
                <img src={boot} alt="" />
                <img src={tail} alt="" />
                <img src={js} alt="" />
                <img src={ts} alt="" />
                <img src={reactImg} alt="" />
                <img src={git} alt="" />
                <img src={github} alt="" />
            </article>
        </div>
        </>
    )
}