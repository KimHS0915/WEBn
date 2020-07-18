import Control from '../components/Control';
import { connect } from 'react-redux';

export default connect(null,
  (dispatch) => {
    return {
      onClick: (mode) => {
        if(mode === 'DELETE_PROCESS') {
          if(!window.confirm('Are you sure?')) {
            return;
          }
        }
        dispatch({type: mode});
      }
    }
  })(Control);