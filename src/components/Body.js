import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/headshot.jpg';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">

                {/* Profile section containing the headshot, name, title, and social icons */}
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={Avatar} />

                    {/* Container for user details */}
                    <div className="body-content">
                        <div className="body-headline">Angel Boakye</div>
                        <div className="body-text">Software Engineer</div>
                    </div>

                    {/* Social media icons */}
                    <div className="body-icons">
                        <a href="https://github.com/aboakye1994" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i></a>
                        <a href="https://www.linkedin.com/in/angel-boakye/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;