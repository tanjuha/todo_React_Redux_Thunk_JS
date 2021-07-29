import { deleteTodo, todos, todosIsLoading } from "../actions/todosActions";
import { todosHasErrored } from "../actions/todosActions";
import { editTodo } from "../actions/todosActions";

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

export function deleteFetchTodo(id) {
  return (dispatch) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then((response) => {
      dispatch(deleteTodo(id));
    });
  };
}

export function updateTodo(id) {
  return (dispatch) => {
    fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: 1,
        id: 1972,
        title: "test test",
        completed: true,
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
