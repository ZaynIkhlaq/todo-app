import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>My Todo App</h1>
    <TodoForm />
    <TodoList />
    </>
  )
}

export default App
