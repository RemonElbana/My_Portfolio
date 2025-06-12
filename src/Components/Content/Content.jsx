import "./Content.css";
import Lottie from "lottie-react";
import ratedAnimation from '../../assets/rated.json'
import myImg from "../../assets/avatar.jpg";
import linkedImg from '../../assets/icons8-linkedin.svg'
import githubImg from '../../assets/github.svg'
import downImg from '../../assets/icons8-download-48.png'



export default function content() {
    return (
        <div id="">
            <h1 id="homeText" >Home</h1>
            <article>
                <div className="left">
                    <img src={myImg} alt="" />
                </div>
                <div className="right">
                    <div className="typing-slider">
                        <p className="pp" >I&apos;m Remon Elbana</p>
                    </div>            
                    <p>
                        Passionate and skilled Front-End Developer with
                        a background in Electrical Engineering. Experienced in creating responsive, 
                        user-centered applications using HTML, CSS, and JavaScript, with expertise in React.js. 
                        Committed to building efficient, innovative solutions with a keen eye for design and usability. 
                        Eager to contribute to impactful projects in a dynamic tech environment. 
                    </p>
                    <Lottie animationData={ratedAnimation}  className="rated"/>
                    <div>
                        <a href="https://www.linkedin.com/in/remonvictor/" target="_blank" ><img src={linkedImg} alt="" /></a>
                        <a href="https://github.com/RemonElbana" target="_blank"><img src={githubImg} alt="" /></a>
                    </div>
                    <div className="extra">
                        <a target="_blank" href="https://drive.google.com/file/d/10Lu9m4M65YyZhH-lnLWV_WRQnyEDkqez/view?usp=sharing"><button className="button" >My Resume</button></a>
                        <a href="https://drive.usercontent.google.com/download?id=10Lu9m4M65YyZhH-lnLWV_WRQnyEDkqez&export=download" download="Remon'cv.pdf">
                            <img src={downImg} id="downImg" alt="Download Resume" />
                        </a>                    
                    </div>
                </div>
            </article>
        </div>
    );
}
