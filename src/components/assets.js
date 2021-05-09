import React from "react";

export const NightModeButton = ({nightMode, setNightMode}) => {
    return (
      <div onClick = {()=>setNightMode(!nightMode)} className = "nav-btn">
        <a className = "night-btn nav-btn-text">
          Night
        </a>
      </div>
    );
  }
