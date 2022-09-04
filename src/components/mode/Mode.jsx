import React ,{UseEffect, useState} from 'react'
import { useEffect } from 'react';
import './mode.css'
const Mode = () => {
    const [theme, setTheme] = useState("light-theme");
    const toggleTheme = () =>{
        if(theme ==  "dark-theme")
        {
            setTheme("light-theme")
        }
        else{
            setTheme("dark-theme")
        }
    }
    useEffect(() =>{
        document.body.className = theme;
    }, [theme]);
  return (
    <aside>
        <a onClick={() => toggleTheme()}><i class="fa-solid fa-brush"></i></a>
        </aside>
  )
}

export default Mode