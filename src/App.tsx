import './App.css'
import TodoInput from './components/TodoInput/TodoInput'
import TodoItem from './components/TodoItem/TodoItem'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <>
      <TodoList />
      <TodoInput />
      <TodoItem />
    </>
  )
}

export default App
