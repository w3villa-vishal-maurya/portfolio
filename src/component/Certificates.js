import React from 'react'
import CertificateCard from './CertificateCard'
import data from "../JsonData/Certificate.json"

const Certificates = () => {
  return (
    <>
      <div className="container">
        <div className="certificate " id='certificates'>
          <h1 className='t-color'>Certificates</h1>
          <hr className='hr' />
        </div>
        <div className="cartificates-card">

          {data['data'].slice(0, 6).map(item => (
            <CertificateCard key={item.id} certificateImage={item.certificateImage} certificateName={item.certificateName} courseBy={item.courseBy} certificateDesc={item.description} certificateUrl={item.certificateUrl}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Certificates