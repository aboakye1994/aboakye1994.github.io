import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/headshot.jpg';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt="Angel Boakye headshot" src={Avatar} />

                    <div className="body-content">
                        <div className="body-headline">Angel Boakye</div>
                        <div className="body-text">Software Engineer</div>
                    </div>

                    <div className="body-icons">
                        <a 
                            href="https://github.com/aboakye1994" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="GitHub Profile" 
                            className="icon-link"
                        >
                            <FaGithub />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/angel-boakye/" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="LinkedIn Profile" 
                            className="icon-link"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;