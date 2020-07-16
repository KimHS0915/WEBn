import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Nav from './containers/NavContainer';
import Read from './containers/ReadContainer';
import Control from './containers/ControlContainer';
import Create from './containers/CreateContainer';
import Update from './containers/UpdateContainer';

class App extends Component {
  render() {
    let article;
    if(this.props.mode === 'CREATE') {
      article = <Create></Create>
    } else if(this.props.mode === 'UPDATE') {
      article = <Update></Update>
    } else if(this.props.mode === 'READ' || 'WELCOME') {
      article = <Read></Read>
    }
    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Control></Control>
        {article}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      mode: state.mode
    }
  }
)(App);
