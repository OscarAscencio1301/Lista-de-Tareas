export const reducer = (state = [], action) =>{
    switch (action.type) {
        case "agregar":
          return [...state, action.payload]  
          case "borrar":
            return state.filter(todos => todos.id !== action.payload) 
          case 'completo':
            return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done}: todo)
    
        default:
            return state;
    }
 
}