import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Actions from './actions'
import Reducer from './reducers'

import App from './components/App'


// store. 唯一の状態を持つ
const store = createStore(Reducer)

store.dispatch(Actions.AddNewTodo('todo1'))
store.dispatch(Actions.AddNewTodo('todo2'))

ReactDOM.render(
    <Provider store={store}>
	<App />
    </Provider>,
    document.getElementById('root')
)
