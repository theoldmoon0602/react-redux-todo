import React from 'react'

const Todo = ({todo, DoneTodo}) => (
    <div
	onClick={() => (DoneTodo(todo)) }
	className={(todo.state == 'TODO') ? 'todo' : 'done'}
    >
	{todo.state} {todo.content}
    </div>
)
export default Todo
