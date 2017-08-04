import ActionTypes from './actionTypes'

/// ActionCreator

// 新しいTodoを追加するAction
const AddNewTodo = (content) => {
    return {
	type: ActionTypes.ADD_NEW_TODO,
	content
    }
}
export default {
    AddNewTodo
}
