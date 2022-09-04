import React from 'react'
import './App.css'
import Mode from './components/mode/Mode'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <>
    <Mode />
    <Header />
    <Navbar />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App