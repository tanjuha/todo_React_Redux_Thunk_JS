import React from "react";
import propTypes from "prop-types";
import CreateTodoForm from "../CreateTodoForm/CreateTodoForm";

export default function CreateTodo({ createTodo }) {
  const handleSubmit = (value) => {
    createTodo(value);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-6">
          <h2>Create todo </h2>
          <CreateTodoForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

CreateTodo.propTypes = {
  createTodo: propTypes.func,
};
