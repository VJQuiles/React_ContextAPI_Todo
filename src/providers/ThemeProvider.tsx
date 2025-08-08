import { useState, type ReactNode, useMemo } from "react"
import { ThemeContext } from "../contexts/contexts"
import { type ThemeContextType } from "../types"

interface TodoProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: TodoProviderProps) => {
    const [theme, setTheme] = useState<ThemeContextType['theme']>('light')
    const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))
    const themeValue: ThemeContextType = useMemo(() => ({ theme, toggleTheme }), [theme])

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}