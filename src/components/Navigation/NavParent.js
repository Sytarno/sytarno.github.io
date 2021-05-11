import React from "react";
import "./NavParent.css";
import {NightModeButton} from "../assets";
import * as Scroll from "react-scroll";

var Link = Scroll.Link;

const NavButton = ({text, destination}) => {
  return (
    <div className="nav-btn">
        <Link href = {"#"+destination} smooth = {true} className="nav-btn-text" to={destination}>
        {text}
        </Link>
    </div>
  );
}

const NavParent = ({nightMode, setNightMode}) => {
  return (
    <div className = "nav-parent noselect"> 
      <NavButton text = "Info" destination = "bio"/>
      <NightModeButton nightMode = {nightMode} setNightMode = {setNightMode}/>
    </div>
  );
};

export default NavParent;
