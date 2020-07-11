import { createStore } from 'redux';

const initState = {
  mode: 'WELCOME',
  welcome_content: {
    title: 'WEB',
    desc: 'Hello, WEB!',
  },
  selected_content: 1,
  contents: [
    {id:1, title:'HTML', desc:'HTML is ...'},
    {id:2, title:'CSS', desc:'CSS is ...'},
    {id:3, title:'JavaScript', desc:'JavaScript is ...'},
  ]
}

const reducer = (state=initState, action) => {
  return state;
}

export default createStore(reducer);