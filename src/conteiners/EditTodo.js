
import { getTodo, updateTodo } from '../thunk/todoThunk';
import { connect } from 'react-redux';
import EditTodo from '../components/EditTodo/EditTodo';

function mapstateToProps (state) {
    return {
        todo: state.todos.todo
    }
}
function mapDispatchToProps (dispatch) {
    return {
        getTodo: (id) => dispatch(getTodo(id)),
        editTodo: (data) => dispatch(updateTodo(data))
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(EditTodo)