import { useState } from "react"
import ThemeContext from "./theme-context"

const DarkThemeProvider = props=>{
    const [themeState,setState]=useState(false)
    const changeThemeState = ()=>{
        console.log("Changing mode")
        setState(!themeState)
    }
    const themeContext={
      isDarkMode : themeState,
      changeThemeMode:changeThemeState
    }
return <ThemeContext.Provider value={themeContext}>
    {props.children}
</ThemeContext.Provider>
}

export default DarkThemeProvider