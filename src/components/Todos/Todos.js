import React from "react";
import { Component } from "react";

export default class Todos extends Component{
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading ... </div>;
    }
    return this.props.todos.map((todo) => {
      return (
        <div key={todo.id} className="card mt-2">
          <div className="card-body">
            <h5 className="card-title">{todo.userId}</h5>
            <p className="card-text">{todo.title}.</p>
            <button
              onClick={() => this.props.deleteTodo(todo.id)}
              className="btn btn-danger me-2"
            >
              Delete
            </button>
            <button 
            onClick={() => this.props.editTodo(todo.id)}
            className="btn btn-info mx-2">Edit</button>
          </div>
        </div>
      );
    });
  }
}
