import React from "react";
import { Component } from "react";
import propTypes from "prop-types";
import CreateTodoForm from "../CreateTodoForm/CreateTodoForm";

export default class CreateTodo extends Component {
  render() {
    const handleSubmit = (value) => {
      this.props.createTodo(value);
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
}

CreateTodo.propTypes = {
  createTodo: propTypes.func,
};
