import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  email,
  required,
  minLength5,
  maxLength15,
} from "../../utils/validationRules";
import RenderField from "../common/RenderField";

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
          placeholder="Enter your email"
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
          placeholder="Enter your password"
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

export default SingInForm = reduxForm({
  form: "login",
})(SingInForm);
