import React, { Component } from 'react';
import Nav from './NavClass';
import Article from './ArticleClass';

class App extends Component {
  state = {
    article: {
      title: 'Welcome', 
      desc: 'Hello, React & Ajax',
    },
    list: [],
  }

  componentDidMount() {
    fetch('list.json')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        this.setState({list: json});
      });
  }

  render() {
    return (
      <div className="App">
        <h1>WEB</h1>
        <Nav list={this.state.list} 
        onClick={(id) => {
          fetch(`${id}.json`)
            .then((result) => {
              return result.json();
            })
            .then((json) => {
              this.setState({
                article: {
                  title: json.title,
                  desc: json.desc,
                }
              });
            });
        }}></Nav>
        <Article title={this.state.article.title} desc={this.state.article.desc}></Article>
      </div>
    );
  }
}

export default App;
