import '../styles/Services.css'

import chip from '../images/3d-design.png'
import mech from '../images/prototype.png'

function Services() {
  return (
    <div className="services">
      <div className="header">
        <h2>Our Services</h2>
        <p>Provide secure and quality services</p>
      </div>

      <div className="boxes">

        <div className="box design">
          <img src={chip} alt="" />
          <h3>Mechanical 3D designing</h3>
          <p>Mechanical 3D design embodies the pinnacle of precision engineering and innovation, seamlessly blending artistry with functionality to craft intricate structures and mechanisms in three-dimensional space. At its core, this discipline transcends traditional design boundaries, offering a transformative approach to conceptualization, prototyping, and manufacturing across various industries.</p>
        </div>

        <div className="box prototype">
          <img src={mech} alt="" />
          <h3>Prototyping</h3>
          <p>Prototyping is more than just a process; it's a mindset—a mindset that embraces uncertainty, creativity, and possibility. It's a challenge to the human capacity for innovation and the limitless potential of the human spirit. As we stand on the precipice of a new era of discovery, let us embrace the power of prototyping and unlock the boundless possibilities that lie ahead.</p>
        </div>

      </div>
    </div>
  )
}

export default Services
