import { deleteTodo, todos, todosIsLoading } from "../actions/todosActions";
import { todosHasErrored } from "../actions/todosActions";
import {
  editTodo,
  createTodo,
  todo,
  updateStatusTodo,
} from "../actions/todosActions";

const url = "https://jsonplaceholder.typicode.com/todos";

export function getTodos() {
  return (dispatch) => {
    dispatch(todosIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(todosIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((data) => dispatch(todos(data)))
      .catch(() => dispatch(todosHasErrored(true)));
  };
}

export function getTodo(id) {
  return (dispatch) => {
    fetch(`${url}/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => dispatch(todo(data)))
      .catch(() => dispatch(todosHasErrored(true)));
  };
}

export function deleteFetchTodo(id) {
  return (dispatch) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then((response) => {
      dispatch(deleteTodo(id));
    });
  };
}

export function updateTodo({ id, title }) {
  return (dispatch) => {
    fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: id,
        id: id,
        title,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(editTodo(response));
      });
  };
}

export function addTodo(data) {
  return (dispatch) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: Date.now(),
        title: data.title,
        completed: false,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return dispatch(createTodo(response));
      })
      .catch(() => dispatch(todosHasErrored(true)));
  };
}

export function changeStatusTodo(id) {
  return (dispatch) => {
    fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        completed: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(updateStatusTodo(response));
      });
  };
}
