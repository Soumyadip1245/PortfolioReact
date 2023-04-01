import React from 'react'
import './about.css'
import Image from '../../assests/Untitled_design__13_-removebg-preview.png'
const about = () => {
  return (
    <section id="about">
      <div className="aboutcontainer">
        <div className="aboutheader">
          <h1>About</h1>
        </div>
        <div className="aboutimage">
          <div className="about-image">
            <img src={Image} />
          </div>
        </div>
        <div className="abouttext">
          <p>I have knowledge of frameworks like React and Angular. Furthermore, I can quickly adapt to new technologies, which is crucial in constantly evolving industry. With my skills, and ability to learn quickly, I would make a valuable addition to any team looking for a MERN or MEAN developer.</p>
          {/* <a href='#'>Download CV</a> */}
        </div>
      </div>
    </section>
  )
}

export default about