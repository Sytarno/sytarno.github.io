import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";

import Wrapper from "./components/Wrapper/Wrapper";
import Landing from "./components/Landing/Landing";
import NavParent from "./components/Navigation/NavParent";
import Bio from "./components/Bio/Bio";

import "./components/Landing/Landing.css";

import "./App.css";

var nightMode = false;

const updateColors = () => {
  let root = document.documentElement;
  nightMode = !nightMode;

  if (nightMode) {
    root.style.setProperty("--main-bg-color", "#080705");
    root.style.setProperty("--main-text-color", "#EFF1F3");
  } else {
    root.style.setProperty("--main-bg-color", "#EFF1F3");
    root.style.setProperty("--main-text-color", "#080705");
  }
};

const particleParams = (nightMode, amount, size) => {
  return {
    particles: {
      number: {
        value: amount,
        density: {
          enable: true,
        },
      },
      size: {
        value: size,
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
        speed: 1,
      },
      opacity: {
        value: 1,
      },
    },
  };
};

export default function App() {
  const [nightMode, setNightMode] = useState(false);
  useEffect(() => updateColors, [nightMode]);

  return (
    <>
      <div id="root">
        <div className="parallax">
          <div className="parallax__layer parallax__layer--back">
            <Particles params={particleParams(nightMode, 30, 2)} />
          </div>
          <div className="parallax__layer parallax__layer--middle">
            <Particles params={particleParams(nightMode, 20, 2)} />
          </div>
          <div className="parallax__layer parallax__layer--front">
            <Particles params={particleParams(nightMode, 10, 2)} />

            <Landing nightMode={nightMode} setNightMode={setNightMode} />
            <Bio></Bio>
            <NavParent nightMode={nightMode} setNightMode={setNightMode} />
          </div>
        </div>
      </div>
    </>
  );
}

/*
export default function App() {
  const [nightMode, setNightMode] = useState(false);
  useEffect(() => updateColors, [nightMode]);

  return (
    <>
      <div id="root">
        <div className = "parallax">
          <Particles params={particleParams(nightMode, 10, 2)} />

          <Landing nightMode={nightMode} setNightMode={setNightMode} />
          <Bio></Bio>
          <NavParent nightMode={nightMode} setNightMode={setNightMode} />
          </div>
      </div>
    </>
  );
}
*/
