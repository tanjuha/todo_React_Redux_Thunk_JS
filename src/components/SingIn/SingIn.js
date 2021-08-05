import React, { Component } from "react";
import propTypes from "prop-types";
import SingInForm from "../SingInForm/SingInForm";

export default class SingIn extends Component {
  handleSubmit = (values) => {
    // Do something with the form values
    localStorage.setItem("user", JSON.stringify(values));
    localStorage.setItem("isAuthenticated", true);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-6">
            <h2>Sing In</h2>
            <SingInForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

SingIn.propTypes = {
  history: propTypes.object,
};
