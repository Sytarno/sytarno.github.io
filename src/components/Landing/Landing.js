import React, { useState, useEffect } from "react";
import "./Landing.css";
import anime from 'animejs'

import Particles from "react-particles-js";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

const particleParams = (nightMode) => {
  return {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
        },
      },
      size: {
        value: 1.5 * (0.2, 0.5, 0.8, 1),
      },
      color: {
        value: nightMode ? "#ffffff" : "#000000",
      },
      line_linked: {
        enable: false,
      },
      move: {
        direction: "bottom",
        out_mode: "out",
        speed: 1 * (0.1, 0.5, 0.1, 1),
      },
      opacity: {
        value: 1,
      },
    },
    /*interactivity: {
      modes: {
        remove: {
          particles_nb: 10,
        },
      },
    },*/
  };
};

const Slide = ({ nightMode, setNightMode }) => {
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

const Landing = ({ nightMode, setNightMode }) => {
  const [anim, toggle] = useState(1);
  return (
    <section id="landing-section">
      <Particles params={particleParams(nightMode)} />
      <div
        onClick={() => setNightMode(!nightMode)}
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
