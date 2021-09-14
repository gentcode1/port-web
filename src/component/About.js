import React from 'react';
import './About.css'
import AboutImage from '../assets/images/remy.jpg'
import { Spring, animated } from "react-spring";
import CountUp from 'react-countup';
const About=()=>{
return (
  <div className="about">
    <div className="about__title">
      <h1>ABOUT ME</h1>
    </div>
    <Spring
      from={{ opacity: 0, marginTop: -5000 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div className="about__container" style={props}>
          <div className="about__info" style={aboutstyle}>
            <p>
              I'am Remy IRADUKUNDA an artist who perfoms live Painting ,scruptor
              and mirroring
            </p>
            <div className="about__info__up">
              <div className="about__info__left">
                <p>
                  <strong>Names: </strong>
                  <span>IRADUKUNDA Remy</span>
                </p>
                <p>
                  <strong>Born: </strong>
                  <span>20/8/1996</span>
                </p>
                <p>
                  <strong>Phone: </strong>
                  <span>+250788834929</span>
                </p>
              </div>
              <div className="about__info__right">
                <p>
                  <strong>Email: </strong>
                  <span>remyiradukunda@gmail.com</span>
                </p>
                <p>
                  <strong>Degree: </strong>
                  <span>Bacheros</span>
                </p>
                <p>
                  <strong>City: </strong>
                  <span>Kigali/RWANDA</span>
                </p>
              </div>
            </div>
            <div className="about__info__down">
              <div className="about__clients">
                <strong>
                  <CountUp end={279} duration={20} />
                </strong>

                <strong> Happy Clients</strong>
                <p>
                  We are so happy that by counting that number of clients has
                  reach out to us and likes what We serve and ready to serve
                  more{" "}
                </p>
              </div>
              <div className="about__projects">
                <strong>
                  <CountUp end={332} duration={20} />
                </strong>

                <strong> Projects</strong>
                <p>
                  We are so happy that by counting that number of clients has
                  reach out to us and likes what We serve and ready to serve
                  more{" "}
                </p>
              </div>
              <div className="about__Awards">
                <strong>
                  {" "}
                  <CountUp end={7} duration={20} />
                </strong>
                <strong> Awards</strong>
                <p>
                  We are so happy that by counting that number of clients has
                  reach out to us and likes what We serve and ready to serve
                  more{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="about__img">
            <img
              src={AboutImage}
              alt=""
              style={{ height: "500px", width: "400px" }}
            />
          </div>
        </div>
      )}
    </Spring>
  </div>
);
}
const aboutstyle = {
  // background: "steelblue",
  color: "lightGray",
  padding: "1.5rem",
};

export default About
