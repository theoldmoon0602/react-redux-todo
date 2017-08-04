import ActionTypes from '../actions/actionTypes'


// Todoを追加するAction
function AddNewTodo(state, action) {
    return {
	todos: [
	    ...state.todos,
	    {
		state: 'TODO',
		content: action.content
	    }
	]
    }
}


const defaultState = {
    todos: []
}

// すべてのReducerを集約したReducer
const Reducer = (state = defaultState, action) => {
    switch (action.type) {
    case ActionTypes.ADD_NEW_TODO:
	    return AddNewTodo(state, action)
    default:
	return state
    }
}

export default Reducer
