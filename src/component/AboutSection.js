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
                            <h2>2y+</h2>
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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum exercitationem ratione quidem rerum adipisci reprehenderit fugiat eligendi, tempore totam dolore tenetur, nostrum,
                            optio voluptate reiciendis
                            aliquam veritatis voluptatibus quos?</p>

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