import { addTodo } from "../thunk/todoThunk";
import { connect } from 'react-redux';
import CreateTodo from './../components/CreateTodo/CreateTodo';

function mapDispatchToProps(dispatch) {
    return {
        createTodo: (data) => dispatch(addTodo(data))
    }
}

export default connect(null, mapDispatchToProps)(CreateTodo)