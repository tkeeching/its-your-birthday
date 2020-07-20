import React, { useRef, useEffect } from 'react';
import { 
  Switch, 
  Route,
  useParams 
} from "react-router-dom";
import './App.css';
import { TweenMax, TimelineLite, Power3 } from 'gsap';

function Name() {
  const { name } = useParams();
  let line0 = useRef(null);
  let tl0 = new TimelineLite({ delay: 1 })

  useEffect(() => {
    tl0.from(line0, 1.3, {y: 2000, ease: Power3.easeOut})
  })

  return <h1 ref={el => line0 = el}>Hello {name},</h1>
}

function App() {
  let container = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let tl = new TimelineLite({ delay: 2 })

  useEffect(() => {
    TweenMax.to(container, 0, {css: {visibility: "visible"}})
    tl.from(line1, 1.3, {x: -2000, ease: Power3.easeOut})
      .from(line2, 1.3, {x: 2000, ease: Power3.easeOut})
      .from(line3, 1.8, {y: -2000, scale: 6, ease: Power3.easeOut});
  })
  

  return (
    <div className="App pyro" ref={el => container = el}>
      <Switch>
        <Route path="/:name">
          <Name />
          <h1 ref={el => line1 = el}>It's</h1>
          <h1 ref={el => line2 = el}>your</h1>
          <h1 ref={el => line3 = el}>birthday!</h1>
          <div className="before"></div>
          <div className="after"></div>
        </Route> 
        <Route path="/">
          <h1 ref={el => line1 = el}>It's</h1>
          <h1 ref={el => line2 = el}>your</h1>
          <h1 ref={el => line3 = el}>birthday!</h1>
          <div className="before"></div>
          <div className="after"></div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
