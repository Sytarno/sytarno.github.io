import anime, { running } from "animejs";
import React, { useState } from "react";
import "./Bio.css";

import { BsChevronRight } from "react-icons/bs";

const Heading = ({ hide, setHidden }) => {
  return (
    <h1
      className={"middle text-center" + (hide ? " sLeft" : "")}
      onClick={() => {
        setHidden(true);
        console.log("test");
      }}
    >
      Hi! I'm Evan.
      <BsChevronRight className={"chevron"} size="50"></BsChevronRight>
    </h1>
  );
};

const Bio = () => {
  const [hide, setHidden] = useState(true); //false default
  return (
    <section id="bio">
      <Heading hide={hide} setHidden={setHidden}></Heading>
    </section>
  );
};

export default Bio;
