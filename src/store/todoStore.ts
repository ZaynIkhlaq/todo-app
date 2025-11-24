// This is where zustand stores the global state 

// Importing the schema and type I just made using Zod
import { todoSchema, type Todo } from '../schemas/todoSchema'
import { create } from 'zustand'

// Define the shape of our store state
// This interface tells TypeScript exactly what our store looks like
interface TodoStore {
    todos: Todo[];  // An array of Todo objects
    addTodo: (title: string) => void;  // Function that takes a string, returns nothing
    toggleTodo: (id: number) => void;  // Function that takes a number (id), returns nothing
    deleteTodo: (id: number) => void;  // Function that takes a number (id), returns nothing
}

// Create the store with TypeScript types
// The <TodoStore> tells Zustand what shape our store has
const useStore = create<TodoStore>((set) => ({
    // This is the state
    todos: [],
    addTodo: (title: string) => {
        const newTodo = {
            id: Date.now(), // Gives milliseconds since 01-01-1970 - this will work as the type is number which our zod schema validates.
            title: title,
            completed: false
        }
        const validatedTodo = todoSchema.parse(newTodo); // This part validates using the schema I made previously in Zod
        // Only need schema for the adding item to to-do list part. Only C of the CRUD.
        set((state) => ({
            todos: [...state.todos, validatedTodo]
            // Using spread operator here, it copies all the elements from todos[] array
        }))   
    },
    toggleTodo: (id: number) => {
        set((state) => ({
            todos: state.todos.map(todo => {
                if(todo.id === id){
                    return {...todo, completed: !todo.completed};
                }
                else {
                    return todo;
                }
            })
        }))
    },
    deleteTodo: (id: number) => {
        set((state) => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }))
    }
}))

export default useStore

