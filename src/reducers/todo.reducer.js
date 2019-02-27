const initialState = {
  todos: [
    {
      task: 'homework',
      done: false
    }
  ]
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // slice() takes the array and creates a new array in memory so we're not mutating
      const newTodos = state.todos.slice()
      console.log(action.text)
      newTodos.push({task: action.text, done: false})
      return {
        todos: newTodos
      }
    // case '':
    // case '':
    // case '':

    default:
      return state;
  }

}

export default todoReducer;