import React, {useRef} from "react";
import "./NavParent.css";
import { NightModeButton } from "../assets";
import { Link, animateScroll as scroll } from "react-scroll";

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
      
      {/*
      <Link
        activeClass="active"
        to="bio"
        spy={true}
        smooth={true}
        className="nav-btn-text"
        offset={-70}
        duration={500}
      >
        {text}
      </Link>
      */}
    </div>
  );
};

const NavParent = ({ nightMode, setNightMode }) => {
  return (
    <div className="nav-parent noselect">
      <NavButton text="Info" destination="bio" />
      <NightModeButton nightMode={nightMode} setNightMode={setNightMode} />
    </div>
  );
};

export default NavParent;
