import React, { useEffect, useState } from 'react'
import './header.css'
import Image from '../../assests/Untitled_design__11_-removebg-preview.png'
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>S<span>D</span></h1>
        <h1>S<span>D</span></h1>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#portfolio"><li>Portfolio</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>

      </div>
      <div className="sidetext">
        <h1>Hello</h1>
        <h2><span className="text_1">I'M <small>SOUMYADIP DAS</small></span><span className="text_2">a Full Stack <small id="developer">Developer</small></span></h2>

        <p></p>
        <a Style={"margin-top: 5rem"} href="https://www.linkedin.com/in/soumyadip124578/">LinkedIN</a>
      </div>
      <div className="sideimage">
        <div className="sideimage-image">
          <img src={Image} />
        </div>
      </div>
    </div>
  )
}

export default Header