import { useState, type ReactNode, useEffect } from "react"
import { TodoContext } from "../contexts/contexts"
import { Todo } from "../types"

interface TodoProviderProps {
    children: ReactNode
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([])

    // this will help debug as i add the functions for the list
    useEffect(() => {
        console.log("something is happening", todos)
    }, [todos])

    return (
        <>
            {children}
        </>
    )
}

