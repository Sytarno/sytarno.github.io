"use client";

import React from "react";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch: Sketch = p5 => {
    p5.setup = () => p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);

    p5.draw = () => {
        p5.background('#1D1D1D');
        p5.normalMaterial();
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.plane(100);
        p5.pop();
    };

    p5.windowResized = () => {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    }
};

export default function Background() {
    return (
        <NextReactP5Wrapper sketch={sketch} />
    )
}