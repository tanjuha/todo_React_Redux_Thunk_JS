import { connect } from "react-redux";
import Home from "../components/Home/Home";
import { requestSignOut } from "../actions/authActions";

function mapStateToProps(state) {
  return {
    message: state.todos.message
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestSignOut: () => dispatch(requestSignOut()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
