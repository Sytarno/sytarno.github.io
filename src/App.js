import React from "react";

import Landing from "./components/Landing/src-Landing";
import NavParent from "./components/Navigation/src-NavParent";

import "./App.css";

const App = () => (
  <>
    <div id="root">
      <NavParent />
      <Landing />
    </div>
  </>
);

export default App;
