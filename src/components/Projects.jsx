import '../styles/Projects.css'

import Adnoc from '../images/Adnoc.PNG'
import liquide1 from '../images/liquide1.png'
import stanchion1 from '../images/stanchion1.PNG'
import iocl1 from '../images/iocl2.PNG'
import bayotech from '../images/bayotech.png'


function Projects() {

  return (
    <div className="projects">

      <h2>Our Projects</h2>
      <p className='para'>With a wealth of knowledge and expertise acquired over the years, Forgonyx is best suited to provide a diverse array of services in the 3-D modelling space and is capable of executing industrial projects.</p>
      <p className='para'>Below are the projects completed since our inception:</p>

      <div className="project liquide">
        <div className="project_text">
          <h3>Hydrogen Refueling System</h3>
          <p><strong>Client: </strong>Air Liquide</p>
          <p><strong>Location: </strong>France</p>
        </div>
        <img src={liquide1} alt="Hydrogen refueling System" />
      </div>

      <div className="project stanchion">
        <img src={stanchion1} alt="Hydrogen refueling Stanchion" />
        <div className="project_text">
          <h3>Hydrogen Refueling Stanchion</h3>
          <p><strong>Client: </strong>Fluitron</p>
          <p><strong>Location: </strong>USA</p>
        </div>
      </div>

      <div className="project iocl">
        <div className="project_text">
          <h3>Hydrogen Refueling System</h3>
          <p><strong>Client: </strong>Fluitron</p>
          <p><strong>Location: </strong>India</p>
        </div>
        <img src={iocl1} alt="Hydrogen refueling System" />
      </div>

      <div className="project bayotech">
        <img src={bayotech} alt="Containerised Hydrogen Compression System" />
        <div className="project_text">
          <h3>Containerised Hydrogen Compression System</h3>
          <p><strong>Client: </strong>BayoTech</p>
          <p><strong>Location: </strong>USA</p>
        </div>
      </div>

      <div className="project adnoc">
        <div className="project_text">
          <h3>Temporary Refuge Module</h3>
          <p><strong>Client: </strong>East wind safety equipment and services</p>
          <p><strong>Location: </strong>UAE</p>
        </div>
        <img src={Adnoc} alt="Self sustaining safety container" className='hydroImage' />
      </div>

    </div>
  )
}

export default Projects
