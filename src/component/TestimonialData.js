import React from 'react'

const TestimonialData = () => {
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
                            <img src="../image/download.jpg" alt="" />

                        </div>
                        <div className="profile-name">
                            <h4>Vishal Prakash Maurya</h4>
                        </div>
                        <div className='profile-text'>
                            <p>Lorem ipsum dolor sit,
                                amet consectetur adipisicing elit.
                                Corrupti sapiente dicta laboriosam
                                rem itaque eum recusandae natus
                                nulla harum quam aliquam commodi
                                quisquam, maxime, aliquid id aperiam quia. Excepturi,
                                blanditiis!</p>


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