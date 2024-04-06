import '../styles/About.css'

import about1 from '../images/teamWork.png'
import about2 from '../images/client.png'

function About() {
  return (
    <div className="about">
      <div className="about-section">

        <h2>About Us</h2>

        <div className="container">

          <div className="section">
            <div className="text">
              <h1>Proactive development team</h1>
              <p><strong>FORGONYX</strong> is your trusted partner for engineering sevices with over 5 years of experience in precision solutions and innovation to revelutionize mechanical design. Our team of skilled engineers and designers is passionate about pushing boundaries and creating solutions that exceed expectations .</p>
            </div>
            <img src={about1} alt="" />
          </div>

          <div className="section">
            <div className="text">
              <h1>Company-client relation</h1>
              <p>Every suggestion from the client is considered and included into the finished product in a technically and financially viable manner.</p>
            </div>
            <img src={about2} alt="" />
          </div>

        </div>

      </div>

    </div>
  )
}

export default About