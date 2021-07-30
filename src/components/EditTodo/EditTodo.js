import React from "react";
import { Component } from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";

export default class EditTodo extends Component {
  componentDidMount() {
    this.props.getTodo(this.props.match.params.id);
  }

  handleSubmit = (value) => {
    const id = this.props.match.params.id;
    this.props.editTodo({id, ...value});
  };

  render() {
    return (
      <>
        <h1>Edit form </h1>
        <EditTodoForm onSubmit={this.handleSubmit} />
      </>
    );
  }
}

let EditTodoForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label>Titile </label>
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

EditTodoForm = reduxForm({
  form: "editTodo",
})(EditTodoForm);
