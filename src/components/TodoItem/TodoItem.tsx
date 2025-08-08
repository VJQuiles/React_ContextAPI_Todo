import { useState } from "react"
import type { Todo } from "../../types"

interface TodoItemProps {
    todo: Todo
    deleteTodo: (id: number | string) => void
    toggleTodo: (id: number | string) => void
    editTodo: (id: number | string, newString: string) => void
}

export default function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }: TodoItemProps) {
    const [activeEditing, setActiveEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)

    const handleEditSave = () => {
        editTodo(todo.id, editText)
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
                    <button onClick={handleEditSave} disabled={!editText.trim()}>Save Edit</button>
                    <button onClick={() => setActiveEditing(false)}>Nevermind</button>
                </>
            ) : (
                <>
                    <span>
                        {todo.text}
                    </span>
                    <button onClick={() => toggleTodo(todo.id)}>
                        {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => setActiveEditing(true)}>Edit Todo</button>
                    <button onClick={() => deleteTodo(todo.id)}>Chalk it</button>
                </>
            )
            }
        </div>
    )
}