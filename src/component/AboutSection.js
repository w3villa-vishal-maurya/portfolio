import React from 'react'
import "./style/about.css"


const AboutSection = () => {
    return (
        <>
            <div className="about container">
                <div className="about-sub1">
                    <div className="can-help">
                        <h1>What Can I Help?</h1>
                        <a href="#"></a>
                    </div>

                    <div className="about-text" id='about-text'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum exercitationem ratione quidem rerum adipisci reprehenderit fugiat eligendi, tempore totam dolore tenetur, nostrum,
                            optio voluptate reiciendis
                            aliquam veritatis voluptatibus quos?</p>
                    </div>

                    <div className="about-btn">
                        <div className="experiance">
                            <h2>0.4y+</h2>
                            <p>Experiance</p>
                        </div>
                        <div className="project-count">
                            <h2>5+</h2>
                            <p>Projects</p>
                        </div>
                    </div>
                </div>
                <div className="about-sub2">
                    <div className="about-me">
                        <h1>About Me</h1>
                    </div>
                    <div className="about-text">
                        <p id="about-me">My name is Vishal Prakash Maurya, I’m 21 years old and I completed my graduation from Babu Banarasi Das National Institute of Technology and Management  with a B.tech in Computer Science. While there, I learning a lot of practical in subjects like fundamentals of new technologies, machine learning,  web development and more.

                            I’ve worked hard in my education and now I’m ready to apply my knowledge into real-world problems.

                            I’ve had a lot of exposure to the technical environment. A lot of my courses involved working with real companies to solve real problems.

                            Now, I’m looking to leverage everything I’ve learned in college and get some hands-on work experience.</p>

                    </div>

                    <div className="download-cv">
                        <button>Download CV</button >
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection