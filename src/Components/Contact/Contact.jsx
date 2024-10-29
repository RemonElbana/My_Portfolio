import './Contact.css'
export default function contact() {
    return (
        <>
        <div id="contactSection" className="ProjectsHeaderDe" ></div>
        <h1 id="" >Contact Me</h1>
        <article className='contactArticle' >
        <h1>Ready to make your dream a reality?</h1>
        <h2>You Can Find Me Here</h2>
            <div className="main">
            <div className="left">
                <h2 className='first' >By Phone </h2>
                <p className='second'>Phone Number :</p>
                <p className='third'><a href="tel:+201279712301">+201279712301</a></p>
            </div>
            <div className="mid">
                <h2 className='first'>Email Me</h2>
                <p className='second'>I&apos;m here too : </p>
                <p className='third'><a target="_blank" href="mailto:rimonelbanaking@gmail.com">Email</a></p>
            </div>
            <div className="rights">
                <h2 className='first'>Direct Contact </h2>
                <p className='second'>Waiting For Your Message</p>
                <p className='third'><a target="_blank" href="https://wa.link/irpx87">WhatsApp</a></p>
            </div>
            </div>
        </article>
        </>
    );
}
