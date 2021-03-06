import { connect } from "react-redux";
import Todos from "../components/Todos/Todos";
import { deleteFetchTodo, getTodos,getTodo, changeStatusTodo } from "../thunk/todoThunk";
import { withRouter } from 'react-router-dom';


function mapStateToProps(state) {
  return {
    todos: state.todos.todos,
    isLoading: state.todos.isLoading
  };
}

function  mapDispatchToProps (dispatch) {
    return {
        getTodos: () => dispatch(getTodos()),
        getTodo: (id) => dispatch(getTodo(id)),
        deleteTodo: (id) => dispatch(deleteFetchTodo(id)),
        changeStatusTodo: (id) => dispatch(changeStatusTodo(id))
    }
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Todos)
)