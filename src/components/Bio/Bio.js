import anime, { running } from "animejs";
import React, { useState } from "react";
import "./Bio.css";

import { BsChevronRight } from "react-icons/bs";
import { evanImg } from "../../img/index";

const Heading = ({ hide, setHidden }) => {
  return (
    <h1
      className={"middle text-center" + (hide ? " wipeL" : "")}
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

const About = ({hide}) => {
  return (
    <div className = {hide ? "wipeE": ""}>
      <img className = "pfp" src={evanImg.default}></img>
      <div className="text-center">
        I'm a computer science major from the Bay Area.
      </div>
    </div>
  );
};

const Bio = () => {
  const [hide, setHidden] = useState(false); //false default
  return (
    <section id="bio">
      <Heading hide={hide} setHidden={setHidden}></Heading>
      {hide ? <About hide={hide}></About> : <></>}
    </section>
  );
};

export default Bio;
