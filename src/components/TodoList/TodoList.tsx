import TodoInput from "../TodoInput/TodoInput"
import TodoItem from "../TodoItem/TodoItem"
import type { Todo } from "../../types"

interface TodoListProps {
    todos: Todo[]
}
export default function TodoList({ todos }: TodoListProps) {

    return (
        <div>
            <h1>Todo List</h1>
            <TodoInput />
            <div>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <span>{todo.text}</span>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                ))}
            </div>
            <TodoItem />
            <button>Clear List</button>
        </div>
    )
}