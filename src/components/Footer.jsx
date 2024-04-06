import '../styles/Footer.css'

import adnoc1 from '../images/Adnoc.PNG'
import adnoc2 from '../images/Adnoc2.PNG'
import bayotech1 from '../images/bayotech.png'
import iocl2 from '../images/iocl2.PNG'
import vessel from '../images/vessel.png'
import liqiude1 from '../images/liquide1.png'
import air2 from '../images/air 2.png'
import air3 from '../images/air 3.png'
import stanchion1 from '../images/stanchion1.PNG'

const MovingImagesRow = () => {

  const images = [
    adnoc1, adnoc2, vessel, bayotech1, iocl2, liqiude1, air2, air3, stanchion1,
    adnoc1, adnoc2, vessel, bayotech1, iocl2, liqiude1, air2, air3, stanchion1,
    adnoc1, adnoc2, vessel, bayotech1, iocl2, liqiude1, air2, air3, stanchion1,
    adnoc1, adnoc2, vessel, bayotech1, iocl2, liqiude1, air2, air3, stanchion1,
    adnoc1, adnoc2, vessel, bayotech1, iocl2, liqiude1, air2, air3, stanchion1,

  ];

  return (
    <div className="footer">
      <div className="animation">
        {images.map((image, index) => (
          <img src={image} key={index} alt='project insights' />
        ))}

      </div>

      <div className="end">
        <p>Copyright © 2024. All Rights Reserved by <strong style={{ color: '#05974f' }}>FORGONYX</strong></p>
      </div>
    </div>

  );
};

export default MovingImagesRow;
