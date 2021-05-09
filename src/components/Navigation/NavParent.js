import React from "react";
import "./NavParent.css";
import {NightModeButton} from "../assets";

const NavButton = ({text, destination}) => {
  return (
    <div className="nav-btn">
        <a href = {"#"+destination} className="nav-btn-text">
        {text}
        </a>
    </div>
  );
}

const NavParent = ({nightMode, setNightMode}) => {
  return (
    <div className = "nav-parent noselect"> 
      <NavButton text = "Info" destination = "info-section"/>
      <NightModeButton nightMode = {nightMode} setNightMode = {setNightMode}/>
    </div>
  );
};

export default NavParent;
