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
                  'a passionate Software Developer.',
                  1000,
                  'a professional Software Developer.',
                  1000,

                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              /></h1>
            </div>

            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laudantium obcaecati recusandae tenetur laborum similique possimus minima ea maxime alias in magnam unde asperiores nam natus dolores quae, dolorem quis!
            </div>

            <div className="skillset">
              <div className="find-me">
                <p>Find Me At</p>
                <div className='skill-icon'>
                  <button><i className="fa-brands fa-github"></i></button>
                  <button><i className="fa-brands fa-instagram"></i></button>
                  <button><i className="fa-brands fa-facebook"></i></button>
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