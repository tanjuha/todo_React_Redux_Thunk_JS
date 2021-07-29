import { connect } from "react-redux";
import Home from "../components/Home/Home";
import { requestSignOut } from "../actions/authActions";

function mapDispatchToProps(dispatch) {
  return {
    requestSignOut: () => dispatch(requestSignOut()),
  };
}

export default connect(null, mapDispatchToProps)(Home);
