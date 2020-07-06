import React, { Component } from 'react';
import AddNumber from '../components/AddNumber';
import store from '../store';

export default class extends Component {
  render() {
    return <AddNumber onClick={(size) => {
      store.dispatch({
        type: 'INCREMENT', 
        size: size,
      });
    }}></AddNumber>
  }
}