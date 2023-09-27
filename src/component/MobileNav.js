import React from 'react'
import { HashLink } from "react-router-hash-link";
import "./style/mobileNav.css"

const MobileNav = () => {
    return (
        <nav className="mobile-nav">
            <HashLink className='bloc-icon' smooth to="/">
                <img src="../image/home-angle.svg" alt="" />
            </HashLink>

            <HashLink className='bloc-icon' smooth to="/#project" >
                <img src="../image/project.svg" alt="" />
            </HashLink>

            <HashLink className='bloc-icon' smooth to="/#education" >
                <img src="../image/education.svg" alt="" />
            </HashLink>

            <HashLink className='bloc-icon' smooth to="/#certificates" >
                <img src="../image/certificate.svg" alt="" />
            </HashLink>

            <HashLink className='bloc-icon' smooth to="/#contact" >
                <img src="../image/contact.svg" alt="" />
            </HashLink>
        </nav>
    )
}

export default MobileNav