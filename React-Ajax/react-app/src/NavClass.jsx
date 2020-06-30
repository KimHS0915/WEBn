import React, { Component } from 'react';

class Nav extends Component {
  render() {
    const listTag = [];
    for(let i=0; i<this.props.list.length; i++) {
      const li = this.props.list[i];
      listTag.push(
      <li key={li.id}>
        <a href={li.id} data-id={li.id} onClick={(e) => {
          e.preventDefault();
          this.props.onClick(e.target.dataset.id);
        }}>
          {li.title}
        </a>
      </li>
      );
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