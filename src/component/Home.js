import React from 'react';
import './Home.css'
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import background from "../assets/images/backgroung3.jpg";

import Typewriter from "typewriter-effect"
import image from '../assets/images/image.jpg'
import Info from '../component/Info'
import MenuComponent from './MenuComponent'
import{Link} from 'react-router-dom'
const Home=()=>{
return (
  <div className="home">
    <header
      className="header"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        
      }}
    >
      <div className="header__right">
        {/* <div className="header__right__options">
          <h2>Home</h2>
        </div>
        <div className="header__right__options">
          <h2>MyIntro</h2>
        </div>
        <div className="header__right__options">
          <h2>Services</h2>
        </div>
        <div className="header__right__options">
          <h2>Testimonial</h2>
        </div>
        <div className="header__right__options">
          <h2>Contact Me</h2>
        </div> */}
        <MenuComponent />
      </div>
      <div className="header__container">
        <div className="header__social">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>

        <div className="header__type">
          <p> Remy IRADUKUNDA</p>
          <Typewriter
             options={{
     strings:["live painter", "scruptor","Murar"],
autoStart:true,
loop:true,

            }}
          />
{/* <Info/> */}
        </div>
       
      </div>
      <div className="bg__bottom"></div>
    </header>
  </div>
);
}
export default Home;
