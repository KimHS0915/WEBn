import React, { Component } from 'react';

class Nav extends Component {
  state = {
    list: [],
  }

  componentDidMount() {
    fetch('list.json')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        this.setState({list: json});
      });
  }

  render() {
    const listTag = [];
    for(let i=0; i<this.state.list.length; i++) {
      const li = this.state.list[i];
      listTag.push(<li key={li.id}><a href={li.id}>{li.title}</a></li>)
    }
    return (
      <nav>
        <ul>
          {listTag}
        </ul>
      </nav>
    );
  }
}

export default Nav;