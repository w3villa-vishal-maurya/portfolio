import React from 'react'
import "./style/certificatesCard.css"


const CertificateCard = (props) => {
    return (
        <>
            <div className="card t-color">
                <div className="card-img">
                    <img src={props.certificateImage} alt="" />
                </div>
                <div className="card-descr">
                    <div className="car-bar">
                        <div className="card-title">
                            {props.courseBy}
                        </div>
                        <div className="card-date">
                            07/23   
                        </div>
                    </div>
                </div>

                <div className="card-text">
                    <p className='article'>{props.certificateDesc}</p>
                </div>
            </div>
        </>
    )
}

export default CertificateCard