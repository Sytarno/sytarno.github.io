import React from "react";
import "./src-NavParent.css";

const NavButton = ({text, destination}) => {
  return (
    <div className="nav-btn">
        <a href = {"#"+destination} className="nav-btn-text">
        {text}
        </a>
    </div>
  );
}

const NightModeTrigger = () => {
  let nightMode = false;

  const toggleNight = () =>{
      let root = document.documentElement;
      nightMode = !nightMode;

      if(nightMode){
        root.style.setProperty("--main-bg-color", "#080705");
        root.style.setProperty("--main-text-color", "#EFF1F3");
      }else{
        root.style.setProperty("--main-bg-color", "#EFF1F3");
        root.style.setProperty("--main-text-color", "#080705");
      }

      console.log(nightMode)
  }

  return (
    <div onClick = {toggleNight} className = "nav-btn">
      <a className = "night-btn nav-btn-text">
        Night
      </a>
    </div>
  );
}

const NavParent = () => {
  return (
    <div className = "nav-parent"> 
      <NavButton text = "Info" destination = "info-section"/>
      <NightModeTrigger/>
    </div>
  );
};

export default NavParent;
