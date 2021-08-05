import React from 'react'
import { Field } from "redux-form";
import { reset, reduxForm } from "redux-form";
import RenderField from "../common/RenderField";
import {
  required,
  minLength5,
  maxLength200,
} from "../../utils/validationRules";

let CreateTodoForm = ({ handleSubmit, valid }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Field
            component={RenderField}
            name="title"
            type="textarea"
            className="form-control"
            placeholder="Title todo"
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
  
  const clearFieldAfterSubmit = (result, dispatch) =>
    dispatch(reset('createTodo'));
  
 export default CreateTodoForm = reduxForm({
    form: "createTodo",
    onSubmitSuccess: clearFieldAfterSubmit,
  })(CreateTodoForm);