import React from 'react'
import type { ThemeContextType, TodoContextType } from '../types'

export const ThemeContext = React.createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => void
})

export const TodoContext = React.createContext<TodoContextType | undefined>(undefined)