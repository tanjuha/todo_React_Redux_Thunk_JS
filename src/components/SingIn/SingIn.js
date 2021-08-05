import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  email,
  required,
  minLength5,
  maxLength15,
} from "../../utils/validationRules";
import RenderField from "../common/RenderField";
import propTypes from "prop-types";

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

let SingInForm = ({ handleSubmit, valid }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          component={RenderField}
          name="email"
          type="email"
          label="Email"
          className="form-control"
          validate={[required, email]}
        />
      </div>
      <div className="form-group">
        <Field
          component={RenderField}
          name="password"
          type="password"
          label="password"
          className="form-control"
          validate={[required, minLength5, maxLength15]}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-block mt-2 d-block ms-auto"
        disabled={!valid}
      >
        Submit
      </button>
    </form>
  );
};

SingInForm = reduxForm({
  form: "login",
})(SingInForm);


SingIn.propTypes = {
  history: propTypes.object
}