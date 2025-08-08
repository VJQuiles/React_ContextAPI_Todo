import { useState, type ReactNode, useMemo } from "react"
import { TodoContext } from "../contexts/contexts"
import type { Todo } from "../types"

interface TodoProviderProps {
    children: ReactNode
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (text: string) => {
        setTodos((prev) => [
            ...prev,
            { id: Date.now(), text, completed: false }
        ])
    }

    const deleteTodo = (id: string | number) => {
        setTodos((prev) => prev.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: string | number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const editTodo = (id: number | string, newText: string) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        )
    }

    const clearCompleted = () => {
        setTodos(prev => prev.filter(todo => !todo.completed))
    }

    const value = useMemo(
        () => ({
            todos,
            addTodo,
            deleteTodo,
            toggleTodo,
            editTodo,
            clearCompleted,
        }),
        [todos]
    )

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

