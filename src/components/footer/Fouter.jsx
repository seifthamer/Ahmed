import React from 'react'
import './Fouter.css'
import avatar from '../../images/Layer_1.svg'
import fac from '../../images/f.svg'
import instag from '../../images/insta.svg'
import yahoo from '../../images/waths.svg'
import wats from '../../images/yahou.svg'

const Fouter = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="left">
                <img className="footerLogo" src={avatar} alt="logo" />
                <h3>+216 00 000 000</h3>
                <h3>Location Location Location</h3>
                <h3>Contact@gmail.com</h3>
                <div className="icons">
                    <a className="icon" href=""><img src={fac} alt=""/></a>
                    <a className="icon" href=""><img src={instag} alt=""/></a>
                    <a className="icon" href=""><img src={yahoo} alt=""/></a>
                    <a className="icon" href=""><img src={wats} alt=""/></a>
            </div>
        </div>
        <div className="medium">
          <h2>Company</h2>
            <ul className="footerlinks">
                 <h4  className="footerlink" href="#">Home</h4>
                 <h4 className="footerlink"  href="#">About us</h4>
                 <h4 className="footerlink"  href="#">Services</h4>
                 <h4 className="footerlink"  href="#">Projects</h4>
                 <h4 className="footerlink"  href="#">Blogs</h4>
            </ul>
        </div>
        <div className="right">
          <h2>Terms & Conditions </h2>
          <h4>Cookies policy</h4>
          <h4>Privacy Policy</h4>
          <h4>General terms and conditions</h4>
        </div>
      </div>

        <h2 className="rights">All rights reserved 2023</h2>
    </div>
  )
}

export default Fouter