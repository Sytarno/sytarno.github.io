import React, { useState, useEffect } from "react";
import "./Landing.css";
import anime from "animejs/lib/anime.es.js";

import Particles from "react-particles-js";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

const particleParams = (nightMode) => {
  return {
    particles: {
      size: {
        value: 1 * (0.2, 0.5, 0.8, 1),
      },
      color: {
        value: nightMode ? "#ffffff" : "#000000",
      },
      line_linked: {
        enable: false,
      },
      move: {
        direction: "bottom",
        speed: 0.5,
      },
      opacity: {
        value: 1,
      },
    },
  };
};

const Anim = ({ nightMode, setNightMode }) => {
  const animationRef = React.useRef(null);
  const [active, setActive] = useState(true);

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

  const toggleNight = () => {
    if (active) {
      setNightMode(!nightMode);
      //setActive(false);
      //setTimeout(() => setActive(true), 3000);
    }
  };

  return (
    <div
      onClick={() => toggleNight()}
      id="main-title"
      className="text-center noselect"
    >
      <h1 id="main-title-text">Evan Nguyen</h1>
      <span class="line l1"></span>
    </div>
  );
};

const Landing = ({ nightMode, setNightMode }) => {
  const [anim, toggle] = useState(1);
 /*
  React.useEffect(() => window.addEventListener("scroll", listenToScroll), []);
  
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = 200 * (winScroll / height);
    const threshold = 100;
    if (scrolled > threshold) {
      document
        .getElementById("main-title")
        .style.setProperty("position", "absolute");
        document
        .getElementById("main-title")
        .style.setProperty("top", "130vh")
    } else {
      document
        .getElementById("main-title")
        .style.setProperty("position", "fixed");
      document
        .getElementById("main-title")
        .style.setProperty("top", "40%")
    }
  };
*/
  return (
    <section id="landing-section">
      <Anim nightMode={nightMode} setNightMode={setNightMode} />
      <Particles params={particleParams(nightMode)} />
    </section>
  );
};

export default Landing;
