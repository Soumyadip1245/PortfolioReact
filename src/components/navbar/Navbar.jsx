import React from 'react'
import './Navbar.css'
import {useState} from 'react'
const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
    <a href = "#" onClick = {() => setActiveNav('#')} className ={activeNav === '#' ? 'active' : ''}><i class="fa-solid fa-house"></i></a>
    <a href = "#about" onClick = {() => setActiveNav("#about")} className= {activeNav === '#about' ? 'active' : ''}><i class="fa-solid fa-user"></i></a>
    <a href = "#skills" onClick = {() => setActiveNav('#skills')} className ={activeNav === '#skills' ? 'active' : ''}><i class="fa-solid fa-laptop-code"></i></a>
    <a href = "#portfolio" onClick = {() => setActiveNav("#portfolio")} className= {activeNav === '#portfolio' ? 'active' : ''}><i class="fa-brands fa-github"></i></a>
    <a href = "#contact" onClick = {() => setActiveNav("#contact")} className= {activeNav === '#contact' ? 'active' : ''}><i class="fa-solid fa-phone"></i></a>
    </nav>
  )
}

export default Navbar