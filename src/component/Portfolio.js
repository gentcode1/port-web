import React from 'react';
import { Framer } from "./Framer.tsx";
import "./Portfolio.css"
import PortfolioCard from "./PortfolioCard"
const Portfolio=()=>{
return (
  <div className="testimonial">
    <div className="testimonial__title">
      <h1>Portfolio</h1>
    </div>
    <div className="tesimonial__content">
      <div className="testimonial__right">
        <Framer />
      </div>
      <div className="testimonial__left">
<h4>some of my work</h4>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />

      </div>
    </div>
  </div>
);
}
export default Portfolio;
