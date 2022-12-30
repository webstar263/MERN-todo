import { useReducer, createContext } from "react";

const TodosContext = createContext();

const todoReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_TODO":
            return {
                todos: [action.payload, ...state.todos]
            }
        case "FETCH_TODOS":
            return {
                todos: action.payload
            }

        case "DELETE_TODO":
            return {
                todos: state.todos.filter(t => t._id != action.payload._id)
            }

        default:
            return state;
    }
}


export const TodosContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(todoReducer, {
        todos: []
    });

    return (
        <TodosContext.Provider value={{...state, dispatch}}>
            { children }
        </TodosContext.Provider>
    )
}


export default TodosContext;