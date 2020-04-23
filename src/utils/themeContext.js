import React from "react"

const initialValue = { theme: "theme-dark" }

export const ThemeContext = React.createContext(initialValue)

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("theme-dark")

  function toggleTheme() {
    console.log("TOGGLE!!")
    setTheme(theme === "theme-light" ? "theme-dark" : "theme-light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return React.useContext(ThemeContext)
}
