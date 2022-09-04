import React from 'react'
import './skills.css'
const skills = () => {
  return (
    <section2 id="skills">
  <div className="skillscontainer">
    <div className="skillsheader">
      <h1>Skills</h1>
    </div>
    <div className="skillsfrontend">
      <h1>Frontend</h1>
      <div className="skillscard">
        <p>Html</p>
        <div className="scontainer">
          <div className="skills html"><span>85%</span></div>
        </div>
        <p>Css</p>
        <div className="scontainer">
          <div className="skills css"><span>80%</span></div>
        </div>
        <p>Bootstrap</p>
        <div className="scontainer">
          <div className="skills bootstrap"><span>70%</span></div>
        </div>
        <p>Reactjs</p>
        <div className="scontainer">
          <div className="skills reactjs"><span>50%</span></div>
        </div>
      </div>
    </div>
    <div className="skillsbackend">
      <h1>Backend</h1>
      <div className="skillscard">
        <p>Java</p>
        <div className="scontainer">
          <div className="skills java"><span>88%</span></div>
        </div>
        <p>C</p>
        <div className="scontainer">
          <div className="skills c"><span>80%</span></div>
        </div>
        <p>C++</p>
        <div className="scontainer">
          <div className="skills cplus"><span>85%</span></div>
        </div>
        <p> Java Enterprise Edition</p>
        <div className="scontainer">
          <div className="skills jee"><span>85%</span></div>
        </div>
        <p> Spring Framework</p>
        <div className="scontainer">
          <div className="skills spring"><span>88%</span></div>
        </div>
        <p> MySQL</p>
        <div className="scontainer">
          <div className="skills mysql"><span>75%</span></div>
        </div>
        <p> Java Enterprise Edition</p>
        <div className="scontainer">
          <div className="skills jee"><span>85%</span></div>
        </div>
      </div>
    </div>
  </div>
</section2>
  )
}

export default skills