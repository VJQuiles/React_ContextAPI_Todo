export interface Todo {
    id: string | number
    text: string
    completed: boolean
}

export type TodoId = Todo['id']

export interface TodoContextType {
    todos: Todo[]
    addTodo: (text: string) => void
    toggleTodo: (id: string | number) => void
    deleteTodo: (id: string | number) => void
    editTodo: (id: string | number, newText: string) => void
    clearCompleted: () => void
}

export interface ThemeContextType {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}