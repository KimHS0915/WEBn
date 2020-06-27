import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('list.json')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        setList(json);
      });    
  }, []);

  const listTag = [];
  for(let i=0; i<list.length; i++) {
    const li = list[i];
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

export default Nav;