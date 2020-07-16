import React, { Component } from 'react';

export default class Update extends Component {
  state = {
    title: this.props.title,
    desc: this.props.desc,
    id: this.props.id,
  }
  OnChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.onSubmit(
          Number(e.target.id.value),
          e.target.title.value,
          e.target.desc.value,
        );
      }}>
        <input type="hidden" name="id" value={this.state.id}></input>
        <p><input type="text" name="title" onChange={this.OnChangeHandler.bind(this)} placeholder="title" value={this.state.title}></input></p>
        <p><textarea type="text" name="desc" onChange={this.OnChangeHandler.bind(this)} placeholder="description" value={this.state.desc}></textarea></p>
        <p><input type="submit"></input></p>
      </form>
    );
  }
}