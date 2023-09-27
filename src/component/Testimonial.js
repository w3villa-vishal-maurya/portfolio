import React from 'react'
import "./style/testimonial.css"
import TestimonialData from './TestimonialData'

const Testimonial = () => {
  return (
    <>

      <div className="box " id='education'>
        <div className="testimonial t-color">
          <h2>Testimonial</h2>
          <hr className='t-color' />
        </div>
        <div className="container testimonial-box">
          <div className="box-data t-color ">
            <TestimonialData />
          </div>

          <div className="right-arrow">
          <i className="fa-solid fa-arrow-right-long" ></i>
          </div>
        </div>
      </div>

    </>
  )
}

export default Testimonial