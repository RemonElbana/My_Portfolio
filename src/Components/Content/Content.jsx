import "./Content.css";
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
            I am a passionate and dedicated front-end developer with experience in
            web development, video editing, and design using Photoshop. With a
            solid background in electrical engineering, I possess strong technical
            skills in both hardware and software. I am also a basketball player,
            painter, and active volunteer at the Resala Charity Organization.
            </p>
            <div className="extra">
            <a target="_blank" href="https://drive.google.com/file/d/1n4WlhfwmdX1ERMoGSMT8U212XyzWpOUg/view?usp=sharing"><button className="button" >My Resume</button></a>
            </div>
        </div>
        </article>
        </div>
    );
}
