import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import RenderField from "./../common/RenderField";
import {
  required,
  minLength5,
  maxLength200,
} from "../../utils/validationRules";
import { connect } from "react-redux";

let EditTodoForm = ({ handleSubmit, valid }) => {
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
        type="submit"
        disabled={!valid}
        className="btn btn-primary btn-block mt-2 d-block ms-auto"
      >
        Submit
      </button>
    </form>
  );
};

EditTodoForm = reduxForm({
  form: "editTodo",
  enableReinitialize: true,
})(EditTodoForm);

export default EditTodoForm = connect((state) => ({
  initialValues: {
    title: state.todos.todo.title,
  },
}))(EditTodoForm);
