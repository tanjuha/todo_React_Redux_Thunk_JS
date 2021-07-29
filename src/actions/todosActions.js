import { TODOS_HAS_ERRORED, TODOS_IS_LOADING, TODOS, DELETE_TODO, EDIT_TODO } from "./actionTypes";

export function todosHasErrored(payload) {
  return {
    type: TODOS_HAS_ERRORED,
    payload,
  };
}

export function todosIsLoading(payload) {
  return {
    type: TODOS_IS_LOADING,
    payload,
  };
}

export function todos(payload) {
  return {
    type: TODOS,
    payload,
  };
}

export function deleteTodo(payload) {
  return {
    type: DELETE_TODO, 
    payload
  }
}

export function editTodo(payload) {
  return {
    type: EDIT_TODO, 
    payload
  }
}