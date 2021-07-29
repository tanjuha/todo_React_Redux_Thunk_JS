import { connect } from "react-redux";
import {requestSignIn } from "../actions/authActions";
import SingIn from "../components/SingIn/SingIn";
import { withRouter } from "react-router-dom";

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
  }

function mapDispatchToProps(dispatch) {
    return {
      requestSignIn: () => dispatch(requestSignIn()),
    };
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingIn))