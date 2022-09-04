import React from 'react'
import './portfolio.css'
import Image from '../../assests/DreamBean.png'
const portfolio = () => {
  return (
    <main id="portfolio">
  <div className="portfoliocontainer">
    <div className="portfolioheader">
      <h1>Portfolio</h1>
    </div>
    <div className="portfolioprojects">
      <div className="projectgrid">
        <div className="wgrid1">
          <img src={Image}/>
          <h4>Ecommerce Website</h4>
          <a href="#">Github</a>
          <a href="#">Demo</a>
        </div>
        <div className="wgrid1">
          <img src={Image}/>
          <h4>Ecommerce Website</h4>
          <a href="#">Github</a>
          <a href="#">Demo</a>
        </div>
        <div className="wgrid1">
          <img src={Image}/>
          <h4>Ecommerce Website</h4>
          <a href="#">Github</a>
          <a href="#">Demo</a>
        </div>
        <div className="wgrid1">
          <img src={Image}/>
          <h4>Ecommerce Website</h4>
          <a href="#">Github</a>
          <a href="#">Demo</a>
        </div>
      </div>
    </div>
  </div>
</main>
  )
}

export default portfolio