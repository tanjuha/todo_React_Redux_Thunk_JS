import React from "react";
import { Component } from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import RenderField from './../common/RenderField';
import {
  required,
  minLength5,
  maxLength200,
} from "../../utils/validationRules";

export default class EditTodo extends Component {
  componentDidMount() {
    this.props.getTodo(this.props.match.params.id);
  }

  handleSubmit = (value) => {
    const id = this.props.match.params.id;
    this.props.editTodo({ id, ...value });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-6">
            <h2>Edit form </h2>
            <EditTodoForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

let EditTodoForm = ({handleSubmit, valid}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          component={RenderField}
          name="title"
          type="textarea"
          className="form-control"
          validate={[required, minLength5, maxLength200]}
        />
      </div>
      <button type="submit" disabled={!valid} className="btn btn-primary btn-block mt-2 d-block ms-auto">
        Submit
      </button>
    </form>
  );
};

EditTodoForm = reduxForm({
  form: "editTodo",
})(EditTodoForm);
