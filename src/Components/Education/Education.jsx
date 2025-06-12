import './Education.css'

export default function Education() {
    return (
        <>
        <div id='educationSection'  className='ProjectsHeaderDe' ></div>
        <div id='education'>
            <h1>Education & Courses</h1>
            <article>
                <section className=" box first">
                    <div className="left">
                        <h2>Mansoura University</h2>
                        <h3>B.Sc in Electrical Engineering</h3>
                        <p>2020 - Present</p>
                    </div>
                    <div className="right">
                        <h2>2020</h2>
                    </div>
                </section>
                <section className=" box second">
                    <div className="right">
                        <h2>2022</h2>
                    </div>
                    <div className="left">
                        <h2>Elzero Web School</h2>
                        <h3>Front-End Roadmap</h3>
                        <p>2022 - Present</p>
                    </div>
                </section>
                <section className=" box third">
                    <div className="left">
                        <h2>Coursera By Meta</h2>
                        <h3>Front-End Professional Certificate</h3>
                        <p> Apr 2024 - Oct 2024</p>
                    </div>
                    <div className="right">
                        <h2>2024</h2>
                    </div>
                </section>
                <section className=" box forth">
                    <div className="right">
                        <h2>2025</h2>
                    </div>
                    <div className="left">
                        <h2>National Telecommunication Institute (NTI)</h2>
                        <h3>MERN Stack</h3>
                        <p> Nov 2024 - Jan 2025</p>
                    </div>
                </section>
            </article>
        </div>  
        </>
    )
}