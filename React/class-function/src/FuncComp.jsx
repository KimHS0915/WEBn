import React, { useState, useEffect } from 'react';

const funcStyle = 'color:blue';
let funcId = 0;

function FuncComp(props) {
    const [number, setNumber] = useState(props.initNumber);
    const [time, setTime] = useState((new Date()).toLocaleTimeString());

    useEffect(() => {
      console.log('%cfunc => useEffect (componentDidMount) ' + (++funcId), funcStyle);
      return () => {
        console.log('%cfunc => useEffect return (componentWillUnMount) ' + (++funcId), funcStyle); 
      }
    }, []);

    useEffect(() => {
      console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
      document.title = number;
      return () => {
        console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle); 
      }
    }, [number]);

    useEffect(() => {
      console.log('%cfunc => useEffect time (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
      document.title = time;
      return () => {
        console.log('%cfunc => useEffect time return (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle); 
      }
    }, [time]);

 
    console.log('%cfunc => render ' + (++funcId), funcStyle);

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