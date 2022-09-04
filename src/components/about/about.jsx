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
        <img src={Image}/>
      </div>
    </div>
    <div className="abouttext">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quae accusantium rerum vero fuga. Tempora, officia fugit quisquam totam libero mollitia sit alias vero consectetur omnis natus, nulla, quod voluptatem exercitationem error praesentium. Expedita perferendis porro quibusdam natus voluptatem qui maiores distinctio ut excepturi quaerat eaque corporis, cum nemo quasi.</p>
      <a href='#'>Download CV</a>
    </div>
  </div>
</section>
  )
}

export default about