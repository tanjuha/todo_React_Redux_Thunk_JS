import {
  TODOS,
  TODO,
  TODOS_IS_LOADING,
  TODOS_HAS_ERRORED,
  DELETE_TODO,
  EDIT_TODO,
  CREATE_TODO,
  UPDATE_STATUS_TODO,
  CLEARE_MESSAGE,
} from "../actions/actionTypes";
const initialState = {
  todos: [],
  todo: {},
  isLoading: false,
  error: false,
  message: [],
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
        message: [
          {
            id: Date.now(),
            status: "success",
            text: "Create todo successfully",
          },
          ...state.message,
        ],
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        message: [
          { id: Date.now(), status: "info", text: "Delete todo successfully" },
          ...state.message,
        ],
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_STATUS_TODO:
      return {
        ...state,
        message: [
          { id: Date.now(), status: "info", text: "Update todo successfully" },
          ...state.message,
        ],
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
        message: [
          { id: Date.now(), status: "info", text: "Edit todo" },
          ...state.message,
        ],
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

    case CLEARE_MESSAGE:
      return {
        ...state,
        message: state.message.filter((msg) => msg.id !== action.payload),
      };

    default:
      return state;
  }
}
