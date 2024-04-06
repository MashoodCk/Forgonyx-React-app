import "../styles/Navbar.css"

import logo from '../images/forgo.jpeg'

import { useState, React } from 'react';

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    return setToggle(!toggle);
  }

  const closeMenu = () => {
    setToggle(false)
  }


  return (
    <nav className="navbar">

      {/* <div className="navLogo"> */}
        <img src={logo} className="logos" alt="logo" />

      {/* </div> */}


      <div className={`links ${toggle ? "showMenu" : ""}`} >
        <Link to="home" spy={true} smooth={true} duration={1000} offset={-100} className="link" onClick={closeMenu}>Home</Link>
        <Link to="services" spy={true} smooth={true} duration={1000} offset={-150} className="link" onClick={closeMenu}>Services</Link>
        <Link to="projects" spy={true} smooth={true} duration={1000} offset={-150} className="link" onClick={closeMenu}>Projects</Link>
        <Link to="about" spy={true} smooth={true} duration={1000} offset={-130} className="link" onClick={closeMenu}>About</Link>
        <Link to="enquire" spy={true} smooth={true} duration={1000} offset={-150} className="link" onClick={closeMenu}>Enquire</Link>
        <Link to="contact" spy={true} smooth={true} duration={1000} offset={-150} className="link" onClick={closeMenu}>Contact</Link>
      </div>

      <div className="tog" onClick={handleToggle}>{toggle ? <MdClose size={25} /> : <FiMenu size={25} />}</div>

    </nav >

  )
}

export default Navbar
