import { useState } from "react"
import type { Todo } from "../../types"

interface TodoItemProps {
    todo: Todo
    deleteTodo: () => void
    toggleTodo: () => void
    editTodo: () => void
}

export default function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }: TodoItemProps) {
    const [activeEditing, setActiveEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const handleEditSave = () => {
        editTodo()
        setActiveEditing(false)
    }
    return (
        <div>
            {activeEditing ? (
                <>
                    <input
                        type="text"
                        value={editText}
                        placeholder={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={handleEditSave}>Save Edit</button>
                    <button onClick={() => setActiveEditing(false)}>Nevermind</button>
                </>
            ) : (
                <>
                    <span>
                        {todo.text}
                    </span>
                    <button onClick={() => toggleTodo()}>
                        {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => setActiveEditing(true)}>Edit Todo</button>
                    <button onClick={() => deleteTodo()}>Chalk it</button>
                </>
            )
            }
        </div>
    )
}