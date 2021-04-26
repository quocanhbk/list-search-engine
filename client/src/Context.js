import { useState } from "react"
// https://github.com/jamiebuilds/unstated-next
import { createContainer } from "unstated-next"

const useTheme = () => {
    const [isDark, setIsDark] = useState(localStorage.getItem('ttgTheme') === "true")
    const toggleTheme = () => {
        setIsDark(!isDark)
        localStorage.setItem('ttgTheme', !isDark)
    }

    return {isDark, toggleTheme}
}
const useSearch = () => {
    const [search, setSearch] = useState("")
    return {search, setSearch}
}
const useContext = () => {
    let themeContext = useTheme()
    let searchContext = useSearch()
    return {themeContext, searchContext}
}

const Context = createContainer(useContext)

export default Context