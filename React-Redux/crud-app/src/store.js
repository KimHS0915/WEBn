import { createStore } from 'redux';

const initState = {
  mode: 'WELCOME',
  welcome_content: {
    title: 'WEB',
    desc: 'Hello, WEB!',
  },
  selected_content: null,
  max_content_id: 3,
  contents: [
    {id:1, title:'HTML', desc:'HTML is ...'},
    {id:2, title:'CSS', desc:'CSS is ...'},
    {id:3, title:'JavaScript', desc:'JavaScript is ...'},
  ]
}

const reducer = (state=initState, action) => {
  if(action.type === 'WELCOME') {
    return {...state, mode: 'WELCOME'}
  }
  if(action.type === 'READ') {
    return {...state, mode: 'READ', selected_content: action.id}
  }
  if(action.type === 'CREATE') {
    return {...state, mode: 'CREATE', selected_content: action.id}
  }
  if(action.type === 'CREATE_PROCESS') {
    const newId = state.max_content_id + 1;
    const newContents = [
      ...state.contents,
      {
        id: newId,
        title: action.title,
        desc: action.desc,
      }
    ];
    return {
      ...state,
      contents: newContents,
      max_content_id: newId, 
      mode: 'READ',
      selected_content: newId,
    }
  }
  if(action.type === 'UPDATE') {
    return {...state, mode: 'UPDATE'}
  }
  return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());