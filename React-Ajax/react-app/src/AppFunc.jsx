import React, { useState, useEffect } from 'react';
import Nav from './NavFunc'; 
import Article from './ArticleFunc';
import NowLoading from './NowLoadingFunc';

const App = () => {
  const [article, setArticle] = useState({
    item: {
      title: 'Welcome', 
      desc: 'Hello, React & Ajax',
    },
    isLoading: false,
  });
  const [list, setList] = useState({
    items: [],
    isLoading: false,
  });

  useEffect(() => {
    const newList = Object.assign({}, list, {isLoading: true});
    setList(newList);
    fetch('list.json')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        setList({
          items: json,
          isLoading: false,
        });
      });    
  }, []);

  let NavTag;
  let ArticleTag;

  if(list.isLoading) {
    NavTag = <NowLoading />
  } else {
    NavTag = <Nav list={list.items} 
    onClick={(id) => {
      const newArticle = Object.assign({}, article, {isLoading: true});
      setArticle(newArticle);
      fetch(`${id}.json`)
        .then((result) => {
          return result.json();
        })
        .then((json) => {
          setArticle({
            item: {
              title: json.title,
              desc: json.desc,
            },
            isLoading: false,
          });
        });
    }}></Nav>
  }

  if(article.isLoading) {
    ArticleTag = <NowLoading />
  } else {
    ArticleTag = <
      Article title={article.item.title} 
      desc={article.item.desc}
    ></Article>
  }

  return (
    <div className="App">
      <h1>WEB</h1>
      {NavTag}
      {ArticleTag}
    </div>
  );
}

export default App;
