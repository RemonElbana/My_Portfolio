import "./Content.css";
import myImg from "../../assets/avatar.jpg";

export default function content() {
    return (
        <article>
        <div className="left">
            <img src={myImg} alt="" />
        </div>
        <div className="right">
            <h2>My Name: Remon Elbana</h2>
            <p>
            I am a passionate and dedicated front-end developer with experience in
            web development, video editing, and design using Photoshop. With a
            solid background in electrical engineering, I possess strong technical
            skills in both hardware and software. I am also a basketball player,
            painter, and active volunteer at the Resala Charity Organization.
            </p>
            <div className="extra">
            <ul>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/remonvictor/">
                    LinkedIn
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/codexXx0">
                    GitHub
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://wa.link/irpx87">
                    WhatsApp
                    </a>
                </li>
                <li>
                    <a target="_blank" href="mailto:rimonelbanaking@gmail.com"  >
                    Email
                    </a>
                </li>
            </ul>
            <a target="_blank" href="https://drive.google.com/file/d/1n4WlhfwmdX1ERMoGSMT8U212XyzWpOUg/view?usp=sharing"><button className="button" >My Resume</button></a>
            </div>
        </div>
        </article>
    );
}
