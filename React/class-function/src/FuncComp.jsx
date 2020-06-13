import React, { useState } from 'react';

function FuncComp(props) {
    const [number, setNumber] = useState(props.initNumber);
    const [time, setTime] = useState((new Date()).toLocaleTimeString());
  
    return (
      <div className="container">
        <h2>function style component</h2>
        <p>Number: {number}</p>
        <p>Time: {time}</p>
        <input type="button" value="random" onClick={
          () => {
            setNumber(Math.random().toFixed(7));
          }
        }></input>
        <input type="button" value="time" onClick={
          () => {
            setTime((new Date()).toLocaleTimeString());
          }
        }></input>
      </div>
    );
  }

export default FuncComp;