import Update from '../components/Update';
import { connect } from 'react-redux';

export default connect(
  (state) => {
    let title, desc, id;
    for(let i=0; i<state.contents.length; i++) {
      console.log(i, state.selected_content);
      if(state.contents[i].id === Number(state.selected_content)) {
        title = state.contents[i].title;
        desc = state.contents[i].desc;
        id = state.contents[i].id;
        break;
      }
    }
    return {
      title,
      desc,
      id,
    }
  },
  (dispatch) => {
    return {
      onSubmit: (id, title, desc) => {
        dispatch({type: 'UPDATE_PROCESS', id, title, desc});
      }
    }
  }
)(Update);