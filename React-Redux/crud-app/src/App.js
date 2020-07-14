import React from 'react';
import Header from './components/Header';
import Nav from './containers/NavContainer';
import Article from './containers/ArticleContainer';
import Control from './containers/ControlContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Control></Control>
      <Article></Article>
    </div>
  );
}

export default App;
