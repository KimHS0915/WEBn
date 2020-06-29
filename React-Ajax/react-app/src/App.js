import React, { Component, useState } from 'react';
import Nav from './NavClass';
// import Nav from './NavFunc'; 
import Article from './ArticleClass';

// class App extends Component {
//   state = {
//     article: {
//       title: 'Welcome', 
//       desc: 'Hello, React & Ajax',
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>WEB</h1>
//         <Nav onClick={(id) => {
//           fetch(`${id}.json`)
//             .then((result) => {
//               return result.json();
//             })
//             .then((json) => {
//               this.setState({
//                 article: {
//                   title: json.title,
//                   desc: json.desc,
//                 }
//               });
//             });
//         }}></Nav>
//         <Article title={this.state.article.title} desc={this.state.article.desc}></Article>
//       </div>
//     );
//   }
// }

const App = () => {
  const [article, setArticle] = useState({
    title: 'Welcome', 
    desc: 'Hello, React & Ajax',
  });

  return (
    <div className="App">
    <h1>WEB</h1>
    <Nav onClick={(id) => {
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
