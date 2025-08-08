import './App.css'
import { useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import { useContext } from 'react'
import { ThemeContext } from './contexts/contexts'
import type { Todo } from './types'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'something random', completed: false },
    { id: 2, text: 'something else random', completed: true },
    { id: 3, text: 'something else random huh', completed: false },
  ])
  return (
    <>
      <div
        style={{
          backgroundColor: theme === 'dark' ? "#121212" : "#fff",
          color: theme === 'dark' ? "#fff" : '#000'
        }}>
        <button
          onClick={toggleTheme}>Clap On/Off</button>
        <TodoList todos={todos} />
      </div>
    </>
  )
}

export default App
