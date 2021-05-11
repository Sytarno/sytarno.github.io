import anime, { running } from "animejs";
import React from "react";
import "./Bio.css";

function runAnim() {
  anime({
    targets: ".box l1",
    scale: [0, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 4000,
    delay: 100,
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.7) {
        runAnim();
        observer.disconnect();
      }
    });
  },
  {
    threshold: 0.7,
  }
);

var element = document.getElementById("bio")

const Bio = () => {
  return (
    <section id="bio">
      <div id="namespace" className="text-center">
        How is this working?
        <span className="box"></span>
      </div>
    </section>
  );
};

export default Bio;
