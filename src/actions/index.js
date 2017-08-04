import ActionTypes from './actionTypes'

/// ActionCreator

// 新しいTodoを追加するAction
const AddNewTodo = (content) => {
    return {
	type: ActionTypes.ADD_NEW_TODO,
	content: content
    }
}
const DoneTodo = (id) => {
    return {
	type: ActionTypes.DONE_TODO,
	id,
    }
}
export default {
    AddNewTodo,
    DoneTodo,
}
