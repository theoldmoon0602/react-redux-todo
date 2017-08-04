import ActionTypes from '../actions/actionTypes'


// Todoを追加するAction
const AddNewTodo = (state, action) => {
    const maxid = state.todos.reduce((p, c) => ((p.id > c.id) ? p : c), {id:0}).id
    return {
	todos: [
	    ...state.todos,
	    {
		state: 'TODO',
		content: action.content,
		id: maxid+1,
	    }
	]
    }
}

function DoneTodo(state, action) {
    var newTodos = Object.assign([], state.todos)
    const i = newTodos.findIndex((e) => e.id == action.id)
    if (i == -1) {
	return state
    }
    newTodos[i].state = 'DONE'
    return {
	todos: newTodos
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
	case ActionTypes.DONE_TODO:
	    return DoneTodo(state, action)
    default:
	return state
    }
}

export default Reducer
