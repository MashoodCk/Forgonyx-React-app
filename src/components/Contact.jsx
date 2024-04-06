import '../styles/Contact.css'

import { MdOutlineHeadphones } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

const phoneNumber1 = '+91 6369 000 187';
const phoneNumber2 = '+91 7994 311 802';
const emailAddress = 'info@forgonyx.com'

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <div className="address-section">

        <div className="address">
    
          <div className="phone">
            <MdOutlineHeadphones className='phone-icon' />
            <a className="phone-number" href={`tel:${phoneNumber1}`}>{phoneNumber1} <br />{phoneNumber2}</a>
            {/* <a className="phone-number" href={`tel:${phoneNumber2}`}>{phoneNumber2}</a> */}
          </div>
          <div className="email">
            <MdOutlineMail className='email-icon' />
            <a className="mail-id" href={`mailto:${emailAddress}`}> {emailAddress}</a>
          </div>
          <div className="location">
            <MdOutlineLocationOn className='location-icon' />
            <h6 className='place'>Room NO:2 ,TBI-GEC, Govt Engineering College Thrissur, 680 009</h6>
          </div>
        </div>

        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.14496856269864!2d76.22404878800202!3d10.554152220116965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef0009a46563%3A0x4890953ed5f330c5!2sForgonyx!5e0!3m2!1sen!2sin!4v1711441919800!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: "2%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>
    </div>
  )
}

export default Contact
