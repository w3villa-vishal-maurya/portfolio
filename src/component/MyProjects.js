import React from 'react'
import MyProjectsCard from './MyProjectsCard'
import "./style/myProjects.css"
import data from "../JsonData/Projects.json"

const MyProjects = () => {
    return (
        <div className="container">
            <div className="project-heading" id='project'>
                <div className="myProject t-color">
                    <h2>My Projects</h2>
                    <hr className='hr hr1' />
                </div>

                <div className="menu-card">
                    {data['data'].slice(0, 6).map((item) => (
                        <MyProjectsCard
                            key={item.id}
                            projectName={item.projectName}
                            projectDesc={item.description}
                            projectLink={item.liveProjectLink}
                            projectGithubLink={item.githubProjectLink}
                        />
                    ))}
                </div>

                {data['data'].length > 6 ? (
                    <div className="more-projects">
                        <a
                            href="https://github.com/Vishalpm"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <button className="button-btn">View More on Github</button>
                        </a>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}

export default MyProjects