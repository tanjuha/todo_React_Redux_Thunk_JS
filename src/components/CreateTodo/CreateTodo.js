import React from "react";
import { Component } from "react";
import { Field } from "redux-form";
import { reduxForm } from 'redux-form';

export default class CreateTodo extends Component {
  render() {
      const handleSubmit = (value) => {
          this.props.createTodo(value)
      }
    return (
      <>
        <h1>Add todo</h1>
        <CreateTodoForm onSubmit={handleSubmit} />
      </>
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
      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
};

CreateTodoForm = reduxForm({
    form: 'createTodo'
  })(CreateTodoForm);