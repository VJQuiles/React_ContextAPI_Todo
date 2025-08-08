import React from 'react'
import type { ThemeContextType, TodoContextType } from '../types'

export const ThemeContext = React.createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => console.warn('no theme provider')
})

export const TodoContext = React.createContext<TodoContextType | undefined>(undefined)