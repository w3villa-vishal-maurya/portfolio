import React from 'react'

const TestimonialData = (props) => {
    return (
        <>
            <div className="box " id='education'>
                <div className="testimonial t-color">
                    <h2>Testimonial</h2>
                    <hr className='t-color' />
                </div>
                <div className="container testimonial-box">

                    <div className="box-data t-color ">
                        <div className="profile-pic">
                            <img src={props.logo} alt="" />

                        </div>
                        <div className="profile-name">
                            <h4>{props.collegeName}</h4>
                        </div>
                        <div className='profile-text'>
                            <p>{props.description}</p>
                        </div>
                    </div>

                    {/* <div className="right-arrow">
            <i className="fa-solid fa-arrow-right-long" ></i>
          </div> */}
                </div>
            </div>
        </>
    )
}

export default TestimonialData