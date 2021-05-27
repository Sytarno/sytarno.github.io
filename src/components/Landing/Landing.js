import React, { useState, useEffect } from "react";
import "./Landing.css";
import anime from 'animejs'

import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

//in hindsight, css tranform would have been better. 
//however, anime.js is most likely better for advanced scenarios.
const Slide = () => {
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    animationRef.current = anime.timeline({ loop: false }).add({
      targets: ".l1",
      scale: [0, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 4000,
      delay: 100,
    });
  });

  return null;
};

const Landing = ({ nightMode, setNightMode}) => {
  return (
    <section id="landing-section">
      <div
        onClick={() => {setNightMode(!nightMode);}}
        id="main-title"
        className="text-center noselect"
      >
        <h1 id="main-title-text">Evan Nguyen</h1>
        <span className="line l1"></span>
      </div>
      <Slide nightMode={nightMode} setNightMode={setNightMode} />
    </section>
  );
};

export default Landing;
