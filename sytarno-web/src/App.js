import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';
import MyThing from './components/c1'

const ExampleToast = ({ text, children }) => {
  const [show, toggleShow] = useState(false);

  return (
    <>
    { !show && <Button onClick ={() => toggleShow(true)}>Show Toast</Button> }
    <Toast show = {show} onClose = {() => toggleShow(false)}>
      <Toast.Header>
        <strong className = "auto">{ text }</strong>
      </Toast.Header>
      <Toast.Body>{ children }</Toast.Body>
    </Toast>
    </>
  );
};

const ExampleParagraph = ({ text }) => {
  return(
    <>
    <p1>{ text }</p1>
    </>
  );
};

const App = () => (
  <Container classname = "p5">
    <Jumbotron>
      <h1 classname = "header">Welcome</h1>
      <ExampleToast text="go fuck">
        minh your operating systems class sucks
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Jumbotron>

    <Jumbotron>
      <h1 classname = "header">now, another.</h1>
      <ExampleToast text ="my biography:">
        <ExampleParagraph text = "My name is Barry Allen, and I am the fastest man alive. To the outside world, I'm an ordinary forensic scientist, but secretly, with the help of my friends at S.T.A.R. Labs, I fight crime and find other meta-humans like me. I hunted the man who killed my mother, but in doing so, I opened up our world to new threats. And I am the only one fast enough to stop them. I am... The Flash!"></ExampleParagraph>
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Jumbotron>
  </Container>
)

export default App;
