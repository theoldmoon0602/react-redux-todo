import { createStore } from 'redux'

import Actions from './actions'
import Reducer from './reducers'


// store. 唯一の状態を持つ
const store = createStore(Reducer)

store.dispatch(Actions.AddNewTodo('todo1'))

console.log( store.getState() ) 
