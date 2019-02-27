import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoAppContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  addTodo() {
    this.props.addTodo(this.state.text)
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({text: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.addTodo()
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        <h4 className="title is-4">My ToDo List</h4>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input className="input"
            type="text" 
            placeholder="Add a todo item..."
            onChange={(event) => this.handleChange(event)}/>
          <div className="control">
          <button className="button is-primary" type="submit">Add</button>
          </div>
          </form>
          <div className="content">
          <ul>
            {this.props.todos.map((todo, index) => {
              return <li key={index}>{todo.task}</li>
            })}
          </ul>
          </div>
          </div>
    )
  }
}

// a way to get data out of the store. components receive props.
// mapping state to props says take data out of the store and send it to react component as props
// only send what the component needs
const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todoText) => dispatch({type: 'ADD_TODO', text: todoText})
})



// calling connect() returns a function that we pass the container to
export default connect(mapStateToProps, mapDispatchToProps)(TodoAppContainer);
