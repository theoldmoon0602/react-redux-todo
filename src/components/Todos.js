import React from 'react'
import Todo from './Todo'


const Todos = ({todos, DoneTodo}) => (
    <ul>
	{
	    todos.map((todo, i) => {
		return (
		    <li key={i.toString()}>
			<Todo todo={todo} DoneTodo={DoneTodo} />
		    </li>
		)
	    })
	}
    </ul>
)

export default Todos
