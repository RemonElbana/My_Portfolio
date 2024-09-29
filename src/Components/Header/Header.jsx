import "./Header.css";
import reactImg from "../../assets/react.svg";

export default function header() {
    return (
        <header>
            <div className="logo">
                <img src={reactImg} alt="" />
            </div>
            <div className="listitem">
                <ul>
                    <li><a href="#homeSection">Home</a></li>
                    <li><a href="#projectSection">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </div>
        </header>
    );
}
