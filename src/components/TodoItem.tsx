import useStore from '../store/todoStore'
import type { Todo } from '../schemas/todoSchema'

// Define the props this component expects
// This interface tells TypeScript: "TodoItem component must receive a prop called 'todo' of type Todo"
interface TodoItemProps {
    todo: Todo;
}

// We're passing the todo prop from the parent component
export default function TodoItem({ todo }: TodoItemProps) {
    // Getting these from the global state using Zustand
    // This is used in place of useState
    const toggleTodo = useStore((state) => state.toggleTodo)
    const deleteTodo = useStore((state) => state.deleteTodo)

    return(
        <>
        <input
        type="checkbox"
        checked={todo.completed} // Get true or false
        onChange={() => toggleTodo(todo.id)} // Toggle the flip
        />
        <span>{todo.title}</span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
    )
}

