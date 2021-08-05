import { getTodo, updateTodo } from "../thunk/todoThunk";
import { connect } from "react-redux";
import EditTodo from "../components/EditTodo/EditTodo";

function mapstateToProps(state) {
  return {
    todo: state.todos.todo,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    editTodo: (data) => dispatch(updateTodo(data)),
    getTodo: (id) => dispatch(getTodo(id))
  };
}

export default connect(mapstateToProps, mapDispatchToProps)(EditTodo);