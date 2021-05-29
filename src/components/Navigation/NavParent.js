import React, {useRef} from "react";
import "./NavParent.css";
import { NightModeButton } from "../assets";
import { Link, animateScroll as scroll } from "react-scroll";

import { RiSpaceShipFill } from "react-icons/ri"

const NavButton = ({ text, destination }) => {
  return (
    <div className="nav-btn">
      {
      <a
        href={"#" + destination}
        to={destination}
        smooth={true}
        className="nav-btn-text"
      >
        {text}
      </a>
      }
    </div>
  );
};

const NavParent = ({ nightMode, setNightMode }) => {
  return (
    <div className="nav-parent noselect">
      <NavButton text="About" destination="bio" />
      <NavButton text="Projects" destination="gallery" />
      <NavButton text={<RiSpaceShipFill className="icon"/>} destination="landing-section" />
      <NightModeButton nightMode={nightMode} setNightMode={setNightMode} />
    </div>
  );
};

export default NavParent;
