import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    const tags = [];
    for(let i=0; i<this.props.data.length; i++) {
      const d = this.props.data[i];
      tags.push(<li key={d.id}><a href="#" data-id={d.id} onClick={(e) => {
        this.props.onClick(Number(e.target.dataset.id));
      }}>{d.title}</a></li>);
    }
    return (
      <nav>
        <ol>
          {tags}
        </ol>
      </nav>
    );
  }
}