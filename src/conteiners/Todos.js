import { connect } from "react-redux";
import Todos from "../components/Todos/Todos";
import { deleteFetchTodo, getTodos } from "../thunk/todoThunk";
import { updateTodo } from '../thunk/todoThunk';

function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
    isLoading: state.todos.isLoading
  };
}

function  mapDispatchToProps (dispatch) {
    return {
        getTodos: () => dispatch(getTodos()),
        deleteTodo: (id) => dispatch(deleteFetchTodo(id)),
        editTodo: (id) => dispatch(updateTodo(id))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
