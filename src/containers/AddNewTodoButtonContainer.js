import { connect } from 'react-redux'
import Actions from '../actions'

import AddNewTodoButton from '../components/AddNewTodoButton'

const mapDispatchToProps = (dispatch) => {
    return {
	AddNewTodo: (content) => {
	    dispatch(Actions.AddNewTodo(content))
	}
    }
}
const AddNewTodoButtonContainer = connect(() => ({}), mapDispatchToProps)(AddNewTodoButton)
export default AddNewTodoButtonContainer
