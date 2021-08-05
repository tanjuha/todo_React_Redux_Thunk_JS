import {
  TODOS,
  TODO,
  TODOS_IS_LOADING,
  TODOS_HAS_ERRORED,
  DELETE_TODO,
  EDIT_TODO,
  CREATE_TODO,
  UPDATE_STATUS_TODO,
} from "../actions/actionTypes";
const initialState = {
  todos: [],
  todo: {},
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
    case TODO:
      return {
        ...state,
        todo: action.payload,
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
    case CREATE_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_STATUS_TODO:
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
