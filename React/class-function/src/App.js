import React from 'react';
import './App.css';
import ClassComp from './ClassComp';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <ClassComp initNumber={0} />
    </div>
  );
}

export default App;
