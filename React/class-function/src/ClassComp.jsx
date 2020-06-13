import React, { Component } from 'react';

class ClassComp extends Component {
    state = {
      number: this.props.initNumber,
      time: (new Date()).toLocaleTimeString(),
    }
  
    render() {
      return (
        <div className="container">
          <h2>class style component</h2>
          <p>Number: {this.state.number}</p>
          <p>Time: {this.state.time}</p>
          <input type="button" value="random" onClick={
            () => {
              this.setState({number: Math.random().toFixed(7)});
            }
          }></input>
          <input type="button" value="time" onClick={
            () => {
              this.setState({time: (new Date()).toLocaleTimeString()});
            }
          }></input>
        </div>
      );
    }
  }

  export default ClassComp;
  