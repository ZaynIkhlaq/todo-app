// this is where zustand stores the global state 

// importing the schema I just made using Zod
import { todoSchema } from '../schemas/todoSchema'


import { create } from 'zustand'

const  useStore = create((set)=> ({
    // this is the state
    todos: [],
    addTodo: (title)=> {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false
        }
        const validatedTodo = todoSchema.parse(newTodo);

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
        }
    }))