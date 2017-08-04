import expect from 'expect'
import { createStore } from 'redux'

// ActionCreator 新しいTodoを追加するAction
const AddNewTodo = (content) => {
    return {
	type: 'ADD_NEW_TODO',
	content
    }
}

// Reducer. actionから新しいstateを返す
const reducer = (state = {todos: []}, action) => {
    switch (action.type) {
	case 'ADD_NEW_TODO':
	    return {
		todos: [
		    ...state.todos,
		    {
			state: 'TODO',
			content: action.content
		    }
		]
	    }
	default:
	    return state
    }
}

// store. 唯一の状態を持つ
const store = createStore(reducer)

expect((() => {
    store.dispatch(AddNewTodo('todo1'))
    return store.getState()
})()).toEqual({
    todos: [
	{
	    state: 'TODO',
	    content: 'todo1'
	}
    ]
})

alert('ALL TEST PASSED')
