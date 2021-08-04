import React from "react";
import { Component } from "react";

export default class Todos extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  updateTodo = (id) => {
    this.props.history.push(`/edit/${id}`);
  };

  render() {
    if (this.props.isLoading) {
      return <div>Loading ... </div>;
    }
    return this.props.todos.map((todo) => {
      return (
        <div key={todo.id} className="card mt-2">
          <div className="card-body">
            <h5 className="card-title">{todo.userId}</h5>
            {todo.completed 
            ? <p className="card-text text-muted text-decoration-line-through">{todo.title}.</p>
            : <div className="d-flex align-items-center">
            <p className="card-text mb-0">{todo.title}.</p>
            <button
              onClick={() => this.props.changeStatusTodo(todo.id)}
              className="btn btn-success mx-2"
            >
              Done
            </button>
            </div>

            }
            <div className="text-end">
            <button
              onClick={() => this.props.deleteTodo(todo.id)}
              className="btn btn-danger me-2"
            >
              Delete
            </button>
            <button
              onClick={() => this.updateTodo(todo.id)}
              className="btn btn-info mx-2"
            >
              Edit
            </button>
            </div>
          </div>
        </div>
      );
    });
  }
}
