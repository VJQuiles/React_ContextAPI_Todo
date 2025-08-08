import TodoInput from "../TodoInput/TodoInput"
import TodoItem from "../TodoItem/TodoItem"
import { TodoContext } from "../../contexts/contexts"
import { useContext } from "react"

export default function TodoList() {
    const { todos, deleteTodo, toggleTodo, editTodo, clearCompleted } = useContext(TodoContext)

    return (
        <div>
            <h1>Todo List</h1>
            <TodoInput />
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                ))}
            </ul>
        </div>
    )
}