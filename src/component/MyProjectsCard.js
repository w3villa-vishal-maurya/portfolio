import React from 'react'
import "./style/myProjects.css"

const MyProjectsCard = () => {
    return (
        <>
            <div className="project-card t-color">
                <div className="project-img">
                    <img src="../image/certificates.webp" alt="" />
                    <div className="github-link">
                        <a href="#"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="card-text project-text">
                    <p className='article'>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Iusto provident, temporibus error architecto amet, modi quia in  </p>
                </div>

                <div className="read-more">
                    <a href="#">Read more <hr /></a>
                </div>


            </div>
        </>
    )
}

export default MyProjectsCard