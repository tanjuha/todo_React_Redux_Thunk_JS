import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export default class SingIn extends Component {

  
  handleSubmit = (values) => {
    // Do something with the form values
    localStorage.setItem('user', JSON.stringify(values));
    localStorage.setItem('isAuthenticated', true);
    this.props.history.push("/")
  }
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

let SingInForm = (props) =>  {
  return (
    <form onSubmit={props.handleSubmit}>
    <div className="form-group">
      <label>Email</label>
      <Field name="email"  className="form-control" component="input" type="text"/>
    </div>
    <div className="form-group">
      <label>Password</label>
      <Field name="password"  className="form-control" component="input" type="password"/>
    </div>
    <button type="submit" className="btn btn-primary btn-block mt-2 d-block ms-auto">
      Submit
    </button>
  </form>
  )
}


SingInForm = reduxForm({
  form: 'login'
})(SingInForm);