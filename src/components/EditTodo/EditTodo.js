import React, { Component } from "react";
import propTypes from "prop-types";
import EditTodoForm from "../EditTodoForm/EditTodoForm";

export default class EditTodo extends Component {
  constructor(props) {
    super(props);

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
            {this.props.todo.title ? (
              <>
                <h2>Edit title todo </h2>
                <EditTodoForm onSubmit={this.handleSubmit} />
              </>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

EditTodo.propTypes = {
  getTodo: propTypes.func,
  match: propTypes.object,
  editTodo: propTypes.func,
  history: propTypes.object,
  todo: propTypes.object,
};
