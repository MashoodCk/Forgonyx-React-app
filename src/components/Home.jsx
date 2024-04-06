import '../styles/Home.css'

import homePic from '../images/4351531.png'
import React, { useEffect } from 'react';

function Home() {

  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".object").forEach((move) => {
        const movingValue = parseFloat(move.getAttribute("data-value"));
        const x = (e.clientX * movingValue) / 300;
        const y = (e.clientY * movingValue) / 300;

        move.style.transition = 'transform 0.2s ease';
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener('mousemove', parallax);

    return () => {
      document.removeEventListener('mousemove', parallax);
    };
  }, []);

  return (
    <div className="home">
      
      <div className='main-area'>
        <div className="heading-section">
          <h1>FORGONYX</h1>
          <h2>Rendering the future layer by layer</h2>
        </div>

        <div className="mainPic">
          <img src={homePic} alt="" data-value="3" className="object" />
        </div>


      </div>

      <div className="sub-area">

        <div className="vision data">
          <h3>Vision</h3>
          <p>To deliver the best of class 3-D solutions in the business and establish a reputation as a vital contributor who accomplishes the full range of tasks involved in the design phase of challenging engineering projects.</p>
        </div>

        <div className="mission data">
          <h3>Mission</h3>
          <p>We develop and design 3-D models for visionary engineers to bring unstructured and prototypical ideas to life without engaging in any physical labour through creative and noval rendering for exceptional timely execution.</p>
        </div>
      </div>

    </div>

  )
}

export default Home
