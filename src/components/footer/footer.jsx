import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <section>
      <footer>
        <div className="footermain">
          <h2>Soumyadip Das</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            {/* <li><a href="#contact">Contact</a></li> */}
          </ul>
          <div className="footeraccounts">
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
          </div>
        </div>
        <hr />
        <p className="footercopyright">All Right Reserved &copy; 2022</p>
      </footer>
    </section>
  )
}

export default footer