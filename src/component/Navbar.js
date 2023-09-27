import React from 'react'
import { HashLink } from "react-router-hash-link";
import "./style/nav.css"

function Navbar() {
  return (
    <>

      <nav className='navbar container'>
        <div className="logo">Logo</div>
        <ul className="btn-group ">

          <li className='grow-ul a-tag'>
            <HashLink smooth to="/">Vishal</HashLink>
          </li>
          <li className='grow-ul a-tag'>
            <HashLink smooth to="/#certificates">Certificates</HashLink>
          </li>
          <li className='grow-ul a-tag'>
            <HashLink smooth to="/#project">Project</HashLink>
          </li>
          <li className='grow-ul a-tag'>
            <HashLink smooth to="/#education">Education</HashLink>
          </li>
          <li className='grow-ul a-tag'>
            <HashLink smooth to="/#contact">Contact Us</HashLink>
          </li>


        </ul>

        <div className="cv">
          <button>Hire me</button>
        </div>
      </nav>

    </>
  )
}

export default Navbar