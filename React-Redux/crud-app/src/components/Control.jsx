import React, { Component } from 'react';

export default class Control extends Component {
  render() {
    return (
      <ul>
        <li><a href="create" onClick={(e) => {
          this.props.onClick('CREATE');
          e.preventDefault();
        }}>Create</a></li>
        <li><a href="update" onClick={(e) => {
          this.props.onClick('UPDATE');
          e.preventDefault();
        }}>Update</a></li>
        <li>
          <input type="button" value="Delete" onClick={(e) => {
            this.props.onClick('DELETE');
            e.preventDefault();
          }}></input>
        </li>
      </ul>
    );
  }
}