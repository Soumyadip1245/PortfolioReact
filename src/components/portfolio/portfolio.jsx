import React from 'react';
import './portfolio.css';
import Image from '../../assests/DreamBean.png';

const portfolio = () => {
  return (
    <main id="portfolio">
      <div className="portfoliocontainer">
        <div className="portfolioheader">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolioprojects">
          <div className="projectgrid">
            <iframe src="https://www.youtube.com/embed/5TZOY_ZNX34?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <iframe src="https://dastheatre-22f06.firebaseapp.com/welcome" title="Website preview"></iframe>

          </div>
        </div>
      </div>
    </main>
  );
};

export default portfolio;
