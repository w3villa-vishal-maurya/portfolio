import React from 'react'
import "./style/testimonial.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialData from './TestimonialData'
import Crouselbar from './Crouselbar';

const Testimonial = () => {

  return (
    <>
        <div className='box'>
      <div className="testimonial t-color">
                    <h2>Testimonial</h2>
                    <hr className='t-color' />
                </div>

      <Crouselbar/>
      </div>
    </>
  )
}

export default Testimonial