import React from 'react'
import MyProjectsCard from './MyProjectsCard'
import "./style/myProjects.css"

const MyProjects = () => {
    return (
        <div className="container">
            <div className="project-heading" id='project'> 
                <div className="myProject t-color">
                    <h2>My Projects</h2>
                    <hr className='hr hr1'/>
                </div>

                <div className="menu-card">
                    <MyProjectsCard/>
                    <MyProjectsCard/>
                    <MyProjectsCard/>
                    <MyProjectsCard/>
                    <MyProjectsCard/>
                    <MyProjectsCard/>
                </div>
            </div>
        </div>
    )
}

export default MyProjects