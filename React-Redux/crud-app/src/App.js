import React from 'react';
import Header from './components/Header';
import Nav from './containers/NavContainer';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
