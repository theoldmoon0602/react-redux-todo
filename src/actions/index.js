import ActionTypes from './actionTypes'

/// ActionCreator

// 新しいTodoを追加するAction
const AddNewTodo = (content) => {
    return {
	type: ActionTypes.ADD_NEW_TODO,
	content: content
    }
}
export default {
    AddNewTodo
}
