import {
  TODOS,
  TODOS_IS_LOADING,
  TODOS_HAS_ERRORED,
  DELETE_TODO,
  EDIT_TODO,
} from "../actions/actionTypes";
const initialState = {
  todos: [],
  isLoading: false,
  error: false,
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case TODOS_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case TODOS_HAS_ERRORED:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              ...action.payload,
            };
          } else {
            return todo;
          }
        }),
      };

    default:
      return state;
  }
}
