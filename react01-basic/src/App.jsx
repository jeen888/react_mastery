// import { map, filter, reduce, go, pipe, L, C } from "fxjs";
// import * as _ from "fxjs"; // too heavy
// import { go, map } from "fxjs";
// import { useState } from "react";
// import FrontComp from "./components/FrontComp";
// import BackComp from "./components/BackComp";
import hereLogo from './assets/hero.png';

function App() {
  const myStyle = { 
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Verdana'
  };
  const iWidth = {maxWidth: '300px'};
  return (<>
    <h2>React-Style</h2>
    <ol>
      <li style={{color: 'red'}}>프론트엔드</li>
      <ul>
        <li><img src='/img/vite.svg' style={iWidth} /></li>
        <li><img src={hereLogo} style={iWidth} /></li>
        <li><img src='http://nakja.co.kr/images/reactjs.png' style={iWidth} /></li>
      </ul>
      <li className='backEnd'>백엔드</li>
      <ul>
        <li id='backEndSub'>Java</li>
        <li className='warnings'>Oracle</li>
        <li style={myStyle}>JSP</li>
        <li>Spring boot</li>
      </ul>
    </ol>
  </>)
}

export default App;