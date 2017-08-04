import { connect } from 'react-redux'

import Actions from '../actions'
import Todos from '../components/Todos'

const mapStateToProps = (state) => (
    {
	todos: state.todos
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
	DoneTodo: (todo) => {
	    dispatch(Actions.DoneTodo(todo.id))
	}
    }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos)
export default TodosContainer
