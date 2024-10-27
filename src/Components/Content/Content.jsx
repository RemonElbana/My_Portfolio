import "./Content.css";
import Lottie from "lottie-react";
import ratedAnimation from '../../assets/rated.json'
import myImg from "../../assets/avatar.jpg";

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
                    <div className="extra">
                    <a target="_blank" href="https://drive.google.com/file/d/1qg8rtqj1gTqoNYVzsjL4EVz0mS9q6Jgl/view?usp=sharing"><button className="button" >My Resume</button></a>
                    </div>
                </div>
            </article>
        </div>
    );
}
