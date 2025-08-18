import IMG from '../assets/headshot.jpg';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">I'm a senior Computer Science student at Georgia State University with a background in pharmacy. I previously worked at a 120-bed hospital and now work at Grady Hospital, a Level I trauma center with over 1,000 beds. After nearly a decade in healthcare, I transitioned into tech to pursue software engineering and DevOps. I’m currently building full-stack projects and expanding my skills in cloud technologies and infrastructure automation.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;