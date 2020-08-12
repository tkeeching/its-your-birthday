import React, { useRef, useEffect, useState } from 'react';
import { 
  Switch, 
  Route,
  useParams 
} from "react-router-dom";
import './App.css';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import _ from 'lodash';

function Name() {
  let { name } = useParams();
  let line0 = useRef(null);
  
  useEffect(() => {
    let tl0 = new TimelineLite({ delay: 1 })
    tl0.from(line0, 1.3, {y: 2000, ease: Power3.easeOut})
  }, [])

  return <h1 ref={el => line0 = el}>Hello {_.capitalize(name)},</h1>
}

function App() {
  const [l1, setL1] = useState('It\'s your birthday!');
  const [l2, setL2] = useState('Hope that you look as cute as I am as the day goes by.');
  const [l3, setL3] = useState('- Yours beloved, 👶');

  let container = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  
  useEffect(() => {
    let tl = new TimelineLite({ delay: 2 })
    TweenMax.to(container, 0, {css: {visibility: "visible"}})
    tl.from(line1, 1.3, {x: -2000, ease: Power3.easeOut})
      .from(line2, 1.3, {x: 2000, ease: Power3.easeOut})
      .from(line3, 1.8, {y: -2000, scale: 6, ease: Power3.easeOut});
  }, [])
  

  return (
    <div className="App pyro" ref={el => container = el}>
      <div className="before"></div>
      <Switch>
        <Route exact path="/c/:name">
          <Name />
          <input ref={el => line1 = el} onChange={ e => setL1(e.target.value) } value={l1} />
          <textarea ref={el => line2 = el} onChange={ e => setL2(e.target.value) } value={l2} rows="4" />
          <input ref={el => line3 = el} onChange={ e => setL3(e.target.value) } value={l3} />
        </Route> 
        <Route exact path="/:name">
          <Name />
          <h1 ref={el => line1 = el}>It's</h1>
          <h1 ref={el => line2 = el}>your</h1>
          <h1 ref={el => line3 = el}>birthday!</h1>
        </Route> 
        <Route exact path="/">
          <h1 ref={el => line1 = el}>It's</h1>
          <h1 ref={el => line2 = el}>your</h1>
          <h1 ref={el => line3 = el}>birthday!</h1>

        </Route>
      </Switch>
      <div className="after"></div>
    </div>
  );
}

export default App;
