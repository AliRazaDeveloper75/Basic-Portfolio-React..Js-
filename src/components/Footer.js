import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer-container">
        <div className="left" >
          <div className="location " >
            <FaHome size={20} style={{color:"white", marginLeft:"2rem"}} />
              <div>
                <p>Model Colony Gulberg-iii, Lahore.</p>
                <p>Pakistan.</p>
              </div>
          </div>
          <div className="phone">
            <h4> <FaPhone size={20} style={{color:"white", marginLeft:"2rem", marginRight:"2rem" }} />
            +92304-3309005 </h4>
          </div>
          <div className="email">
            <h4> <FaMailBulk size={20} style={{color:"white", marginLeft:"2rem", marginRight:"2rem", marginTop:"0.5rem"}} />
            Ali_Raza_Developer@outlook.com</h4>
          </div>
        </div>
        <div className="right" > 
          <h4>About The Company</h4>
          <p>This company is No.1 of the world. Its ranking in top 5 Companies. Contact us to grow your bussiness.</p>
          <div className="social" >
            <FaFacebook size={20} style={{color:"white", marginLeft:"2rem"}} />
            <FaTwitter size={20} style={{color:"white", marginLeft:"2rem"}} />
            <FaLinkedin size={20} style={{color:"white", marginLeft:"2rem"}} />
          </div>
        </div>
      

      </div>
    </div>
    </>
  )
  
};

export default Footer;
