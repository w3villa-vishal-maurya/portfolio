import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import "./style/nav.css"

function HeroSection() {

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipped((prevIsFlipped) => !prevIsFlipped);
    }, 1000); // Rotate every 1 second

    return () => clearInterval(flipInterval);
  }, []);
  
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
                  <a><i className="fa-brands fa-square-js"></i></a>
                  <a><i className="fa-brands fa-react"></i></a>
                  <a><i class="fa-brands fa-node-js"></i></a>
                  <a><i className="fa-solid fa-database"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="media ">
            <div className={`flip-box ${isFlipped ? 'flipped' : ''}`}>
              <div className="flip-box-inner">
                <div className="flip-box-front profile-img">
                  <img src="../image/download.jpg" alt="myImage" />
                </div>
                <div className=" profile-img">
                  <img src="../image/profile.avif" alt="myImage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection