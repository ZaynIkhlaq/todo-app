import useStore from '../store/todoStore'


// we gon pass the todo prop from the daddy component
export default function TodoItem({todo}){


    // getting these from the global state using Zustand
    // this is used in place of useState
    const toggleTodo = useStore((state) => state.toggleTodo)
    const deleteTodo = useStore((state) => state.deleteTodo)


    return(
        <>
        <input
        type= "checkbox"
        checked={todo.completed}// get true or false
        onChange={()=> toggleTodo(todo.id)} //toggle the flip
        />
        <span>{todo.title}</span>
        <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
        </>
    )
}