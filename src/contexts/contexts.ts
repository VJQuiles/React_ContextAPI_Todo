import React from 'react'
import type { ThemeContextType, TodoContextType } from '../types'

export const ThemeContext = React.createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => console.warn('no theme provider')
})

export const TodoContext = React.createContext<TodoContextType>({
    todos: [],
    addTodo: () => console.warn('no dice'),
    deleteTodo: () => console.warn('no dice twice'),
    toggleTodo: () => console.warn('no dice thrice'),
    editTodo: () => console.warn('no dice....whatever four with -ice is?'),
    clearCompleted: () => console.warn("no dice....this isn't fun anymore")
})