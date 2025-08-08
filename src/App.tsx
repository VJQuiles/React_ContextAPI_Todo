import './App.css'
import TodoList from './components/TodoList/TodoList'
import { useContext } from 'react'
import { ThemeContext } from './contexts/contexts'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <div
        style={{
          backgroundColor: theme === 'dark' ? "#121212" : "#fff",
          color: theme === 'dark' ? "#fff" : '#000'
        }}>
        <button
          onClick={toggleTheme}>Clap On/Off</button>
        <TodoList />
      </div>
    </>
  )
}

export default App
