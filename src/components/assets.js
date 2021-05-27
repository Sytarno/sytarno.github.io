import React from "react";
import { HiMoon } from "react-icons/hi";
import { IoSunny } from "react-icons/io5";

export const NightModeButton = ({nightMode, setNightMode}) => {
  return (
      <div onClick = {()=>{ setNightMode(!nightMode); }} className = {"nav-btn" + (nightMode ? " icon-light" : " icon-dark")}>
        <a className = {"night-btn nav-btn-text icon"}>
          { nightMode ? <IoSunny/> : <HiMoon/> }
        </a>
      </div>
    );
  }

var nightMode = false;

export const updateColors = () => {
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