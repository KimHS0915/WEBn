import React, { Component } from 'react';
import Nav from './NavClass';
import Article from './ArticleClass';
import NowLoading from './NowLoadingClass';

class App extends Component {
  state = {
    article: {
      item: {
        title: 'Welcome', 
        desc: 'Hello, React & Ajax',
      },
      isLoading: false,
    },
    list: {
      items: [],
      isLoading: false,
    },
  }

  componentDidMount() {
    const newList = Object.assign({}, this.state.list, {isLoading: true});
    this.setState({list: newList});
    fetch('list.json')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        this.setState({list: {
          items: json,
          isLoading: false,
        }});
      });
  }

  render() {
    const {article, list} = this.state;
    let NavTag;
    let ArticleTag;

    if(list.isLoading) {
      NavTag = <NowLoading />
    } else {
      NavTag = <Nav list={list.items} 
      onClick={(id) => {
        const newArticle = Object.assign({}, article, {isLoading: true});
        this.setState({article: newArticle});
        fetch(`${id}.json`)
          .then((result) => {
            return result.json();
          })
          .then((json) => {
            this.setState({
              article: {
                item: {
                  title: json.title,
                  desc: json.desc,
                },
                isLoading: false,
              }
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
}

export default App;
