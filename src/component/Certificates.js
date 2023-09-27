import React from 'react'
import CertificateCard from './CertificateCard'

const Certificates = () => {
  return (
    <>
      <div className="container">
        <div className="certificate " id='certificates'>
          <h1 className='t-color'>Certificates</h1>
          <hr className='hr'/>
        </div>
        <div className="cartificates-card">
          <CertificateCard/>
          <CertificateCard/>
          <CertificateCard/>
          <CertificateCard/>
          <CertificateCard/>
          <CertificateCard/>
        </div>
      </div>
    </>
  )
}

export default Certificates