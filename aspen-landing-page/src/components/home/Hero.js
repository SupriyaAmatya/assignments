import React from 'react';
import heroImage from '../../assets/images/Bitmap.png';

const Hero = () => {
  return (
    <div className="hero__section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text__wrapper">
            <p className="hero-text">Connecting people, processes, and technologies to solve your drug discovery challenges</p>
            <div className="btn white hero-btn">
              <a href="/">find out more</a>
            </div>
          </div>
          <div className="hero-image__wrapper">
            <img src={heroImage} alt="hero-img" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero
