import React, { useState, useEffect } from 'react';
import './App.css';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input type="button" value="toggle class" onClick={() => {
        classShow ? setClassShow(false) : setClassShow(true);
      }}></input>
      <input type="button" value="toggle func" onClick={() => {
        funcShow ? setFuncShow(false) : setFuncShow(true);
      }}></input>
      {classShow ? <ClassComp initNumber={0} /> : null}
      {funcShow ? <FuncComp initNumber={0} /> : null}
    </div>
  );
}

export default App;
