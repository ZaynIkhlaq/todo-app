// this is where zustand stores the global state 

// importing the schema I just made using Zod
import { todoSchema } from '../schemas/todoSchema'


import { create } from 'zustand'

const  useStore = create((set)=> ({
    // this is the state
    todos: [],
    addTodo: (title)=> {
        const newTodo = {
            id: Date.now(), //gives milliseconds since 01-01-1970 - this will work as the type is number which our zod schema validates.
            title: title,
            completed: false
        }
        const validatedTodo = todoSchema.parse(newTodo); //this part validates using the schema I made previously in Zod
// only need schema for the adding item to to-do list part. Only C of the CRUD.
        set((state) => ({
            todos: [...state.todos,validatedTodo]
         // using spread operator here, it copies all the elements from todos[] array
    }))   
},

        toggleTodo: (id) => {
            set((state) => ({
                todos: state.todos.map(todo=>{
                    if(todo.id ===id){
                        return {...todo, completed: !todo.completed};
                    }
                    else {
                        return todo;
                    }
                })
            }))
    },


    deleteTodo: (id) => {
        set((state) => ({
            todos: state.todos.filter(todo => todo.id !== id)
        }))
    }



}))