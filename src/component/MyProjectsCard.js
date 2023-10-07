import React from 'react'
import "./style/myProjects.css"

const MyProjectsCard = (props) => {
    return (
        <>
            <div className="project-card t-color">
                <div className="project-img">
                    <img src="../image/certificates.webp" alt="" />
                    <div className="github-link">
                        <a href={props.projectGithubLink} target='_blank'><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="card-text project-text">
                    <p className='article'>{props.projectDesc}</p>
                </div>

                <div className="read-more">
                    <a href={props.projectLink} target='_blank'>Read more <hr /></a>
                </div>


            </div>
        </>
    )
}

export default MyProjectsCard