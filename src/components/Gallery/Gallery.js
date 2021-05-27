import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { alignImage } from "../../img";

const projects = [
  {
    name: "Self-aligning space",
    image: alignImage,
  },
];

const Box = (props) => {
  const tiles = props.obj.map((item, index) => {
    return (
      <div className="tile">
        <img src={item.image.default} class="center"></img>
      </div>
    );
  });
  return <div>{tiles}</div>;
};

const Gallery = () => {
  return (
    <section id="gallery">
      <div class="container">
        <div class="row">
          <Box text="ok" obj={projects}></Box>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
