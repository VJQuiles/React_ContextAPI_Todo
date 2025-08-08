export interface Todo {
    id: string | number
    text: string
    completed: boolean
}

export interface TodoContextType {
    addTodo(text: string): void
    toggleTodo(id: string | number): void
    deleteTodo(id: string | number): void
    editTodo(id: string | number, newText: string): string
    clearCompleted(): void
}

export interface ThemeContextType {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}