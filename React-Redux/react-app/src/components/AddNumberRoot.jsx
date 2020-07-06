import React, { Component } from 'react';
import AddNumber from '../containers/AddNumberContainer';

export default class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber />
      </div>
    );
  }
}
