import React from "react";
import { Component } from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import RenderField from "../common/RenderField";
import {
  required,
  minLength5,
  maxLength200,
} from "../../utils/validationRules";
import propTypes from "prop-types";

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

CreateTodo.propTypes = {
  createTodo: propTypes.func,
};

let CreateTodoForm = ({ handleSubmit, valid }) => {
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
      <button
        disabled={!valid}
        type="submit"
        className="btn btn-primary btn-block mt-2 d-block ms-auto"
      >
        Submit
      </button>
    </form>
  );
};

CreateTodoForm = reduxForm({
  form: "createTodo",
})(CreateTodoForm);
