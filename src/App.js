import React, {useState, useEffect} from "react";

import Wrapper from "./components/Wrapper/Wrapper";
import Landing from "./components/Landing/Landing";
import NavParent from "./components/Navigation/NavParent";
import Bio from "./components/Bio/Bio";

import "./App.css";

var nightMode  = false;

const updateColors = () =>{
  let root = document.documentElement;
  nightMode = !nightMode;

  if(nightMode){
    root.style.setProperty("--main-bg-color", "#080705");
    root.style.setProperty("--main-text-color", "#EFF1F3");
  }else{
    root.style.setProperty("--main-bg-color", "#EFF1F3");
    root.style.setProperty("--main-text-color", "#080705");
  }
}

export default function App() {
  const [nightMode, setNightMode] = useState(false);
  useEffect(()=>updateColors, [nightMode])

  return (
  <>
    <div id="root">
      <Landing nightMode = {nightMode} setNightMode = {setNightMode}/>
      <Bio></Bio>
      <NavParent nightMode = {nightMode} setNightMode = {setNightMode}/>
    </div>
  </>
  )
}
