import { useState, type ReactNode, useEffect } from "react"
import { ThemeContext } from "../contexts/contexts"

interface TodoProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: TodoProviderProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        const storedTheme = localStorage.getItem('theme')
        return storedTheme === 'dark' ? 'dark' : 'light'
    })

    const toggleTheme = () => {
        setTheme((t) => (t === 'light' ? 'dark' : 'light'))
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}