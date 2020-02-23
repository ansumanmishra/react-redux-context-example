const initialState = {
    todos: [
        {
          id: 1,
          title: "Go to Gym",
        },
        {
          id: 2,
          title: "Learn React123",
        }
    ],
}
function TodoReducer(state = initialState, action) {
    switch (action.type) {
     case 'ADD_TODO':
         const newTodos = [...state.todos, action.payload]
       return {
           ...state,
            todos: newTodos,
       }

       case 'DELETE_TODO':
           return {
               ...state,
               todos: state.todos.filter( todo => todo.id !== action.payload),
           }
     default:
       return state
    }
 }

 export default TodoReducer