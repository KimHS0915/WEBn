import Control from '../components/Control';
import { connect } from 'react-redux';

export default connect(null,
  (dispatch) => {
    return {
      onClick: (mode) => {
        dispatch({type: mode});
      }
    }
  })(Control);