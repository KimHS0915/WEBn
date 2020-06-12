import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import ReadContent from './components/ReadContent';
import Control from './components/Control';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: null,
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for infomation'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
      ],
    }
  }

  getReadContent() {
    let i = 0;
    while(i < this.state.contents.length) {
      let data = this.state.contents[i];
      if(data.id === this.state.selected_content_id) {
        return data;
      }
      i++;
    }
  }

  getContent() {
    let _title, _desc, _article, _content = null;

    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read') {
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={(_title, _desc) => {
        this.max_content_id = this.max_content_id + 1;
        const _contents = Array.from(this.state.contents);
        _contents.push({id: this.max_content_id, title: _title, desc: _desc});
        this.setState({
          contents: _contents,
          mode: 'read',
          selected_content_id: this.max_content_id,
        });
      }}></CreateContent>
    } else if(this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={(_id, _title, _desc) => {
        const _contents = Array.from(this.state.contents);
        let i = 0;
        while(i < _contents.length) {
          if(_contents[i].id === _id) {
            _contents[i] = {id: _id, title: _title, desc: _desc};
            break;
          }
          i++;
        }
        this.setState({
          contents: _contents,
          mode: 'read',
        });
      }}></UpdateContent>
    }
    return _article;
  }

  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({
              mode: 'welcome',
              selected_content_id: null,
            });
          }}
        >
        </Subject>
        <TOC 
          onChangePage={id => {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id),
            });
          }}
          data={this.state.contents}
        ></TOC>
        <Control 
          select={this.state.selected_content_id} 
          onChangeMode={_mode => {
            if(_mode === 'delete') {
              if(window.confirm('Are You sure?')) {
                let _contents = Array.from(this.state.contents);
                let i = 0;
                while(i < _contents.length) {
                  if(_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i++;
                }
                this.setState({
                  mode: 'welcome',
                  contents: _contents,
                  selected_content_id: null,
                });
                alert('deleted')
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
          }}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
