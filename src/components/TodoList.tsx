import useStore from '../store/todoStore'
import TodoItem from './TodoItem'

export default function TodoList() {
    // Again getting state from zustand (translates to "state" in German btw)
    const todos = useStore((state) => state.todos)

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

