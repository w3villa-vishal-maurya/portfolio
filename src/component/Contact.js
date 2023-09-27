import React from 'react'
import "./style/contact.css"

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="myProject t-color" id='contact'>
                    <h2>Contact Us</h2>
                    <hr className='hr hr1' />
                </div>

                <div className="contact">
                    <div className="location t-color">
                        <div className="address contact-icon">
                            <span><i className="fa-solid fa-location-dot"></i> <p>Noida, UP</p></span>
                        </div>
                        <div className="mobile-number contact-icon">
                            <span><i className="fa-solid fa-phone"></i> <p>6393716069 / 9682043049</p></span>
                        </div>
                        <div className="google-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.747978023656!2d77.36277347490167!3d28.607336475678544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5063caee7f7%3A0x19b9e0b240a69ec1!2sW3villa%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1695388402713!5m2!1sen!2sin"
                                width="600" height="450"
                                loading="lazy" ></iframe>
                        </div>
                    </div>
                    <div className="contact-form t-color">
                        <div className="form">
                            <form action="">
                                <input type="text" placeholder='Name' />
                                <input type="email" placeholder='Email' />
                                <textarea name="description" value="This is a description." cols="30" rows="10">Section</textarea>

                                <button type='submit'>Contact Me</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact