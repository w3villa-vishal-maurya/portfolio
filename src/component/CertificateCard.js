import React from 'react'
import "./style/certificatesCard.css"

const CertificateCard = () => {
    return (
        <>
            <div className="card t-color">
                <div className="card-img">
                    <img src="../image/certificates.webp" alt="" />
                </div>
                <div className="card-descr">
                    <div className="car-bar">
                        <div className="card-title">
                            Coursera
                        </div>
                        <div className="card-date">
                            07/23
                        </div>
                    </div>
                </div>

                <div className="card-text">
                    <p className='article'>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Iusto provident, temporibus error architecto amet, modi quia in  </p>
                </div>
            </div>
        </>
    )
}

export default CertificateCard