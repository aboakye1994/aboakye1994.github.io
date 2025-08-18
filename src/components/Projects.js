import data from '../data/projects.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
            breakpoint: 600,
            settings: {
                infinite: false,
                initialSlide: 0,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
// console.log(data); // Removed for production use
return (
    <div id='projects' className='projects'>
        <div className="projects-heading">
            <h2>WORKS</h2>
        </div>
            <div className="projects-container">
                <Slider {...settings}>
                    {
                        data.map(({ name, description, link, image }, key) => {
                            return (
                                <div key={key} className="project">
                                    <div className="content">
                                        <img src={image || 'https://via.placeholder.com/150'} alt={name} />
                                        <h2 className="name">{name}</h2>
                                        {
                                            description.length > 130
                                            ? <p className='description-min'>{description}</p>
                                            : <p className='description'>{description}</p>
                                        }
                                        <div>
                                            {link && (
                                                <a
                                                className="project-button"
                                                target="_blank"
                                                href={link}
                                                rel="noreferrer"
                                                >Github
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

    </div>
)

}

export default Projects;