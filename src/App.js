import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import { Scrollbars } from "react-custom-scrollbars";

import Wrapper from "./components/Wrapper/Wrapper";
import Landing from "./components/Landing/Landing";
import "./components/Landing/Landing.css";
import NavParent from "./components/Navigation/NavParent";
import Bio from "./components/Bio/Bio";
import Gallery from "./components/Gallery/Gallery";

import { updateColors, nightMode } from "./components/assets";

import "./App.css";

const particleParams = (nightMode, amount, size) => {
  return {
    particles: {
      number: {
        value: amount,
        enable: true,
        density: {
          value_area: 2000,
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

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(35, 49, 86, 0.8)",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);

export default function App() {
  const [nightMode, setNightMode] = useState(false);
  useEffect(() => updateColors, [nightMode]);

  return (
    <>
      <div id="root">
        <div className="parallax">
          <div className="parallax__layer parallax__layer--back">
            <Particles params={particleParams(nightMode, 25, 2)} />
          </div>
          <div className="parallax__layer parallax__layer--middle">
            <Particles params={particleParams(nightMode, 25, 2)} />
          </div>
          <div className="parallax__layer parallax__layer--front">
            
            {/*CONTENT*/}
            
            
            <Particles params={particleParams(nightMode, 25, 2)} />

            <Landing nightMode={nightMode} setNightMode={setNightMode} />
            <Bio></Bio>
            {/*<Gallery></Gallery>*/}





          </div>
        </div>
        <NavParent nightMode={nightMode} setNightMode={setNightMode} />
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
