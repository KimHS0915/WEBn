import Article from '../components/Article';
import { connect } from 'react-redux';

export default connect(
  (state) => {
    let title, desc;
    if(state.mode === 'WELCOME') {
      title = state.welcome_content.title;
      desc = state.welcome_content.desc;
    } else {
      for(let i=0; i<state.contents.length; i++) {
        if(state.contents[i].id === Number(state.selected_content)) {
          title = state.contents[i].title;
          desc = state.contents[i].desc;
          break;
        }
      }    
    }
    return {
      title: title,
      desc: desc, 
    }
  }
)(Article);