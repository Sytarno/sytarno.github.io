import anime, { running } from "animejs";
import React, { useState } from "react";
import "./Bio.css";

import { BsChevronRight } from "react-icons/bs";

import { Spring, Transition, animated, useSpring } from "react-spring";
import { evanImg } from "../../img/index";

/*this was intended for a sliding arrow animation,
but I ended up not pursuing it further (for now).*/
const WidthContent = ({ clicks, param }) => {
  /*
  width: 40%;
  left: 30%;
  */
  const springStyle = useSpring({});
  return (
    <>
      <animated.div
        id="main-head-text"
        className={clicks > param ? "animL" : ""}
        style={springStyle}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-10">
              <a href="#bio" to="bio" smooth={true}>
                {clicks > param - 1 ? "Hi! I'm Evan." : "Hi! I'm Evan."}
              </a>
            </div>

            <div className={"col-xl-2 chevron"}>
              <BsChevronRight className="svg" size="70"></BsChevronRight>
            </div>
          </div>
        </div>
      </animated.div>
    </>
  );
};

const Heading = ({ hide, setHidden, setVis }) => {
  const [clicks, setClicks] = useState(0);
  const check = 0;
  return (
    <div
      id="main-head"
      className={"text-center noselect"}
      onClick={() => {
        setClicks(clicks + 1);

        if (clicks > check - 1) {
          setHidden(true);
          setTimeout(function () {
            setVis(false);
          }, 1000);
        }
      }}
    >
      <WidthContent clicks={clicks} param={check} />
    </div>
  );
};

const RoundedSkill = ({ text }) => {
  return <div className="box-rounded">{text}</div>;
};

const skills = [
  "React",
  "Python",
  "p5.js",
  "Processing",
  "C#",
  "Java",
  "PIL",
  "NLTK",
  "Wavelink",
];

const About = ({ unhide }) => {
  return (
    <div className={"description-area" + (unhide ? " blurE" : "")}>
      <div className="description">
        <div className={"container-fluid"}>
          <div className={"row expand" + (unhide ? " animE" : "")}>
            <div className="col-xl-8">
              <div className="description-text">
                {"\t"}I love designing experiences. Whether it be through
                animation, UI/UX, or software, I adore simplicity and sleekness.
                {/*</div>

                My
                meticulous nature forced me out of my comfort zone. Passion convinced me to diversify my skills.

              <div className="description-text">*/}
                {"\t"}I'm always in a constant flux—tinkering with game scripts
                as a child, breathing life into a multi-purpose Discord bot, and
                now becoming a front-end developer.
              </div>
            </div>
            <div className="col-xl-1">
              <div className="line-bio v2"></div>
            </div>
            <div className="col-xl-3 justify-content-center">
              <img className="pfp pad" src={evanImg.default}></img>
            </div>
          </div>
          <div className={"row pad" + (unhide ? " animE" : "")}>
            <div className="wide-text">
              languages/modules I've worked with recently:
            </div>
            <div className="line-bio v1"></div>
          </div>
          <div className={"row" + (unhide ? " wipeE" : "")}>
            {skills.map((name) => (
              <RoundedSkill text={name} />
            ))}
          </div>
          <div className={"row expand" + (unhide ? " animE" : "")}>
            Projects
          </div>
        </div>
      </div>
    </div>
  );
};

const Bio = () => {
  const [hide, setHidden] = useState(false); //false default
  const [visible, setVis] = useState(true);
  return (
    <section id="bio">
      {visible ? (
        <Heading hide={hide} setVis={setVis} setHidden={setHidden}></Heading>
      ) : (
        <></>
      )}
      {hide ? <About unhide={hide}></About> : <></>}
    </section>
  );
};

export default Bio;
