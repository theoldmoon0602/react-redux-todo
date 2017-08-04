import React from 'react'

import TodosContainer from '../containers/TodosContainer'
import AddNewTodoButtonContainer from '../containers/AddNewTodoButtonContainer'

const App = () => (
    <div>
	<AddNewTodoButtonContainer />
	<TodosContainer />
    </div>
)
export default App

