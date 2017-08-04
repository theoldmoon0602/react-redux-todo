import React from 'react'


const Todos = ({todos}) => (
    <ul>
	{
	    todos.map((todo, i) => {
		return (
		    <li key={i.toString()}>
			{todo.content}
		    </li>
		)
	    })
	}
    </ul>
)

export default Todos
