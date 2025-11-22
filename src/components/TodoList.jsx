import useStore from '../store/todoStore'
import TodoItem from './TodoItem'

export default function TodoList() {

    // again getting state from zustand (transates to "state" in german btw, heil hitl-)
  const todos = useStore((state) => state.todos)

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}