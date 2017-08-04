import React from 'react'

class AddNewTodoButton extends React.Component {
    constructor() {
	super()
	this.state = {
	    content: ''
	}
    }
    handleSubmit(e) {
	e.preventDefault()
	this.props.AddNewTodo(this.state.content)
	this.setState({content: ''})
    }
    handleChange(e) {
	this.setState({content: e.target.value})
    }
    render() {
	const AddNewTodo = this.props.AddNewTodo
	return (
	    <form
		onSubmit={this.handleSubmit.bind(this)}>
		<input
		    type="text"
		    value={this.state.content}
		    onChange={this.handleChange.bind(this)}
		/>
		<button>Add Todo</button>
	    </form>
	)
    }
}
export default AddNewTodoButton
