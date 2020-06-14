import React, { Component } from 'react';

const classStyle = 'color:red';

class ClassComp extends Component {
    state = {
      number: this.props.initNumber,
      time: (new Date()).toLocaleTimeString(),
    }

    componentWillMount() {
      console.log('%cclass => componentWillMount', classStyle);
    }

    componentDidMount() {
      console.log('%cclass => componentDidMount', classStyle);
    }

    shouldComponentUpdate() {
      console.log('%cclass => shouldComponentUpdate', classStyle);
      return true;
    }

    componentWillUpdate() {
      console.log('%cclass => componentWillUpdate', classStyle);
    }

    componentDidUpdate() {
      console.log('%cclass => componentDidUpdate', classStyle);
    }

    componentWillUnmount() {
      console.log('%cclass => componentWillUnmount', classStyle);
    }
  
    render() {
      console.log('%cclass -> render', classStyle);

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
  