import React from "react";
import { Component } from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

export default class CreateTodo extends Component {
  render() {
    const handleSubmit = (value) => {
      this.props.createTodo(value);
    };
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-6">
            <h2>Add todo </h2>
            <CreateTodoForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

let CreateTodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label>Titile</label>
        <Field
          name="title"
          className="form-control"
          component="textarea"
          type="text"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block mt-2 d-block ms-auto">
        Submit
      </button>
    </form>
  );
};

CreateTodoForm = reduxForm({
  form: "createTodo",
})(CreateTodoForm);
