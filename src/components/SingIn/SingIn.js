import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export default class SingIn extends Component {

  
  handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  }
  render() {
    return (
      <div className="container">
        <SingInForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

class SingInForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <Field name="email"  className="form-control" component="input" type="text"/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <Field name="password"  className="form-control" component="input" type="password"/>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
    )
  }
}


SingInForm = reduxForm({
  form: 'login'
})(SingInForm);