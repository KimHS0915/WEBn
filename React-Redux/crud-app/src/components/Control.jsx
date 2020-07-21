import React, { Component } from 'react';

export default class Control extends Component {
  render() {
    let update, deleteButton;
    if(this.props.selected_content) {
      update = (
        <li><a href="update" onClick={(e) => {
          this.props.onClick('UPDATE');
          e.preventDefault();
        }}>Update</a></li>
      );
    }
    if(this.props.selected_content) {
      deleteButton = (
        <li>
          <input type="button" value="Delete" onClick={(e) => {
            this.props.onClick('DELETE_PROCESS');
            e.preventDefault();
          }}></input>
        </li>
      );
    }

    return (
      <ul>
        <li><a href="create" onClick={(e) => {
          this.props.onClick('CREATE');
          e.preventDefault();
        }}>Create</a></li>
        {update}
        {deleteButton}
      </ul>
    );
  }
}