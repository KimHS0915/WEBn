import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <div>
        <a href="/create" onClick={(e) => {
          e.preventDefault();
          this.props.onChangeMode('create');
        }}>Create</a>
        &nbsp;
        {this.props.select && <a href="/update" onClick={(e) => {
          e.preventDefault();
          this.props.onChangeMode('update');
        }}>Update</a>}
        &nbsp;
        {this.props.select && <input onClick={(e) => {
          e.preventDefault();
          this.props.onChangeMode('delete');
        }} type="button" value="delete"></input>}
      </div>
    );
  }
}

export default Control;
