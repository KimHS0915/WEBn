import React from 'react';
import './App.css';
import ClassComp from './ClassComp';
import FuncComp from './FuncComp';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <ClassComp initNumber={0} />
      <FuncComp initNumber={0} />
    </div>
  );
}

export default App;
