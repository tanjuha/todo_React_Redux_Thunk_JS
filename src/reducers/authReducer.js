import { REQUEST_SING_IN, REQUEST_SING_OUT } from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SING_IN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case REQUEST_SING_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
