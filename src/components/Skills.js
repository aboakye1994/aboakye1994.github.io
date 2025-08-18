import { FaJava, FaReact, FaPython, FaGithub, FaDocker } from "react-icons/fa";

const Skills = () => {
    const skillsArr = [
        {
            "name" : 'Java',
            "icon" : FaJava
        },
        {
            "name" : "Python",
            "icon" : FaPython
        },
        {
            "name" : "Git",
            "icon" : FaGithub
        },
        {
            "name" : "Reactjs",
            "icon" : FaReact
        },
        {
            "name" : "Docker",
            "icon" : FaDocker
        }
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                <p className='skill'>{skill.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;