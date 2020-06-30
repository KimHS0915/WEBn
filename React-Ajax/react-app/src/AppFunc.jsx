import React, { useState, useEffect } from 'react';
import Nav from './NavFunc'; 
import Article from './ArticleFunc';

const App = () => {
  const [article, setArticle] = useState({
    title: 'Welcome', 
    desc: 'Hello, React & Ajax',
  });
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('list.json')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        setList(json);
      });    
  }, []);

  return (
    <div className="App">
    <h1>WEB</h1>
    <Nav list={list} 
    onClick={(id) => {
      fetch(`${id}.json`)
        .then((result) => {
          return result.json();
        })
        .then((json) => {
          setArticle({
            title: json.title,
            desc: json.desc,
          });
        });
    }}></Nav>
    <Article title={article.title} desc={article.desc}></Article>
  </div>
  );
}

export default App;
