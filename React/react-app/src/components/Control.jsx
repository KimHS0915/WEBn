import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <div>
        <a href="/create" onClick={(e) => {
          e.preventDefault();
          this.props.onChangeMode('create');
        }}>Create</a>
      </div>
    );
  }
}

export default Control;
