
import { cleareMesage } from "./../actions/todosActions";
import { connect } from "react-redux";
import Alert from './../components/common/Alert/Alert';

function mapDispatchToProps(dispatch) {
    return {
      cleareMesage: (id) => dispatch(cleareMesage(id)),
    };
  }
  
  export default connect(null, mapDispatchToProps)(Alert);