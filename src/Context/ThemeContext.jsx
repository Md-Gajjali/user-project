import { createContext, useState } from "react";

export const Theme = createContext()

const ThemeContext = ({ children }) => {

    const [theme,setTheme] = useState("light")

    const toggle = () => {
        setTheme(
            theme === "light" ? "dark" : "light"
        )

        let html = document.querySelector("html")

        if (theme === "light") {
            html.classList.add("dark")
        } else {
            html.classList.remove("dark")
        }
    }

    return(
        <>
         <Theme value={{theme, toggle}}>
            {children}
         </Theme>
        </>
    )
}

export default ThemeContext