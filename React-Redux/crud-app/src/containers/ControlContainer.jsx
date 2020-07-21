import Control from '../components/Control';
import { connect } from 'react-redux';

export default connect(
  (state) => {
    return {
      selected_content: state.selected_content
    }
  },
  (dispatch) => {
    return {
      onClick: (mode) => {
        dispatch({type: mode});
      }
    }
  })(Control);