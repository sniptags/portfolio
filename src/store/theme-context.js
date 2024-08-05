import React from "react"

const ThemeContext= React.createContext({
   isDarkMode : false,
   changeThemeMode:()=>{}
})

export default ThemeContext