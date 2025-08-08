import { useContext, useState } from "react"
import { TodoContext } from "../../contexts/contexts"

export default function TodoInput() {
    const { addTodo } = useContext(TodoContext)
    const [text, setText] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!text.trim()) {
            return
        }
        addTodo(text.trim())
        setText('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="todoInput"
                placeholder="Enter Todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
}