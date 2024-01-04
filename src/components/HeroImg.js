import "./HeroImgStyles.css";
import React from "react";
import InrroImg from '../assets/intro-bg.jpg'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask" >
        <img className="intoimg" src={InrroImg} alt="InrroImg" />
      </div>
      <div className="content" >
        <p>HI, I AM A FREELANCER.</p>
        <h1>React Developer</h1>
        <div>
          <Link to='/project' className="btn">Project</Link>
          <Link to='/contact' className="btn">Contact</Link> 
        </div>
      </div>
  </div>
  )
  
};

export default HeroImg;
