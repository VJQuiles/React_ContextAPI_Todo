import { useContext } from "react"
import { ThemeContext } from "../../contexts/contexts"
//import { ThemeContextType } from "../../types"

export default function TodoList() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div
            style={{ color: theme === 'dark' ? 'white' : 'black' }}
        >
            Todo List
            <button onClick={toggleTheme}>Clap On/Off</button>
        </div>
    )
}