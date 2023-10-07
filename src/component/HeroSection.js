import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import "./style/nav.css"

function HeroSection() {
  return (
    <>
      <div className="container">
        <div className="hero">
          <div className="introduction">
            <div className="name">
              {/* <h1>&#128075; Hi, I'm <span>Vishal prakash <br /> Maurya</span>  a passionate <br /> Software Developer.</h1> */}
              <h1 className="white-color">&#128075; Hi I'm  <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Vishal Prakash Maurya',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              /></h1>
            </div>

            <div className="text">
            My name is Vishal Prakash Maurya, I’m 21 years old and I completed my graduation from Babu Banarasi Das National Institute of Technology and Management  with a B.tech in Computer Science. While there, I learning a lot of practical in subjects like fundamentals of new technologies, machine learning,  web development and more.
            </div>

            <div className="skillset">
              <div className="find-me">
                <p>Find Me At</p>
                <div className='skill-icon'>
                  <a href='https://github.com/Vishalpm' target='_blank'><i className="fa-brands fa-github"></i></a>
                  <a href='https://www.instagram.com/accounts/login/' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                  <a href='https://www.facebook.com/' target='_blank'><i className="fa-brands fa-facebook"></i></a>
                </div>
              </div>
              <div className="my-skill">
                <p>Best Skill on </p>
                <div className='skill-icon'>
                  <button><i className="fa-brands fa-square-js"></i></button>
                  <button><i className="fa-brands fa-react"></i></button>
                  <button><i className="fa-solid fa-database"></i></button>
                </div>
              </div>
            </div>
          </div>

          <div className="media">
            <div className="profile-img">
              <img src="../image/download.jpg" alt="myImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection